import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Контакты — ABP DIGITAL AGENCY · Алматы" },
      {
        name: "description",
        content:
          "Свяжитесь с ABP DIGITAL AGENCY: бесплатный аудит рекламы за 30 минут. Алматы, +7 707 484 2108, Telegram @arynbg.",
      },
      { property: "og:title", content: "Контакты — ABP DIGITAL · Алматы" },
      {
        property: "og:description",
        content: "Запросите бесплатный аудит ваших рекламных кампаний.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const channels = [
    { label: "Телефон", value: "+7 707 484 2108", href: "tel:+77074842108" },
    { label: "Telegram", value: "@arynbg", href: "https://t.me/arynbg" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Контакты
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[1] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Давайте посчитаем, сколько вы <em className="not-italic">недополучаете</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Оставьте заявку — за 24 часа вернёмся с предварительным аудитом и кратким планом
            следующих шагов. Никакого спама, никаких автозвонков.
          </p>
        </div>
      </section>

      {/* FORM + CHANNELS */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
            {/* Single source of truth — one ContactForm component */}
            <div>
              <ContactForm variant="page" />
            </div>

            {/* Channels */}
            <aside className="space-y-12">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  / Прямой контакт
                </p>
                <ul className="mt-6 space-y-px overflow-hidden rounded-2xl bg-hairline">
                  {channels.map((c) => (
                    <li key={c.label} className="bg-background">
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center justify-between p-6 transition-colors hover:bg-secondary"
                      >
                        <div>
                          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                            {c.label}
                          </div>
                          <div className="mt-1 font-display text-xl font-medium tracking-tight">
                            {c.value}
                          </div>
                        </div>
                        <span aria-hidden className="text-xl text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  / Где мы
                </p>
                <div className="mt-6 rounded-2xl border border-hairline p-6">
                  <div className="font-display text-xl font-medium tracking-tight">Алматы</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Работаем по всему Казахстану и удалённо
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-accent p-6">
                <div className="font-display text-2xl font-medium leading-snug tracking-tight text-accent-foreground">
                  Среднее время ответа — 3 часа в рабочее время.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
