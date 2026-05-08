import { useState, type FormEvent } from "react";
import { formatKzPhone, isValidKzPhone } from "@/lib/phone-mask";
import { sendLead } from "@/lib/send-lead";
import { executeRecaptcha } from "@/lib/recaptcha";

export type ContactFormVariant = "dialog" | "page";

interface ContactFormProps {
  variant?: ContactFormVariant;
  onSuccess?: () => void;
}

const BUDGETS = [
  "до 500 000 тг",
  "500 000 — 2 млн тг",
  "2—5 млн тг",
  "более 5 млн тг",
];

/**
 * Единый компонент формы обратной связи.
 * Используется и в модалке (ContactDialog), и на странице /contact.
 * Все изменения полей формы — только здесь.
 */
export function ContactForm({ variant = "dialog", onSuccess }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+7 (");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isPage = variant === "page";

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatKzPhone(e.target.value));
    if (phoneError) setPhoneError(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    if (!name.trim()) return;
    if (!isValidKzPhone(phone)) {
      setPhoneError("Введите казахстанский номер: +7 (___) ___-__-__");
      return;
    }
    if (honeypot) return; // бот

    setSubmitting(true);
    try {
      const recaptchaToken = await executeRecaptcha("lead").catch(() => "");
      const result = await sendLead({
        name: name.trim(),
        phone,
        company: company.trim() || undefined,
        email: email.trim() || undefined,
        budget: budget ?? undefined,
        message: message.trim() || undefined,
        recaptchaToken,
      });
      if (!result.ok) {
        setSubmitError(result.error || "Не удалось отправить заявку. Попробуйте ещё раз.");
        return;
      }
      setSubmitted(true);
      onSuccess?.();
    } catch {
      setSubmitError("Сеть недоступна. Попробуйте ещё раз через минуту.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className={isPage ? "rounded-2xl border border-hairline bg-secondary p-10 md:p-14" : "py-4"}>
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <span className="text-lg">✓</span>
        </div>
        <h2 className={"font-display font-medium tracking-tight " + (isPage ? "text-3xl md:text-4xl" : "text-2xl")}>
          Заявка отправлена
        </h2>
        <p className="mt-3 text-muted-foreground">
          Свяжемся в течение рабочего дня. Если срочно — напишите в Telegram <a href="https://t.me/arynbg" target="_blank" rel="noopener noreferrer" className="underline">@arynbg</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* honeypot */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className={isPage ? "grid gap-6 md:grid-cols-2" : "space-y-5"}>
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Имя <span className="text-foreground">*</span>
          </label>
          <input
            id="cf-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введите ваше имя"
            maxLength={100}
            className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="cf-phone" className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Телефон <span className="text-foreground">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            required
            inputMode="tel"
            value={phone}
            onChange={handlePhoneChange}
            onFocus={() => { if (!phone) setPhone("+7 ("); }}
            placeholder="+7 777 000 0000"
            className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
          />
          {phoneError && <p className="mt-2 text-xs text-destructive">{phoneError}</p>}
        </div>

        {isPage && (
          <>
            <div>
              <label htmlFor="cf-company" className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Компания
              </label>
              <input
                id="cf-company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="ACME Inc."
                maxLength={150}
                className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="cf-email" className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Email
              </label>
              <input
                id="cf-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                maxLength={200}
                className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
              />
            </div>
          </>
        )}
      </div>

      {isPage && (
        <>
          <div>
            <label className="mb-3 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Рекламный бюджет в месяц
            </label>
            <div className="flex flex-wrap gap-2">
              {BUDGETS.map((b) => (
                <button
                  key={b}
                  type="button"
                  onClick={() => setBudget(b === budget ? null : b)}
                  className={
                    "rounded-full border px-4 py-2 text-sm transition-all " +
                    (budget === b
                      ? "border-foreground bg-foreground text-background"
                      : "border-hairline bg-background text-foreground hover:border-foreground/40")
                  }
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="cf-message" className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Расскажите о проекте
            </label>
            <textarea
              id="cf-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={2000}
              placeholder="Какие каналы используете, цели на ближайший квартал, текущие сложности…"
              className="w-full rounded-xl border border-hairline bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
            />
          </div>
        </>
      )}

      {submitError && (
        <p className="text-sm text-destructive">{submitError}</p>
      )}

      <div className="flex flex-col items-start justify-between gap-3 border-t border-hairline pt-5 sm:flex-row sm:items-center">
        <p className="text-xs text-muted-foreground">
          Защищено reCAPTCHA. Нажимая кнопку, вы соглашаетесь с обработкой данных.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:gap-3 disabled:opacity-60"
        >
          {submitting ? "Отправка…" : "Отправить"}
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </form>
  );
}
