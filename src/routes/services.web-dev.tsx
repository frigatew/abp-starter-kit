import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";

// === ИМПОРТЫ ДЕСКТОПНЫХ ИЗОБРАЖЕНИЙ ===
import eurasianDesk from "@/assets/cases/eurasianmed.png";
import vpsnlsDesk from "@/assets/cases/vpsnls.png";
import fullcolocationnlsDesk from "@/assets/cases/fullcolocationnls.png";
import colocationnlsDesk from "@/assets/cases/colocationnls.png";
import dedicatednlsDesk from "@/assets/cases/dedicatednls.png";
import sksnlsDesk from "@/assets/cases/sksnls.png";
import internetnlsDesk from "@/assets/cases/internetnls.png";
import itnlsDesk from "@/assets/cases/itnls.png";
import remesloDesk from "@/assets/cases/remeslo.png";
import novaformDesk from "@/assets/cases/novaform.png";
import epovDesk from "@/assets/cases/epov.png";
import usmileDesk from "@/assets/cases/usmile.png";
import ombuDesk from "@/assets/cases/ombu.png";

// === ИМПОРТЫ МОБИЛЬНЫХ ИЗОБРАЖЕНИЙ ===
import eurasianMob from "@/assets/cases/eurasianmed-mob.png";
import vpsnlsMob from "@/assets/cases/vpsnls-mob.png";
import fullcolocationnlsMob from "@/assets/cases/fullcolocationnls-mob.png";
import colocationnlsMob from "@/assets/cases/colocationnls-mob.png";
import dedicatednlsMob from "@/assets/cases/dedicatednls-mob.png";
import sksnlsMob from "@/assets/cases/sksnls-mob.png";
import internetnlsMob from "@/assets/cases/internetnls-mob.png";
import itnlsMob from "@/assets/cases/nlsit-mob.png";
import remesloMob from "@/assets/cases/remeslo-mob.png";
import novaformMob from "@/assets/cases/novaform-mob.png";
import epovMob from "@/assets/cases/epov-mob.png";
import usmileMob from "@/assets/cases/usmile-mob.png";
import ombuMob from "@/assets/cases/ombu-mob.png";

export const Route = createFileRoute("/services/web-dev")({
  head: () => ({
    meta: [
      { title: "Разработка сайтов под бизнес — React, TypeScript | ABP DIGITAL" },
      {
        name: "description",
        content:
          "Разработка сайтов, которые решают бизнес-задачи: заявки, лояльность, узнаваемость. React + TypeScript + Tailwind, базовая SEO. От 100 000 тг.",
      },
      { property: "og:title", content: "Разработка сайтов — ABP DIGITAL" },
      {
        property: "og:description",
        content: "Сайты, которые работают на бизнес. Современный стек, базовая SEO, аналитика.",
      },
    ],
  }),
  component: WebDevPage,
});

type CaseStudy = {
  name: string;
  tech: string[];
  desc: string;
  url: string;
  desktopImg: string;
  mobileImg: string;
};

// Вставляем переменные картинок без кавычек
const CASES: CaseStudy[] = [
  
  {
    name: "Epov",
    tech: ["React", "TypeScript", "Tailwind"],
    desc: "Сайт для режиссера и видеопродюсера.",
    url: "https://epov.abp.kz/",
    desktopImg: epovDesk,
    mobileImg: epovMob,
  },
  {
    name: "EurasianMed",
    tech: ["Tilda", "ZeroBlock"],
    desc: "Курсы профессионального массажа с онлайн-записью.",
    url: "https://eurasianmed.tilda.ws/",
    desktopImg: eurasianDesk,
    mobileImg: eurasianMob,
  },
  {
    name: "NLS IT",
    tech: ["Vue.js"],
    desc: "Комплексные IT-решения и аутсорсинг для корпоративного сектора.",
    url: "https://nlsit.kz/",
    desktopImg: itnlsDesk,
    mobileImg: itnlsMob,
  },
  {
    name: "Usmile",
    tech: ["React", "TypeScript"],
    desc: "Современный сайт стоматологической клиники.",
    url: "https://usmile.abp.kz/",
    desktopImg: usmileDesk,
    mobileImg: usmileMob,
  },
  {
    name: "Remeslo",
    tech: ["Wordpress", "PHP"],
    desc: "3-d визуализация интерьера и экстерьера с витриной работ для европейского рынка.",
    url: "https://remeslo.co/",
    desktopImg: remesloDesk,
    mobileImg: remesloMob,
  },
  {
    name: "Novaform",
    tech: ["React", "TypeScript"],
    desc: "Мебель на заказ.",
    url: "https://novaform.abp.kz/",
    desktopImg: novaformDesk,
    mobileImg: novaformMob,
  },
  {
    name: "Ombu",
    tech: ["React", "TypeScript"],
    desc: "Premium SPA салон.",
    url: "http://ombuspa.abp.kz/",
    desktopImg: ombuDesk,
    mobileImg: ombuMob,
  },
  {
    name: "VPS NLS",
    tech: ["React", "TypeScript"],
    desc: "Платформа для аренды виртуальных серверов с конфигуратором.",
    url: "https://server.nls.kz/",
    desktopImg: vpsnlsDesk,
    mobileImg: vpsnlsMob,
  },
  {
    name: "Full Colocation NLS",
    tech: ["React", "TypeScript"],
    desc: "Сайт провайдера услуг аренды стоек для серверного оборудования.",
    url: "https://rack.nls.kz/",
    desktopImg: fullcolocationnlsDesk,
    mobileImg: fullcolocationnlsMob,
  },
  {
    name: "Colocation NLS",
    tech: ["React", "TypeScript"],
    desc: "Лендинг для продвижения услуги Colocation.",
    url: "https://colocation.nls.kz/",
    desktopImg: colocationnlsDesk,
    mobileImg: colocationnlsMob,
  },
  {
    name: "Dedicated NLS",
    tech: ["React", "TypeScript"],
    desc: "Сайт для заказа выделенных серверов под высоконагруженные проекты.",
    url: "https://dedicated.nls.kz/",
    desktopImg: dedicatednlsDesk,
    mobileImg: dedicatednlsMob,
  },
  {
    name: "SKS NLS",
    tech: ["Tilda", "Zero Block"],
    desc: "Услуги по проектированию локальных сетей.",
    url: "https://lan.nls.kz/",
    desktopImg: sksnlsDesk,
    mobileImg: sksnlsMob,
  },
  {
    name: "Internet NLS",
    tech: ["React", "Vite"],
    desc: "Провайдер высокоскоростного интернета для бизнеса.",
    url: "https://internet.nls.kz/",
    desktopImg: internetnlsDesk,
    mobileImg: internetnlsMob,
  },
];

const STACK = [
  { t: "React + TypeScript", d: "Современная и отказоустойчивая архитектура. Скорость и удобство для ваших посетителей" },
  { t: "Tilda Publishing", d: "Запуск и доработка проектов в сжатые сроки на популярной платформе конструкторе. Создание уникального дизайна через Zero Block." },
  { t: "Wordpress", d: "Универсальная CMS с удобной админкой. Идеально подходит, если ваша команда уже привыкла работать с этой платформой." },
  { t: "Любая", d: "Уже есть готовый сайт и нужна доработка, мы готовы разобраться в вашем проекте и помочь." },
];

const FAQ = [
  { q: "Сколько занимает разработка?", a: "Лендинг — от 3 дней до 1 недели. Корпоративный сайт — от 1 до 3 недель. Сложные платформы — обсуждаем отдельно." },
  { q: "Что входит в базовую SEO?", a: "Уникальные meta-теги и Open Graph, sitemap.xml, robots.txt, семантическая разметка, скорость и Core Web Vitals." },
  { q: "Можно ли потом дорабатывать?", a: "Да, более того, мы готовы мелкие корректировки делать в рамках базового технического обслуживания." },
  { q: "Делаете ли дизайн?", a: "Да, UX/UI входит в стоимость. При необходимости работаем по вашему дизайну." },
];

function WebDevPage() {
  const [showAll, setShowAll] = useState(false);
  
  
  // Теперь храним объект с картинкой и ссылкой
  const [zoomedData, setZoomedData] = useState<{ img: string; url: string } | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeZoom = () => {
    setIsClosing(true);
    setTimeout(() => {
      setZoomedData(null); // Очищаем новые данные
      setIsClosing(false);
    }, 200);
  };

  const visibleCases = showAll ? CASES : CASES.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/services" className="hover:text-foreground">← Все услуги</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Разработка сайта</span>
          </div>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-secondary/60 px-3 py-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Web Development · React · TypeScript
              </span>
              <h1 className="mt-6 font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Сайты, которые
                <br />
                <em className="not-italic text-accent">решают задачи</em>
                <br />
                бизнеса.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Привлечение клиентов, повышение лояльности и узнаваемости. Удобно и понятно
                для пользователя, на современных технологиях, с базовой SEO.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ContactDialog
                  title="Обсудить разработку сайта"
                  description="Расскажите о проекте — пришлю оценку и сроки."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Обсудить проект
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
                <a href="#cases" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 px-7 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5">
                  Посмотреть кейсы
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border-2 border-foreground bg-foreground p-8 text-background md:p-10">
              <p className="text-xs font-mono uppercase tracking-widest text-background/60">Стоимость</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-tight">от 100 000</span>
                <span className="text-sm text-background/60">тг</span>
              </div>
              <p className="mt-4 text-sm text-background/70">
                Точная цена — после брифа. Зависит от объёма страниц и интеграций.
              </p>
              <div className="mt-8 border-t border-background/20 pt-6">
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">В стоимость входит</p>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {["UX/UI дизайн", "Адаптивная вёрстка", "Базовый SEO", "Установка Google Analytics и Яндекс Метрики", "Хостинг и домен на 1 год"].map((it) => (
                    <li key={it} className="flex items-start gap-2 text-background/90"><span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-background/40" />{it}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="border-b border-hairline bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Стек</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            <em className="not-italic text-accent">Технологии</em> для разработки сайтов, которые мы используем.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
            {STACK.map((s) => (
              <div key={s.t} className="bg-background p-7">
                <h3 className="font-display text-lg font-medium tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">/ Кейсы</p>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
            Проекты, которые разработаны
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleCases.map((c) => (
              <article key={c.name} className="group overflow-hidden rounded-2xl border border-hairline bg-background transition-colors hover:border-foreground/30">
                
                {/* Mini gallery: desktop + mobile images */}
                <div className="grid grid-cols-[1fr_auto] items-start gap-2 bg-secondary/50 p-4">
                    {/* Desktop image */}
                    <div className="overflow-hidden rounded-md border border-hairline bg-background/60">
                      <img 
                        src={c.desktopImg} 
                        alt={`${c.name} desktop`} 
                        // Передаем и картинку, и URL проекта
                        onClick={() => setZoomedData({ img: c.desktopImg, url: c.url })}
                        className="h-auto w-full cursor-zoom-in object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy" 
                      />
                    </div>
                    {/* Mobile image */}
                    <div className="w-[4.5rem] overflow-hidden rounded-md border border-hairline bg-background/60">
                      <img 
                        src={c.mobileImg} 
                        alt={`${c.name} mobile`} 
                        // Передаем и мобильную картинку, и URL проекта
                        onClick={() => setZoomedData({ img: c.mobileImg, url: c.url })}
                        className="h-auto w-full cursor-zoom-in object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy" 
                      />
                    </div>

                </div>

                <div className="p-6">
                  <h3 className="font-display text-xl font-medium tracking-tight">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tech.map((t) => (
                      <span key={t} className="rounded-full border border-hairline bg-secondary/50 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
                  >
                    Посмотреть сайт
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {CASES.length > 3 && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-transparent px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                {showAll ? "Свернуть" : `Посмотреть все (${CASES.length})`}
                <span aria-hidden className={showAll ? "rotate-180 transition-transform" : "transition-transform"}>↓</span>
              </button>
            </div>
          )}
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

      {/* FREE AUDIT */}
      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-hairline bg-background p-10 md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-accent">Бесплатно</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Бесплатный аудит сайта и рекламы
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
                  Проведу аудит вашего текущего сайта и рекламных кампаний, составим конкретные
                  рекомендации: что улучшить в UX, скорости, SEO и где сливается рекламный бюджет.
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {["Скорость и Core Web Vitals", "UX и конверсия форм", "Базовое SEO", "Структура рекламных кампаний"].map((it) => (
                    <li key={it} className="flex items-start gap-2"><span aria-hidden className="mt-2 h-px w-3 bg-foreground/40" />{it}</li>
                  ))}
                </ul>
              </div>
              <div className="md:text-right">
                <ContactDialog
                  title="Бесплатный аудит сайта и рекламы"
                  description="Оставьте контакты — пришлю отчёт и созвонимся для разбора."
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all hover:gap-3">
                      Получить аудит
                      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* IMAGE ZOOM MODAL */}
      {zoomedData && (
        <div 
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm ${
            isClosing ? "animate-out fade-out duration-200" : "animate-in fade-in duration-200"
          }`}
          onClick={closeZoom} 
        >
          {/* Добавили flex-col и gap-6, чтобы кнопка встала под картинкой */}
          <div className={`relative flex flex-col items-center gap-6 max-h-full max-w-full ${
            isClosing ? "animate-out zoom-out-95 duration-200" : "animate-in zoom-in-95 duration-200"
          }`}>
            {/* Крестик для закрытия */}
            <button
              type="button"
              className="absolute -right-4 -top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-background text-foreground shadow-sm transition-colors hover:bg-secondary"
              onClick={(e) => {
                e.stopPropagation();
                closeZoom();
              }}
            >
              ✕
            </button>
            
            {/* Сама увеличенная картинка */}
            <img
              src={zoomedData.img} // Берем картинку из объекта
              alt="Zoomed preview"
              // Уменьшили высоту с 90vh до 80vh, чтобы оставить место для кнопки
              className="max-h-[80vh] max-w-[90vw] cursor-zoom-out rounded-xl border border-hairline object-contain shadow-2xl"
              onClick={(e) => {
                e.stopPropagation();
                closeZoom();
              }} 
            />

            {/* Кнопка перехода на сайт */}
            {zoomedData.url && zoomedData.url !== "#" && (
              <a
                href={zoomedData.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Запрещаем закрытие окна при клике на саму кнопку
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-transform hover:scale-105 shadow-lg"
              >
                Посмотреть сайт
                <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </div>
      )}





      
    </>
  );
}