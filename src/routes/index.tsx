import { createFileRoute, Link } from "@tanstack/react-router";
import heroDancer from "@/assets/hero-dancer.jpg";
import teacher from "@/assets/teacher-portrait.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { GlowBackdrop } from "@/components/GlowBackdrop";
import { BookingWidget } from "@/components/BookingWidget";
import { EventCard } from "@/components/EventCard";
import { EVENTS } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marina Vale — Aulas de Dança Online ao Vivo" },
      {
        name: "description",
        content:
          "Reserve aulas de dança online ao vivo com Marina Vale: contemporâneo, jazz funk, ballet e mais. Veja horários e eventos.",
      },
      { property: "og:title", content: "Marina Vale — Aulas de Dança Online ao Vivo" },
      {
        property: "og:description",
        content:
          "Reserve aulas de dança online ao vivo com Marina Vale: contemporâneo, jazz funk, ballet e mais.",
      },
    ],
  }),
  component: Index,
});

const STYLES = [
  "Contemporâneo",
  "Jazz Funk",
  "Ballet",
  "Heels",
  "Hip Hop",
  "Improvisação",
  "Mobilidade",
];

function Index() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground antialiased">
      <SiteNav />

      <header className="relative overflow-hidden">
        <GlowBackdrop />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-mist-dim">
              <span className="size-1.5 rounded-full bg-orchid" /> Turmas online · ao vivo
            </span>
            <h1 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Aulas de dança <em className="text-orchid">online</em>, com a Marina.
            </h1>
            <p className="mt-5 max-w-md text-mist-dim">
              Agende sua aula ao vivo, escolha o horário que combina com seu corpo e
              receba o link direto no seu e-mail. Simples, elegante e do seu jeito.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/agendar"
                className="rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Marcar aula agora
              </Link>
              <Link
                to="/eventos"
                className="glass-card rounded-full px-7 py-3 text-sm font-medium transition hover:bg-glass-strong"
              >
                Ver calendário
              </Link>
            </div>
            <div className="mt-8 flex gap-8 text-sm">
              <div>
                <p className="font-display text-2xl">4.9</p>
                <p className="text-mist-faint">avaliação média</p>
              </div>
              <div>
                <p className="font-display text-2xl">12k</p>
                <p className="text-mist-faint">alunas atendidas</p>
              </div>
              <div>
                <p className="font-display text-2xl">7</p>
                <p className="text-mist-faint">estilos ensinados</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroDancer}
              alt="Bailarina em pleno salto com saia esvoaçante sob luz violeta"
              width={1008}
              height={1264}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover outline outline-1 -outline-offset-1 outline-glass-border"
            />
            <div className="glass-card-strong absolute -bottom-6 -left-6 w-56 rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-mist-faint">
                próxima aula
              </p>
              <p className="mt-1 font-display text-lg">Contemporâneo · iniciante</p>
              <p className="mt-1 text-sm text-orchid">Ter 19:00 · ao vivo</p>
            </div>
          </div>
        </div>
      </header>

      <div className="overflow-hidden border-y border-glass-border bg-glass py-4">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-10 whitespace-nowrap font-display text-xl font-light italic text-mist-dim">
          {[...STYLES, ...STYLES, ...STYLES, ...STYLES].map((s, i) => (
            <span key={i} className="flex items-center gap-10">
              {s} <span className="text-orchid">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section id="aulas" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orchid">reserva online</p>
            <h2 className="mt-2 font-display text-3xl font-light tracking-tight md:text-4xl">
              Escolha a aula e o horário
            </h2>
          </div>
          <Link
            to="/agendar"
            className="hidden text-sm text-mist-dim transition hover:text-foreground sm:block"
          >
            Todas as turmas →
          </Link>
        </div>
        <div className="mt-8">
          <BookingWidget />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-rose">agenda</p>
            <h2 className="mt-2 font-display text-3xl font-light tracking-tight md:text-4xl">
              Próximos eventos
            </h2>
          </div>
          <Link
            to="/eventos"
            className="hidden text-sm text-mist-dim transition hover:text-foreground sm:block"
          >
            Ver tudo →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {EVENTS.slice(0, 3).map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16">
        <div className="glass-card grid items-center gap-10 rounded-[2rem] p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <img
            src={teacher}
            alt="Retrato da professora Marina Vale sorrindo"
            width={912}
            height={1104}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orchid">sobre</p>
            <h2 className="mt-2 font-display text-3xl font-light tracking-tight md:text-5xl">
              Dança como <em className="text-rose">escuta</em> do corpo.
            </h2>
            <p className="mt-5 max-w-xl text-mist-dim">
              Sou Marina Vale, bailarina e professora há 12 anos. Passei por companhias
              pelo Brasil e hoje levo minhas aulas para qualquer sala — a sua inclusive.
              Cada turma é pequena, ao vivo e com correção individual.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <blockquote className="glass-card rounded-2xl p-5">
                <p className="text-sm">
                  "Cheguei travada, saí dançando. A Marina faz o corpo entender o som
                  antes da cabeça."
                </p>
                <footer className="mt-3 text-xs text-mist-faint">Camila R. · Contemporâneo</footer>
              </blockquote>
              <blockquote className="glass-card rounded-2xl p-5">
                <p className="text-sm">
                  "Aula online que parece presencial. Ela vê cada detalhe do movimento."
                </p>
                <footer className="mt-3 text-xs text-mist-faint">Juliana P. · Jazz Funk</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
