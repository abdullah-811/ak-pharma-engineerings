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
      <section className="py-16 sm:py-24 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-7 sm:gap-8">
          <div className="bg-brand-gradient text-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-brand">
            <Compass className="w-12 h-12 mb-6 sm:mb-7" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">Our Vision</h2>
            <p className="mt-5 sm:mt-6 text-white/90 leading-relaxed text-base sm:text-lg">
              To be a globally recognized name in pharmaceutical engineering — a trusted Pakistani manufacturer delivering machinery, tooling and turnkey solutions that empower pharmaceutical companies worldwide to produce safe, high-quality medicines.
            </p>
          </div>
          <div className="bg-white border border-border rounded-3xl p-8 sm:p-10 md:p-12 shadow-card">
            <Target className="w-12 h-12 mb-6 sm:mb-7 text-brand" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-deep">Our Mission</h2>
            <p className="mt-5 sm:mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
              To engineer and supply reliable, GMP-aligned pharmaceutical machinery and precision tooling — supported by responsive service, validation documentation and lifelong partnership — at a value that opens international quality to every manufacturer.
            </p>
          </div>
        </div>
        <div className="container-page mt-20 sm:mt-24 md:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <Gem className="w-12 h-12 text-brand mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-deep">Core Values</h3>
            <p className="mt-3 sm:mt-4 text-muted-foreground text-base">The principles that guide every project at AK Pharma Engineering.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-border rounded-2xl p-6 sm:p-7 shadow-card hover:border-brand/30 hover:shadow-brand transition-all duration-300 group"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-brand">Value</div>
                <h4 className="mt-3 text-lg sm:text-xl font-display font-bold text-brand-deep group-hover:text-brand transition-colors">{v.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
