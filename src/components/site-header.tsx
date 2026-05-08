import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Phone, Send } from "lucide-react";
import { ContactDialog } from "./contact-dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SERVICES, SERVICE_CATEGORIES, getServicesByCategory } from "@/lib/services-data";
import logo from "@/assets/aryn-logo.png";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-hairline/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center" aria-label="ABP DIGITAL — на главную">
          <img
            src={logo}
            alt="ABP DIGITAL"
            className="h-8 w-auto md:h-9"
            loading="eager"
            decoding="async"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
          >
            Главная
          </Link>

          {/* Services dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="group inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground focus:outline-none data-[state=open]:text-foreground"
              >
                Услуги
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={12}
              className="w-[min(92vw,720px)] rounded-2xl border border-hairline bg-background p-0 shadow-xl"
            >
              <div className="grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2">
                {SERVICE_CATEGORIES.map((cat) => {
                  const items = getServicesByCategory(cat.id);
                  if (items.length === 0) return null;
                  return (
                    <div key={cat.id} className="bg-background p-5">
                      <p className="mb-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {cat.label}
                      </p>
                      <ul className="space-y-1">
                        {items.map((s) => (
                          <li key={s.slug}>
                            <DropdownMenuItem asChild>
                              <Link
                                to={`/services/${s.slug}`}
                                className="group flex items-baseline justify-between gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-secondary cursor-pointer"
                              >
                                <span className="font-display text-base font-medium tracking-tight text-foreground">
                                  {s.title}
                                </span>
                                <span className="text-xs font-mono text-muted-foreground">
                                  {s.price}
                                </span>
                              </Link>
                            </DropdownMenuItem>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between border-t border-hairline bg-secondary/50 px-5 py-3">
                <span className="text-xs text-muted-foreground">
                  Всего услуг: {SERVICES.length}
                </span>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-medium text-foreground hover:underline"
                >
                  Смотреть все услуги <span aria-hidden>→</span>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/team"
            className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
          >
            Команда
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground [&.active]:text-foreground"
          >
            Контакты
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <ContactDialog
            trigger={
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:gap-3"
              >
                Обсудить проект
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            }
          />
        </div>

        {/* Mobile burger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Открыть меню"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-foreground md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full max-w-sm overflow-y-auto p-0 sm:max-w-sm [&>button]:hidden"
          >
            <SheetTitle className="sr-only">Меню</SheetTitle>
            <SheetDescription className="sr-only">
              Навигация по сайту, услуги и контактные данные ABP DIGITAL
            </SheetDescription>

            {/* Mobile header */}
            <div className="flex items-center justify-between border-b border-hairline px-6 py-4">
              <img src={logo} alt="ABP DIGITAL" className="h-8 w-auto" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Закрыть меню"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Primary nav */}
            <nav className="px-6 py-6">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    activeOptions={{ exact: true }}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 font-display text-2xl font-medium tracking-tight text-foreground hover:bg-secondary [&.active]:bg-secondary"
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 font-display text-2xl font-medium tracking-tight text-foreground hover:bg-secondary [&.active]:bg-secondary"
                  >
                    Все услуги
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 font-display text-2xl font-medium tracking-tight text-foreground hover:bg-secondary [&.active]:bg-secondary"
                  >
                    Команда
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-3 font-display text-2xl font-medium tracking-tight text-foreground hover:bg-secondary [&.active]:bg-secondary"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>

              {/* Services grouped */}
              <div className="mt-8 space-y-6">
                {SERVICE_CATEGORIES.map((cat) => {
                  const items = getServicesByCategory(cat.id);
                  if (items.length === 0) return null;
                  return (
                    <div key={cat.id}>
                      <p className="mb-2 px-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                        {cat.label}
                      </p>
                      <ul className="space-y-px overflow-hidden rounded-xl bg-hairline">
                        {items.map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`/services/${s.slug}`}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-baseline justify-between gap-3 bg-background px-4 py-3 text-sm hover:bg-secondary"
                            >
                              <span className="font-medium text-foreground">{s.title}</span>
                              <span className="font-mono text-xs text-muted-foreground">
                                {s.price}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Contacts block */}
              <div className="mt-10 rounded-2xl border border-hairline bg-secondary/50 p-5">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Контакты
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  <li>
                    <a
                      href="tel:+77074842108"
                      className="flex items-center gap-3 text-foreground hover:text-foreground"
                    >
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      +7 707 484 2108
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/arynbg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-foreground"
                    >
                      <Send className="h-4 w-4 text-muted-foreground" />
                      Telegram: @arynbg
                    </a>
                  </li>
                  <li className="text-muted-foreground">Алматы, Казахстан</li>
                </ul>

                <div className="mt-5">
                  <ContactDialog
                    trigger={
                      <button
                        type="button"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background transition-all hover:gap-3"
                      >
                        Обсудить проект
                        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                          →
                        </span>
                      </button>
                    }
                  />
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
