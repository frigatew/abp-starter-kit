# План доработки ABP DIGITAL под статический хостинг

## 1. Статическая SPA-сборка для Apache

Сейчас проект собирается через `@lovable.dev/vite-tanstack-config`, который использует TanStack Start с SSR и таргет Cloudflare Worker (`wrangler.jsonc`). Для shared-хостинга это не подходит — нужен чистый клиентский SPA.

Что сделаю:
- Переведу проект на классический Vite + React SPA с `@tanstack/react-router` (тот же роутер, без `@tanstack/react-start`).
- Заменю `vite.config.ts`: подключу `@vitejs/plugin-react`, `@tailwindcss/vite`, `vite-tsconfig-paths` и `@tanstack/router-plugin/vite` (генерирует тот же `routeTree.gen.ts`).
- Точка входа: `index.html` в корне + `src/main.tsx` с `createRouter` и `RouterProvider`. SSR-обвязка (`__root.tsx` shellComponent / Scripts / HeadContent) уйдёт; голову страницы возьмёт на себя `<head>` в `index.html`, а per-route мета — через лёгкий компонент-обёртку, читающий `Route.useMatches()` и обновляющий `document.title` (для SEO на статике этого достаточно — главное, чтобы прямой заход на любой URL работал).
- Удалю `wrangler.jsonc` и Cloudflare-плагин из зависимостей.
- В корне добавлю `public/.htaccess` со стандартным SPA-fallback:

```text
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Плюс заголовки кэша для `assets/*`.
- `npm run build` → папка `dist/` со статикой, готовой к загрузке через FTP/cPanel.

## 2. Единый компонент формы обратной связи

Уже есть `src/components/contact-dialog.tsx` (модалка с формой). Дублирующая полноценная форма живёт в `src/routes/contact.tsx`.

Что сделаю:
- Создам `src/components/contact-form.tsx` — единственный источник правды: поля (имя, телефон, компания, email, бюджет, сообщение, скрытая капча), валидация Zod, маска `+7 (___) ___-__-__`, отправка через `lib/send-lead.ts`.
- `ContactDialog` → станет тонкой обёрткой, рендерящей `<ContactForm variant="dialog" />`.
- `routes/contact.tsx` → удалю локальный код формы, подключу `<ContactForm variant="page" />`. Останется только hero и блок «Где мы / Прямой контакт».
- Все CTA-кнопки на сайте уже используют `ContactDialog` — менять не придётся.

## 3. PHP-прокси для Telegram + переменные окружения

На статическом хостинге безопаснее всего держать токен в PHP-файле рядом со статикой.

Что сделаю:
- `public/api/send-lead.php` — обработчик POST JSON `{ name, phone, company?, email?, budget?, message?, recaptchaToken }`:
  1. Читает `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `RECAPTCHA_SECRET_KEY` из `.env` рядом со скриптом (простой парсер, без зависимостей).
  2. Проверяет токен reCAPTCHA через `https://www.google.com/recaptcha/api/siteverify` (score ≥ 0.5).
  3. Базовая валидация полей + защита от honeypot-поля.
  4. Шлёт `sendMessage` в Telegram с HTML-форматированной заявкой.
  5. Отдаёт JSON `{ ok: true }` или `{ ok: false, error }`. CORS-заголовки только для своего домена.
- `src/lib/send-lead.ts` — фронт-функция: `POST /api/send-lead.php`. На дев-сервере (Vite) сделаю прокси в `vite.config.ts` на боевой URL — или, по умолчанию, форма в dev покажет заглушку «работает только на проде».
- `.env.example` в корне:

```text
# Telegram бот для приёма заявок
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=

# Google reCAPTCHA v3
VITE_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
```

- `README-DEPLOY.md` для заказчика с пошаговой инструкцией:
  1. Где взять токен у `@BotFather`, как узнать `chat_id` (через `@userinfobot` или `getUpdates`).
  2. Где зарегистрировать reCAPTCHA v3 и взять Site Key + Secret Key.
  3. Скопировать `.env.example` → `.env`, вставить значения.
  4. Загрузить содержимое `dist/` в `public_html/` через FTP/cPanel, рядом положить `.env` (вне публичной видимости — ниже `public_html` либо защитить через `.htaccess deny`).
  5. Готово — менять исходники не нужно.

Важный нюанс: `VITE_RECAPTCHA_SITE_KEY` встраивается в JS-бандл при сборке, поэтому его значение надо знать **до** `npm run build`. Это отражу в инструкции — заказчик либо собирает сам, либо присылает Site Key до сборки. `TELEGRAM_BOT_TOKEN` и `RECAPTCHA_SECRET_KEY` PHP читает в рантайме, их можно менять без пересборки.

## 4. Google reCAPTCHA v3

Что сделаю:
- В `index.html` подключу скрипт с placeholder'ом — на этапе монтирования формы динамически подменю `?render=SITE_KEY`, читая `import.meta.env.VITE_RECAPTCHA_SITE_KEY`.
- В `ContactForm` перед сабмитом вызову `grecaptcha.execute(siteKey, { action: 'lead' })`, токен положу в payload.
- Проверка score — на стороне PHP (см. п.3).
- Если ключ не задан, форма всё равно работает (capcha опциональна в dev), но в проде PHP вернёт 400 при отсутствии токена.

---

## Технические детали

**Зависимости:** добавить `react-router`-агностичных хуков не требуется — остаёмся на TanStack Router. Удалю: `@tanstack/react-start`, `@cloudflare/vite-plugin`. Оставлю: `@tanstack/router-plugin` (для file-based routing в SPA-режиме поддерживается).

**Структура итогового билда:**
```text
dist/
  index.html
  assets/*.js, *.css
  .htaccess
  api/send-lead.php
```
`public/` в Vite копируется как есть, поэтому `.htaccess` и `api/send-lead.php` положу в `public/`.

**Что НЕ меняется:** UI, стили, контент страниц услуг, логотипы, маска телефона, данные `services-data.ts`.

**Риски:** переход с TanStack Start на чистый SPA означает отказ от SSR — мета-теги в HTML станут одинаковыми для всех страниц (только `<title>` будет меняться через JS). Для shared-хостинга это нормальный компромисс; если в будущем понадобится SSR/SSG — можно вернуться через `vite-plugin-ssr` или Astro.

После одобрения переключусь в режим реализации и сделаю всё одним проходом.