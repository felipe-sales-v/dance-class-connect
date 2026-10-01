export function GlowBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute -left-24 -top-24 size-[520px] rounded-full bg-orchid/25 blur-[130px]" />
      <div className="absolute -right-10 top-20 size-[460px] rounded-full bg-rose/20 blur-[130px]" />
      <div className="absolute bottom-[-160px] left-1/3 size-[420px] rounded-full bg-sky-glow/15 blur-[130px]" />
    </div>
  );
}
