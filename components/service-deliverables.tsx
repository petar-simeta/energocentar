import Image from "next/image";
import { CheckCircle } from "lucide-react";

interface ServiceDeliverablesProps {
  title: string;
  description: string;
  items: string[];
  image: string;
}

export function ServiceDeliverables({
  title,
  description,
  items,
  image,
}: ServiceDeliverablesProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>
            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
