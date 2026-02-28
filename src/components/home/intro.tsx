import { BookOpen, Users, School } from "lucide-react";

import { getSchoolStats } from "@/lib/school-data";
import { contactDetails } from "@/lib/site";

const statIcons = [
  { icon: Users, label: "Učiteľov" },
  { icon: School, label: "Tried" },
  { icon: BookOpen, label: "Predmetov" },
] as const;

export function IntroSection() {
  const stats = getSchoolStats();
  const statValues = [stats.teacherCount, stats.classCount, stats.subjectCount];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text content */}
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wider text-ocean uppercase">
            O našej škole
          </p>
          <h2 className="mb-4 font-serif text-3xl leading-tight font-bold md:text-4xl">
            Škola s tradíciou a srdcom
          </h2>
          <div className="section-divider mb-6" />
          <p className="mb-4 leading-relaxed text-muted">
            Základná škola s materskou školou v Dolných Salibách poskytuje
            kvalitné vzdelanie deťom v priateľskom a bezpečnom prostredí.
            Pod vedením {contactDetails.principal} sa zameriavame na
            individuálny prístup ku každému žiakovi.
          </p>
          <p className="leading-relaxed text-muted">
            Naša škola ponúka moderné vyučovacie metódy, bohatú mimoškolskú
            činnosť a starostlivý kolektív pedagógov. Veríme, že každé dieťa
            má potenciál, ktorý mu pomáhame rozvíjať.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {statIcons.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`card-hover rounded-2xl border border-border bg-white p-6 text-center shadow-sm ${
                i === 0 ? "stagger-1" : i === 1 ? "stagger-2" : "stagger-3"
              }`}
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-ocean-light text-ocean">
                <Icon className="h-6 w-6" />
              </div>
              <div className="font-serif text-3xl font-bold text-ocean">
                {statValues[i]}
              </div>
              <div className="mt-1 text-sm font-medium text-muted">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
