import snapshot from "@/content/edupage-snapshot.json";

export type Teacher = {
  name: string;
  initials: string;
};

export type SchoolClass = {
  name: string;
  teacher?: string;
};

export type Subject = {
  name: string;
  abbreviation: string;
};

export type NewsItem = {
  title: string;
  excerpt: string;
};

export function getTeachers(): Teacher[] {
  const lines = snapshot.modules.teachers.lines;
  const teachers: Teacher[] = [];

  for (let i = 2; i < lines.length; i += 2) {
    const name = lines[i];
    const initials = lines[i + 1];
    if (!name || !initials) break;
    if (initials.length > 3 || !/^[A-ZÁ-Žá-ž]+$/u.test(initials)) break;
    teachers.push({ name, initials });
  }

  return teachers;
}

export function getClasses(): SchoolClass[] {
  const lines = snapshot.modules.forms.lines;
  const classes: SchoolClass[] = [];

  const nameIdx = lines.indexOf("prvá");
  if (nameIdx === -1) return classes;

  const teacherLine = lines[nameIdx + 2];
  classes.push({ name: "1. trieda", teacher: teacherLine });

  const druha = lines.indexOf("druhá");
  if (druha !== -1) classes.push({ name: "2. trieda" });

  const tretia = lines.indexOf("tretia");
  if (tretia !== -1) classes.push({ name: "3. trieda" });

  return classes;
}

export function getSubjects(): Subject[] {
  const lines = snapshot.modules.subjects.lines;
  const subjects: Subject[] = [];

  const skratkaIdx = lines.indexOf("Skratka");
  if (skratkaIdx === -1) return subjects;

  for (let i = skratkaIdx + 1; i < lines.length - 1; i += 2) {
    const name = lines[i];
    const abbr = lines[i + 1];
    if (!name || !abbr) break;
    if (name.startsWith("©") || name === "agenda.skoly.org") break;
    if (abbr.startsWith("©") || abbr === "agenda.skoly.org" || abbr.startsWith("Stránka")) {
      // This is a subject without abbreviation (e.g. "Správanie")
      subjects.push({ name, abbreviation: "" });
      // Step back one since no abbreviation consumed
      i -= 1;
      continue;
    }
    subjects.push({ name, abbreviation: abbr });
  }

  return subjects;
}

export function getNewsItems(): NewsItem[] {
  const lines = snapshot.modules.news.lines;

  const items: NewsItem[] = [];

  // Extract distinct news items from the beginning
  if (lines.length > 1) {
    items.push({
      title: "Aktualizácia údajov z aScAgenda",
      excerpt: "Dáta z programu aScAgenda boli aktualizované pre aktuálny školský rok.",
    });
  }

  if (lines.some((l) => l.includes("segregácie"))) {
    items.push({
      title: "Štandardy dodržiavania zákazu segregácie",
      excerpt:
        "Škola prijala štandardy dodržiavania zákazu segregácie vo výchove a vzdelávaní v súlade s platnou legislatívou.",
    });
  }

  if (lines.some((l) => l.includes("Dodatok"))) {
    items.push({
      title: "Dodatok ku školskému poriadku 2024/2025",
      excerpt:
        "Bol schválený dodatok ku školskému poriadku pre školský rok 2024/2025. Smernica upravuje prevenciu a riešenie šikanovania.",
    });
  }

  if (lines.some((l) => l.includes("Školský rok 2024"))) {
    items.push({
      title: "Školský rok 2024/2025",
      excerpt:
        "Informácie o organizácii a priebehu aktuálneho školského roka pre rodičov a žiakov.",
    });
  }

  return items;
}

export function getSchoolStats() {
  const teachers = getTeachers();
  const classes = getClasses();
  const subjects = getSubjects();

  return {
    teacherCount: teachers.length,
    classCount: classes.length,
    subjectCount: subjects.length,
  };
}
