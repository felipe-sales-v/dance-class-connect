import { useMemo, useState } from "react";
import {
  CLASSES,
  MONTH_NAMES,
  WEEKDAY_SHORT,
  getSlotsForDate,
  hasClassOnDate,
} from "@/lib/data";

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function BookingWidget() {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [cursor, setCursor] = useState(
    () => new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selected, setSelected] = useState<Date>(() => {
    const d = new Date(today);
    while (!hasClassOnDate(d)) d.setDate(d.getDate() + 1);
    return d;
  });
  const [classId, setClassId] = useState(CLASSES[0]!.id);
  const [time, setTime] = useState<string | null>(null);
  const [step, setStep] = useState<"pick" | "form" | "done">("pick");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const cls = CLASSES.find((c) => c.id === classId)!;
  const slots = getSlotsForDate(selected);

  const days = useMemo(() => {
    const first = new Date(cursor);
    const start = new Date(first);
    start.setDate(1 - first.getDay());
    return Array.from({ length: 42 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }, [cursor]);

  const canPrev =
    cursor.getFullYear() > today.getFullYear() ||
    cursor.getMonth() > today.getMonth();

  const selectedLabel = `${WEEKDAY_SHORT[selected.getDay()]!} · ${selected.getDate()} ${MONTH_NAMES[selected.getMonth()]!.slice(0, 3).toLowerCase()}`;

  return (
    <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="glass-card rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <p className="font-display text-lg">
            {MONTH_NAMES[cursor.getMonth()]} {cursor.getFullYear()}
          </p>
          <div className="flex gap-1">
            <button
              aria-label="Mês anterior"
              disabled={!canPrev}
              onClick={() =>
                setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))
              }
              className="glass-card grid size-8 place-items-center rounded-lg text-mist-dim transition hover:text-foreground disabled:opacity-30"
            >
              ‹
            </button>
            <button
              aria-label="Próximo mês"
              onClick={() =>
                setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))
              }
              className="glass-card grid size-8 place-items-center rounded-lg text-mist-dim transition hover:text-foreground"
            >
              ›
            </button>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-7 gap-1.5 text-center text-[11px] text-mist-faint">
          {WEEKDAY_SHORT.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1.5 text-center text-sm">
          {days.map((d) => {
            const outside = d.getMonth() !== cursor.getMonth();
            const past = d < today;
            const available = !past && hasClassOnDate(d);
            const isSel = sameDay(d, selected);
            return (
              <button
                key={d.toISOString()}
                disabled={!available}
                onClick={() => {
                  setSelected(d);
                  setTime(null);
                  setStep("pick");
                }}
                className={[
                  "relative grid aspect-square place-items-center rounded-lg transition",
                  isSel
                    ? "bg-orchid/25 font-semibold text-foreground outline outline-1 -outline-offset-1 outline-orchid/40"
                    : available
                      ? "hover:bg-glass-strong"
                      : "",
                  outside || !available ? "text-mist-ghost" : "",
                ].join(" ")}
              >
                {d.getDate()}
                {available && !isSel && !outside && (
                  <span className="absolute bottom-1 size-1 rounded-full bg-orchid" />
                )}
              </button>
            );
          })}
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-xs text-mist-dim">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-orchid" /> disponível
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-rose" /> cheio
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-mist-ghost" /> sem aula
          </span>
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6">
        {step === "done" ? (
          <div className="flex h-full flex-col items-start justify-center gap-4 py-6">
            <span className="rounded-full bg-orchid/15 px-3 py-1 text-xs text-orchid outline outline-1 -outline-offset-1 outline-orchid/30">
              reserva confirmada
            </span>
            <h3 className="font-display text-3xl font-light">
              Te vejo na aula, <em className="text-orchid">{name.split(" ")[0]}</em>!
            </h3>
            <p className="text-mist-dim">
              {cls.name} · {selectedLabel} · {time}. O link da aula ao vivo vai
              chegar em <span className="text-foreground">{email}</span>.
            </p>
            <button
              onClick={() => {
                setStep("pick");
                setTime(null);
                setName("");
                setEmail("");
              }}
              className="glass-card-strong mt-2 rounded-full px-5 py-2 text-sm font-medium transition hover:bg-glass-strong"
            >
              Fazer outra reserva
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-mist-faint">
                  {selectedLabel}
                </p>
                <h3 className="font-display text-xl">
                  {cls.name} · {cls.level}
                </h3>
              </div>
              <span className="shrink-0 rounded-full bg-orchid/15 px-3 py-1 text-xs text-orchid outline outline-1 -outline-offset-1 outline-orchid/30">
                ao vivo
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {CLASSES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setClassId(c.id)}
                  className={[
                    "rounded-full px-3 py-1.5 text-xs transition",
                    c.id === classId
                      ? "bg-glass-strong text-foreground outline outline-1 -outline-offset-1 outline-glass-border-strong"
                      : "text-mist-dim hover:text-foreground",
                  ].join(" ")}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {step === "pick" ? (
              <>
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {slots.map((s) => {
                    const free = s.status === "livre";
                    const active = time === s.time;
                    return (
                      <button
                        key={s.time}
                        disabled={!free}
                        onClick={() => setTime(s.time)}
                        className={[
                          "rounded-xl py-3 text-sm transition",
                          active
                            ? "bg-gradient-brand font-semibold text-primary-foreground"
                            : free
                              ? "glass-card text-foreground hover:bg-glass-strong"
                              : "glass-card cursor-not-allowed text-mist-ghost line-through",
                        ].join(" ")}
                      >
                        {s.time} · {s.status}
                      </button>
                    );
                  })}
                </div>
                <button
                  disabled={!time}
                  onClick={() => setStep("form")}
                  className="glass-card-strong mt-5 w-full rounded-xl py-3 text-sm font-medium transition hover:bg-glass-strong disabled:opacity-40"
                >
                  {time ? `Reservar ${time} →` : "Escolha um horário livre"}
                </button>
              </>
            ) : (
              <form
                className="mt-5 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (name.trim() && email.includes("@")) setStep("done");
                }}
              >
                <p className="text-sm text-mist-dim">
                  Horário escolhido: <span className="text-orchid">{time}</span>
                </p>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="glass-card w-full rounded-xl px-4 py-3 text-sm placeholder:text-mist-faint focus:outline-orchid/50"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="glass-card w-full rounded-xl px-4 py-3 text-sm placeholder:text-mist-faint focus:outline-orchid/50"
                />
                <div className="flex gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setStep("pick")}
                    className="glass-card rounded-xl px-4 py-3 text-sm text-mist-dim transition hover:text-foreground"
                  >
                    Voltar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                  >
                    Confirmar reserva →
                  </button>
                </div>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}
