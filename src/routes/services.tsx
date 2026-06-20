import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Wrench } from "lucide-react";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AK Pharma Engineering" },
      { name: "description", content: "Engineering services from AK Pharma: manufacturing, tooling, installation, validation, AMC, training and turnkey project delivery." },
      { property: "og:title", content: "Services — AK Pharma Engineering" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="Engineering services across the full machine lifecycle" subtitle="From design and fabrication to commissioning, validation and long-term maintenance." />
      <section className="py-16 md:py-20">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-border rounded-xl p-6 shadow-card hover:border-brand/30 hover:shadow-brand transition">
              <div className="w-11 h-11 rounded-lg bg-brand-gradient text-white flex items-center justify-center"><Wrench className="w-5 h-5" /></div>
              <h3 className="mt-4 font-display font-bold text-brand-deep text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
