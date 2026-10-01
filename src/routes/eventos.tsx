import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { GlowBackdrop } from "@/components/GlowBackdrop";
import { EventCard } from "@/components/EventCard";
import { EVENTS, MONTH_NAMES } from "@/lib/data";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Calendário de eventos — Marina Vale Dança" },
      {
        name: "description",
        content:
          "Workshops, ensaios abertos, clínicas e mostras: confira o calendário de eventos de dança da Marina Vale.",
      },
      { property: "og:title", content: "Calendário de eventos — Marina Vale Dança" },
      {
        property: "og:description",
        content: "Workshops, ensaios abertos e mostras de dança com Marina Vale.",
      },
    ],
  }),
  component: EventosPage,
});

function EventosPage() {
  const groups = EVENTS.reduce<Record<string, typeof EVENTS>>((acc, e) => {
    const key = `${MONTH_NAMES[e.month]} ${e.year}`;
    (acc[key] ||= []).push(e);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <section className="relative overflow-hidden">
        <GlowBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-rose">calendário</p>
          <h1 className="mt-2 font-display text-4xl font-light tracking-tight md:text-6xl">
            Eventos & <em className="text-rose">workshops</em>
          </h1>
          <p className="mt-4 max-w-lg text-mist-dim">
            Encontros especiais além das aulas regulares — online e presenciais.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-14 px-6 pb-20">
        {Object.entries(groups).map(([month, list]) => (
          <div key={month}>
            <h2 className="font-display text-2xl font-light">{month}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {list.map((e) => (
                <EventCard key={e.id} event={e} />
              ))}
            </div>
          </div>
        ))}

        <div className="glass-card flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-light">Quer garantir sua vaga?</h3>
            <p className="mt-1 text-mist-dim">Reserve uma aula e fique por dentro dos próximos eventos.</p>
          </div>
          <Link
            to="/agendar"
            className="rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
          >
            Marcar aula agora
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
