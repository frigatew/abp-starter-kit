import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: "SEO-продвижение сайта — техаудит, контент, ссылки | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Комплексное SEO под Google и Яндекс: технический аудит, Core Web Vitals, контент-стратегия, линкбилдинг, E-E-A-T. Считаем трафик и заявки. От 200 000 тг/мес.",
      },
      { property: "og:title", content: "SEO-оптимизация сайта — ABP DIGITAL" },
      { property: "og:description", content: "Системный органический рост. Не позиции — трафик и продажи." },
    ],
  }),
  component: SeoPage,
});

const PILLARS = [
  { t: "Технический SEO", d: "Скорость, индексация, Core Web Vitals, hreflang, разметка Schema.org. Без здоровой технички ничто не растёт.", m: "PageSpeed 90+" },
  { t: "Контент и семантика", d: "Семантическое ядро, кластеризация, контент-план, ТЗ с LSI-фразами. Пишем под интент, а не под объём.", m: "300+ страниц" },
  { t: "Ссылочное", d: "Аутрич на тематические сайты, крауд-маркетинг, гостевые публикации. Безопасно, без бирж.", m: "20+ ссылок/мес" },
  { t: "E-E-A-T", d: "Авторские страницы, бренд-сигналы, отзывы, упоминания в СМИ. Критично для YMYL-ниш.", m: "Trust score ↑" },
];

const ROADMAP = [
  { m: "Месяц 1", t: "Фундамент", items: ["Технический аудит (200+ пунктов)", "Семантическое ядро", "Анализ 5–10 конкурентов", "Стратегия и приоритезация"] },
  { m: "Месяц 2", t: "Технические фиксы", items: ["Исправление критики", "Метатеги и микроразметка", "Перелинковка и структура URL", "Оптимизация Core Web Vitals"] },
  { m: "Месяц 3–4", t: "Контент-производство", items: ["Публикация 20–40 страниц", "Доработка существующих текстов", "FAQ-блоки и схемы", "Внутренняя перелинковка"] },
  { m: "Месяц 4+", t: "Линкбилдинг и рост", items: ["Аутрич на тематические сайты", "Крауд и упоминания", "Дозакрытие пробелов в семантике", "Доработки по Search Console"] },
];

const TIMELINE = [
  { m: "1–2", v: "+5–10%", l: "техника, базовый рост видимости" },
  { m: "3–4", v: "+30–60%", l: "первый ощутимый трафик" },
  { m: "5–6", v: "+100–200%", l: "выход в ТОП по средне-частотке" },
  { m: "7–12", v: "x3–10", l: "органика как основной канал" },
];

const FAQ = [
  { q: "Когда ждать первых результатов?", a: "Технические улучшения видны в Search Console уже через 3–4 недели. Первый рост трафика — обычно с 3–4 месяца. Стабильный результат и выход в ТОП — от 6 месяцев. SEO — это не спринт." },
  { q: "Гарантируете ли ТОП по запросам?", a: "Нет, и не верьте тем, кто гарантирует. Гарантировать ТОП в выдаче Google невозможно. Гарантируем работы по чек-листу, рост видимости в Search Console и качественные ссылки." },
  { q: "Под какую поисковую систему оптимизируете?", a: "Базово — Google, дополнительно Яндекс. Большинство методов работают для обоих." },
  { q: "А если у меня молодой сайт?", a: "Для молодых доменов первые 6 месяцев — это инвестиция в фундамент: техника, базовый контент, первые ссылки. Активный рост начинается с 6–8 месяца." },
  { q: "Делаете ли SEO для интернет-магазинов?", a: "Да, e-commerce — отдельная экспертиза: оптимизация категорий, фильтров, карточек товаров, фидов, борьба с дублями и каннибализацией." },
  { q: "Можно ли только техаудит, без сопровождения?", a: "Да. Разовый технический аудит + дорожная карта — от 150 000 тг. На выходе PDF-отчёт, который вы можете внедрять с разработчиком сами." },
];

const RELATED = SERVICES.filter((s) => ["google-ads", "ux-ui", "analytics", "audit"].includes(s.slug));

function SeoPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>SEO-оптимизация</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                White-hat SEO · Google + Яндекс
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                SEO без обещаний
                <br />
                <em className="not-italic text-accent">«первое место»</em> —
                <br />
                с трафиком и заявками.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Технический аудит, контент-стратегия, линкбилдинг и работа с E-E-A-T.
                Считаем не позиции по 10 запросам, а органический трафик и продажи.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Бесплатный SEO-аудит"
                  description="Проверим домен по 30 ключевым параметрам и пришлём отчёт."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить экспресс-аудит
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Стратегия SEO под мою нишу"
                  description="Расскажем, реально ли расти по органике в вашей нише и за какой срок."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Обсудить стратегию
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "x3–10", l: "трафика за 12 мес" },
                  { v: "200+", l: "пунктов в аудите" },
                  { v: "100%", l: "white-hat методы" },
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
                <span className="font-display text-5xl font-medium tracking-tight">200 000</span>
                <span className="text-sm text-muted-foreground">тг / мес</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Бюджет на ссылки и копирайтеров — отдельно (рекомендуем от 100 000 тг/мес).
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Что входит</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["Технический аудит и фиксы", "Семантика и контент-план", "ТЗ для копирайтеров", "Внутренняя перелинковка", "Линкбилдинг (аутрич + крауд)", "Месячный отчёт и созвон"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground/80"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-foreground/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <ContactDialog
                title="Запустить SEO"
                description="Расскажите о домене — пришлём предложение."
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

      {/* PILLARS */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Направления</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            4 опоры современного SEO
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2">
            {PILLARS.map((p) => (
              <div key={p.t} className="bg-background p-8">
                <h3 className="font-display text-2xl font-medium tracking-tight">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-6 border-t border-hairline pt-4 font-mono text-xs uppercase tracking-widest text-accent">{p.m}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Roadmap</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Что и когда делаем
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {ROADMAP.map((r) => (
              <div key={r.m} className="bg-background p-7">
                <div className="font-mono text-xs text-accent">{r.m}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{r.t}</h3>
                <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                  {r.items.map((it) => <li key={it} className="flex gap-2"><span aria-hidden className="mt-2 h-px w-3 bg-foreground/30" />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Прогноз</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Как растёт трафик по месяцам
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-background">
            <div className="grid grid-cols-[1fr_1fr_2fr] gap-4 border-b border-hairline bg-secondary/50 px-6 py-4 text-[11px] font-mono uppercase tracking-widest text-muted-foreground md:px-8">
              <div>Период</div><div>Трафик</div><div>Этап</div>
            </div>
            {TIMELINE.map((row) => (
              <div key={row.m} className="grid grid-cols-[1fr_1fr_2fr] gap-4 border-b border-hairline px-6 py-5 last:border-b-0 md:px-8">
                <div className="font-mono">мес {row.m}</div>
                <div className="font-mono text-sm text-accent">{row.v}</div>
                <div className="text-sm text-muted-foreground">{row.l}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">* Прогноз для среднего сайта в конкурентной нише при бюджете от 200 000 тг/мес работ + ссылочное.</p>
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
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы к органике?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Получите <em className="not-italic text-accent">SEO-стратегию</em> под ваш сайт
                </h2>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка: SEO-продвижение"
                  description="Оставьте контакты — пришлём аудит и стратегию."
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
