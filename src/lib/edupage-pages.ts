export type EduPageModule = {
  slug:
    | "school"
    | "news"
    | "calendar"
    | "timetable"
    | "substitution"
    | "teachers"
    | "forms"
    | "subjects"
    | "classrooms"
    | "kruzky"
    | "library"
    | "album"
    | "contact";
  navLabel: string;
  title: string;
  description: string;
  sourcePath: string;
  highlights: string[];
  requiresLogin?: boolean;
};

export const edupageModules: EduPageModule[] = [
  {
    slug: "school",
    navLabel: "O škole",
    title: "O škole",
    description:
      "Základné informácie o škole, jej histórii a organizácii.",
    sourcePath: "/about/",
    highlights: [
      "Základná škola s materskou školou, Dolné Saliby",
      "Adresa: Dolné Saliby 19, 925 02 Dolné Saliby",
      "Oficiálny verejný profil školy",
    ],
  },
  {
    slug: "news",
    navLabel: "Novinky",
    title: "Novinky",
    description:
      "Aktuálne oznamy, smernice a informácie pre rodičov, žiakov a zamestnancov.",
    sourcePath: "/news/",
    highlights: [
      "Priebežné školské oznamy",
      "Organizačné a prevádzkové informácie",
      "Dokumentačné príspevky",
    ],
  },
  {
    slug: "calendar",
    navLabel: "Kalendár",
    title: "Kalendár",
    description: "Termínový prehľad podujatí a školských aktivít.",
    sourcePath: "/calendar/",
    highlights: [
      "Školské termíny",
      "Podujatia a plánovanie",
      "Prehľad na jednom mieste",
    ],
  },
  {
    slug: "timetable",
    navLabel: "Rozvrh",
    title: "Rozvrh",
    description: "Rozvrh hodín cez aSc modul na EduPage.",
    sourcePath: "/timetable/",
    highlights: [
      "aSc Rozvrhy",
      "Rozvrh podľa tried a predmetov",
      "Kľúčový modul pre každodennú prevádzku",
    ],
  },
  {
    slug: "substitution",
    navLabel: "Suplovanie",
    title: "Suplovanie",
    description: "Aktuálne zmeny vo vyučovaní a zastupovania.",
    sourcePath: "/substitution/",
    highlights: [
      "Denné zmeny vyučovania",
      "Prehľad zastupovania",
      "Okamžitý prístup pre žiakov a rodičov",
    ],
  },
  {
    slug: "teachers",
    navLabel: "Učitelia",
    title: "Učitelia",
    description: "Prehľad pedagogického zboru školy.",
    sourcePath: "/teachers/",
    highlights: [
      "Prehľad pedagógov",
      "Napojenie na rozvrh",
      "Základ pre personálny modul",
    ],
  },
  {
    slug: "forms",
    navLabel: "Triedy",
    title: "Triedy",
    description: "Triedny modul s prehľadom všetkých tried a triednych učiteľov.",
    sourcePath: "/forms/",
    highlights: [
      "Prehľad tried",
      "Triedna štruktúra školy",
      "Napojenie na predmety a rozvrh",
    ],
  },
  {
    slug: "subjects",
    navLabel: "Predmety",
    title: "Predmety",
    description: "Katalóg vyučovaných predmetov na škole.",
    sourcePath: "/subjects/",
    highlights: [
      "Katalóg predmetov",
      "Napojenie na učiteľov",
      "Napojenie na rozvrhové jednotky",
    ],
  },
  {
    slug: "classrooms",
    navLabel: "Učebne",
    title: "Učebne",
    description: "Prehľad učební a priestorov školy.",
    sourcePath: "/classrooms/",
    highlights: [
      "Správa učební",
      "Napojenie na hodiny",
      "Prevádzkové plánovanie",
    ],
  },
  {
    slug: "kruzky",
    navLabel: "Krúžky",
    title: "Krúžky",
    description: "Mimovyučovacie aktivity a krúžková činnosť.",
    sourcePath: "/kruzky/",
    highlights: [
      "Voľnočasové aktivity",
      "Rozvoj záujmov žiakov",
      "Samostatná verejná sekcia",
    ],
  },
  {
    slug: "library",
    navLabel: "Knižnica",
    title: "Knižnica",
    description: "Školská knižnica s čitateľskými aktivitami.",
    sourcePath: "/library/",
    highlights: [
      "Knižničný modul",
      "Možný prístup pre prihlásených používateľov",
      "Podpora čitateľských aktivít",
    ],
    requiresLogin: true,
  },
  {
    slug: "album",
    navLabel: "Fotoalbum",
    title: "Fotoalbum",
    description: "Galérie a fotodokumentácia školských aktivít.",
    sourcePath: "/album/",
    highlights: [
      "Fotografie z podujatí",
      "Vizuálny archív školy",
      "Verejný galérijný modul",
    ],
  },
  {
    slug: "contact",
    navLabel: "Kontakt",
    title: "Kontakt",
    description: "Oficiálne kontaktné údaje školy.",
    sourcePath: "/contact/",
    highlights: [
      "Email: zakladnaskola@dolnesaliby.sk",
      "Telefón: +421 31 785 3210",
      "Mobil: 0905 649 705 / riaditeľka školy",
    ],
  },
];

export function getModuleBySlug(slug: string) {
  return edupageModules.find((module) => module.slug === slug);
}
