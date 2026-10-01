import { MONTH_NAMES, type DanceEvent } from "@/lib/data";

const toneClasses: Record<DanceEvent["tone"], string> = {
  orchid: "bg-orchid/15 text-orchid outline-orchid/30",
  rose: "bg-rose/15 text-rose outline-rose/30",
  sky: "bg-sky-glow/15 text-sky-glow outline-sky-glow/30",
};

export function EventCard({ event }: { event: DanceEvent }) {
  return (
    <div className="glass-card group rounded-2xl p-6 transition hover:bg-glass-strong">
      <div className="flex items-center gap-3">
        <span
          className={`grid size-12 place-items-center rounded-xl text-center font-display leading-none outline outline-1 -outline-offset-1 ${toneClasses[event.tone]}`}
        >
          <span className="text-[10px] uppercase">
            {MONTH_NAMES[event.month].slice(0, 3)}
          </span>
          <span className="text-lg">{String(event.day).padStart(2, "0")}</span>
        </span>
        <span className="glass-card rounded-full px-3 py-1 text-xs text-mist-dim">
          {event.tag}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg">{event.title}</h3>
      <p className="mt-1 text-sm text-mist-dim">{event.subtitle}</p>
      <p className="mt-4 text-sm text-orchid">{event.schedule}</p>
    </div>
  );
}
