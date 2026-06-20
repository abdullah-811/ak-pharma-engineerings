import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Target, Compass, Gem } from "lucide-react";

export const Route = createFileRoute("/vision-mission")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — AK Pharma Engineering" },
      { name: "description", content: "The vision, mission and core values that guide AK Pharma Engineering's pharmaceutical machinery and tooling business." },
      { property: "og:title", content: "Vision & Mission — AK Pharma Engineering" },
      { property: "og:url", content: "/vision-mission" },
    ],
    links: [{ rel: "canonical", href: "/vision-mission" }],
  }),
  component: VisionMission,
});

const values = [
  { title: "Integrity", desc: "Honest specifications, transparent pricing, on-time delivery." },
  { title: "Precision", desc: "Micron-level tolerances and validated quality on every build." },
  { title: "Partnership", desc: "Lifetime support for the machines and tooling we deliver." },
  { title: "Innovation", desc: "Continuous improvement in design, materials and processes." },
  { title: "Compliance", desc: "Engineering aligned with cGMP and global regulatory standards." },
  { title: "Safety", desc: "Operator safety and product integrity built into every design." },
];

function VisionMission() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Direction" title="Vision, Mission & Core Values" />
      <section className="py-16 md:py-24">
        <div className="container-page grid md:grid-cols-2 gap-6">
          <div className="bg-brand-gradient text-white rounded-2xl p-8 md:p-10 shadow-brand">
            <Compass className="w-10 h-10 mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-bold">Our Vision</h2>
            <p className="mt-4 text-white/90 leading-relaxed">
              To be a globally recognized name in pharmaceutical engineering — a trusted Pakistani manufacturer delivering machinery, tooling and turnkey solutions that empower pharmaceutical companies worldwide to produce safe, high-quality medicines.
            </p>
          </div>
          <div className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-card">
            <Target className="w-10 h-10 mb-4 text-brand" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-brand-deep">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To engineer and supply reliable, GMP-aligned pharmaceutical machinery and precision tooling — supported by responsive service, validation documentation and lifelong partnership — at a value that opens international quality to every manufacturer.
            </p>
          </div>
        </div>
        <div className="container-page mt-16">
          <div className="text-center max-w-2xl mx-auto">
            <Gem className="w-10 h-10 text-brand mx-auto" />
            <h3 className="mt-3 text-2xl md:text-3xl font-display font-bold text-brand-deep">Core Values</h3>
            <p className="mt-2 text-muted-foreground">The principles that guide every project at AK Pharma Engineering.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-border rounded-xl p-6 shadow-card hover:border-brand/30 transition">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand">Value</div>
                <h4 className="mt-1 text-lg font-display font-bold text-brand-deep">{v.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
