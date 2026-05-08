export interface LeadPayload {
  name: string;
  phone: string;
  company?: string;
  email?: string;
  budget?: string;
  message?: string;
  recaptchaToken?: string;
}

export interface LeadResult {
  ok: boolean;
  error?: string;
}

/**
 * Отправляет заявку на PHP-прокси, который пересылает её в Telegram.
 * Эндпоинт: /api/send-lead.php (лежит в public/api/, попадает в dist).
 */
export async function sendLead(payload: LeadPayload): Promise<LeadResult> {
  try {
    const res = await fetch("/api/send-lead.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // На дев-сервере PHP нет — Vite вернёт 404 HTML. Подскажем понятным сообщением.
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      if (import.meta.env.DEV) {
        return {
          ok: false,
          error: "Dev-режим: PHP-прокси работает только на боевом хостинге. На проде форма отправит заявку в Telegram.",
        };
      }
      return { ok: false, error: "Сервер недоступен. Попробуйте позже." };
    }

    const data = (await res.json()) as LeadResult;
    return data;
  } catch (e) {
    return { ok: false, error: "Не удалось связаться с сервером." };
  }
}
