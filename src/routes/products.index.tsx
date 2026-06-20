import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/site";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Pharmaceutical Machinery & Tooling — AK Pharma Engineering" },
      { name: "description", content: "Browse AK Pharma Engineering's full range of pharmaceutical machinery: blister, strip, sachet, tablet press, dies, punches, chillers and coding systems." },
      { property: "og:title", content: "Products — AK Pharma Engineering" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Products"
        title="Pharmaceutical Machinery & Precision Tooling"
        subtitle="A complete catalog engineered for blister, strip, sachet, tablet and supporting utility lines."
      />
      <section className="py-16 sm:py-20 md:py-28">
        <div className="container-page grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {products.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-brand hover:border-brand/30 transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-[4/3] bg-secondary overflow-hidden">
                <img src={p.image} alt={p.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-5 sm:p-6 lg:p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-brand-deep text-base sm:text-lg lg:text-lg line-clamp-2">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">{p.short}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand group-hover:gap-3 transition-all">
                  View details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
