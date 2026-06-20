import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle, Phone, Wrench, Factory, Box, ShieldCheck } from "lucide-react";
import { products, company } from "@/data/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — AK Pharma Engineering" }] };
    return {
      meta: [
        { title: `${p.name} — AK Pharma Engineering` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — AK Pharma Engineering` },
        { property: "og:description", content: p.short },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${p.slug}` },
        { property: "og:image", content: p.image },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-display font-bold text-brand-deep">Product not found</h1>
        <Link to="/products" className="mt-4 inline-flex items-center gap-2 text-brand font-semibold">
          <ArrowLeft className="w-4 h-4" /> Back to products
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="container-page py-24 text-center">
        <h1 className="text-3xl font-display font-bold text-brand-deep">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </SiteLayout>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const idx = products.findIndex((p) => p.slug === product.slug);
  const next = products[(idx + 1) % products.length];

  return (
    <SiteLayout>
      <section className="bg-hero-gradient text-white relative overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-20" />
        <div className="container-page relative py-10 sm:py-12 md:py-20 grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          <div>
            <Link to="/products" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs sm:text-sm mb-3 sm:mb-4">
              <ArrowLeft className="w-4 h-4" /> All products
            </Link>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Pharmaceutical Machinery</div>
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-5xl font-display font-bold leading-tight">{product.name}</h1>
            <p className="mt-3 sm:mt-4 text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">{product.short}</p>
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-brand-deep font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg hover:bg-white/90 transition w-full sm:w-auto text-sm sm:text-base">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello AK Pharma, I'd like a quote for the ${product.name}.`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg hover:opacity-95 transition w-full sm:w-auto text-sm sm:text-base">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-white/20 hover:bg-white/20 transition w-full sm:w-auto text-sm sm:text-base">
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-2 sm:p-3 shadow-brand mt-6 md:mt-0">
            <img src={product.image} alt={product.name} width={1024} height={768} className="w-full h-auto rounded-lg object-cover" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container-page grid lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          <div className="lg:col-span-2 space-y-10 sm:space-y-12">
            <Block title="Product Overview" icon={Box}>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{product.overview}</p>
            </Block>
            <Block title="Features" icon={Wrench}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"><CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-brand shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
            </Block>
            <Block title="Benefits" icon={ShieldCheck}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.benefits.map((f: string) => (
                  <li key={f} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"><CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-brand shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
            </Block>
            <Block title="Technical Specifications" icon={Factory}>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-xs sm:text-sm">
                  <tbody>
                    {product.specs.map((s: { label: string; value: string }, i: number) => (
                      <tr key={s.label} className={i % 2 ? "bg-secondary/40" : "bg-white"}>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 font-medium text-brand-deep w-1/2">{s.label}</td>
                        <td className="px-3 sm:px-4 py-2 sm:py-3 text-muted-foreground">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>
            <Block title="Applications & Industry Use Cases">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-2 sm:mb-3">Applications</div>
                  <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    {product.applications.map((a: string) => <li key={a}>• {a}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-2 sm:mb-3">Industries</div>
                  <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                    {product.industries.map((a: string) => <li key={a}>• {a}</li>)}
                  </ul>
                </div>
              </div>
            </Block>
            <Block title="Maintenance Information">
              <ul className="space-y-2">
                {product.maintenance.map((m: string) => (
                  <li key={m} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm"><CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-brand shrink-0 mt-0.5" />{m}</li>
                ))}
              </ul>
            </Block>
          </div>

          <aside className="space-y-5 sm:space-y-6 mt-8 lg:mt-0">
            <div className="bg-brand-gradient text-white rounded-2xl p-5 sm:p-6 shadow-brand">
              <h3 className="text-lg sm:text-xl font-display font-bold">Request Information</h3>
              <p className="mt-2 text-white/80 text-xs sm:text-sm">Get specifications, pricing and lead time for the {product.name}.</p>
              <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-3">
                <a href={`mailto:${company.email}?subject=${encodeURIComponent("Enquiry: " + product.name)}`} className="block text-center bg-white text-brand-deep font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-white/90 transition text-xs sm:text-sm">
                  Email Us
                </a>
                <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello AK Pharma, please share details for ${product.name}.`)}`} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#25D366] text-white font-semibold py-2 sm:py-2.5 rounded-lg hover:opacity-95 transition text-xs sm:text-sm">
                  WhatsApp Us
                </a>
                <a href={`tel:${company.phoneRaw}`} className="block text-center bg-white/10 border border-white/30 text-white font-semibold py-2 sm:py-2.5 rounded-lg hover:bg-white/20 transition text-xs sm:text-sm">
                  {company.phone}
                </a>
              </div>
            </div>
            <Link to="/products/$slug" params={{ slug: next.slug }} className="block bg-white border border-border rounded-2xl p-5 sm:p-6 hover:border-brand/30 hover:shadow-brand transition">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-1.5 sm:mb-2">Next Product</div>
              <div className="font-display font-bold text-brand-deep text-sm sm:text-lg">{next.name}</div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{next.short}</div>
              <div className="mt-2 sm:mt-3 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand">Explore <ArrowRight className="w-4 h-4" /></div>
            </Link>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Block({ title, icon: Icon, children }: { title: string; icon?: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        {Icon && <Icon className="w-4 sm:w-5 h-4 sm:h-5 text-brand shrink-0" />}
        <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-brand-deep">{title}</h2>
      </div>
      {children}
    </div>
  );
}
