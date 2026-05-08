# ABP DIGITAL — деплой на shared-хостинг

Сайт собирается в обычные статические файлы (HTML/CSS/JS) и работает на любом хостинге с Apache (cPanel, ISPmanager, FastVPS, Beget, Hoster.kz и т.п.). Серверная часть — один PHP-файл `send-lead.php`, который пересылает заявки в Telegram.

---

## 1. Что вам понадобится

1. **Telegram-бот** — токен от [@BotFather](https://t.me/BotFather).
2. **ID чата**, куда придут заявки:
   - Личные сообщения: напишите вашему боту любое сообщение → откройте `https://api.telegram.org/bot<ВАШ_ТОКЕН>/getUpdates` → найдите `"chat":{"id": ... }`.
   - Группа/канал: добавьте бота в чат админом, в `getUpdates` ID канала начинается с `-100`.
3. **Google reCAPTCHA v3** — на [google.com/recaptcha/admin](https://www.google.com/recaptcha/admin/create) создайте сайт типа **v3**, добавьте ваш домен. Получите **Site Key** (публичный) и **Secret Key** (приватный).

## 2. Заполнить переменные окружения

В корне проекта лежит `.env.example`. Скопируйте его в `.env` и впишите значения:

```bash
cp .env.example .env
```

```env
VITE_RECAPTCHA_SITE_KEY=6Lc_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TELEGRAM_BOT_TOKEN=1234567890:AAH...your-token...
TELEGRAM_CHAT_ID=123456789
RECAPTCHA_SECRET_KEY=6Lc_yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
```

> ⚠️ `VITE_RECAPTCHA_SITE_KEY` встраивается в JS-бандл при сборке — этот ключ должен быть проставлен **до** `npm run build`. Остальные ключи PHP читает в рантайме, их можно менять без пересборки.

## 3. Собрать сайт

```bash
npm install
npm run build
```

В папке `dist/` появятся готовые файлы:

```
dist/
├── index.html
├── assets/        ← хешированные JS и CSS
├── api/
│   └── send-lead.php
└── .htaccess
```

## 4. Загрузить на хостинг

1. Через FTP/cPanel-File-Manager загрузите **содержимое** папки `dist/` в `public_html/` (или корневую папку домена).
2. **Положите ваш `.env`** туда же (`public_html/.env`). Файл уже защищён правилом `.htaccess` — снаружи его никто не увидит. Если параноите — положите на уровень выше `public_html/`, скрипт найдёт его сам.
3. Проверьте права:
   - `send-lead.php` — `644`
   - `.env` — `600` (только владелец)
4. Откройте сайт. Заполните форму. Заявка должна прийти в Telegram через 1–3 секунды.

## 5. Что делать, если заявки не приходят

| Симптом | Решение |
| --- | --- |
| Форма пишет «Сервер недоступен» | Проверьте, что `dist/api/send-lead.php` загружен и хостинг поддерживает PHP 8+. |
| Ответ `Server is not configured` | `.env` не найден или ключи пустые. Проверьте путь и содержимое. |
| Ответ `Captcha failed` | Site Key и Secret Key — из разных reCAPTCHA-проектов, либо домен не добавлен в reCAPTCHA. |
| Ответ `Telegram delivery failed` | Неверный токен или бот не может писать в указанный `chat_id` (для канала — добавьте админом). |

## 6. Обновление сайта в будущем

Меняете контент → `npm run build` → перезаливаете содержимое `dist/` поверх старого. **Файл `.env` не трогаете** — настройки сохранятся.
