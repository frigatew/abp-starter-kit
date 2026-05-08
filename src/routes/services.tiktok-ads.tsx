import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/tiktok-ads")({
  head: () => ({
    meta: [
      { title: "Реклама в TikTok Ads — нативный таргет, UGC и Spark Ads | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Запуск рекламы в TikTok: UGC-ролики в нативном стиле, Spark Ads, тесты гипотез и масштабирование выигрышных связок. От 75 000 тг/мес.",
      },
      { property: "og:title", content: "Реклама в TikTok под ключ — ABP DIGITAL" },
      { property: "og:description", content: "Нативный контент, который не пропускают. Тесты, Spark Ads, скейл." },
    ],
  }),
  component: TikTokAdsPage,
});

const RULES = [
  { n: "01", t: "Don't make ads — make TikToks", d: "Реклама в стиле платформы. Никаких студийных постановок и корпоративного тона." },
  { n: "02", t: "Hook за 1.5 секунды", d: "Если пользователь не остановился на первом кадре — ролик в минусе." },
  { n: "03", t: "Поток, а не «шедевр»", d: "8–12 креативов в месяц вместо одного дорогого. TikTok выгорает за 5–7 дней." },
  { n: "04", t: "UGC > продакшн", d: "Реальные люди и телефонная съёмка часто работают лучше дорогой студии." },
];

const FORMATS = [
  { t: "In-Feed Ads", d: "Нативные вертикальные ролики в основной ленте For You. Базовый формат для большинства задач.", m: "CPM от 200 тг" },
  { t: "Spark Ads", d: "Промо органических роликов — ваших или авторских. Работает в 2–3 раза лучше, чем «холодный» креатив.", m: "CTR x2 vs обычный" },
  { t: "TopView", d: "Полноэкранный ролик при открытии приложения. Премиум-охват для запусков и крупных кампаний.", m: "Reach 10M+" },
  { t: "Branded Hashtag", d: "Челленджи с UGC-вовлечением. Под бренд-кампании с горизонтом 1–3 месяца.", m: "От 5M views" },
];

const PIPELINE = [
  { week: "Неделя 1", t: "Идеи и сценарии", items: ["Анализ трендов в нише", "5–10 концепций под тесты", "Раскадровки и брифы для съёмки", "Выбор UGC-creators при необходимости"] },
  { week: "Неделя 2", t: "Производство", items: ["Съёмка вертикальных роликов", "Монтаж под звуки и тренды", "Хук-тестинг (3–5 версий первых 2 сек)", "Подготовка субтитров и call-to-action"] },
  { week: "Неделя 2", t: "Запуск", items: ["Структура кампаний под cost cap", "TikTok Pixel + Events API", "Аудитории: интересы + look-alike", "Запуск 4–6 ad sets параллельно"] },
  { week: "Постоянно", t: "Скейл", items: ["Spark Ads на лучших органических роликах", "Перевод связок в CBO", "Расширение по гео и аудиториям", "Постоянная подача новых креативов"] },
];

const FAQ = [
  { q: "Подходит ли TikTok для моего бизнеса?", a: "Если ваша ЦА от 16 до 45 лет — да. TikTok сейчас охватывает не только подростков. Не подходит для премиум-B2B и узких профессиональных ниш." },
  { q: "Сколько креативов нужно?", a: "Минимум 8–12 новых роликов в месяц. TikTok-алгоритм требует постоянного обновления — иначе CPM растёт через неделю." },
  { q: "Можно ли использовать креативы из Instagram?", a: "Технически — да, но они работают в 2–3 раза хуже. TikTok любит сырой нативный контент, а не отполированные Reels с другой платформы." },
  { q: "Кто будет снимать ролики?", a: "Можем снимать сами (продакшн отдельно), привлекать UGC-creators или работать с вашими сотрудниками. Под каждую нишу подбираем формат." },
  { q: "Какой минимальный бюджет?", a: "Рекомендуем от 250 000 тг/мес на сам TikTok Ads. Меньше — алгоритм не успевает обучиться, тесты получаются нерепрезентативными." },
];

const RELATED = SERVICES.filter((s) => ["instagram-ads", "video", "smm", "analytics"].includes(s.slug));

function TikTokAdsPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Реклама в TikTok</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                TikTok For Business · Marketing Partner
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Реклама в TikTok,
                <br />
                которую <em className="not-italic text-accent">не пропускают</em>.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Снимаем нативные UGC-ролики в стиле платформы, тестируем по 8–12 креативов
                в месяц и масштабируем то, что заходит, через Spark Ads.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Бесплатный медиаплан TikTok"
                  description="Пришлём прогноз по CPM/CPL и идеи креативов под вашу нишу."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить медиаплан
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Идеи креативов под TikTok"
                  description="Покажем 5 концепций, которые могли бы зайти у вас."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Получить идеи роликов
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "CPM 200₸", l: "от" },
                  { v: "8–12", l: "креативов / мес" },
                  { v: "x2", l: "Spark Ads vs cold" },
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
                Рекламный бюджет — отдельно, в кабинете TikTok. Съёмка роликов — по тарифу видеопродакшна.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Что входит</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["Стратегия и сценарии", "Запуск In-Feed и Spark Ads", "TikTok Pixel + Events API", "A/B-тесты хуков", "Отчёт по CPM / CPL / CPA", "Еженедельные созвоны"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground/80"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-foreground/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <ContactDialog
                title="Запустить TikTok-рекламу"
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

      {/* RULES */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Принципы</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            4 правила TikTok-рекламы
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {RULES.map((r) => (
              <div key={r.n} className="bg-background p-7">
                <div className="font-mono text-xs text-accent">{r.n}</div>
                <h3 className="mt-8 font-display text-xl font-medium tracking-tight">{r.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Форматы</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Какие форматы запускаем
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
            {FORMATS.map((f) => (
              <div key={f.t} className="bg-background p-8">
                <h3 className="font-display text-2xl font-medium tracking-tight">{f.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{f.d}</p>
                <div className="mt-6 border-t border-hairline pt-4 font-mono text-xs uppercase tracking-widest text-accent">{f.m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Pipeline</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Как мы работаем
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
            {PIPELINE.map((p) => (
              <div key={p.t} className="bg-background p-8">
                <div className="font-mono text-xs text-accent">{p.week}</div>
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

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы запускаться?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Получите <em className="not-italic text-accent">медиаплан</em> и идеи роликов под TikTok
                </h2>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка: TikTok Ads"
                  description="Оставьте контакты — пришлём смету и идеи."
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
