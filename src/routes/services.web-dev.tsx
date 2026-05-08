import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";

export const Route = createFileRoute("/services/web-dev")({
  head: () => ({
    meta: [
      { title: "Разработка сайтов под бизнес — React, TypeScript | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Разработка сайтов, которые решают бизнес-задачи: заявки, лояльность, узнаваемость. React + TypeScript + Tailwind, базовая SEO. От 100 000 тг.",
      },
      { property: "og:title", content: "Разработка сайтов — ABP DIGITAL" },
      {
        property: "og:description",
        content: "Сайты, которые работают на бизнес. Современный стек, базовая SEO, аналитика.",
      },
    ],
  }),
  component: WebDevPage,
});

type CaseStudy = {
  name: string;
  tech: string[];
  desc: string;
  url: string;
};

const CASES: CaseStudy[] = [
  {
    name: "AlmaLogistics",
    tech: ["React", "TypeScript", "Tailwind", "TanStack Router"],
    desc: "Корпоративный сайт логистической компании с калькулятором доставки.",
    url: "https://example.com",
  },
  {
    name: "Steppe Coffee",
    tech: ["React", "Tailwind", "Sanity CMS"],
    desc: "Сайт сети кофеен с меню, доставкой и онлайн-картой заведений.",
    url: "https://example.com",
  },
  {
    name: "Nomad Real Estate",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    desc: "Платформа для подбора недвижимости с фильтрами и личным кабинетом.",
    url: "https://example.com",
  },
  {
    name: "Dental Clinic Aibolit",
    tech: ["React", "TypeScript", "Tailwind"],
    desc: "Сайт стоматологии с онлайн-записью и интеграцией CRM.",
    url: "https://example.com",
  },
  {
    name: "Tau Fitness",
    tech: ["React", "Tailwind", "Stripe"],
    desc: "Лендинг сети фитнес-клубов с продажей абонементов онлайн.",
    url: "https://example.com",
  },
  {
    name: "EduKZ Online",
    tech: ["Next.js", "TypeScript", "Supabase"],
    desc: "Образовательная платформа с курсами, оплатой и личным кабинетом ученика.",
    url: "https://example.com",
  },
  {
    name: "Aral Travel",
    tech: ["React", "TypeScript", "Tailwind"],
    desc: "Туристический сайт с турами по Казахстану и онлайн-бронированием.",
    url: "https://example.com",
  },
  {
    name: "Astana Build",
    tech: ["React", "TypeScript", "Tailwind"],
    desc: "Сайт строительной компании с портфолио объектов и калькулятором смет.",
    url: "https://example.com",
  },
];

const STACK = [
  { t: "React + TypeScript", d: "Современная и отказоустойчивая архитектура." },
  { t: "Tilda Publishing", d: "Запуск и доработка проектов в сжатые сроки на популярной платформе конструкторе. Создание уникального дизайна через Zero Block." },
  { t: "Wordpress", d: "Универсальная CMS с удобной админкой. Идеально подходит, если ваша команда уже привыкла работать с этой платформой." },
  
];

const FAQ = [
  { q: "Сколько занимает разработка?", a: "Лендинг — 2–3 недели. Корпоративный сайт — 4–6 недель. Сложные платформы — обсуждаем отдельно." },
  { q: "Что входит в базовую SEO?", a: "Уникальные meta-теги и Open Graph, sitemap.xml, robots.txt, семантическая разметка, скорость и Core Web Vitals." },
  { q: "Можно ли потом дорабатывать?", a: "Да, код пишу так, чтобы его легко поддерживать. Передаю репозиторий и документацию." },
  { q: "Делаете ли дизайн?", a: "Да, UX/UI входит в стоимость. При необходимости работаем по вашему дизайну." },
];

function WebDevPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleCases = showAll ? CASES : CASES.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Разработка сайта</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Web Development · React · TypeScript
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Сайты, которые
                <br />
                <em className="not-italic text-accent">решают задачи</em>
                <br />
                бизнеса.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Привлечение клиентов, повышение лояльности и узнаваемости. Удобно и понятно
                для пользователя, на современных технологиях, с базовой SEO.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Обсудить разработку сайта"
                  description="Расскажите о проекте — пришлю оценку и сроки."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Обсудить проект
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <a href="#cases" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                  Посмотреть кейсы
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border-2 border-foreground bg-foreground p-8 text-background md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-background/60">Стоимость</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-tight">от 100 000</span>
                <span className="text-sm text-background/60">тг</span>
              </div>
              <p className="mt-4 text-sm text-background/70">
                Точная цена — после брифа. Зависит от объёма страниц и интеграций.
              </p>
              <div className="mt-8 border-t border-background/20 pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">В стоимость входит</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["UX/UI дизайн", "Адаптивная вёрстка", "Базовая SEO", "Подключение аналитики", "Хостинг и домен", "Передача исходников"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-background/90"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-background/40" />{it}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Стек</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            <em className="not-italic text-accent">Технологии</em> для разработки сайтов, которые мы используем.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {STACK.map((s) => (
              <div key={s.t} className="bg-background p-7">
                <h3 className="font-display text-lg font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Кейсы</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Проекты, которые разработаны
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleCases.map((c) => (
              <article key={c.name} className="group overflow-hidden rounded-2xl border border-hairline bg-background transition-colors hover:border-foreground/30">
                {/* Mini gallery: desktop + mobile placeholders */}
                <div className="grid grid-cols-[1fr_auto] gap-2 bg-secondary/50 p-4">
                  {/* Desktop placeholder */}
                  <div className="aspect-[16/10] rounded-md border border-dashed border-foreground/20 bg-background/60 flex items-center justify-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Desktop</span>
                  </div>
                  {/* Mobile placeholder */}
                  <div className="aspect-[9/16] w-16 rounded-md border border-dashed border-foreground/20 bg-background/60 flex items-center justify-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground rotate-90">Mob</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-medium tracking-tight">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tech.map((t) => (
                      <span key={t} className="rounded-full border border-hairline bg-secondary/50 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
                  >
                    Посмотреть сайт
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {CASES.length > 3 && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                {showAll ? "Свернуть" : `Посмотреть все (${CASES.length})`}
                <span aria-hidden className={showAll ? "rotate-180 transition-transform" : "transition-transform"}>↓</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ FAQ</p>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">Частые вопросы</h2>
            </div>
            <div className="space-y-px overflow-hidden rounded-2xl bg-hairline">
              {FAQ.map((item) => (
                <details key={item.q} className="group bg-background p-6 md:p-8">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-xl font-medium tracking-tight">
                    {item.q}
                    <span aria-hidden className="mt-1 text-muted-foreground transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FREE AUDIT */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-hairline bg-background p-10 md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-accent">Бесплатно</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Бесплатный аудит сайта и рекламы
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
                  Проведу аудит вашего текущего сайта и рекламных кампаний, дам конкретные
                  рекомендации: что улучшить в UX, скорости, SEO и где сливается рекламный бюджет.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {["Скорость и Core Web Vitals", "UX и конверсия форм", "Базовое SEO", "Структура рекламных кампаний"].map((it) => (
                    <li key={it} className="flex items-start gap-2"><span aria-hidden className="mt-2 h-px w-3 bg-foreground/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right">
                <ContactDialog
                  title="Бесплатный аудит сайта и рекламы"
                  description="Оставьте контакты — пришлю отчёт и созвонимся для разбора."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить аудит
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
