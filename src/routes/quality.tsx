import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ShieldCheck, ClipboardCheck, FlaskConical, Boxes } from "lucide-react";
import qa from "@/assets/quality-lab.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Assurance — AK Pharma Engineering" },
      { name: "description", content: "Quality assurance, GMP-aligned engineering and validation documentation at AK Pharma Engineering." },
      { property: "og:title", content: "Quality Assurance — AK Pharma Engineering" },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: Quality,
});

const pillars = [
  { icon: ShieldCheck, title: "GMP-Aligned Design", desc: "Materials, surface finishes and ergonomics designed around cGMP." },
  { icon: ClipboardCheck, title: "Validation Documentation", desc: "URS, DQ, IQ, OQ and PQ packs available with every machine." },
  { icon: FlaskConical, title: "Material Traceability", desc: "Mill certificates and inspection reports on critical components." },
  { icon: Boxes, title: "FAT & SAT Testing", desc: "Factory and site acceptance tests verified against agreed criteria." },
];

function Quality() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Quality Assurance" title="Engineered to GMP. Verified before it leaves our floor." subtitle="Quality is built into every stage — from material selection and machining to assembly, testing and validation." />
      <section className="py-16 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img src={qa} alt="Pharmaceutical quality control" width={1600} height={900} loading="lazy" className="rounded-xl shadow-card w-full h-auto object-cover" />
          <div>
            <h2 className="text-3xl font-display font-bold text-brand-deep">A culture of precision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Pharmaceutical machinery must run reliably for years and produce packaging that protects patients. Our quality system covers incoming materials, in-process machining checks, sub-assembly testing, full-machine FAT and post-installation validation. We document everything — so audits, regulators and your QA team get answers fast.
            </p>
          </div>
        </div>
        <div className="container-page mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white border border-border rounded-xl p-6 shadow-card hover:border-brand/30 hover:shadow-brand transition">
              <p.icon className="w-7 h-7 text-brand" />
              <h3 className="mt-4 font-display font-bold text-brand-deep">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
