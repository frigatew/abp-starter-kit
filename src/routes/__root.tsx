import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { RouteHead } from "../components/route-head";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-7xl font-medium tracking-tight">
          Не туда.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Этой страницы не существует — но воронка продаж точно ждёт вас на главной.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:gap-3"
        >
          На главную <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { title: "ABP DIGITAL — Performance-маркетинг и видеопродакшен" },
      {
        name: "description",
        content:
          "ABP DIGITAL — агентство performance-маркетинга и видеопродакшена в Казахстане. Прозрачная аналитика, измеримый рост.",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <RouteHead />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
