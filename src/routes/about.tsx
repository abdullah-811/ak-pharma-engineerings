import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { CheckCircle2 } from "lucide-react";
import workshop from "@/assets/about-workshop.jpg";
import { company, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AK Pharma Engineering" },
      { name: "description", content: "Learn about AK Pharma Engineering, a Faisalabad-based pharmaceutical machinery and tooling manufacturer serving GMP industries worldwide." },
      { property: "og:title", content: "About AK Pharma Engineering" },
      { property: "og:description", content: "Pharmaceutical machinery and tooling manufacturer, Faisalabad, Pakistan." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A Pakistani pharmaceutical engineering company built on precision and trust."
        subtitle="From our Faisalabad headquarters, AK Pharma Engineering delivers world-class pharmaceutical machinery, tooling and turnkey projects."
      />
      <section className="py-16 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img src={workshop} alt="AK Pharma Engineering workshop" width={1600} height={900} loading="lazy" className="rounded-xl shadow-card w-full h-auto object-cover" />
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-deep">Our Story</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              AK Pharma Engineering was established with one purpose: to deliver dependable pharmaceutical machinery, precision tooling and engineering services that meet international GMP standards while remaining accessible to manufacturers across Pakistan and emerging markets.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Under the leadership of CEO <strong>{company.ceo}</strong> and management of <strong>{company.management}</strong>, our team combines decades of hands-on experience in pharmaceutical packaging, tablet compression, sachet filling and supporting utilities. Every machine, die and component we ship reflects this discipline.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Specialists in blister, strip, sachet, tablet and tooling systems",
                "In-house CNC machining and assembly",
                "Validation documentation aligned with cGMP",
                "Lifecycle support — installation to overhaul",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-16 bg-secondary/40">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-xl border border-border p-6 text-center shadow-card">
              <div className="text-3xl md:text-4xl font-display font-bold text-brand-deep">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
