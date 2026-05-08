import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/smm")({
  head: () => ({
    meta: [
      { title: "SMM — ведение Instagram и TikTok под ключ | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Полный SMM-цикл: стратегия, контент-план, съёмки Reels, публикации, комьюнити-менеджмент. Дорогой контент, который работает на бренд и продажи. От 150 000 тг/мес.",
      },
      { property: "og:title", content: "Ведение социальных сетей — ABP DIGITAL" },
      { property: "og:description", content: "Контент, который смотрится дорого. Стратегия, съёмки, публикации, комьюнити." },
    ],
  }),
  component: SmmPage,
});

const RUBRICS = [
  { t: "Бренд и ценности", d: "Истории основателя, философия продукта, BTS, культура команды." },
  { t: "Продукт", d: "Карточки, обзоры, демо, до/после, разбор кейсов и применений." },
  { t: "Экспертиза", d: "Лайфхаки, образование ЦА, разбор ошибок, гайды и подборки." },
  { t: "Соц. доказательство", d: "Отзывы, UGC, кейсы клиентов, упоминания в СМИ." },
  { t: "Развлекательный", d: "Тренды, мемы, юмор в стиле бренда — для алгоритмических охватов." },
  { t: "Продажа", d: "Прямые офферы, акции, новые поступления, дедлайны." },
];

const PACKAGE_ITEMS = [
  { c: "Стратегия", v: "Tone of voice, rubrics, контент-план" },
  { c: "Контент в месяц", v: "12 постов + 8 Reels + ежедневные сторис" },
  { c: "Съёмочный день", v: "1 день в студии или на локации" },
  { c: "Дизайн", v: "Шаблоны, обложки, инфографика" },
  { c: "Тексты", v: "Копирайтинг с учётом SEO и engagement" },
  { c: "Комьюнити", v: "Ответы на DM и комментарии в течение 4 ч" },
  { c: "Аналитика", v: "Месячный отчёт по охватам, ER, переходам" },
  { c: "Менеджер", v: "Один контакт, еженедельные созвоны" },
];

const STAGES = [
  { n: "Неделя 1", t: "Стратегия", d: "Бриф, конкуренты, ЦА, tone of voice, визуальный язык, rubrics." },
  { n: "Неделя 2", t: "Контент-план", d: "План постов и Reels на месяц вперёд, согласование, правки." },
  { n: "Неделя 3", t: "Съёмочный день", d: "Снимаем контент-пакет на 4 недели за один продакшен-день." },
  { n: "Неделя 3+", t: "Публикации", d: "Ежедневные сторис, плановые посты и Reels, оперативная реакция на тренды." },
];

const FAQ = [
  { q: "Сколько контента в месяц?", a: "Базовый пакет: 12 постов + 8 Reels + ежедневные сторис. Объём гибко настраивается под нишу и задачи. Можем больше — это влияет на цену." },
  { q: "Входит ли таргетированная реклама?", a: "Нет, таргет — отдельная услуга. SMM — это про органический контент, бренд и комьюнити. Связку SMM + таргет берут вместе чаще всего." },
  { q: "Кто снимает Reels?", a: "Наш видеограф приезжает на 1 день в месяц и снимает контент-пакет сразу на 4 недели вперёд. Можем привлечь UGC-creators или работать с вашими сотрудниками." },
  { q: "Что если у меня уже есть SMM-щик?", a: "Можем усилить команду конкретными ролями: видеограф, дизайнер, стратег. Полный пакет берут, когда хотят системность с одного контракта." },
  { q: "Работаете с TikTok?", a: "Да, отдельно или в связке с Instagram. Для TikTok нужно больше контента (10–15 роликов в месяц) — это отдельный тариф." },
  { q: "Гарантируете ли рост подписчиков?", a: "Гарантируем качество контента и регулярность. Рост подписчиков зависит от ниши, бюджета на продвижение и качества аккаунта на старте — обсуждаем реалистичные KPI на брифе." },
];

const RELATED = SERVICES.filter((s) => ["instagram-ads", "tiktok-ads", "video", "complex"].includes(s.slug));

function SmmPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Ведение соц. сетей</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                SMM · Content · Community
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Контент, который
                <br />
                <em className="not-italic text-accent">смотрится дорого</em>
                <br />
                и работает на бренд.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Полный SMM-цикл: стратегия, съёмки, публикации, комьюнити. Делаем не «10 постов
                ради постов», а систему, которая растит узнаваемость и продажи.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Контент-стратегия"
                  description="Пришлём концепцию и rubrics под ваш бренд."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить контент-стратегию
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Аудит соц. сетей"
                  description="Разберём аккаунт и предложим направления роста."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Аудит аккаунта
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "20+", l: "единиц контента / мес" },
                  { v: "1 день", l: "съёмок на месяц" },
                  { v: "4 ч", l: "ответ в DM" },
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
                <span className="font-display text-5xl font-medium tracking-tight">150 000</span>
                <span className="text-sm text-muted-foreground">тг / мес</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Базовый пакет под одну соц. сеть. Instagram + TikTok связкой — от 220 000 тг/мес.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Включено</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["Стратегия и rubrics", "12 постов + 8 Reels / мес", "1 съёмочный день", "Ежедневные сторис", "Дизайн и копирайтинг", "Комьюнити-менеджмент"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground/80"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-foreground/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <ContactDialog
                title="Запустить SMM"
                description="Расскажите о бренде — пришлём предложение."
                trigger={
                  <button type="button" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
                    Обсудить SMM →
                  </button>
                }
              />
            </aside>
          </div>
        </div>
      </section>

      {/* RUBRICS */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Контент</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            6 рубрик в каждом контент-плане
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {RUBRICS.map((r, i) => (
              <div key={r.t} className="bg-background p-7">
                <div className="font-mono text-xs text-muted-foreground">/{String(i + 1).padStart(2, "0")}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{r.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE TABLE */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Пакет</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Что входит в SMM под ключ
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-background">
            {PACKAGE_ITEMS.map((it) => (
              <div key={it.c} className="grid grid-cols-[1fr_2fr] gap-6 border-b border-hairline px-6 py-5 last:border-b-0 md:px-8">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{it.c}</div>
                <div className="text-foreground">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGES */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Onboarding</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Первый месяц работы
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((s) => (
              <div key={s.n} className="bg-background p-7">
                <div className="font-mono text-xs text-accent">{s.n}</div>
                <h3 className="mt-6 font-display text-xl font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
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
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы расти?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Получите <em className="not-italic text-accent">контент-стратегию</em> под ваш бренд
                </h2>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка: SMM"
                  description="Оставьте контакты — пришлём концепцию."
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
