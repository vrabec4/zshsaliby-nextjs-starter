export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { label: "Domov", href: "/" },
  { label: "O škole", href: "/school" },
  { label: "Novinky", href: "/news" },
  {
    label: "Vzdelávanie",
    href: "/timetable",
    children: [
      { label: "Rozvrh", href: "/timetable" },
      { label: "Suplovanie", href: "/substitution" },
      { label: "Predmety", href: "/subjects" },
      { label: "Triedy", href: "/forms" },
      { label: "Učebne", href: "/classrooms" },
    ],
  },
  { label: "Učitelia", href: "/teachers" },
  {
    label: "Aktivity",
    href: "/calendar",
    children: [
      { label: "Kalendár", href: "/calendar" },
      { label: "Krúžky", href: "/kruzky" },
      { label: "Fotoalbum", href: "/album" },
      { label: "Knižnica", href: "/library" },
    ],
  },
  { label: "Kontakt", href: "/contact" },
];

export const footerNav = {
  quickLinks: [
    { label: "Domov", href: "/" },
    { label: "O škole", href: "/school" },
    { label: "Novinky", href: "/news" },
    { label: "Učitelia", href: "/teachers" },
    { label: "Kontakt", href: "/contact" },
  ],
  education: [
    { label: "Rozvrh", href: "/timetable" },
    { label: "Suplovanie", href: "/substitution" },
    { label: "Predmety", href: "/subjects" },
    { label: "Triedy", href: "/forms" },
    { label: "Učebne", href: "/classrooms" },
  ],
  activities: [
    { label: "Kalendár", href: "/calendar" },
    { label: "Krúžky", href: "/kruzky" },
    { label: "Fotoalbum", href: "/album" },
    { label: "Knižnica", href: "/library" },
  ],
};
