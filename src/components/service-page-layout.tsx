import { Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import type { ServiceItem } from "@/lib/services-data";
import { SERVICES } from "@/lib/services-data";

interface ServicePageLayoutProps {
  service: ServiceItem;
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const related = SERVICES.filter(
    (s) => s.slug !== service.slug && s.category === service.category,
  ).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">
              ← Все услуги
            </Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>{service.title}</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                {service.tagline}
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title={`Заявка: ${service.title}`}
                  description="Оставьте контакты — обсудим задачу и сориентируем по срокам и бюджету."
                  trigger={
                    <button
                      type="button"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                    >
                      Обсудить проект
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                >
                  Смотреть все услуги
                </Link>
              </div>
            </div>

            {/* Price card */}
            <aside className="rounded-3xl border border-hairline bg-secondary/40 p-8 md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Стоимость
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                  {service.price}
                </span>
                {service.priceNote && (
                  <span className="text-sm text-muted-foreground">/ {service.priceNote}</span>
                )}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Финальная стоимость зависит от объёма задачи. Точную смету пришлём после
                короткого брифа.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Что включено
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {service.includes.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground/80">
                      <span aria-hidden className="mt-2 h-px w-3 bg-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* INTRO + INCLUDES */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / О услуге
              </p>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                Что вы получаете
              </h2>
            </div>
            <div>
              <p className="text-lg text-foreground/80 md:text-xl">{service.intro}</p>

              <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-hairline sm:grid-cols-2">
                {service.includes.map((item, i) => (
                  <li key={item} className="flex items-start gap-4 bg-background p-5">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Процесс
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Как мы работаем
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p) => (
              <div key={p.step} className="bg-background p-8 transition-colors hover:bg-accent/30">
                <div className="font-mono text-xs text-muted-foreground">{p.step}</div>
                <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  / FAQ
                </p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                  Частые вопросы
                </h2>
              </div>
              <div className="space-y-px overflow-hidden rounded-2xl bg-hairline">
                {service.faq.map((item) => (
                  <details key={item.q} className="group bg-background p-6 md:p-8">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-xl font-medium tracking-tight">
                      {item.q}
                      <span
                        aria-hidden
                        className="mt-1 text-muted-foreground transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-muted-foreground">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-b border-hairline bg-secondary/40">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              / Смежные услуги
            </p>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Часто берут вместе
            </h2>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  className="group flex flex-col bg-background p-8 transition-colors hover:bg-accent/30"
                >
                  <h3 className="font-display text-2xl font-medium tracking-tight">{r.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{r.tagline}</p>
                  <div className="mt-auto pt-6 text-sm font-mono uppercase tracking-widest text-foreground/60">
                    {r.price} <span aria-hidden className="ml-2 transition-transform group-hover:translate-x-0.5 inline-block">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">
                  Готовы обсудить?
                </p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Получите смету по{" "}
                  <em className="not-italic text-accent">{service.title.toLowerCase()}</em>
                </h2>
                <p className="mt-6 max-w-xl text-background/70">
                  Оставьте контакты — за один день пришлём короткое КП по вашей задаче.
                </p>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title={`Заявка: ${service.title}`}
                  description="Оставьте контакты — пришлём смету в течение дня."
                  trigger={
                    <button
                      type="button"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3"
                    >
                      Получить смету
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
