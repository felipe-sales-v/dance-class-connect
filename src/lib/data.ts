export type DanceClass = {
  id: string;
  name: string;
  level: string;
  description: string;
};

export const CLASSES: DanceClass[] = [
  {
    id: "contemporaneo",
    name: "Contemporâneo",
    level: "iniciante",
    description: "Respiração, peso e fluidez. Do solo à improvisação.",
  },
  {
    id: "jazz-funk",
    name: "Jazz Funk",
    level: "intermediário",
    description: "Atitude, linhas e energia de palco.",
  },
  {
    id: "ballet",
    name: "Ballet",
    level: "todos os níveis",
    description: "Base clássica com leveza e consciência corporal.",
  },
  {
    id: "heels",
    name: "Heels",
    level: "intermediário",
    description: "Presença, confiança e coreografia de salto.",
  },
  {
    id: "hip-hop",
    name: "Hip Hop",
    level: "iniciante",
    description: "Groove, fundamentos e freestyle.",
  },
  {
    id: "improvisacao",
    name: "Improvisação",
    level: "todos os níveis",
    description: "Escuta do corpo e criação em tempo real.",
  },
  {
    id: "alongamento",
    name: "Alongamento & Mobilidade",
    level: "todos os níveis",
    description: "Preparação e cuidado para quem dança.",
  },
];

export type TimeSlot = { time: string; status: "livre" | "cheio" };

// Deterministic pseudo-availability so the demo feels real and stable.
export function getSlotsForDate(date: Date): TimeSlot[] {
  const times = ["09:00", "11:00", "14:00", "16:00", "19:00", "20:30"];
  const seed = date.getDate() + date.getMonth() * 31;
  return times.map((time, i) => ({
    time,
    status: (seed + i * 7) % 3 === 0 ? "livre" : "cheio",
  }));
}

export function hasClassOnDate(date: Date): boolean {
  const day = date.getDay();
  return day !== 0; // sem aulas aos domingos
}

export type DanceEvent = {
  id: string;
  day: number; // day of month
  month: number; // 0-indexed
  year: number;
  title: string;
  subtitle: string;
  schedule: string;
  tag: "online" | "presencial" | "ao vivo";
  tone: "orchid" | "rose" | "sky";
};

const now = new Date();
const y = now.getFullYear();
const m = now.getMonth();

export const EVENTS: DanceEvent[] = [
  {
    id: "workshop-improv",
    day: 24,
    month: m,
    year: y,
    title: "Workshop de improvisação",
    subtitle: "Corpo e espaço em movimento",
    schedule: "Sáb · 10:00 – 12:00",
    tag: "online",
    tone: "orchid",
  },
  {
    id: "ensaio-ballet",
    day: 27,
    month: m,
    year: y,
    title: "Ensaio aberto: Ballet",
    subtitle: "Estúdio Vale, sala 2",
    schedule: "Qua · 18:00 – 19:30",
    tag: "presencial",
    tone: "rose",
  },
  {
    id: "clinica-jazz",
    day: 4,
    month: (m + 1) % 12,
    year: m === 11 ? y + 1 : y,
    title: "Clínica de Jazz Funk",
    subtitle: "Nível intermediário · turma nova",
    schedule: "Sex · 20:00 – 21:30",
    tag: "ao vivo",
    tone: "sky",
  },
  {
    id: "roda-conversa",
    day: 12,
    month: (m + 1) % 12,
    year: m === 11 ? y + 1 : y,
    title: "Roda de conversa: carreira na dança",
    subtitle: "Encontro aberto com convidadas",
    schedule: "Qui · 19:00 – 20:30",
    tag: "online",
    tone: "orchid",
  },
  {
    id: "mostra-fim-ano",
    day: 20,
    month: (m + 1) % 12,
    year: m === 11 ? y + 1 : y,
    title: "Mostra de alunas",
    subtitle: "Teatro · entrada com convite",
    schedule: "Sáb · 20:00",
    tag: "presencial",
    tone: "rose",
  },
];

export const MONTH_NAMES = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const WEEKDAY_SHORT = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
