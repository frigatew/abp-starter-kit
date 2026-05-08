import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import partnerVenatura from "@/assets/partners/venatura.png";
import partnerKaspi from "@/assets/partners/kaspi.png";
import partnerOtis from "@/assets/partners/otis.png";
import partnerChangan from "@/assets/partners/changan.png";
import partnerChery from "@/assets/partners/chery.png";
import partnerHyundai from "@/assets/partners/hyundai.png";
import partnerByd from "@/assets/partners/byd.png";
import partnerToyota from "@/assets/partners/toyota.png";
import partnerSubaru from "@/assets/partners/subaru.png";
import heroPhoto from "@/assets/hero.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ABP DIGITAL — Performance-маркетинг под ключ в Казахстане" },
      {
        name: "description",
        content:
          "ABP DIGITAL — комплексный performance-маркетинг: реклама в Google, Instagram, TikTok и Яндекс, аналитика, SEO и видеоконтент. Прозрачно, под выручку.",
      },
      {
        property: "og:title",
        content: "ABP DIGITAL — Performance-маркетинг под ключ в Казахстане",
      },
      {
        property: "og:description",
        content:
          "Реклама, аналитика, контент и дизайн — одна команда вместо пяти подрядчиков.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const stats = [
    { value: "×4.2", label: "Средний рост ROAS" },
    { value: "—38%", label: "Средняя стоимость лида" },
    { value: "1200+", label: "Запущенных рекламных кампаний" },
    { value: "94%", label: "Клиентов остаются с нами" },
  ];

  const partners = [
    { name: "Venatura", src: partnerVenatura },
    { name: "Kaspi.kz", src: partnerKaspi },
    { name: "Отис", src: partnerOtis },
    { name: "Changan", src: partnerChangan },
    { name: "Chery", src: partnerChery },
    { name: "Hyundai", src: partnerHyundai },
    { name: "BYD", src: partnerByd },
    { name: "Toyota", src: partnerToyota },
    { name: "Subaru", src: partnerSubaru },
  ];

  const principles = [
    {
      no: "01",
      title: "Данные, а не догадки",
      body:
        "Каждое решение опирается на сквозную аналитику. Дашборды в реальном времени — у вас и у нас.",
    },
    {
      no: "02",
      title: "Бюджет как инвестиция",
      body:
        "Считаем юнит-экономику до запуска. Если канал не окупится — честно скажем и не возьмём в работу.",
    },
    {
      no: "03",
      title: "Команда, а не подрядчик",
      body:
        "Стратег, digital-специалист, аналитик и видеограф закреплены за вашим проектом. Без перекидывания задач.",
    },
  ];

  const process = [
    { step: "01", title: "Аудит", desc: "Разбираем текущие кампании, аналитику и юнит-экономику." },
    { step: "02", title: "Стратегия", desc: "Карта каналов, прогноз ROAS, медиаплан на 3 месяца." },
    { step: "03", title: "Запуск", desc: "Креативы, видео, посадочные, настройка трекинга." },
    { step: "04", title: "Рост", desc: "Еженедельные итерации. Масштабируем то, что работает." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-8 bg-foreground/40" />
            ABP DIGITAL · Kazakhstan · Performance Marketing
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            {/* Left: heading + actions */}
            <div>
              <h1 className="font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-[5rem]">
                Performance-маркетинг, который приносит{" "}
                <em className="not-italic">выручку</em>, а не отчёты.
              </h1>

              <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
                ABP DIGITAL — комплексный маркетинг под ключ в Казахстане. Реклама во всех каналах,
                сквозная аналитика и оригинальный контент — одна команда вместо пяти подрядчиков.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Бесплатный аудит"
                  description="Оставьте контакты — за 24 часа разберём вашу рекламу и подсветим точки роста."
                  trigger={
                    <button
                      type="button"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                    >
                      Получить аудит бесплатно
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                >
                  Смотреть услуги
                </Link>
              </div>
            </div>

            {/* Right: specialist photo placeholder */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-hairline bg-secondary">
                <img 
                  src={heroPhoto} 
                  alt="ABP DIGITAL" 
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager" // Эту картинку грузим сразу, т.к. она в первом экране
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-mono uppercase tracking-widest backdrop-blur">
                  Комплексный подход
                </span>
                <span className="absolute bottom-4 right-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  10+ лет в индустрии
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-6 md:p-8">
                <div className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS MARQUEE — placeholders */}
      <section className="border-b border-hairline py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Нам доверяют
          </p>
        </div>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          <div className="marquee flex w-max items-center gap-12 whitespace-nowrap pr-12 md:gap-16 md:pr-16">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex h-14 shrink-0 items-center justify-center md:h-16"
                title={p.name}
              >
                <img
                  src={p.src}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-auto max-w-[160px] object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 md:max-w-[180px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Принципы
              </p>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Не <em className="not-italic">тратим</em>. Инвестируем.
              </h2>
            </div>

            <ul className="space-y-px overflow-hidden rounded-2xl bg-hairline">
              {principles.map((p) => (
                <li key={p.no} className="bg-background p-8 md:p-10">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono text-sm text-muted-foreground">{p.no}</span>
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight">
                        {p.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Как мы работаем
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Четыре шага от первого касания до устойчивого роста.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="group relative bg-background p-8 transition-colors hover:bg-accent/30">
                <div className="font-mono text-xs text-muted-foreground">{p.step}</div>
                <h3 className="mt-12 font-display text-2xl font-medium tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Аудит рекламы */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16 lg:p-20">
            <div className="relative z-10 grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">
                  Аудит вашей текущей рекламы
                </p>
                <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
                  Покажем, где утекает <em className="not-italic text-accent">бюджет</em>.
                </h2>
                <p className="mt-6 max-w-xl text-background/70">
                  За 30 минут разберём ваши кампании, креативы и посадочные. Подсветим
                  точки роста и дадим конкретные действия. Бесплатно, без шаблонных презентаций.
                </p>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Запросить аудит"
                  description="Оставьте контакты — свяжемся в течение рабочего дня."
                  trigger={
                    <button
                      type="button"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3"
                    >
                      Запросить аудит
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

