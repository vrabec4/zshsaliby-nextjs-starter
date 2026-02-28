export type ContentCard = {
  title: string;
  text: string;
};

export type SectionSource = {
  label: string;
  url: string;
};

export type SectionContent = {
  title: string;
  lead: string;
  highlights: string[];
  cards: ContentCard[];
  notices: string[];
  sources: SectionSource[];
};

export const sectionContent: Record<
  "school" | "news" | "calendar" | "timetable" | "teachers" | "kruzky" | "contact",
  SectionContent
> = {
  school: {
    title: "O skole",
    lead:
      "Podstranka O skole na EduPage uvadza zakladne informacie o institucii: Zakladna skola s materskou skolou, Dolne Saliby 19.",
    highlights: [
      "Nazov skoly: Zakladna skola s materskou skolou, Dolne Saliby",
      "Adresa: Dolne Saliby 19, 925 02 Dolne Saliby",
      "Hlavna orientacia webu: rozvrh, suplovanie, novinky a skolske moduly",
    ],
    cards: [
      {
        title: "Identita skoly",
        text: "EduPage obsahuje nazov skoly a lokalitu v hlavicke aj v kontaktnom module.",
      },
      {
        title: "Navigacna struktura",
        text: "Vo verejnom menu su dostupne sekcie Kontakt, O skole, Novinky, Kalendar, Rozvrh, Suplovanie, Ucitelia, Triedy, Predmety, Ucebne, Knihnica a Kruzky.",
      },
      {
        title: "Ucel stranky",
        text: "Na uvodnej stranke je uvedene, ze sluzi na publikovanie rozvrhov, suplovania a uzitocnych informacii o skole.",
      },
    ],
    notices: [
      "Obsah tejto sekcie je prevzaty z /about/ a hlavnej stranky EduPage.",
      "Pri migracii sa odporuca doplnit aj historiu skoly a profilove udaje do samostatnych CMS poli.",
    ],
    sources: [
      { label: "Hlavna stranka", url: "https://zsdolnesaliby.edupage.org/" },
      { label: "O skole", url: "https://zsdolnesaliby.edupage.org/about/" },
    ],
  },
  news: {
    title: "Novinky",
    lead:
      "Sekcia Novinky na EduPage sluzi na zverejnovanie oznamov a internych smernic. Obsahuje skolsku komunikaciu a priebezne informacie.",
    highlights: [
      "Publikovanie aktualnych oznamov pre rodicov a ziakov",
      "Viditelna nadvaznost na kalendar a prevadzkove informacie",
      "Novinky su hlavnym komunikacnym kanalom webu",
    ],
    cards: [
      {
        title: "Typ obsahu",
        text: "Na stranke Novinky su publikovane textove prispevky, oznamy a dokumentacne informacie spojene s prevadzkou skoly.",
      },
      {
        title: "Cielova skupina",
        text: "Obsah je urceny pre rodicov, ziakov a pedagogov a doplna rozvrhove a kalendarne informacie.",
      },
      {
        title: "Publikacny tok",
        text: "Pri redizajne odporucame ponechat Novinky ako centralny feed a doplnit tagy (napr. podujatia, organizacia, upozornenia).",
      },
    ],
    notices: [
      "Novinky tvoria dolezity verejny modul EduPage a maju byt priorita pri migracii.",
      "Textove prispevky je vhodne migrovat do strukturovaneho modelu s datumom a kategoriou.",
    ],
    sources: [
      { label: "Novinky", url: "https://zsdolnesaliby.edupage.org/news/" },
    ],
  },
  calendar: {
    title: "Kalendar",
    lead:
      "Kalendar na EduPage je samostatny modul pre terminy skolskych aktivit a orientaciu v planovani.",
    highlights: [
      "Samostatna kalendarna podstranka",
      "Prepojenie na orientaciu v skolskom roku",
      "Podpora pravidelnej komunikacie terminov",
    ],
    cards: [
      {
        title: "Uloha kalendara",
        text: "Kalendar doplna Novinky a poskytuje casovy prehlad udalosti, prazdnin a aktivit.",
      },
      {
        title: "Priestor pre modernizaciu",
        text: "Odporuca sa doplnit filtraciu podla typov udalosti (rodicia, ziaci, interni zamestnanci).",
      },
      {
        title: "Migracna priorita",
        text: "Kalendar je klucovy funkcny modul, preto by mal byt dostupny uz v prvej verejnej verzii noveho webu.",
      },
    ],
    notices: [
      "Sekcia vychadza priamo z verejneho modulu /calendar/ na EduPage.",
      "Pri implementacii sa odporuca podporit export/odber kalendara.",
    ],
    sources: [
      { label: "Kalendar", url: "https://zsdolnesaliby.edupage.org/calendar/" },
    ],
  },
  timetable: {
    title: "Rozvrh a suplovanie",
    lead:
      "EduPage poskytuje samostatne moduly Rozvrh a Suplovanie. Rozvrh je dostupny cez aSc modul, suplovanie ako samostatna podstranka.",
    highlights: [
      "Rozvrh: /timetable/",
      "Suplovanie: /substitution/",
      "Zameranie webu explicitne uvadza rozvrhy a aktualne suplovanie",
    ],
    cards: [
      {
        title: "Rozvrh",
        text: "Rozvrh je publikovany cez modul aSc Rozvrhy, ktory je standardom pre skolsku organizaciu hodin.",
      },
      {
        title: "Suplovanie",
        text: "Suplovanie je oddelena stranka, co umoznuje rychly prehlad dennych zmien vo vyucovani.",
      },
      {
        title: "Prevadzkovy vyznam",
        text: "Tieto dve sekcie patria medzi najdolezitejsie pre ziakov a rodicov a maju byt prominentne aj v novom webe.",
      },
    ],
    notices: [
      "Obsah je prevzaty z /timetable/, /substitution/ a z uvodnej textovej informacie na hlavnej stranke.",
      "Pri redizajne sa odporuca pridat stav dostupnosti a cas poslednej aktualizacie.",
    ],
    sources: [
      { label: "Rozvrh", url: "https://zsdolnesaliby.edupage.org/timetable/" },
      { label: "Suplovanie", url: "https://zsdolnesaliby.edupage.org/substitution/" },
      { label: "Hlavna stranka", url: "https://zsdolnesaliby.edupage.org/" },
    ],
  },
  teachers: {
    title: "Ucitelia, triedy, predmety a ucebne",
    lead:
      "EduPage ma oddelene moduly pre Ucitelov, Triedy, Predmety a Ucebne, co je vhodny zaklad pre strukturovane prezentovanie skoly.",
    highlights: [
      "Ucitelia: /teachers/",
      "Triedy: /forms/",
      "Predmety: /subjects/",
      "Ucebne: /classrooms/",
    ],
    cards: [
      {
        title: "Personalny prehlad",
        text: "Modul Ucitelia poskytuje centralny vstup k pedagogickemu timu a ich rozvrhovym vazbam.",
      },
      {
        title: "Struktura vyucby",
        text: "Moduly Triedy, Predmety a Ucebne tvoria jednotnu datovu vrstvu pre rozvrhove informacie.",
      },
      {
        title: "Migracny pristup",
        text: "Pri redizajne je vhodne zachovat tieto entity ako samostatne typy obsahu s prepojenim na rozvrh.",
      },
    ],
    notices: [
      "Sekcia je zostavena vylucne z verejnych modulov EduPage.",
      "Pri novom webe sa odporuca pridat vyhladavanie podla ucitela/triedy/predmetu.",
    ],
    sources: [
      { label: "Ucitelia", url: "https://zsdolnesaliby.edupage.org/teachers/" },
      { label: "Triedy", url: "https://zsdolnesaliby.edupage.org/forms/" },
      { label: "Predmety", url: "https://zsdolnesaliby.edupage.org/subjects/" },
      { label: "Ucebne", url: "https://zsdolnesaliby.edupage.org/classrooms/" },
    ],
  },
  kruzky: {
    title: "Kruzky",
    lead:
      "EduPage obsahuje samostatnu podstranku Kruzky. V modernizovanej strukture zostava ako samostatna sekcia pre mimo-vyucovacie aktivity.",
    highlights: [
      "Samostatny modul Kruzky",
      "Vhodne miesto pre priebeznu aktualizaciu ponuky",
      "Priestor pre prehlad registracie a terminov",
    ],
    cards: [
      {
        title: "Dostupnost modulu",
        text: "Kruzky su na webe dostupne cez verejnu navigaciu, co potvrdzuje ich dolezitost v strukture stranky.",
      },
      {
        title: "Obsahovy model",
        text: "Odporuca sa strukturovat kruzok ako entitu: nazov, veduci, cielova skupina, termin, miesto.",
      },
      {
        title: "Napojenie na kalendar",
        text: "Udalosti kruzkov je vhodne prepojit s kalendarom, aby boli terminy viditelne na jednom mieste.",
      },
    ],
    notices: [
      "Sekcia vychadza z podstranky /kruzky/ na EduPage.",
      "Pri migracii sa odporuca doplnit archiv starsich kruzkovych aktivit.",
    ],
    sources: [
      { label: "Kruzky", url: "https://zsdolnesaliby.edupage.org/kruzky/" },
    ],
  },
  contact: {
    title: "Kontakt",
    lead:
      "Kontaktne udaje su prevzate zo stranky Kontakt na EduPage a z kontaktneho modulu na hlavnej stranke.",
    highlights: [
      "Adresa: Dolne Saliby 19, 925 02 Dolne Saliby",
      "Email: zakladnaskola@dolnesaliby.sk",
      "Telefon: +421 - 317853210",
      "Mobil: 0905649705 (riaditelka skoly PaedDr. Juliana Szecsenyiova)",
    ],
    cards: [
      {
        title: "Zakladna skola",
        text: "Kontaktna sekcia EduPage uvadza institucionalne udaje skoly a presnu adresu v obci Dolne Saliby.",
      },
      {
        title: "Telefon a email",
        text: "Na stranke kontakt je zverejneny telefonicky kontakt a email zakladnaskola@dolnesaliby.sk.",
      },
      {
        title: "Kontaktna osoba",
        text: "Kontaktna informacia obsahuje aj mobilny kontakt s oznacenim riaditelky skoly PaedDr. Juliany Szecsenyiovej.",
      },
    ],
    notices: [
      "Kontakty maju byt pri spusteni produkcie este raz overene priamo so skolou.",
      "Obsah tejto sekcie je zostaveny iba z EduPage zdroja.",
    ],
    sources: [
      { label: "Kontakt", url: "https://zsdolnesaliby.edupage.org/contact/" },
      { label: "Hlavna stranka", url: "https://zsdolnesaliby.edupage.org/" },
    ],
  },
};
