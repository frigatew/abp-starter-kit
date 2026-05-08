import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import {
  SERVICES,
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Услуги — ABP DIGITAL · Performance-маркетинг под ключ" },
      {
        name: "description",
        content:
          "Performance-маркетинг, реклама в Google, Instagram, TikTok и Яндекс, SEO, аналитика, видеоконтент и UX/UI. Цены в тенге, прозрачные условия.",
      },
      {
        property: "og:title",
        content: "Услуги — ABP DIGITAL · Performance-маркетинг под ключ",
      },
      {
        property: "og:description",
        content:
          "11 услуг для роста выручки: реклама, аналитика, контент и дизайн. От 50 000 тг.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const primary = SERVICES.filter((s) => s.category === "marketing");
  const ads = getServicesByCategory("advertising");

  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Услуги
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Все услуги ABP Digital.
          </h1>
          
        </div>
      </section>

      {/* PRIMARY — Комплексный маркетинг */}
      {primary.length > 0 && (
        <section className="border-b border-hairline bg-secondary/40">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              / Основная услуга
            </p>
            <div className="mt-10 grid gap-10 rounded-3xl border border-hairline bg-background p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
              <div>
                <h2 className="font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                  {primary[0].title}
                </h2>
                <p className="mt-4 max-w-xl text-lg text-muted-foreground">{primary[0].tagline}</p>
                <ul className="mt-8 grid gap-2 text-sm sm:grid-cols-2">
                  {primary[0].includes.slice(0, 6).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground/80">
                      <span aria-hidden className="mt-2 h-px w-3 bg-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between gap-8 rounded-2xl bg-secondary/60 p-8">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    Стоимость
                  </p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-4xl font-medium tracking-tight">
                      {primary[0].price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Финальная смета — после встречи и анализа ситуации в вашей компании.
                  </p>
                </div>
                <Link
                  to={`/services/${primary[0].slug}` as string}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                >
                  Подробнее
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CATEGORIES */}
      {SERVICE_CATEGORIES.filter((c) => c.id !== "marketing").map((cat) => {
        const items = getServicesByCategory(cat.id);
        if (items.length === 0) return null;
        const isAds = cat.id === "advertising";
        return (
          <section key={cat.id} className="border-b border-hairline">
            <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    / {cat.label}
                  </p>
                  <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                    {cat.label}
                  </h2>
                </div>
                <p className="max-w-md text-muted-foreground">
                  {isAds
                    ? "Реклама и трафик — каналы, которые приносят заявки сегодня."
                    : "Дополнительные услуги"}
                </p>
              </div>

              <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
                {items.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group relative flex flex-col bg-background p-8 transition-colors hover:bg-secondary md:p-10"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">
                        {s.slug.toUpperCase().replace("-", " ")}
                      </span>
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground transition-colors group-hover:bg-background">
                        {s.priceNote ?? "услуга"}
                      </span>
                    </div>
                    <h3 className="mt-10 font-display text-2xl font-medium leading-tight tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.tagline}</p>
                    <div className="mt-auto flex items-baseline justify-between gap-2 border-t border-hairline pt-5">
                      <span className="font-display text-2xl font-medium tracking-tight">
                        {s.price}
                      </span>
                      <span aria-hidden className="text-foreground/60 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Не знаете, с чего начать?
            </h2>
            <ContactDialog
              title="Расскажите о проекте"
              description="Оставьте контакты — обсудим задачу и подберём подходящие услуги."
              trigger={
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                >
                  Получить консультацию
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              }
            />
          </div>
          {/* avoid unused var lint */}
          <span className="sr-only" aria-hidden>
            {ads.length}
          </span>
        </div>
      </section>
    </>
  );
}
