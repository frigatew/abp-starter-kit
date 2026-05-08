import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/instagram-ads")({
  head: () => ({
    meta: [
      { title: "Таргетированная реклама в Instagram — Reels, Stories, лента | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Таргет в Instagram через Meta Ads: продающие Reels и Stories, точные аудитории, look-alike, ретаргетинг. Считаем CPL и CPA, не охваты. От 75 000 тг/мес.",
      },
      { property: "og:title", content: "Реклама в Instagram под ключ — ABP DIGITAL" },
      { property: "og:description", content: "Креативы + точный таргет + чистая аналитика. Reels, Stories, ремаркетинг." },
    ],
  }),
  component: InstagramAdsPage,
});

const FORMATS = [
  { tag: "Reels", t: "Reels Ads", d: "Самый дешёвый охват в Instagram прямо сейчас. Нативное вертикальное видео под формат ленты Reels.", m: "CPM от 400 тг" },
  { tag: "Stories", t: "Stories Ads", d: "9:16 на весь экран, прямой переход свайпом. Лучший формат для офферов и распродаж.", m: "CTR 1–3%" },
  { tag: "Feed", t: "Лента и карусели", d: "Карусели — для расшифровки оффера, статика — для ремаркетинга и брендформации.", m: "CR x1.5 на ремаркетинге" },
  { tag: "Lookalike", t: "Look-alike аудитории", d: "Похожие на ваших покупателей. Базовый драйвер масштабирования после первых 50 заявок.", m: "CPL ниже на 20–35%" },
  { tag: "Retargeting", t: "Ретаргетинг", d: "Возвращаем тех, кто смотрел Reels, был на сайте, добавил в корзину или начал диалог в Direct.", m: "ROAS x4+" },
  { tag: "Advantage+", t: "Advantage+ Shopping", d: "AI-кампании Meta под e-commerce — алгоритм сам ищет покупателей по вашему каталогу.", m: "ROAS x3–7" },
];

const STAGES = [
  { n: "01", t: "Бриф и сегменты", d: "Разбираем продукт, JTBD, делим аудиторию на 4–6 сегментов с разными офферами." },
  { n: "02", t: "Креативы", d: "10–20 креативов на старт: Reels, статика, карусели. Сценарии под каждый сегмент." },
  { n: "03", t: "Пиксель и события", d: "Настраиваем Meta Pixel, Conversions API, события покупки и квалифицированной заявки." },
  { n: "04", t: "Запуск и обучение", d: "Структура кампаний под Advantage+, бюджет на тесты, выход из learning phase за 7 дней." },
  { n: "05", t: "Оптимизация", d: "Каждые 3 дня — отключаем выгоревшие связки, докручиваем выигрышные." },
  { n: "06", t: "Масштаб", d: "Growth-стратегия: расширяем гео, look-alike по % сходства, новые офферы." },
];

const NICHES = [
  { n: "Бьюти и косметика", cpl: "от 600 тг", note: "UGC + Reels с до/после" },
  { n: "Fashion / e-commerce", cpl: "от 1 200 тг", note: "Advantage+ Shopping и каталог" },
  { n: "Кафе и рестораны", cpl: "от 400 тг", note: "Гео-таргет + сторис с акциями" },
  { n: "Услуги (барбер, SPA, мед)", cpl: "от 1 500 тг", note: "Reels + Direct-форма" },
  { n: "Онлайн-курсы", cpl: "от 800 тг", note: "Лид-магнит + воронка в Telegram" },
  { n: "Недвижимость", cpl: "от 4 000 тг", note: "Видео-тур + квиз на сайте" },
];

const FAQ = [
  { q: "Снимаете ли креативы?", a: "Да, Reels и статика входят в работу. На старте обычно 10–15 креативов в первый месяц. Полноценная съёмка с режиссёром — отдельной услугой видео-продакшна." },
  { q: "Работает ли Instagram в Казахстане?", a: "Да, без ограничений. Meta Ads оплачивается с любой казахстанской карты, кабинет настраивается на физ или юр лицо." },
  { q: "Какой минимальный бюджет на рекламу?", a: "Рекомендуем от 200 000 тг/мес на сам Meta Ads — иначе алгоритмы не успевают обучиться. Работа агентства — от 75 000 тг/мес сверху." },
  { q: "Сколько креативов нужно в месяц?", a: "Минимум 6–10 новых в месяц. Instagram быстро «выгорает» — нужен поток свежего контента, иначе CPL ползёт вверх." },
  { q: "Можно ли работать с маленьким аккаунтом?", a: "Да, для рекламы количество подписчиков не важно. Важны качество профиля, оффер и пиксель с историей событий." },
];

const RELATED = SERVICES.filter((s) => ["tiktok-ads", "smm", "video", "analytics"].includes(s.slug));

function InstagramAdsPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Реклама в Instagram</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Meta Business Partner
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Reels, Stories, лента —
                <br />
                <em className="not-italic text-accent">заявки</em>, а не лайки.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Таргет в Instagram через Meta Ads. Снимаем Reels, собираем точные аудитории,
                запускаем look-alike и ретаргетинг — считаем стоимость лида и продажи.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Бесплатный медиаплан Instagram"
                  description="Пришлём прогноз по CPL и креативную концепцию под вашу нишу."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить медиаплан
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Аудит Instagram-рекламы"
                  description="Разберём кабинет, креативы, аудитории — найдём, где утекает бюджет."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Заказать аудит
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "от 600 тг", l: "CPL в B2C нишах" },
                  { v: "x4–7", l: "ROAS на ретаргете" },
                  { v: "7 дней", l: "до запуска" },
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
                Рекламный бюджет оплачивается напрямую в Meta — комиссию не берём.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Что входит</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["Стратегия и сегментация ЦА", "10–15 креативов в месяц", "Пиксель и Conversions API", "Look-alike и ретаргетинг", "Дашборд по CPL и ROAS", "Еженедельные отчёты"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground/80"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-foreground/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <ContactDialog
                title="Запустить рекламу в Instagram"
                description="Расскажите о продукте — пришлём предложение."
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

      {/* FORMATS */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Форматы</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            6 форматов — одна стратегия
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {FORMATS.map((f) => (
              <div key={f.t} className="bg-background p-7 transition-colors hover:bg-accent/20">
                <span className="inline-block rounded-full bg-secondary px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-foreground/70">{f.tag}</span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
                <div className="mt-6 border-t border-hairline pt-4 font-mono text-xs uppercase tracking-widest text-accent">{f.m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Процесс</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            6 шагов до стабильного потока заявок
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {STAGES.map((s) => (
              <div key={s.n} className="bg-background p-7">
                <div className="font-mono text-xs text-accent">{s.n}</div>
                <h3 className="mt-8 font-display text-xl font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NICHES */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Бенчмарки</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Стоимость лида по нишам
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-background">
            <div className="grid grid-cols-[1.4fr_1fr_1.6fr] gap-4 border-b border-hairline bg-secondary/50 px-6 py-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground md:px-8">
              <div>Ниша</div><div>CPL</div><div className="hidden md:block">Связка</div>
            </div>
            {NICHES.map((row) => (
              <div key={row.n} className="grid grid-cols-[1.4fr_1fr_1.6fr] gap-4 border-b border-hairline px-6 py-5 last:border-b-0 md:px-8">
                <div className="font-medium">{row.n}</div>
                <div className="font-mono text-sm text-accent">{row.cpl}</div>
                <div className="hidden text-sm text-muted-foreground md:block">{row.note}</div>
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

      {/* RELATED */}
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

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы запускаться?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Получите <em className="not-italic text-accent">медиаплан</em> и креативную концепцию
                </h2>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка: реклама в Instagram"
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
