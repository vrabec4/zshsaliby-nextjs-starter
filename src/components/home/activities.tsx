import Link from "next/link";
import {
  Calendar,
  Palette,
  Camera,
  BookOpenCheck,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    icon: Calendar,
    title: "Kalendár udalostí",
    description: "Prehľad školských podujatí, prázdnin a dôležitých termínov.",
    href: "/calendar",
    color: "bg-ocean text-white",
  },
  {
    icon: Palette,
    title: "Krúžky",
    description: "Mimoškolské aktivity a záujmová činnosť pre rozvoj talentov.",
    href: "/kruzky",
    color: "bg-accent text-ink",
  },
  {
    icon: Camera,
    title: "Fotoalbum",
    description: "Fotodokumentácia školských akcií, výletov a podujatí.",
    href: "/album",
    color: "bg-emerald-600 text-white",
  },
  {
    icon: BookOpenCheck,
    title: "Knižnica",
    description: "Školská knižnica s čitateľskými aktivitami pre žiakov.",
    href: "/library",
    color: "bg-indigo-600 text-white",
  },
];

export function ActivitiesSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold tracking-wider text-ocean uppercase">
          Život školy
        </p>
        <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
          Aktivity a podujatia
        </h2>
        <div className="section-divider mx-auto mb-4" />
        <p className="mx-auto max-w-2xl text-muted">
          Okrem vyučovania ponúkame bohatý program aktivít, ktoré rozvíjajú
          záujmy a talenty našich žiakov.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <Link
              key={activity.href}
              href={activity.href}
              className="card-hover group rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${activity.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold group-hover:text-ocean transition-colors">
                {activity.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-muted">
                {activity.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-ocean">
                Zobraziť
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
