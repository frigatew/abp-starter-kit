import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/audit")({
  head: () => ({
    meta: [
      { title: "Аудит рекламы — Google, Meta, TikTok, Яндекс за 5 дней | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Глубокий аудит рекламных кабинетов за 5 рабочих дней: 80+ пунктов проверки, PDF-отчёт и часовая встреча с разбором. 50 000 тг.",
      },
      { property: "og:title", content: "Аудит рекламы за 5 дней — ABP DIGITAL" },
      { property: "og:description", content: "Найдём, где сливается бюджет, и дадим план действий на 30 дней." },
    ],
  }),
  component: AuditPage,
});

const CHECKS = [
  { area: "Структура кампаний", count: "12 пунктов", items: ["Логика разделения по продуктам и гео", "Корректность типов кампаний", "Группы объявлений и релевантность"] },
  { area: "Креативы и тексты", count: "10 пунктов", items: ["Соответствие интенту запроса", "Использование расширений", "A/B-тестирование"] },
  { area: "Семантика", count: "8 пунктов", items: ["Покрытие ниши", "Минус-фразы и кросс-минусация", "Соответствие посадочным"] },
  { area: "Аналитика и атрибуция", count: "15 пунктов", items: ["Корректность целей и событий", "Модель атрибуции", "UTM-разметка и сквозная аналитика"] },
  { area: "Ставки и бюджеты", count: "10 пунктов", items: ["Стратегии ставок", "Корректировки по устройствам и гео", "Распределение бюджета между кампаниями"] },
  { area: "Посадочные страницы", count: "12 пунктов", items: ["Скорость и Core Web Vitals", "Конверсионность форм", "Соответствие оффера запросу"] },
  { area: "Аудитории", count: "8 пунктов", items: ["Look-alike и сегменты", "Ремаркетинг и события", "Исключения и пересечения"] },
  { area: "Юнит-экономика", count: "5 пунктов", items: ["Допустимый CPL и CAC", "ROAS по каналам и кампаниям", "LTV и окупаемость"] },
];

const TIMELINE = [
  { d: "День 1", t: "Доступы и брифинг", desc: "Получаем гостевые доступы к рекламным кабинетам, аналитике, CRM. 30-минутный созвон по контексту." },
  { d: "День 2–4", t: "Глубокий разбор", desc: "Проходим по чек-листу из 80+ пунктов, фиксируем находки, считаем потенциал по каждой." },
  { d: "День 5", t: "Отчёт и встреча", desc: "Готовим PDF-отчёт и проводим часовую презентацию с разбором приоритетов и Q&A." },
];

const DELIVERABLES = [
  { t: "PDF-отчёт", d: "30–50 страниц с конкретными скриншотами, найденными ошибками и рекомендациями.", icon: "PDF" },
  { t: "Список задач", d: "Приоритезированный backlog: что сделать в первую неделю, в первый месяц, что — позже.", icon: "TODO" },
  { t: "Расчёт потенциала", d: "Сколько можно сэкономить на сливающемся бюджете и сколько добавить заявок.", icon: "ROI" },
  { t: "Часовой созвон", d: "Презентация результатов, ответы на вопросы, обсуждение плана внедрения.", icon: "ZOOM" },
];

const FAQ = [
  { q: "Чем платный аудит отличается от бесплатного?", a: "Бесплатный — это 30-минутный экспресс-разбор по верхам. Платный — 5 дней работы команды, чек-лист на 80+ пунктов, PDF-отчёт и часовая встреча. Это разные продукты по глубине." },
  { q: "Можно ли потом не работать с вами?", a: "Да, аудит — самостоятельный продукт. PDF и backlog ваши, можете внедрять сами или с другим подрядчиком. Никаких обязательств." },
  { q: "Какие кабинеты можете аудировать?", a: "Google Ads, Meta Ads (Facebook + Instagram), TikTok Ads, Яндекс Директ, MyTarget. Также делаем аудит GA4, GTM, Метрики и сквозной аналитики отдельно." },
  { q: "Что если у меня сейчас нет рекламы?", a: "Тогда вам нужен не аудит, а стратегия и медиаплан. Это другой продукт — давайте обсудим, что именно нужно." },
  { q: "Кто будет делать аудит?", a: "Senior-специалист по соответствующему каналу + руководитель отдела трафика для пересмотра. Мы не передаём аудиты джунам." },
];

const RELATED = SERVICES.filter((s) => ["google-ads", "instagram-ads", "yandex-ads", "analytics"].includes(s.slug));

function AuditPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Аудит рекламы</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Audit · Fixed price · 5 рабочих дней
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Найдём, где
                <br />
                <em className="not-italic text-accent">сливается бюджет</em>
                <br />
                за 5 рабочих дней.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                80+ пунктов проверки по каждому кабинету. PDF-отчёт, приоритезированный backlog
                и часовой созвон с разбором. Без обязательств работать дальше.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Заказать аудит рекламы"
                  description="Заполните форму — пришлём договор и инструкции по доступам."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Заказать аудит за 50 000 тг
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Бесплатный экспресс-разбор"
                  description="30-минутный созвон с экспертом — обсудим, нужен ли вам полноценный аудит."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Бесплатный разбор
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "80+", l: "пунктов проверки" },
                  { v: "5 дней", l: "под ключ" },
                  { v: "30–50", l: "страниц отчёта" },
                ].map((s) => (
                  <div key={s.l} className="bg-background p-5 md:p-6">
                    <dt className="font-display text-2xl font-medium tracking-tight md:text-3xl">{s.v}</dt>
                    <dd className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="rounded-3xl border-2 border-foreground bg-foreground p-8 text-background md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-background/60">Фиксированная цена</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-tight">50 000</span>
                <span className="text-sm text-background/60">тг</span>
              </div>
              <p className="mt-4 text-sm text-background/70">
                Один кабинет = один аудит. Несколько каналов — скидка от 2-го кабинета.
              </p>
              <div className="mt-8 border-t border-background/20 pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Что получите</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["PDF-отчёт 30–50 страниц", "Приоритезированный backlog", "Расчёт потенциала экономии", "Часовая встреча с разбором", "Ответы на вопросы 7 дней после"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-background/90"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-background/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <ContactDialog
                title="Заказать аудит"
                description="Расскажите, какой кабинет аудировать."
                trigger={
                  <button type="button" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:opacity-90">
                    Заказать сейчас →
                  </button>
                }
              />
            </aside>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Тайминг</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Что происходит за 5 дней
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
            {TIMELINE.map((t) => (
              <div key={t.d} className="bg-background p-8">
                <div className="font-mono text-xs text-accent">{t.d}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{t.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Чек-лист</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            8 областей проверки
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {CHECKS.map((c) => (
              <div key={c.area} className="bg-background p-7">
                <h3 className="font-display text-lg font-medium tracking-tight">{c.area}</h3>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-accent">{c.count}</div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {c.items.map((it) => <li key={it} className="flex gap-2"><span aria-hidden className="mt-2 h-px w-3 bg-foreground/30 shrink-0" />{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Что вы получите</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Финальные артефакты
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {DELIVERABLES.map((d) => (
              <div key={d.t} className="bg-background p-8">
                <div className="font-mono text-xs text-accent">{d.icon}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{d.t}</h3>
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

      <section className="border-b border-hairline bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ После аудита</p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">Что часто берут следом</h2>
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
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы узнать правду?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  За 5 дней — <em className="not-italic text-accent">полная картина</em> вашей рекламы
                </h2>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка на аудит"
                  description="Оставьте контакты — пришлём договор и инструкции."
                  trigger={
                    <button type="button" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground transition-all hover:gap-3">
                      Заказать аудит
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
