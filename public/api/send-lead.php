<?php
/**
 * ABP DIGITAL — приём заявок с формы и пересылка в Telegram.
 *
 * POST /api/send-lead.php
 * Body (JSON): { name, phone, company?, email?, budget?, message?, recaptchaToken? }
 *
 * Конфигурация — в файле .env, который лежит ВЫШЕ public_html (или защищён .htaccess):
 *   TELEGRAM_BOT_TOKEN=...
 *   TELEGRAM_CHAT_ID=...
 *   RECAPTCHA_SECRET_KEY=...
 *
 * Минимальный score reCAPTCHA: 0.5
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// ---------- Загрузка .env ----------
function load_env(array $candidates): array {
    foreach ($candidates as $path) {
        if (is_file($path) && is_readable($path)) {
            $env = [];
            $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
            foreach ($lines as $line) {
                if (str_starts_with(trim($line), '#')) continue;
                if (!str_contains($line, '=')) continue;
                [$k, $v] = explode('=', $line, 2);
                $env[trim($k)] = trim($v, " \t\"'");
            }
            return $env;
        }
    }
    return [];
}

$env = load_env([
    __DIR__ . '/../.env',          // dist/.env  (рекомендуется)
    __DIR__ . '/../../.env',       // на уровне выше public_html
    __DIR__ . '/.env',             // рядом с самим скриптом (на крайний случай)
]);

$botToken      = $env['TELEGRAM_BOT_TOKEN']    ?? getenv('TELEGRAM_BOT_TOKEN') ?: '';
$chatId        = $env['TELEGRAM_CHAT_ID']      ?? getenv('TELEGRAM_CHAT_ID')   ?: '';
$recaptchaKey  = $env['RECAPTCHA_SECRET_KEY']  ?? getenv('RECAPTCHA_SECRET_KEY') ?: '';

if ($botToken === '' || $chatId === '') {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Server is not configured (env missing)']);
    exit;
}

// ---------- Парсинг тела ----------
$raw = file_get_contents('php://input') ?: '';
if (strlen($raw) > 10000) {
    http_response_code(413);
    echo json_encode(['ok' => false, 'error' => 'Payload too large']);
    exit;
}
$payload = json_decode($raw, true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
    exit;
}

// ---------- Валидация ----------
function clean(?string $v, int $max): string {
    if ($v === null) return '';
    $v = trim((string)$v);
    if (function_exists('mb_substr')) {
        $v = mb_substr($v, 0, $max);
    } else {
        $v = substr($v, 0, $max);
    }
    return $v;
}

$name    = clean($payload['name']    ?? '', 100);
$phone   = clean($payload['phone']   ?? '', 30);
$company = clean($payload['company'] ?? '', 150);
$email   = clean($payload['email']   ?? '', 200);
$budget  = clean($payload['budget']  ?? '', 60);
$message = clean($payload['message'] ?? '', 2000);
$captcha = clean($payload['recaptchaToken'] ?? '', 4000);

if ($name === '' || $phone === '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Name and phone are required']);
    exit;
}

// ---------- reCAPTCHA v3 ----------
if ($recaptchaKey !== '') {
    if ($captcha === '') {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Captcha token missing']);
        exit;
    }
    $verifyResp = http_post('https://www.google.com/recaptcha/api/siteverify', [
        'secret'   => $recaptchaKey,
        'response' => $captcha,
        'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '',
    ], false);
    $verify = json_decode($verifyResp ?: '{}', true);
    $score = is_array($verify) ? (float)($verify['score'] ?? 0) : 0;
    $success = is_array($verify) ? (bool)($verify['success'] ?? false) : false;
    if (!$success || $score < 0.5) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Captcha failed']);
        exit;
    }
}

// ---------- Сообщение в Telegram ----------
function esc(string $s): string {
    return htmlspecialchars($s, ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML5, 'UTF-8');
}

$lines = [];
$lines[] = '<b>📝 Новая заявка с сайта ABP DIGITAL</b>';
$lines[] = '';
$lines[] = '<b>Имя:</b> ' . esc($name);
$lines[] = '<b>Телефон:</b> ' . esc($phone);
if ($company !== '') $lines[] = '<b>Компания:</b> ' . esc($company);
if ($email   !== '') $lines[] = '<b>Email:</b> ' . esc($email);
if ($budget  !== '') $lines[] = '<b>Бюджет:</b> ' . esc($budget);
if ($message !== '') {
    $lines[] = '';
    $lines[] = '<b>Сообщение:</b>';
    $lines[] = esc($message);
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '—';
$ua = clean($_SERVER['HTTP_USER_AGENT'] ?? '', 200);
$lines[] = '';
$lines[] = '<i>IP:</i> ' . esc($ip);
if ($ua !== '') $lines[] = '<i>UA:</i> ' . esc($ua);

$tgUrl = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';
$tgResp = http_post($tgUrl, [
    'chat_id'                  => $chatId,
    'text'                     => implode("\n", $lines),
    'parse_mode'               => 'HTML',
    'disable_web_page_preview' => 'true',
], false);

$tgData = json_decode($tgResp ?: '{}', true);
if (!is_array($tgData) || empty($tgData['ok'])) {
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'Telegram delivery failed']);
    exit;
}

echo json_encode(['ok' => true]);
exit;

// ---------- Helpers ----------
function http_post(string $url, array $data, bool $json): string|false {
    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);
        if ($json) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        } else {
            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        }
        $r = curl_exec($ch);
        curl_close($ch);
        return $r === false ? false : (string)$r;
    }
    $opts = [
        'http' => [
            'method'        => 'POST',
            'header'        => $json ? "Content-Type: application/json\r\n" : "Content-Type: application/x-www-form-urlencoded\r\n",
            'content'       => $json ? json_encode($data) : http_build_query($data),
            'timeout'       => 10,
            'ignore_errors' => true,
        ],
    ];
    return @file_get_contents($url, false, stream_context_create($opts));
}
