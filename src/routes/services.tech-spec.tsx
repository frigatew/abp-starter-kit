import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";

export const Route = createFileRoute("/services/tech-spec")({
  head: () => ({
    meta: [
      { title: "Разработка технического задания для сложных проектов | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Разработка ТЗ для сложных проектов: Discovery, UX/UI, архитектура, оценка. Полная документация для разработчиков. От 200 000 тг.",
      },
      { property: "og:title", content: "Разработка ТЗ — ABP DIGITAL" },
      {
        property: "og:description",
        content: "Полная документация по сложному проекту, по которой можно строить.",
      },
    ],
  }),
  component: TechSpecPage,
});

const PHASES = [
  { step: "01", title: "Discovery", desc: "Интервью со стейкхолдерами, анализ бизнеса, целей, ограничений и существующих процессов." },
  { step: "02", title: "UX-проектирование", desc: "Карта пользовательских сценариев, информационная архитектура, wireframes, интерактивный прототип в Figma." },
  { step: "03", title: "UI-дизайн", desc: "Финальный визуал ключевых экранов, дизайн-система, состояния, адаптация под устройства." },
  { step: "04", title: "Архитектура", desc: "Стек технологий, схема базы данных, интеграции, API, нефункциональные требования." },
  { step: "05", title: "Оценка и этапы", desc: "Разбивка на эпики и задачи, оценка сроков и ресурсов, дорожная карта релизов." },
  { step: "06", title: "Документация", desc: "Финальное ТЗ в формате PDF + Notion, готовое к передаче подрядчикам или тендеру." },
];

const DELIVERABLES = [
  { t: "Бизнес-требования", d: "Цели, KPI, ограничения и сценарии монетизации." },
  { t: "Функциональные требования", d: "Описание всех модулей и пользовательских сценариев." },
  { t: "UX-прототип", d: "Интерактивный кликабельный прототип в Figma." },
  { t: "UI-кит", d: "Дизайн-система и визуал ключевых экранов." },
  { t: "Архитектура", d: "Схема системы, БД, интеграций, API-контрактов." },
  { t: "Roadmap", d: "Этапы, оценка, приоритеты, MVP-объём." },
];

const FOR_WHOM = [
  { t: "Стартапы", d: "Чёткое видение продукта до найма команды разработки." },
  { t: "Корпорации", d: "Документ для тендера и контроля подрядчика." },
  { t: "Продуктовые команды", d: "Системное планирование сложного релиза или нового модуля." },
];

const FAQ = [
  { q: "Подойдёт ТЗ для тендера?", a: "Да, документ содержит функциональные и нефункциональные требования, по которым подрядчики могут адекватно оценить проект." },
  { q: "Сколько занимает разработка ТЗ?", a: "От 3 до 8 недель в зависимости от сложности продукта, количества интеграций и стейкхолдеров." },
  { q: "Можете ли сопровождать разработку?", a: "Да, выступаем product-менеджером на стороне заказчика и контролируем соответствие реализации ТЗ." },
  { q: "А если у нас уже есть наброски?", a: "Отлично — берём в работу всё, что у вас есть, и доводим до полноценной документации." },
];

function TechSpecPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Разработка ТЗ</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Product Discovery · UX · Architecture
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                ТЗ, по которому
                <br />
                <em className="not-italic text-accent">можно строить</em>
                <br />
                сложный продукт.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Продумываю проект, упаковываю идеи, прорабатываю UX/UI и архитектуру.
                У вас на руках — полная документация, понятная разработчикам и удобная для тендера.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Обсудить разработку ТЗ"
                  description="Расскажите о задаче — пришлю оценку и план работ."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Обсудить проект
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Бесплатный 30-минутный созвон"
                  description="Обсудим ваш проект и поймём, нужен ли вам полноценный Discovery."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Бесплатный созвон
                    </button>
                  }
                />
              </div>
            </div>

            <aside className="rounded-3xl border-2 border-foreground bg-foreground p-8 text-background md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-background/60">Стоимость</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-tight">от 200 000</span>
                <span className="text-sm text-background/60">тг</span>
              </div>
              <p className="mt-4 text-sm text-background/70">
                Зависит от сложности продукта, количества интеграций и стейкхолдеров.
              </p>
              <div className="mt-8 border-t border-background/20 pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Что получите</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["PDF + Notion с полным ТЗ", "Интерактивный прототип в Figma", "Архитектуру и схему БД", "Дорожную карту разработки", "Оценку сроков и бюджета"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-background/90"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-background/40" />{it}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Для кого</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Кому нужна разработка ТЗ
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
            {FOR_WHOM.map((s) => (
              <div key={s.t} className="bg-background p-8">
                <h3 className="font-display text-xl font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Процесс</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            6 этапов от идеи до документации
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {PHASES.map((p) => (
              <div key={p.step} className="bg-background p-8">
                <div className="font-mono text-xs text-accent">{p.step}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ На выходе</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Что вы получите
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <div key={d.t} className="bg-background p-8">
                <h3 className="font-display text-xl font-medium tracking-tight">{d.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{d.d}</p>
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

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы спроектировать продукт?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Превратим идею в <em className="not-italic text-accent">понятную документацию</em>
                </h2>
              </div>
              <div className="md:text-right">
                <ContactDialog
                  title="Обсудить разработку ТЗ"
                  description="Расскажите о задаче — вернёмся с оценкой."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-all hover:gap-3">
                      Заказать ТЗ
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
