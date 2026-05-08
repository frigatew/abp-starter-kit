import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { getServiceBySlug, SERVICES } from "@/lib/services-data";

const service = getServiceBySlug("google-ads")!;

export const Route = createFileRoute("/services/google-ads")({
  head: () => ({
    meta: [
      { title: "Реклама в Google Ads — поиск, КМС, YouTube, Performance Max | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Запуск и ведение Google Ads под ключ: семантика, поиск, КМС, Performance Max, YouTube. Прозрачные отчёты по заявкам и ROAS. От 100 000 тг/мес.",
      },
      { property: "og:title", content: "Реклама в Google Ads под ключ — ABP DIGITAL" },
      {
        property: "og:description",
        content:
          "Поиск, КМС, Performance Max, YouTube и ремаркетинг. Платите за заявки, а не за клики.",
      },
    ],
  }),
  component: GoogleAdsPage,
});

const CAMPAIGN_TYPES = [
  {
    tag: "Поиск",
    title: "Search Ads",
    desc: "Объявления по горячим запросам — пользователь сам ищет ваш продукт. Самый прямой путь к заявке.",
    metric: "CPL от 1 500 тг",
  },
  {
    tag: "КМС",
    title: "Display Network",
    desc: "Баннеры на 2+ млн сайтов-партнёров Google. Дешёвый охват, ремаркетинг и прогрев холодной аудитории.",
    metric: "CPM от 200 тг",
  },
  {
    tag: "PMax",
    title: "Performance Max",
    desc: "AI-кампании: один креативный набор — все плейсменты Google (поиск, КМС, YouTube, Maps, Gmail, Discover).",
    metric: "ROAS x3–8",
  },
  {
    tag: "YouTube",
    title: "Video Ads",
    desc: "In-stream, Shorts и Bumper Ads. Дешёвый охват видеоформатов и тёплый ремаркетинг по просмотрам.",
    metric: "CPV от 8 тг",
  },
  {
    tag: "Shopping",
    title: "Google Shopping",
    desc: "Карточки товаров в выдаче и на вкладке Покупки. Must-have для e-commerce — высокий CTR и CR.",
    metric: "CR x2 vs Search",
  },
  {
    tag: "Remarketing",
    title: "Ремаркетинг",
    desc: "Возвращаем тех, кто был на сайте, но не оставил заявку. Самая рентабельная аудитория в кабинете.",
    metric: "ROAS x5+",
  },
];

const WORKFLOW = [
  {
    week: "Неделя 1",
    title: "Аудит и стратегия",
    items: [
      "Проверяем сайт, аналитику, конверсии",
      "Разбираем нишу и 5–10 конкурентов в выдаче",
      "Считаем юнит-экономику и допустимый CPL",
      "Готовим медиаплан и прогноз заявок",
    ],
  },
  {
    week: "Неделя 2",
    title: "Семантика и структура",
    items: [
      "Собираем семантическое ядро (300–3000+ фраз)",
      "Кластеризуем по интенту и температуре",
      "Прорабатываем минус-слова",
      "Проектируем структуру кампаний и групп",
    ],
  },
  {
    week: "Неделя 2",
    title: "Креативы и трекинг",
    items: [
      "Пишем тексты объявлений: 3–5 вариантов на группу",
      "Готовим баннеры для КМС и PMax",
      "Настраиваем GA4, цели, события, eCommerce",
      "Подключаем Google Tag Manager и enhanced conversions",
    ],
  },
  {
    week: "Неделя 3",
    title: "Запуск и обучение",
    items: [
      "Запускаем поиск и ремаркетинг в первую очередь",
      "Через 5–7 дней подключаем PMax и КМС",
      "Контролируем обучение алгоритмов",
      "Ежедневно мониторим расход, CTR, CPL",
    ],
  },
  {
    week: "Постоянно",
    title: "Оптимизация",
    items: [
      "A/B-тесты текстов, креативов, посадочных",
      "Чистим площадки КМС и поисковые запросы",
      "Корректируем ставки по устройствам, гео, времени",
      "Масштабируем связки с лучшим ROAS",
    ],
  },
  {
    week: "Каждую неделю",
    title: "Отчётность",
    items: [
      "Дашборд в Looker Studio — доступ 24/7",
      "Расход, заявки, CPL, ROAS по кампаниям",
      "Гипотезы на следующую неделю",
      "Звонок с менеджером по итогам",
    ],
  },
];

const RESULTS_BY_NICHE = [
  { niche: "E-commerce", cpl: "от 800 тг", roas: "x4–8", note: "Shopping + PMax — основная связка" },
  { niche: "B2B / услуги", cpl: "от 3 000 тг", roas: "x3–6", note: "Поиск + ремаркетинг по формам" },
  { niche: "Недвижимость", cpl: "от 5 000 тг", roas: "x2–4", note: "Поиск + видео-прогрев YouTube" },
  { niche: "Авто", cpl: "от 4 000 тг", roas: "x3–5", note: "Поиск + Shopping для запчастей" },
  { niche: "Образование", cpl: "от 2 000 тг", roas: "x4–7", note: "PMax + ремаркетинг по урокам" },
  { niche: "Медицина", cpl: "от 2 500 тг", roas: "x3–5", note: "Поиск с упором на гео и услуги" },
];

const FAQ = [
  {
    q: "Сколько стоит запустить рекламу в Google?",
    a: "Работа агентства — от 100 000 тг/мес. Рекламный бюджет — отдельно, оплачивается напрямую в Google. Минимально рекомендуем 300 000 тг/мес на клики, чтобы алгоритмы успели обучиться за первый месяц.",
  },
  {
    q: "Через сколько будут первые заявки?",
    a: "Поиск даёт первые заявки в день запуска. PMax и КМС нужно 7–14 дней на обучение. Стабильный поток и оптимизированный CPL — со 2–3 недели.",
  },
  {
    q: "Работает ли Google Ads в Казахстане?",
    a: "Да, и очень эффективно. У Google в РК доля поиска 90%+, и большинство ниш получают здесь самый качественный трафик. Дополнительно подключаем Яндекс для регионов.",
  },
  {
    q: "Кто оплачивает рекламный бюджет в Google?",
    a: "Бюджет оплачивает клиент напрямую — со своей карты или счёта. Мы помогаем настроить корпоративный аккаунт и счёт-фактуры. Никаких комиссий с бюджета не берём.",
  },
  {
    q: "Что, если у меня уже есть кабинет с историей?",
    a: "Отлично — это плюс. История конверсий ускоряет обучение Smart Bidding и PMax. Сделаем аудит, заберём что работает, и переработаем то, что сливает бюджет.",
  },
  {
    q: "Можно ли запустить рекламу без сайта?",
    a: "Технически — да, можно вести трафик в WhatsApp, на лид-форму или в каталог. Но конверсия будет в 2–3 раза ниже, чем с нормальным лендингом. Если сайта нет — поможем с лендингом или редиректом.",
  },
];

const RELATED = SERVICES.filter((s) =>
  ["analytics", "audit", "seo", "yandex-ads"].includes(s.slug),
);

function GoogleAdsPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">
              ← Все услуги
            </Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Реклама в Google</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Google Ads · Premier Partner level
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Реклама в Google,
                <br />
                которая <em className="not-italic text-accent">приносит заявки</em> —
                <br />
                а не «показы» в отчёте.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Запускаем и ведём Google Ads под ключ: поиск, КМС, Performance Max, YouTube
                и ремаркетинг. Считаем не клики, а стоимость лида и возврат на рекламу.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Бесплатный медиаплан по Google Ads"
                  description="Пришлём прогноз заявок и ROAS по вашей нише в течение рабочего дня."
                  trigger={
                    <button
                      type="button"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3"
                    >
                      Получить медиаплан бесплатно
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Аудит вашего Google Ads"
                  description="Разберём текущие кампании и покажем, где сливается бюджет."
                  trigger={
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
                    >
                      Заказать аудит кабинета
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "x3–8", l: "ROAS в среднем" },
                  { v: "−42%", l: "CPL за 3 месяца" },
                  { v: "5 дней", l: "от брифа до запуска" },
                ].map((s) => (
                  <div key={s.l} className="bg-background p-5 md:p-6">
                    <dt className="font-display text-2xl font-medium tracking-tight md:text-3xl">
                      {s.v}
                    </dt>
                    <dd className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      {s.l}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="rounded-3xl border border-hairline bg-secondary/40 p-8 md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Стоимость работы
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-tight">
                  100 000
                </span>
                <span className="text-sm text-muted-foreground">тг / мес</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Финальная цена зависит от количества кампаний и языков. Рекламный бюджет
                оплачивается напрямую в Google, мы комиссию не берём.
              </p>

              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Что входит
                </p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {[
                    "Аудит, семантика, медиаплан",
                    "Все типы кампаний Google Ads",
                    "Настройка GA4 и enhanced conversions",
                    "Креативы и адаптации",
                    "Дашборд в Looker Studio 24/7",
                    "Еженедельные созвоны",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-foreground/80">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-foreground/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <ContactDialog
                title="Обсудить запуск Google Ads"
                description="Расскажите о проекте — пришлём смету и медиаплан."
                trigger={
                  <button
                    type="button"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Обсудить проект →
                  </button>
                }
              />
            </aside>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-destructive">
                / Без специалиста
              </p>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                Бюджет уходит, заявок нет
              </h2>
              <ul className="mt-8 space-y-4 text-foreground/80">
                {[
                  "Запустили «Умную кампанию» — Google тратит, но непонятно куда",
                  "Клики есть, заявок нет — посадочная не конвертит",
                  "Конкуренты выкупают ваш бренд в выдаче",
                  "Нет аналитики — не знаете, какая кампания приносит деньги",
                  "Алгоритмы PMax «съели» бюджет за 3 дня без обучения",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-accent-foreground/70">
                / С нашей командой
              </p>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                Прозрачный поток заявок
              </h2>
              <ul className="mt-8 space-y-4 text-foreground/80">
                {[
                  "Понятный медиаплан с прогнозом заявок и ROAS",
                  "Сначала поиск и ремаркетинг — быстрые деньги",
                  "Настроенная аналитика: видно каждый тенге и каждый лид",
                  "PMax и КМС — после обучения на качественных данных",
                  "Дашборд 24/7 + еженедельный отчёт человеком",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAMPAIGN TYPES */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              / Типы кампаний
            </p>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Все форматы Google Ads под одной крышей
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Подбираем связку под вашу нишу и воронку. Не запускаем «всё подряд» —
              начинаем с того, что даст результат быстрее всего.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {CAMPAIGN_TYPES.map((c) => (
              <article
                key={c.title}
                className="group flex flex-col gap-6 bg-background p-8 transition-colors hover:bg-accent/30"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    {c.tag}
                  </span>
                  <span className="font-mono text-xs text-foreground/60">{c.metric}</span>
                </div>
                <h3 className="font-display text-2xl font-medium leading-tight tracking-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr] md:gap-24">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                / Процесс
              </p>
              <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
                Как мы запускаем рекламу
              </h2>
              <p className="mt-6 text-muted-foreground">
                Системный процесс на 3 недели от первого звонка до стабильного потока
                заявок. Никакой «запустим завтра и посмотрим».
              </p>
            </div>

            <ol className="space-y-px overflow-hidden rounded-2xl bg-hairline">
              {WORKFLOW.map((w, i) => (
                <li key={w.title} className="bg-background p-6 md:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-xl font-medium tracking-tight md:text-2xl">
                        {w.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                      {w.week}
                    </span>
                  </div>
                  <ul className="mt-5 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                    {w.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          aria-hidden
                          className="mt-2 h-px w-3 shrink-0 bg-foreground/30"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="border-b border-hairline bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-background/60">
              / Бесплатно
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Прогноз заявок по вашей нише за 1 день
            </h2>
            <p className="mt-4 text-background/70">
              Дайте сайт и регион — посчитаем спрос, ставки конкурентов и реалистичный
              прогноз CPL. Без обязательств.
            </p>
          </div>
          <ContactDialog
            title="Бесплатный прогноз по Google Ads"
            description="Оставьте контакты — пришлём расчёт в течение рабочего дня."
            trigger={
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3"
              >
                Получить прогноз
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            }
          />
        </div>
      </section>

      {/* RESULTS BY NICHE */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              / Результаты
            </p>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
              Ориентиры по нишам
            </h2>
            <p className="mt-6 text-muted-foreground">
              Реальные показатели по проектам, которые мы вели в Казахстане и СНГ. Это
              средние значения — конкретно по вашему проекту дадим прогноз после брифа.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/60 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <tr>
                  <th className="px-6 py-4 font-normal">Ниша</th>
                  <th className="px-6 py-4 font-normal">CPL</th>
                  <th className="px-6 py-4 font-normal">ROAS</th>
                  <th className="hidden px-6 py-4 font-normal md:table-cell">Связка</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS_BY_NICHE.map((r) => (
                  <tr key={r.niche} className="border-t border-hairline">
                    <td className="px-6 py-5 font-display text-base font-medium tracking-tight">
                      {r.niche}
                    </td>
                    <td className="px-6 py-5 font-mono text-foreground/80">{r.cpl}</td>
                    <td className="px-6 py-5 font-mono text-foreground/80">{r.roas}</td>
                    <td className="hidden px-6 py-5 text-muted-foreground md:table-cell">
                      {r.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              {FAQ.map((item) => (
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

      {/* RELATED */}
      {RELATED.length > 0 && (
        <section className="border-b border-hairline bg-secondary/40">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              / Усиливают результат
            </p>
            <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Часто берут вместе с Google Ads
            </h2>

            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
              {RELATED.map((r) => (
                <Link
                  key={r.slug}
                  to={`/services/${r.slug}`}
                  className="group flex flex-col bg-background p-7 transition-colors hover:bg-accent/30"
                >
                  <h3 className="font-display text-xl font-medium tracking-tight">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{r.tagline}</p>
                  <div className="mt-auto pt-6 text-xs font-mono uppercase tracking-widest text-foreground/60">
                    {r.price}{" "}
                    <span
                      aria-hidden
                      className="ml-2 inline-block transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">
                  Готовы запустить?
                </p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Поток заявок из Google —
                  <br />
                  уже в этом месяце.
                </h2>
                <p className="mt-6 max-w-xl text-background/70">
                  Оставьте контакты — за один день пришлём медиаплан с прогнозом заявок,
                  CPL и ROAS под вашу нишу. Без обязательств и предоплат.
                </p>
                <p className="mt-6 text-xs font-mono uppercase tracking-widest text-background/40">
                  Ответим в течение 2 часов · Запуск через 5 рабочих дней
                </p>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title={`Заявка: ${service.title}`}
                  description="Оставьте контакты — пришлём медиаплан и смету в течение дня."
                  trigger={
                    <button
                      type="button"
                      className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3"
                    >
                      Получить медиаплан
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

