interface ServiceWhatIsProps {
  title: string;
  content: string[];
  highlightsTitle: string;
  highlights: string[];
  preparation?: {
    title: string;
    items: string[];
  };
}

export function ServiceWhatIs({
  title,
  content,
  highlightsTitle,
  highlights,
  preparation,
}: ServiceWhatIsProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {title}
            </h2>
            <div className="mt-6 space-y-4">
              {content.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights & Preparation */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {highlightsTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {highlights.map((highlight, index) => (
                  <li key={highlight} className="flex gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {preparation && (
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {preparation.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {preparation.items.map((item, index) => (
                    <li key={item} className="flex gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
