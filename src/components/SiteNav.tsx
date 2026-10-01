import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-glass-border bg-background/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand font-display text-lg text-primary-foreground">
            M
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg tracking-tight">
              Marina Vale
            </span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-mist-faint">
              dança contemporânea
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-mist-dim md:flex">
          <Link to="/" hash="aulas" className="transition hover:text-foreground">
            Aulas
          </Link>
          <Link to="/eventos" className="transition hover:text-foreground">
            Calendário
          </Link>
          <Link to="/" hash="sobre" className="transition hover:text-foreground">
            Sobre
          </Link>
        </div>
        <Link
          to="/agendar"
          className="glass-card-strong rounded-full px-5 py-2 text-sm font-medium text-foreground transition hover:bg-glass-strong"
        >
          Reservar aula
        </Link>
      </div>
    </nav>
  );
}
