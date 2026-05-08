// Загрузка и вызов Google reCAPTCHA v3 на стороне клиента.
// Site Key читается из env: VITE_RECAPTCHA_SITE_KEY (см. .env.example).

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(siteKey: string): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-recaptcha="v3"]'
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("recaptcha load failed")));
      return;
    }
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    s.async = true;
    s.defer = true;
    s.dataset.recaptcha = "v3";
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("recaptcha load failed"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/**
 * Выполняет проверку reCAPTCHA v3 и возвращает токен.
 * Если ключ не задан в env — возвращает пустую строку (PHP в dev примет, на проде отклонит).
 */
export async function executeRecaptcha(action: string): Promise<string> {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;
  if (!siteKey) return "";

  await loadScript(siteKey);
  if (!window.grecaptcha) return "";

  return new Promise<string>((resolve) => {
    window.grecaptcha!.ready(async () => {
      try {
        const token = await window.grecaptcha!.execute(siteKey, { action });
        resolve(token);
      } catch {
        resolve("");
      }
    });
  });
}
