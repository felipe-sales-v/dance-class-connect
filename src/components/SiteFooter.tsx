export function SiteFooter() {
  return (
    <footer className="border-t border-glass-border bg-glass backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <p className="font-display text-lg">
          Marina Vale · dança que mora em você
        </p>
        <div className="flex gap-6 text-sm text-mist-dim">
          <a href="#" className="transition hover:text-foreground">
            Instagram
          </a>
          <a href="#" className="transition hover:text-foreground">
            YouTube
          </a>
          <a href="#" className="transition hover:text-foreground">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
