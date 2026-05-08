import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/complex")({
  head: () => ({
    meta: [
      { title: "Комплексный маркетинг под ключ — отдел маркетинга на аутсорсе | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Полноценный отдел маркетинга на аутсорсе: стратег, digital-маркетолог, аналитик, дизайнер. Все каналы, аналитика и креативы — один подрядчик за весь рост.",
      },
      { property: "og:title", content: "Комплексный маркетинг под ключ — ABP DIGITAL" },
      {
        property: "og:description",
        content: "Один контракт вместо пяти подрядчиков. Стратегия, реклама, аналитика, креативы.",
      },
    ],
  }),
  component: ComplexPage,
});

const TEAM = [
  { role: "Стратег", desc: "Юнит-экономика, медиаплан, гипотезы роста." },
  { role: "Digital-маркетолог", desc: "Google, Meta, TikTok, Яндекс — все каналы в одних руках." },
  { role: "Аналитик", desc: "GA4, GTM SS, дашборды, атрибуция, когорты." },
  { role: "Дизайнер", desc: "Креативы, баннеры, посадочные, бренд-консистентность." },
  { role: "Видеограф", desc: "Reels, UGC и продуктовое видео под рекламу." },
  { role: "Project-менеджер", desc: "Один контакт, спринты, отчётность, скорость." },
];

const PROBLEMS = [
  { p: "5 подрядчиков, никто не отвечает за итог", s: "Один контракт, один P&L, один менеджер" },
  { p: "Реклама отдельно, аналитика отдельно", s: "Сквозная атрибуция от клика до сделки" },
  { p: "Креативы рисуют те, кто не знает воронку", s: "Дизайнер сидит внутри команды роста" },
  { p: "Отчёты — про охваты и клики", s: "Отчёты — про CAC, LTV и маржу" },
];

const PHASES = [
  {
    n: "Месяц 0",
    t: "Onboarding",
    items: ["Аудит каналов и аналитики", "Юнит-экономика и целевой CAC", "Медиаплан на квартал", "Назначение команды"],
  },
  {
    n: "Месяц 1",
    t: "Запуск базы",
    items: ["Сквозная аналитика и трекинг", "Перезапуск 2–3 ключевых каналов", "Первые креативы и A/B-тесты", "Еженедельные созвоны"],
  },
  {
    n: "Месяц 2",
    t: "Масштабирование",
    items: ["Подключение доп. каналов", "Видео-продакшн под трафик", "Оптимизация воронки и LP", "Когортные отчёты"],
  },
  {
    n: "Месяц 3+",
    t: "Системный рост",
    items: ["Стабильный CPL и ROAS", "Расширение гео и продуктов", "Brand + performance микс", "Квартальные стратегии"],
  },
];

const PACKAGES = [
  {
    name: "Growth",
    price: "от 600 000 тг",
    note: "/ месяц",
    desc: "Старт для бизнеса до 30M выручки. 2–3 канала, аналитика, креативы.",
    items: ["До 3 каналов трафика", "Сквозная аналитика", "8 креативов в месяц", "Менеджер + аналитик"],
  },
  {
    name: "Scale",
    price: "от 1 200 000 тг",
    note: "/ месяц",
    highlight: true,
    desc: "Для растущих компаний. Все каналы, видео, продуктовая аналитика.",
    items: ["До 6 каналов трафика", "Видеопродакшн (1 день/мес)", "Дашборды и когорты", "Полная команда из 5 человек"],
  },
  {
    name: "Enterprise",
    price: "По запросу",
    note: "",
    desc: "Под крупные бренды. Выделенная команда и стратег уровня CMO.",
    items: ["Выделенная команда 6+ чел.", "Fractional CMO", "Brand + performance", "SLA и контракт"],
  },
];

const RELATED = SERVICES.filter((s) => ["google-ads", "analytics", "smm", "ux-ui"].includes(s.slug));

function ComplexPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Комплексный маркетинг</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Outsource CMO · Full-stack команда
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Отдел маркетинга
                <br />
                на аутсорсе —
                <br />
                <em className="not-italic text-accent">один контракт</em>, один результат.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Стратег, Digital-специалист, аналитик, дизайнер и видеограф работают над вашим ростом
                как штатная команда. Без найма, HR и срывов сроков от пяти подрядчиков.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Запросить стратегию роста"
                  description="Пришлём предварительный медиаплан и пакет под вашу нишу."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить стратегию
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Аудит маркетинга"
                  description="Разберём, что у вас сейчас работает, что — нет."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Заказать аудит
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "5+", l: "ролей в команде" },
                  { v: "−40%", l: "vs in-house FOT" },
                  { v: "14 дней", l: "до запуска" },
                ].map((s) => (
                  <div key={s.l} className="bg-background p-5 md:p-6">
                    <dt className="font-display text-2xl font-medium tracking-tight md:text-3xl">{s.v}</dt>
                    <dd className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="rounded-3xl border border-hairline bg-secondary/40 p-8 md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Когда подходит</p>
              <ul className="mt-6 space-y-4 text-sm text-foreground/90">
                {[
                  "Выручка от 10M в месяц, нужен рост",
                  "Нет CMO и сильного маркетолога в штате",
                  "Уже работали с агентствами — устали",
                  "Есть команда в штате — но нет уверенности",
                  "Готовы к прозрачной аналитике и P&L",
                ].map((x) => (
                  <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{x}</li>
                ))}
              </ul>
              <ContactDialog
                title="Обсудить комплексный маркетинг"
                description="Расскажите о бизнесе — подберём пакет."
                trigger={
                  <button type="button" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
                    Обсудить проект →
                  </button>
                }
              />
            </aside>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Команда</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Кто будет работать над вашим проектом
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((t, i) => (
              <div key={t.role} className="bg-background p-8">
                <div className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-8 font-display text-2xl font-medium tracking-tight">{t.role}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS vs SOLUTIONS */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Что меняется</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Было — стало
          </h2>
          <div className="mt-12 space-y-px overflow-hidden rounded-2xl bg-hairline">
            {PROBLEMS.map((row) => (
              <div key={row.p} className="grid gap-6 bg-background p-6 md:grid-cols-2 md:p-8">
                <div className="text-foreground/70 line-through decoration-destructive/40">{row.p}</div>
                <div className="text-foreground"><span className="text-accent">→</span> {row.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Roadmap</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Первые 90 дней
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((ph) => (
              <div key={ph.n} className="bg-background p-8">
                <div className="font-mono text-xs text-accent">{ph.n}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{ph.t}</h3>
                <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                  {ph.items.map((it) => <li key={it} className="flex gap-2"><span aria-hidden className="mt-2 h-px w-3 bg-foreground/30" />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Пакеты</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Выберите масштаб
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`rounded-3xl border p-8 ${pkg.highlight ? "border-foreground bg-foreground text-background" : "border-hairline bg-background"}`}>
                <h3 className="font-display text-2xl font-medium tracking-tight">{pkg.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-3xl font-medium tracking-tight">{pkg.price}</span>
                  {pkg.note && <span className={`text-sm ${pkg.highlight ? "text-background/60" : "text-muted-foreground"}`}>{pkg.note}</span>}
                </div>
                <p className={`mt-4 text-sm ${pkg.highlight ? "text-background/70" : "text-muted-foreground"}`}>{pkg.desc}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {pkg.items.map((it) => <li key={it} className="flex gap-2"><span aria-hidden className={`mt-2 h-px w-3 ${pkg.highlight ? "bg-background/40" : "bg-foreground/40"}`} />{it}</li>)}
                </ul>
                <ContactDialog
                  title={`Пакет ${pkg.name}`}
                  description="Расскажите о задаче — пришлём детальное предложение."
                  trigger={
                    <button type="button" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${pkg.highlight ? "bg-accent text-accent-foreground" : "bg-foreground text-background hover:bg-foreground/90"}`}>
                      Выбрать {pkg.name}
                    </button>
                  }
                />
              </div>
            ))}
          </div>
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
              {[
                { q: "Что если у меня уже есть штатный маркетолог?", a: "Усиливаем его экспертизой команды. Часто становимся «руками» под его стратегию или закрываем недостающие роли (аналитик, видеограф)." },
                { q: "Можно ли начать с одной услуги?", a: "Да. Большинство клиентов начинают с трафика или аналитики, а потом расширяют объём работ. Любую услугу можно взять отдельно." },
                { q: "Как контролировать качество работы?", a: "Дашборд с метриками 24/7, еженедельные созвоны, ежемесячный отчёт. Все KPI фиксируются в договоре." },
                { q: "Какой минимальный срок контракта?", a: "Рекомендуем 3 месяца — это минимальный горизонт, на котором видны результаты. Дальше — помесячно." },
                { q: "Кто владеет аккаунтами и аналитикой?", a: "Вы. Все рекламные кабинеты, домены, аналитика создаются на ваше юр. лицо. При расторжении вы ничего не теряете." },
              ].map((item) => (
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

      {/* RELATED */}
      <section className="border-b border-hairline bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Что входит в комплекс</p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">Услуги внутри пакета</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {RELATED.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="group flex flex-col bg-background p-8 transition-colors hover:bg-accent/30">
                <h3 className="font-display text-xl font-medium tracking-tight">{r.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.tagline}</p>
                <div className="mt-auto pt-6 text-xs font-mono uppercase tracking-widest text-foreground/60">
                  Подробнее <span aria-hidden className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы к росту?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Получите <em className="not-italic text-accent">медиаплан</em> и команду под ваш бизнес
                </h2>
                <p className="mt-6 max-w-xl text-background/70">
                  За один созвон поймём задачу, за 5 дней пришлём стратегию и пакет.
                </p>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка на комплексный маркетинг"
                  description="Оставьте контакты — свяжемся в течение дня."
                  trigger={
                    <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3">
                      Запросить стратегию
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
