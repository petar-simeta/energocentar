import { Shield, Clock, Award, Users } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "500+",
    label: "izrađenih energetskih certifikata i procjena",
  },
  {
    icon: Clock,
    value: "48h",
    label: "prosječno vrijeme izrade certifikata",
  },
  {
    icon: Users,
    value: "100%",
    label: "zakonski važeći dokumenti",
  },
  {
    icon: Shield,
    value: "10+",
    label: "godina iskustva u struci",
  },
];

export function TrustSection() {
  return (
    <section className="border-y border-border bg-card py-16">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
            Zašto odabrati nas?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Ovlaštena izrada energetskih certifikata i procjena nekretnina uz
            jasno definirane rokove, transparentne cijene i dugogodišnje
            iskustvo na području Zagreba i Hrvatske.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-4 font-display text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
