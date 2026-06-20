interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-hero-gradient text-white relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-20" />
      <div className="container-page relative py-12 sm:py-16 md:py-24 lg:py-32">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mb-2 sm:mb-3">
            {eyebrow}
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-bold max-w-3xl leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-3 sm:mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
