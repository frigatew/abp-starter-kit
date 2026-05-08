import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactDialog } from "@/components/contact-dialog";
import pavelImg from "@/assets/pavel.png";
import bakhytImg from "@/assets/bakhyt.png";
import akparImg from "@/assets/akpar.png";
import alinaImg from "@/assets/alina.png";
import mayaImg from "@/assets/maya.png";
import kirillImg from "@/assets/kirill.png";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Команда — ABP DIGITAL" },
      {
        name: "description",
        content:
          "Команда ABP DIGITAL: маркетологи, дизайнеры, разработчики, digital-специалисты и продакшн. Каждый отвечает за своё направление и общий результат.",
      },
      { property: "og:title", content: "Команда ABP DIGITAL" },
      {
        property: "og:description",
        content: "Знакомьтесь с командой, которая будет работать над вашим проектом.",
      },
    ],
  }),
  component: TeamPage,
});

type Member = {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
};

const TEAM: Member[] = [
  {
    name: "Павел Пимурзин",
    role: "CO-Founder · Head of Marketing",
    bio: "10+ лет в performance-маркетинге. Стратегия и управление проектами.",
    imageUrl: pavelImg,
  },
  {
    name: "Бахыт Умбеталиев",
    role: "CO-Founder · Head of Product & Creative",
    bio: "12+ лет в запуске и развитии продуктов. 5 лет опыта в роли CMO. Запуск и масштабирование B2B / B2C продуктов",
    imageUrl: bakhytImg,
  },
  {
    name: "Акпар Арын",
    role: "Digital specialist",
    bio: "6+ лет в маркетинге. Digital-специалист. Аналитика, оптимизация, масштабирование.",
    imageUrl: akparImg,
  },
  {
    name: "Алина Абилева",
    role: "PR Manager",
    bio: "PR-специалист. Коммуникация и бренд-стратегия.",
    imageUrl: alinaImg,
  },
  {
    name: "Мария Пономаренко",
    role: "Designer",
    bio: "Дизайнер с опытом в рекламе и брендинге. Креативные концепции и визуалы.",
    imageUrl: mayaImg,
  },
  {
    name: "Кирилл Эпов",
    role: "Video Producer",
    bio: "Сценарист и режиссёр. Reels, рекламные ролики, имиджевое видео.",
    imageUrl: kirillImg,
  },
  
];

function TeamPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pt-24">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-foreground">← Главная</Link>
            <span aria-hidden className="text-muted-foreground/40">/</span>
            <span>Команда</span>
          </div>
          <h1 className="mt-10 max-w-4xl font-display text-4xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
            Команда, которая
            <br />
            <em className="not-italic text-accent">отвечает за результат</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Маркетологи, дизайнеры, разработчики, digital-специалисты и продакшн. Каждый — эксперт в своём
            направлении. Работаем как единая команда над вашим проектом.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m) => (
              <article key={m.name} className="flex flex-col bg-background p-8">
                
                {/* Обновленный блок с изображением */}
                <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-hairline bg-secondary/40">
                  <img 
                    src={m.imageUrl} 
                    alt={`Фотография: ${m.name}`} 
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                    loading="lazy"
                  />
                </div>

                <h2 className="mt-6 font-display text-2xl font-medium tracking-tight">{m.name}</h2>
                <div className="mt-1 font-mono text-xs uppercase tracking-widest text-accent">{m.role}</div>
                <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="relative overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-16">
            <div className="grid items-center gap-10 md:grid-cols-[2fr_1fr]">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-background/60">Готовы работать вместе?</p>
                <h2 className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                  Расскажите о задаче — <em className="not-italic text-accent">подберём команду</em>
                </h2>
              </div>
              <div className="md:text-right">
                <ContactDialog
                  trigger={
                    <button type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-accent-foreground transition-all hover:gap-3">
                      Обсудить проект
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
