interface ServiceWhatIsProps {
  title: string
  content: string[]
  highlights: string[]
}

export function ServiceWhatIs({ title, content, highlights }: ServiceWhatIsProps) {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <h2 className="font-sans text-3xl font-bold text-foreground sm:text-4xl text-balance">{title}</h2>
            <div className="mt-6 space-y-4">
              {content.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-sans text-xl font-semibold text-foreground">Kada vam je potrebno?</h3>
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
        </div>
      </div>
    </section>
  )
}
