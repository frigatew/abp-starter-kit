import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CASES, type Case } from "@/lib/cases-data";
import {
  Pill,
  Car,
  Tractor,
  Smile,
  Sparkles,
  GraduationCap,
  Beef,
  Droplets,
  Building2,
  Wrench,
  Mountain,
  Home,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "elixir-rosta": Pill,
  "umnaya-mobilnost": Car,
  "agro-ekspansiya": Tractor,
  "ulybka-bez-straha": Smile,
  "alhimiya-chistoty": Sparkles,
  "bilet-v-ligu-plyusha": GraduationCap,
  "myasnaya-filosofiya": Beef,
  "sila-istochnika": Droplets,
  "prodavaya-budushee": Building2,
  "inzhenernaya-tochnost": Wrench,
  "kamennaya-uverennost": Mountain,
  "cifrovoy-shou-rum": Home,
};

const INITIAL_VISIBLE = 6;

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Кейсы — ABP DIGITAL" },
      {
        name: "description",
        content:
          "Кейсы ABP DIGITAL: реальные результаты в performance-маркетинге, разработке сайтов и видеопродакшене для брендов в фарме, B2B, ритейле, недвижимости и услугах.",
      },
      { property: "og:title", content: "Кейсы — ABP DIGITAL" },
      {
        property: "og:description",
        content: "Истории клиентов и измеримые результаты команды ABP DIGITAL.",
      },
    ],
  }),
  component: CasesPage,
});

function CasesPage() {
  const [active, setActive] = useState<Case | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleCases = showAll ? CASES : CASES.slice(0, INITIAL_VISIBLE);
  const hasMore = CASES.length > INITIAL_VISIBLE && !showAll;

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <header className="mb-12 max-w-3xl">
        <p className="mb-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          Портфолио
        </p>
        <h1 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Кейсы
        </h1>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Реальные проекты, цифры и решения, которые сработали. Нажмите «Посмотреть», чтобы прочитать подробное описание кейса.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleCases.map((c) => {
          const Icon = ICONS[c.slug] ?? Briefcase;
          return (
            <article
              key={c.slug}
              className="group flex flex-col rounded-2xl border border-hairline bg-background p-6 transition-all hover:border-foreground/30 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <p className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                {c.niche}
              </p>
              <h2 className="font-display text-base font-medium leading-snug tracking-tight text-foreground">
                {c.title}
              </h2>
              <div className="mt-auto pt-6">
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:gap-3"
                >
                  Посмотреть
                  <span aria-hidden className="transition-transform">→</span>
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Загрузить ещё
            <span aria-hidden>↓</span>
          </button>
        </div>
      )}

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  {active.niche}
                </p>
                <DialogTitle className="font-display text-2xl font-medium leading-snug tracking-tight">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="sr-only">
                  Подробное описание кейса
                </DialogDescription>
              </DialogHeader>

              <section className="mt-2">
                <h3 className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Проблема
                </h3>
                <p className="text-sm leading-relaxed text-foreground">{active.problem}</p>
              </section>

              <section>
                <h3 className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Решение ABP
                </h3>
                <p className="text-sm leading-relaxed text-foreground">{active.solution}</p>
              </section>

              <section>
                <h3 className="mb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Результаты
                </h3>
                <ul className="space-y-2">
                  {active.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-foreground"
                    >
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
