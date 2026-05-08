import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/video")({
  head: () => ({
    meta: [
      { title: "Видеопродакшн — рекламные ролики, Reels, имиджевое видео | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Снимаем рекламные ролики, Reels, имиджевое и обучающее видео. Сценарий, съёмка, монтаж, цвет, графика — под ключ. От 30 000 тг за ролик.",
      },
      { property: "og:title", content: "Создание видеоконтента — ABP DIGITAL" },
      { property: "og:description", content: "Reels, рекламные ролики, имиджевое и продуктовое видео под ключ." },
    ],
  }),
  component: VideoPage,
});

const FORMATS = [
  { t: "Reels / TikTok", aspect: "9:16", price: "от 30 000 тг", desc: "Вертикальные рекламные ролики 15–60 сек. Под трафик и органику." },
  { t: "YouTube", aspect: "16:9", price: "от 80 000 тг", desc: "Длинные горизонтальные ролики, обзоры, влоги, подкасты." },
  { t: "Имиджевое видео", aspect: "16:9 / 9:16", price: "от 250 000 тг", desc: "Бренд-фильм 60–120 сек. Концепция, постановка, цвет, музыка." },
  { t: "Продуктовое", aspect: "разные", price: "от 60 000 тг", desc: "Карточки товаров, демо, до/после, packshot для сайта и маркетплейсов." },
  { t: "Обучающее", aspect: "16:9", price: "от 50 000 тг", desc: "Видеоуроки, talking head, скринкасты, монтаж с инфографикой." },
  { t: "Съёмка мероприятий", aspect: "16:9 / 9:16", price: "от 150 000 тг", desc: "Хайлайт-ролик, репортаж, запись для соц. сетей и YouTube." },
];

const PROCESS = [
  { n: "01", t: "Бриф", d: "Понимаем задачу, аудиторию, плейсменты, тайминг, референсы." },
  { n: "02", t: "Сценарий", d: "Структура, тайминг, диалоги, шот-лист и раскадровка." },
  { n: "03", t: "Препродакшн", d: "Локация, актёры, реквизит, расписание съёмочного дня." },
  { n: "04", t: "Съёмка", d: "Один–три дня в студии или на локации. 4K, кинокамеры, свет, звук." },
  { n: "05", t: "Монтаж и цвет", d: "Сборка, цветокоррекция, музыка, sound-design, графика." },
  { n: "06", t: "Адаптации", d: "Версии под каждый плейсмент: 9:16, 16:9, 1:1, 6 / 15 / 30 / 60 сек." },
];

const TECH = [
  { c: "Камеры", v: "Sony FX3, Sony A7S III, BMPCC 6K Pro" },
  { c: "Объективы", v: "Sigma Art, Sirui Anamorphic" },
  { c: "Стабилизация", v: "DJI Ronin RS3, гимбалы, слайдеры" },
  { c: "Звук", v: "Rode Wireless Pro, Sennheiser MKH416" },
  { c: "Свет", v: "Aputure 600D, 300X, Amaran панели" },
  { c: "Постпродакшн", v: "DaVinci Resolve, After Effects, Premiere Pro" },
];

const FAQ = [
  { q: "От чего зависит цена?", a: "От формата, длительности, количества локаций, количества съёмочных дней, актёров и сложности постпродакшна. Базовая вертикалка от 30 000, имиджевый бренд-фильм — от 250 000." },
  { q: "Сколько времени занимает производство?", a: "Reels — 5–7 рабочих дней. Рекламные ролики — 10–14 дней. Имиджевые — от 3 недель. Срочные задачи берём с наценкой за приоритет." },
  { q: "Делаете ли только монтаж?", a: "Да, можем работать с вашими исходниками: монтаж, цвет, графика, sound-design. Цена — от 15 000 тг за минуту готового материала." },
  { q: "Что входит в адаптации?", a: "Версии под Reels (9:16), YouTube (16:9), ленту (1:1) и разные тайминги (6/15/30/60 сек) под рекламные плейсменты Meta и Google." },
  { q: "Передаёте ли исходники?", a: "Базово отдаём финальные мастер-файлы и адаптации. Сырые исходники — по запросу, опционально, фиксируется в договоре." },
  { q: "Снимаете ли в регионах?", a: "Базово в Казахстане и Астане. Командировки в другие города возможны с компенсацией логистики и проживания." },
];

const RELATED = SERVICES.filter((s) => ["smm", "instagram-ads", "tiktok-ads", "ux-ui"].includes(s.slug));

function VideoPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Видеопродакшн</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Production · Direction · Post
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Видео,
                <br />
                которое <em className="not-italic text-accent">не пропускают</em>
                <br />
                на 1.5 секунде.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Рекламные ролики, Reels, имиджевые бренд-фильмы и продуктовое видео.
                Сценарий, съёмка с режиссёром, монтаж, цвет и адаптации под все плейсменты.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Смета на видео"
                  description="Расскажите формат и задачу — пришлём смету и сроки."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить смету
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <ContactDialog
                  title="Концепция и сценарий"
                  description="Подготовим концепцию и пару сценарных вариантов под брифинг."
                  trigger={
                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                      Запросить концепцию
                    </button>
                  }
                />
              </div>

              <dl className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
                {[
                  { v: "от 30 000", l: "тг за ролик" },
                  { v: "5–7 дней", l: "Reels под ключ" },
                  { v: "4K", l: "съёмка и мастер" },
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
                <span className="font-display text-5xl font-medium tracking-tight">от 30 000</span>
                <span className="text-sm text-muted-foreground">тг / ролик</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Финальная цена зависит от формата и сложности — итог в смете после брифа.
              </p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">В цену входит</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["Сценарий и раскадровка", "Съёмка с режиссёром", "Монтаж, цвет, звук", "Графика и инфографика", "Адаптации под плейсменты", "1 раунд правок"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-foreground/80"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-foreground/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <ContactDialog
                title="Смета на видеопродакшн"
                description="Расскажите формат и задачу."
                trigger={
                  <button type="button" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
                    Запросить смету →
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
            6 форматов видео под любую задачу
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {FORMATS.map((f) => (
              <div key={f.t} className="flex flex-col bg-background p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-medium tracking-tight">{f.t}</h3>
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/60">{f.aspect}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{f.desc}</p>
                <div className="mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-accent">{f.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Pipeline</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            6 шагов от брифа до мастер-файла
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p) => (
              <div key={p.n} className="bg-background p-7">
                <div className="font-mono text-xs text-accent">{p.n}</div>
                <h3 className="mt-8 font-display text-xl font-medium tracking-tight">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Технический парк</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Оборудование и софт
          </h2>
          <div className="mt-12 overflow-hidden rounded-2xl border border-hairline bg-background">
            {TECH.map((row) => (
              <div key={row.c} className="grid grid-cols-[1fr_2fr] gap-6 border-b border-hairline px-6 py-5 last:border-b-0 md:px-8">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{row.c}</div>
                <div className="text-foreground">{row.v}</div>
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
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы снимать?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Получите <em className="not-italic text-accent">смету</em> на видео под вашу задачу
                </h2>
              </div>
              <div className="md:justify-self-end">
                <ContactDialog
                  title="Заявка на видеопродакшн"
                  description="Оставьте контакты — пришлём смету."
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
