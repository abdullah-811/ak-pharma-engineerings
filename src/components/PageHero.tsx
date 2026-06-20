interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-hero-gradient text-white relative overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-10 md:opacity-15" />
      <div className="container-page relative py-16 sm:py-20 md:py-28 lg:py-36">
        {eyebrow && (
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/80 mb-4 sm:mb-5">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold max-w-3xl leading-tight">{title}</h1>
        {subtitle && (
          <p className="mt-4 sm:mt-6 text-white/85 text-base sm:text-lg md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
