import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/yandex-ads")({
  head: () => ({
    meta: [
      { title: "Реклама в Яндекс Директ — поиск, РСЯ, Мастер кампаний | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Запуск и ведение Яндекс Директ: поиск, РСЯ, Мастер кампаний, ретаргетинг. Метрика, цели, сквозная аналитика. От 75 000 тг/мес.",
      },
      { property: "og:title", content: "Реклама в Яндекс Директ — ABP DIGITAL" },
      { property: "og:description", content: "Поиск, РСЯ, Мастер кампаний и ретаргетинг для рынка СНГ." },
    ],
  }),
  component: YandexAdsPage,
});

const TYPES = [
  { t: "Поиск", d: "Объявления по запросам в выдаче Яндекса. Самый горячий трафик и предсказуемый CPL.", m: "CTR 8–15%" },
  { t: "РСЯ", d: "Рекламная сеть Яндекса — сайты-партнёры, почта, мобильные приложения. Дешёвый охват и ремаркетинг.", m: "CPM от 150 тг" },
  { t: "Мастер кампаний", d: "Авто-формат для быстрого запуска: одна кампания, минимум настроек, AI-оптимизация.", m: "Запуск за 1 день" },
  { t: "Товарная кампания", d: "Под e-commerce: фид + автоматические объявления в выдаче и Маркете.", m: "ROAS x4–7" },
  { t: "Ретаргетинг", d: "Сегменты Метрики: посетители, корзина, отказники. Возвращаем тёплых пользователей.", m: "ROAS x5+" },
  { t: "Медийная реклама", d: "Баннеры в РСЯ под бренд-задачи, охват по интересам и соц.-дем сегментам.", m: "Reach до 80%" },
];

const STEPS = [
  { n: "01", t: "Аудит и Метрика", d: "Проверяем кабинет, цели в Метрике, корректность атрибуции и UTM." },
  { n: "02", t: "Семантика", d: "Сбор ядра под Алматы / Астану / Казахстан, кластеризация по интентам, минус-фразы." },
  { n: "03", t: "Структура и креативы", d: "Кампании по гео и продуктам, объявления с быстрыми ссылками, креативы под РСЯ." },
  { n: "04", t: "Запуск и обучение", d: "Поиск + ремаркетинг сразу, РСЯ и Мастер — после первых конверсий." },
  { n: "05", t: "Оптимизация", d: "Чистка площадок РСЯ, корректировки ставок, A/B-тесты заголовков." },
  { n: "06", t: "Отчёт", d: "Looker Studio с расходом, заявками, CPL и ROAS по каждой кампании." },
];

const VS = [
  { criteria: "Доля поиска в Казахстане", google: "~90%", yandex: "~10%" },
  
  { criteria: "Стоимость клика в РК", google: "выше", yandex: "ниже на 20–40%" },
  { criteria: "B2B и узкие ниши", google: "лучше", yandex: "сравнимо" },
  { criteria: "E-commerce СНГ", google: "Shopping", yandex: "Товарка + Маркет" },
];

const FAQ = [
  { q: "Стоит ли запускать Яндекс в Казахстане?", a: "Запускать Яндекс есть смысл, даже в условиях доминации Google. Это не история “победить Google”, а история занять свою нишу и забрать дешевый трафик. Благодаря политики Яндекс, многие крупные сайты в Казахстане показывают рекламу от Яндекс. Для B2B и нишевых услуг хороший дополнительный канал." },
  { q: "Можно ли совмещать с Google Ads?", a: "Да, и нужно. Это разные аудитории и поведение. В комплексной стратегии мы балансируем бюджет: обычно 60–70% Google, 30–40% Яндекс." },
  
  { q: "Сколько нужно времени на запуск?", a: "От брифа до первых открученных тенге — 5–7 рабочих дней. Стабильный поток заявок — со 2–3 недели после прохождения learning phase." },
  { q: "Какой минимальный бюджет на Директ?", a: "От 200 000 тг/мес на сам Яндекс. Меньше — алгоритмы автостратегий не успевают накопить данные для оптимизации." },
];

const RELATED = SERVICES.filter((s) => ["google-ads", "seo", "analytics", "audit"].includes(s.slug));

function YandexAdsPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Реклама в Яндекс</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Сертифицированные специалисты Яндекс
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Яндекс Директ —
                <br />
                <em className="not-italic text-accent">дешёвый трафик</em>
                <br />
                для рынка СНГ.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Поиск, РСЯ, Мастер кампаний, товарка и ретаргетинг. Считаем заявки через
                Метрику и сквозную аналитику, не «показы и клики».
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Бесплатный медиаплан Яндекс Директ"
                  description="Пришлём прогноз заявок и CPL по вашей нише."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить медиаплан
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Аудит Яндекс Директа"
                  description="Разберём кабинет, Метрику и текущие связки."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Заказать аудит
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "−30%", l: "CPC vs Google в РК" },
                  { v: "x4–6", l: "ROAS на ретаргете" },
                  { v: "5 дней", l: "до запуска" },
                ].map((s) => (
                  <div key={s.l} className="bg-background p-5 md:p-6">
                    <dt className="font-display text-2xl font-medium tracking-tight md:text-3xl">{s.v}</dt>
                    <dd className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="rounded-3xl border border-hairline bg-secondary/40 p-8 md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Стоимость работы</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-tight">75 000</span>
                <span className="text-sm text-muted-foreground">тг / мес</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Бюджет на клики оплачивается напрямую в Яндекс. Закрывающие документы — без проблем.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Что входит</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["Семантика и минус-фразы", "Поиск, РСЯ, Мастер кампаний", "Настройка Метрики и целей", "Ретаргетинг по сегментам", "Дашборд в Looker Studio", "Еженедельные отчёты"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground/80"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-foreground/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <ContactDialog
                title="Запустить Яндекс Директ"
                description="Расскажите о проекте — пришлём смету и медиаплан."
                trigger={
                  <button type="button" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
                    Обсудить запуск →
                  </button>
                }
              />
            </aside>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Типы кампаний</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            6 типов кампаний Директа
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {TYPES.map((t) => (
              <div key={t.t} className="bg-background p-7">
                <h3 className="font-display text-xl font-medium tracking-tight">{t.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.d}</p>
                <div className="mt-6 border-t border-hairline pt-4 font-mono text-xs uppercase tracking-widest text-accent">{t.m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Процесс</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            6 шагов до стабильного потока заявок
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-background p-7">
                <div className="font-mono text-xs text-accent">{s.n}</div>
                <h3 className="mt-8 font-display text-xl font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Сравнение</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Яндекс vs Google — где какой канал
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-background">
            <div className="grid grid-cols-3 gap-4 border-b border-hairline bg-secondary/50 px-6 py-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground md:px-8">
              <div>Критерий</div><div>Google</div><div>Яндекс</div>
            </div>
            {VS.map((row) => (
              <div key={row.criteria} className="grid grid-cols-3 gap-4 border-b border-hairline px-6 py-5 last:border-b-0 md:px-8">
                <div className="font-medium">{row.criteria}</div>
                <div className="font-mono text-sm">{row.google}</div>
                <div className="font-mono text-sm text-accent">{row.yandex}</div>
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
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы к Директу?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Получите <em className="not-italic text-accent">медиаплан</em> и прогноз заявок
                </h2>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка: Яндекс Директ"
                  description="Оставьте контакты — пришлём смету и медиаплан."
                  trigger={
                    <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3">
                      Запросить смету
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
