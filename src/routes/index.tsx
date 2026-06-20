import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle, Package, CheckCircle2, Factory, ShieldCheck, Wrench, Award } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { company, products, stats } from "@/data/site";
import hero from "@/assets/hero-facility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AK Pharma Engineering — Pharmaceutical Machinery & Tooling | Faisalabad, Pakistan" },
      { name: "description", content: "AK Pharma Engineering manufactures blister packing, strip packing, sachet, tablet press machines and precision tooling for pharmaceutical industry. Faisalabad, Pakistan." },
      { property: "og:title", content: "AK Pharma Engineering — Pharmaceutical Machinery & Tooling" },
      { property: "og:description", content: "GMP-aligned pharmaceutical engineering and machinery solutions from Faisalabad, Pakistan." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        {hero && (
          <div className="absolute inset-0 opacity-30">
            <img src={hero} alt="" width={1920} height={1080} className="w-full h-full object-cover mix-blend-overlay" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-brand-deep/30 to-transparent" />
        <div className="container-page relative py-16 sm:py-24 md:py-32 lg:py-40 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium uppercase tracking-wider mb-4 sm:mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> GMP-aligned • Faisalabad, Pakistan
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight animate-fade-up leading-tight">
            AK Pharma <span className="text-white/80">Engineering</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-3xl animate-fade-up leading-relaxed">
            {company.tagline}. Precision machinery, tooling and turnkey engineering for the world's pharmaceutical manufacturers.
          </p>
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-white/70 animate-fade-up">
            CEO: <span className="font-semibold text-white">{company.ceo}</span>
          </div>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 animate-fade-up">
            <Link to="/products" className="inline-flex items-center justify-center gap-2 bg-white text-brand-deep font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg shadow-brand hover:bg-white/90 transition w-full sm:w-auto text-sm sm:text-base">
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-brand text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-white/20 hover:bg-brand/90 transition w-full sm:w-auto text-sm sm:text-base">
              Contact Us
            </Link>
            <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg hover:opacity-95 transition w-full sm:w-auto text-sm sm:text-base">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-white/20 hover:bg-white/20 transition w-full sm:w-auto text-sm sm:text-base">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-white">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats && stats.length > 0 ? (
            stats.map((s) => (
              <div key={s.label} className="py-6 sm:py-8 text-center px-2 sm:px-3">
                <div className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-brand-deep">{s.value}</div>
                <div className="mt-1 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-muted-foreground line-clamp-2">{s.label}</div>
              </div>
            ))
          ) : null}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-2 sm:mb-3">Who We Are</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-deep leading-tight">
              Engineering pharmaceutical excellence from Pakistan to the world.
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              AK Pharma Engineering is a specialized manufacturer of pharmaceutical packaging and processing machinery. From our facility in Faisalabad, we deliver blister packing lines, tablet presses, sachet machines, precision tooling and complete turnkey projects to GMP-regulated industries across Asia, the Middle East and Africa.
            </p>
            <ul className="mt-5 sm:mt-6 space-y-2">
              {[
                "In-house design, fabrication and validation",
                "OEM-equivalent dies and rotary tooling",
                "Installation, commissioning and operator training",
                "Local engineering, international standards",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-brand shrink-0 mt-0.5" /> <span>{x}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-brand-deep font-semibold hover:gap-3 transition-all text-sm sm:text-base">
              Learn more about AK Pharma <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 md:mt-0">
            {[
              { icon: Factory, label: "Manufacturing" },
              { icon: Wrench, label: "Engineering" },
              { icon: ShieldCheck, label: "Quality" },
              { icon: Award, label: "Excellence" },
            ].map((x) => (
              <div key={x.label} className="aspect-square rounded-xl bg-secondary border border-border p-4 sm:p-6 flex flex-col justify-between hover:shadow-brand hover:border-brand/30 transition">
                <x.icon className="w-6 sm:w-8 h-6 sm:h-8 text-brand" />
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">AK Pharma</div>
                  <div className="text-base sm:text-lg font-display font-bold text-brand-deep">{x.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-16 sm:py-20 md:py-28 bg-secondary/40">
        <div className="container-page">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand mb-2">Our Range</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-deep">Pharmaceutical Machinery & Tooling</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-2 text-brand-deep font-semibold hover:gap-3 transition-all text-sm sm:text-base whitespace-nowrap">
              View all products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {products && products.length > 0 ? (
              products.slice(0, 6).map((p) => (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-brand hover:border-brand/30 transition flex flex-col h-full"
                >
                  <div className="aspect-[4/3] bg-secondary overflow-hidden">
                    <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-brand font-semibold uppercase tracking-wider mb-2">
                      <Package className="w-3 sm:w-3.5 h-3 sm:h-3.5" /> Pharma Machinery
                    </div>
                    <h3 className="font-display font-bold text-brand-deep text-base sm:text-lg line-clamp-1">{p.name}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 flex-1">{p.short}</p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No products available</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container-page">
          <div className="bg-brand-gradient rounded-2xl p-6 sm:p-8 md:p-12 lg:p-14 text-white shadow-brand relative overflow-hidden">
            <div className="grid-bg absolute inset-0 opacity-10" />
            <div className="relative md:flex items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-display font-bold leading-tight">Ready to upgrade your production line?</h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/85">Talk to our engineers about machines, tooling, retrofits or full turnkey projects.</p>
              </div>
              <div className="mt-5 sm:mt-6 md:mt-0 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-brand-deep font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg hover:bg-white/90 transition w-full sm:w-auto text-sm sm:text-base">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-white/30 hover:bg-white/20 transition w-full sm:w-auto text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
