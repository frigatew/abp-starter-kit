import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/ux-ui")({
  head: () => ({
    meta: [
      { title: "UX/UI дизайн web-приложений и SaaS — ABP DIGITAL" },
      {
        name: "description",
        content:
          "UX-исследование, информационная архитектура, прототипы, UI и дизайн-система для сложных web-приложений и SaaS. Не лендинги — продукты.",
      },
      { property: "og:title", content: "UX/UI дизайн сложных интерфейсов — ABP DIGITAL" },
      { property: "og:description", content: "Discovery, IA, прототип, UI-кит и ТЗ для разработчиков." },
    ],
  }),
  component: UxUiPage,
});

const SERVICES_LIST = [
  { t: "UX-исследование", d: "Глубинные интервью, JTBD, CJM. Понимаем боли пользователей до того, как рисуем экраны." },
  { t: "Информационная архитектура", d: "Структура продукта, навигация, taxonomy, user flows под основные сценарии." },
  { t: "Прототипирование", d: "Wireframes → интерактивный прототип в Figma. Тестируем до того, как красим." },
  { t: "UI-дизайн", d: "Финальный визуал, состояния, темы, иконография, иллюстрации, motion." },
  { t: "Дизайн-система", d: "Атомы, компоненты, токены, темная/светлая тема. Готова к Storybook и dev-handoff." },
  { t: "ТЗ для разработки", d: "Структурированное ТЗ с user stories, acceptance criteria и спецификациями экранов." },
];

const NOT_FOR = [
  { p: "Промо-лендинг", n: "Это не наш профиль — есть подрядчики попроще и подешевле." },
  { p: "«Перерисовать сайт красиво»", n: "Без UX-исследования это просто косметика — мы так не работаем." },
  { p: "Дизайн за 3 дня", n: "Качественный продуктовый дизайн нельзя сделать за неделю. Минимум — 4–6 недель." },
];

const FOR = [
  { t: "SaaS и B2B-сервисы", d: "Дашборды, админки, сложные таблицы, фильтры, настройки." },
  { t: "Маркетплейсы", d: "Каталог, фильтры, карточки, корзина, личные кабинеты продавца и покупателя." },
  { t: "Финтех", d: "Онбординг, KYC, переводы, аналитика, безопасность интерфейса." },
  { t: "Образовательные платформы", d: "LMS, личные кабинеты ученика и преподавателя, прогресс, геймификация." },
];

const PROCESS = [
  { n: "Этап 1", weeks: "2–3 недели", t: "Discovery", items: ["Интервью с командой и пользователями", "Анализ конкурентов и рынка", "JTBD и приоритеты гипотез", "Roadmap дизайна"] },
  { n: "Этап 2", weeks: "2–3 недели", t: "Структура", items: ["Информационная архитектура", "User flows ключевых сценариев", "Wireframes основных экранов", "Интерактивный прототип"] },
  { n: "Этап 3", weeks: "3–5 недель", t: "UI", items: ["Визуальный язык и moodboard", "Финальные экраны", "Все состояния и edge cases", "Dark / light темы"] },
  { n: "Этап 4", weeks: "1–2 недели", t: "Система и handoff", items: ["Дизайн-система с токенами", "Документация компонентов", "ТЗ для разработчиков", "Сопровождение разработки"] },
];

const TOOLS = ["Figma", "FigJam", "Notion", "Maze", "Lyssna", "Storybook"];

const FAQ = [
  { q: "Делаете ли разработку?", a: "Нет, мы делаем UX/UI и ТЗ. Можем порекомендовать команды разработки и сопровождать процесс — комментировать PR, помогать с QA по дизайну." },
  { q: "Сколько стоит проект?", a: "От 1 500 000 тг за полноценный продуктовый дизайн (4–6 недель). Финальная цена — после Discovery-этапа, когда понятен объём. Мелкие итерации — почасово от 15 000 тг/час." },
  { q: "Сколько времени занимает?", a: "Минимум 6 недель на новый продукт средней сложности. Большие SaaS — 3–6 месяцев. Редизайн существующего — от 4 недель." },
  { q: "Работаете ли с лендингами?", a: "Нет, наш профиль — сложные интерфейсы продуктов. Для лендингов есть отдельные подрядчики, можем порекомендовать." },
  { q: "Что если у меня уже есть дизайнер?", a: "Можем взять конкретный этап: исследование, IA, дизайн-систему. Или провести аудит дизайна и дать backlog улучшений." },
  { q: "В каком тулинге работаете?", a: "Figma — основной инструмент. FigJam для воркшопов, Maze/Lyssna для тестирования, Notion для документации." },
];

const RELATED = SERVICES.filter((s) => ["seo", "analytics", "complex", "audit"].includes(s.slug));

function UxUiPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>UX/UI дизайн</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Product Design · SaaS · B2B
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                UX/UI для
                <br />
                <em className="not-italic text-accent">сложных продуктов</em>,
                <br />
                а не лендингов.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Discovery, информационная архитектура, прототипы, финальный UI и дизайн-система.
                Работаем с web-приложениями, SaaS и маркетплейсами.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Обсудить продукт"
                  description="Расскажите о продукте — обсудим объём и сроки."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Обсудить проект
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Дизайн-аудит продукта"
                  description="Разберём существующий продукт и дадим backlog улучшений UX."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Дизайн-аудит
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "6 нед", l: "минимальный проект" },
                  { v: "Figma", l: "основной инструмент" },
                  { v: "Design System", l: "на каждом проекте" },
                ].map((s) => (
                  <div key={s.l} className="bg-background p-5 md:p-6">
                    <dt className="font-display text-2xl font-medium tracking-tight md:text-3xl">{s.v}</dt>
                    <dd className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="rounded-3xl border border-hairline bg-secondary/40 p-8 md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Стоимость</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-medium tracking-tight md:text-5xl">от 1 500 000</span>
                <span className="text-sm text-muted-foreground">тг</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Цена за полноценный продуктовый цикл (Discovery → UI → дизайн-система).
                Точная смета — после Discovery.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Инструменты</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {TOOLS.map((t) => (
                    <span key={t} className="rounded-full border border-hairline bg-background px-3 py-1 font-mono text-xs uppercase tracking-widest text-foreground/70">{t}</span>
                  ))}
                </div>
              </div>
              <ContactDialog
                title="Обсудить продукт"
                description="Расскажите о задаче."
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

      {/* WHAT WE DO */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Что делаем</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            6 областей продуктового дизайна
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_LIST.map((s, i) => (
              <div key={s.t} className="bg-background p-7">
                <div className="font-mono text-xs text-muted-foreground">/{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR / NOT FOR */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent-foreground/70">/ Подходит</p>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">Для каких продуктов</h2>
              <ul className="mt-8 space-y-6">
                {FOR.map((f) => (
                  <li key={f.t}>
                    <div className="flex items-baseline gap-3">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <h3 className="font-display text-lg font-medium tracking-tight">{f.t}</h3>
                    </div>
                    <p className="mt-2 pl-5 text-sm text-muted-foreground">{f.d}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-destructive">/ Не подходит</p>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">Что мы не делаем</h2>
              <ul className="mt-8 space-y-6">
                {NOT_FOR.map((n) => (
                  <li key={n.p}>
                    <div className="flex items-baseline gap-3">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-destructive/60" />
                      <h3 className="font-display text-lg font-medium tracking-tight line-through decoration-destructive/40">{n.p}</h3>
                    </div>
                    <p className="mt-2 pl-5 text-sm text-muted-foreground">{n.n}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Процесс</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            4 этапа от Discovery до handoff
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.n} className="bg-background p-7">
                <div className="font-mono text-xs text-accent">{p.n}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.weeks}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{p.t}</h3>
                <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                  {p.items.map((it) => <li key={it} className="flex gap-2"><span aria-hidden className="mt-2 h-px w-3 bg-foreground/30" />{it}</li>)}
                </ul>
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

      <section className="border-b border-hairline bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Смежные услуги</p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">Часто берут вместе</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {RELATED.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="group flex flex-col bg-background p-8 transition-colors hover:bg-accent/30">
                <h3 className="font-display text-xl font-medium tracking-tight">{r.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.tagline}</p>
                <div className="mt-auto pt-6 text-xs font-mono uppercase tracking-widest text-foreground/60">
                  {r.price} <span aria-hidden className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы к продуктовому дизайну?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Расскажите о <em className="not-italic text-accent">продукте</em> — пришлём план Discovery
                </h2>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка: UX/UI дизайн"
                  description="Оставьте контакты — обсудим проект."
                  trigger={
                    <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3">
                      Обсудить продукт
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
