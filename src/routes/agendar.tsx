import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { GlowBackdrop } from "@/components/GlowBackdrop";
import { BookingWidget } from "@/components/BookingWidget";
import { CLASSES } from "@/lib/data";

export const Route = createFileRoute("/agendar")({
  head: () => ({
    meta: [
      { title: "Agendar aula — Marina Vale Dança" },
      {
        name: "description",
        content:
          "Escolha o estilo, o dia e o horário e reserve sua aula de dança online ao vivo com Marina Vale.",
      },
      { property: "og:title", content: "Agendar aula — Marina Vale Dança" },
      {
        property: "og:description",
        content: "Reserve sua aula de dança online ao vivo em poucos cliques.",
      },
    ],
  }),
  component: AgendarPage,
});

function AgendarPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <section className="relative overflow-hidden">
        <GlowBackdrop />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-orchid">reserva online</p>
          <h1 className="mt-2 font-display text-4xl font-light tracking-tight md:text-6xl">
            Reserve sua <em className="text-orchid">aula</em>
          </h1>
          <p className="mt-4 max-w-lg text-mist-dim">
            Escolha o dia no calendário, o estilo e um horário livre. O link da aula ao
            vivo chega no seu e-mail.
          </p>
          <div className="mt-10">
            <BookingWidget />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="font-display text-3xl font-light tracking-tight">Turmas</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLASSES.map((c) => (
            <div key={c.id} className="glass-card rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-mist-faint">{c.level}</p>
              <h3 className="mt-1 font-display text-xl">{c.name}</h3>
              <p className="mt-2 text-sm text-mist-dim">{c.description}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
