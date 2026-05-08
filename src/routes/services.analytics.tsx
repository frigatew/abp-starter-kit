import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";

export const Route = createFileRoute("/services/analytics")({
  head: () => ({
    meta: [
      {
        title:
          "Сквозная аналитика — GA4, Метрика, CRM, дашборды Looker Studio | ABP DIGITAL",
      },
      {
        name: "description",
        content:
          "Настройка сквозной аналитики под ключ: GA4, Yandex Metrica, server-side трекинг, интеграция с CRM, когорты, LTV и ROMI. От 200 000 тг.",
      },
      {
        property: "og:title",
        content: "Сквозная аналитика под ключ — ABP DIGITAL",
      },
      {
        property: "og:description",
        content:
          "От клика до сделки в CRM. Видите, какой канал, кампания и креатив реально приносят выручку.",
      },
    ],
  }),
  component: AnalyticsPage,
});

const PROBLEMS = [
  {
    title: "Без сквозной аналитики",
    items: [
      "Отчёты Google Ads и Метрики не сходятся между собой",
      "Не видно, какой канал приводит платящих клиентов",
      "Решения принимаются «по ощущениям», бюджет уходит в никуда",
      "Нельзя посчитать ROMI, LTV и окупаемость на горизонте 3–6 месяцев",
    ],
  },
  {
    title: "Со сквозной аналитикой",
    items: [
      "Один дашборд: расходы, заявки, сделки, выручка, ROMI",
      "Видно путь клиента от первого клика до повторной покупки",
      "Отключаем убыточные кампании за минуты, а не за месяцы",
      "Атрибуция учитывает оффлайн-сделки и звонки из CRM",
    ],
  },
];

const STACK = [
  {
    tag: "Web",
    title: "GA4 + Yandex Metrica",
    desc: "Базовый трекинг с правильной моделью событий, целями и e-commerce. Настраиваем под GDPR и закон РК о персональных данных.",
  },
  {
    tag: "Server-side",
    title: "GTM Server-Side",
    desc: "Свой контейнер на поддомене. Защита от блокировщиков, точные данные в Ads и Meta, контроль за тем, какие данные уходят наружу.",
  },
  {
    tag: "CRM",
    title: "Bitrix24, AmoCRM, HubSpot",
    desc: "Двусторонняя интеграция: лиды → CRM, статусы сделок и выручка → обратно в аналитику. Поддерживаем кастомные API.",
  },
  {
    tag: "Звонки",
    title: "Коллтрекинг",
    desc: "Подключаем Calltouch, Mango, Comagic. Звонок привязывается к источнику, кампании и ключевому слову.",
  },
  {
    tag: "BI",
    title: "Looker Studio / Power BI",
    desc: "Дашборды для собственника, маркетолога и продаж. Один экран — вся воронка от показа до денег.",
  },
  {
    tag: "Реклама",
    title: "Conversion API",
    desc: "Передача офлайн-конверсий в Google Ads, Meta, TikTok и Яндекс. Алгоритмы оптимизируются на сделки, а не на формы.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Аудит и цели бизнеса",
    desc: "Разбираем, какие решения вы хотите принимать на основе данных. Какие метрики критичны: CPL, CAC, ROMI, LTV, доля повторных продаж.",
    deliverable: "Карта KPI и список разрывов в текущей аналитике",
  },
  {
    step: "02",
    title: "Архитектура данных",
    desc: "Проектируем модель событий, схему атрибуции, точки интеграции с CRM, рекламными кабинетами и колл-трекингом.",
    deliverable: "Tracking plan и схема data flow",
  },
  {
    step: "03",
    title: "Внедрение трекинга",
    desc: "Ставим GTM (web + server), настраиваем GA4, Метрику, события и e-commerce. Чистим дубли и старые счётчики.",
    deliverable: "Чистый трекинг с проверкой каждого события",
  },
  {
    step: "04",
    title: "Интеграция с CRM",
    desc: "Связываем заявки с сделками. Подтягиваем выручку, статусы и причины отказов обратно в аналитику.",
    deliverable: "End-to-end воронка лид → сделка → деньги",
  },
  {
    step: "05",
    title: "Дашборды",
    desc: "Собираем 3 уровня отчётов: для собственника, для маркетолога, для отдела продаж. Автообновление без выгрузок руками.",
    deliverable: "Looker Studio с доступом для команды",
  },
  {
    step: "06",
    title: "Поддержка и развитие",
    desc: "Раз в месяц: проверка трекинга, новые события под продуктовые гипотезы, доработка дашбордов.",
    deliverable: "Аналитика, которая не «ломается» через 2 месяца",
  },
];

const REPORTS = [
  {
    role: "Собственнику",
    metrics: ["Выручка по каналам", "ROMI", "CAC vs LTV", "Доля маркетинга в P&L"],
  },
  {
    role: "Маркетологу",
    metrics: [
      "CPL и CAC по кампаниям",
      "Когорты по источникам",
      "Атрибуция (last/data-driven)",
      "Гипотезы и A/B-тесты",
    ],
  },
  {
    role: "Отделу продаж",
    metrics: [
      "Качество лидов по источнику",
      "Скорость обработки",
      "Конверсия в сделку",
      "Причины отказов",
    ],
  },
];

const FAQ = [
  {
    q: "У нас уже стоит GA4 и Метрика — зачем что-то ещё?",
    a: "Базовые счётчики показывают сессии и формы, но не показывают деньги. Сквозная аналитика связывает рекламу, CRM и выручку — это даёт ответ на вопрос «какой канал реально окупается».",
  },
  {
    q: "Сколько времени занимает внедрение?",
    a: "В среднем 3–4 недели от старта до первых дашбордов. Сложные интеграции с самописными CRM могут занять до 6 недель.",
  },
  {
    q: "Можно ли совместить с моим CRM?",
    a: "Да. Работаем с Bitrix24, AmoCRM, HubSpot, Salesforce, Pipedrive и кастомными API. Если CRM нет — поможем выбрать и внедрить.",
  },
  {
    q: "Что с законом о персональных данных в Казахстане?",
    a: "Server-side контейнер позволяет хранить данные на нужном вам сервере, маскировать PII и контролировать, что уходит к Google и Meta. Настраиваем под требования закона РК.",
  },
  {
    q: "Нужно ли ежемесячное сопровождение?",
    a: "Не обязательно, но рекомендуем: при изменениях на сайте, в CRM или в кампаниях трекинг ломается. Поддержка — от 50 000 тг/мес.",
  },
  {
    q: "Получим ли мы доступы ко всем системам?",
    a: "Да. Все аккаунты, контейнеры GTM, дашборды и интеграции оформляются на вас. Мы — администраторы, вы — владельцы.",
  },
];

function AnalyticsPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pt-24">
          <nav className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">
              ← Все услуги
            </Link>
            <span aria-hidden>/</span>
            <span>Сквозная аналитика</span>
          </nav>

          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Analytics · GA4 · GTM SS · BI
          </div>

          <h1 className="mt-6 max-w-5xl font-display text-5xl font-medium leading-[1] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Сквозная аналитика, которая показывает{" "}
            <em className="not-italic">деньги</em>, а не сессии.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Связываем рекламу, сайт, CRM и звонки в одну воронку. Видите, какой канал,
            кампания и креатив реально приносят выручку — и принимаете решения за минуты,
            а не за кварталы.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ContactDialog
              title="Получить аудит аналитики"
              description="Покажем разрывы в текущем трекинге и оценим объём работ."
              trigger={
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                >
                  Получить аудит бесплатно
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              }
            />
            <ContactDialog
              title="Обсудить внедрение"
              description="Расскажите о бизнесе и текущих системах — пришлём смету."
              trigger={
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Заказать внедрение
                </button>
              }
            />
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
            {[
              { value: "3–4 недели", label: "до первых дашбордов" },
              { value: "−38%", label: "среднее снижение CAC после внедрения" },
              { value: "100%", label: "доступы и данные остаются у вас" },
            ].map((m) => (
              <div key={m.label} className="bg-background p-6 md:p-8">
                <div className="font-display text-4xl font-medium tracking-tight md:text-5xl">
                  {m.value}
                </div>
                <p className="mt-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="border-b border-hairline bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Зачем это нужно
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            Маркетинг без аналитики — это деньги в&nbsp;тумане.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2">
            {PROBLEMS.map((block, i) => (
              <div key={block.title} className="bg-background p-8 md:p-10">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {i === 0 ? "Без нас" : "С нами"}
                </p>
                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight md:text-3xl">
                  {block.title}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-foreground/80">
                  {block.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className={`mt-2 h-px w-3 ${
                          i === 0 ? "bg-foreground/30" : "bg-foreground"
                        }`}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Стек
              </p>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Что подключаем
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Не привязываемся к одному вендору. Подбираем стек под бизнес — от GA4 до
              кастомного хранилища данных.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {STACK.map((s) => (
              <div key={s.title} className="flex flex-col bg-background p-8 md:p-10">
                <span className="self-start rounded-full bg-secondary px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
                <h3 className="mt-8 font-display text-2xl font-medium leading-tight tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-hairline bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            / Процесс
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            6 шагов от хаоса в данных до прозрачной воронки.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2">
            {PROCESS.map((p) => (
              <div key={p.step} className="bg-background p-8 md:p-10">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted-foreground">{p.step}</span>
                  <h3 className="font-display text-2xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-6 border-t border-hairline pt-4 text-xs font-mono uppercase tracking-widest text-foreground/70">
                  → {p.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Дашборды
              </p>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Один экран — вся воронка
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Три уровня отчётов под разные роли. Каждый видит то, что помогает ему
              принимать решения сегодня.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-3">
            {REPORTS.map((r) => (
              <div key={r.role} className="flex flex-col bg-background p-8 md:p-10">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  {r.role}
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {r.metrics.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-foreground/80">
                      <span aria-hidden className="mt-2 h-px w-3 bg-foreground/40" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section className="border-b border-hairline bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 rounded-3xl border border-hairline bg-background p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Стоимость
              </p>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                От 200 000 тг
                <span className="text-2xl text-muted-foreground"> / разово</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Финальная смета — после короткого аудита. Зависит от количества каналов,
                сложности CRM и числа дашбордов.
              </p>

              <ul className="mt-8 grid gap-2 text-sm sm:grid-cols-2">
                {[
                  "Аудит текущей аналитики",
                  "GA4 + Yandex Metrica с целями",
                  "GTM Server-Side контейнер",
                  "Интеграция с CRM и звонками",
                  "Дашборды Looker Studio",
                  "Conversion API в рекламные кабинеты",
                  "Документация и обучение команды",
                  "Месяц поддержки в подарок",
                ].map((item) => (
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
                  Поддержка
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-medium tracking-tight">
                    50 000 тг
                  </span>
                  <span className="text-sm text-muted-foreground">/ мес</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Контроль трекинга, новые события, доработка дашбордов под продуктовые
                  гипотезы.
                </p>
              </div>
              <ContactDialog
                title="Получить смету"
                description="Расскажите о текущих системах — пришлём цену в течение дня."
                trigger={
                  <button
                    type="button"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                  >
                    Получить смету
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / FAQ
              </p>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                Частые вопросы
              </h2>
            </div>
            <div className="divide-y divide-hairline border-y border-hairline">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left font-display text-lg font-medium md:text-xl">
                    {f.q}
                    <span
                      aria-hidden
                      className="mt-1 text-foreground/60 transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              Хотите видеть, на чём вы реально зарабатываете?
            </h2>
            <ContactDialog
              title="Получить аудит аналитики"
              description="Покажем разрывы в трекинге и подготовим план внедрения."
              trigger={
                <button
                  type="button"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:gap-3"
                >
                  Получить аудит бесплатно
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
