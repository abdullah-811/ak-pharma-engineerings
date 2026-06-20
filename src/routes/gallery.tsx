import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { products } from "@/data/site";
import hero from "@/assets/hero-facility.jpg";
import workshop from "@/assets/about-workshop.jpg";
import qa from "@/assets/quality-lab.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — AK Pharma Engineering" },
      { name: "description", content: "Photo gallery of AK Pharma Engineering machinery, tooling and manufacturing facility." },
      { property: "og:title", content: "Gallery — AK Pharma Engineering" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const items = [
    { src: hero, label: "Production Facility" },
    { src: workshop, label: "Assembly Workshop" },
    { src: qa, label: "Quality Control Lab" },
    ...products.map((p) => ({ src: p.image, label: p.name })),
  ];
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="Inside AK Pharma Engineering" subtitle="A look at our machines, tooling, facility and people." />
      <section className="py-16 md:py-20">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-xl bg-secondary border border-border">
              <img src={it.src} alt={it.label} loading="lazy" className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/40 to-transparent p-4">
                <span className="text-white text-sm font-semibold">{it.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
