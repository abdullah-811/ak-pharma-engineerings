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
        <div className="grid-bg absolute inset-0 opacity-10 md:opacity-15" />
        <div className="container-page relative py-14 sm:py-18 md:py-24 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div>
            <Link to="/products" className="inline-flex items-center gap-2 text-white/75 hover:text-white text-xs sm:text-sm mb-4 sm:mb-6 transition">
              <ArrowLeft className="w-4 h-4" /> All products
            </Link>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">Pharmaceutical Machinery</div>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight">{product.name}</h1>
            <p className="mt-5 sm:mt-6 text-white/90 text-base sm:text-lg md:text-lg leading-relaxed">{product.short}</p>
            <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-deep font-semibold px-6 sm:px-5 py-3 sm:py-3 rounded-lg hover:bg-white/90 hover:shadow-lg transition-all duration-200 min-h-11 sm:min-h-auto sm:w-auto text-sm sm:text-base"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello AK Pharma, I'd like a quote for the ${product.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-6 sm:px-5 py-3 sm:py-3 rounded-lg hover:bg-[#20BA5D] hover:shadow-lg transition-all duration-200 min-h-11 sm:min-h-auto sm:w-auto text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`tel:${company.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white/15 text-white font-semibold px-6 sm:px-5 py-3 sm:py-3 rounded-lg border border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-200 min-h-11 sm:min-h-auto sm:w-auto text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" /> Call
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-3 sm:p-4 shadow-brand mt-8 md:mt-0">
            <img src={product.image} alt={product.name} width={1024} height={768} className="w-full h-auto rounded-xl object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="container-page grid lg:grid-cols-3 gap-10 sm:gap-12 md:gap-14">
          <div className="lg:col-span-2 space-y-12 sm:space-y-14">
            <Block title="Product Overview" icon={Box}>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{product.overview}</p>
            </Block>
            <Block title="Features" icon={Wrench}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {product.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
            </Block>
            <Block title="Benefits" icon={ShieldCheck}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {product.benefits.map((f: string) => (
                  <li key={f} className="flex items-start gap-3 text-sm"><CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
            </Block>
            <Block title="Technical Specifications" icon={Factory}>
              <div className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((s: { label: string; value: string }, i: number) => (
                      <tr key={s.label} className={i % 2 ? "bg-secondary/40" : "bg-white"}>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 font-medium text-brand-deep w-1/2">{s.label}</td>
                        <td className="px-4 sm:px-6 py-3 sm:py-4 text-muted-foreground">{s.value}</td>
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

          <aside className="space-y-6 sm:space-y-7 mt-12 lg:mt-0">
            <div className="bg-brand-gradient text-white rounded-3xl p-7 sm:p-8 shadow-brand">
              <h3 className="text-xl sm:text-2xl font-display font-bold">Request Information</h3>
              <p className="mt-3 text-white/85 text-sm">Get specifications, pricing and lead time for the {product.name}.</p>
              <div className="mt-6 sm:mt-7 space-y-3">
                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent("Enquiry: " + product.name)}`}
                  className="block text-center bg-white text-brand-deep font-semibold py-3 rounded-lg hover:bg-white/90 hover:shadow-lg transition-all duration-200 text-sm min-h-11"
                >
                  Email Us
                </a>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(`Hello AK Pharma, please share details for ${product.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#25D366] text-white font-semibold py-3 rounded-lg hover:bg-[#20BA5D] hover:shadow-lg transition-all duration-200 text-sm min-h-11"
                >
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${company.phoneRaw}`}
                  className="block text-center bg-white/15 border border-white/40 text-white font-semibold py-3 rounded-lg hover:bg-white/25 hover:border-white/60 transition-all duration-200 text-sm min-h-11"
                >
                  {company.phone}
                </a>
              </div>
            </div>
            <Link
              to="/products/$slug"
              params={{ slug: next.slug }}
              className="block bg-white border border-border rounded-3xl p-7 sm:p-8 hover:border-brand/30 hover:shadow-brand transition-all duration-300 group"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Next Product</div>
              <div className="font-display font-bold text-brand-deep text-lg sm:text-xl">{next.name}</div>
              <div className="mt-3 text-sm text-muted-foreground line-clamp-2">{next.short}</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand group-hover:gap-3 transition-all">Explore <ArrowRight className="w-4 h-4" /></div>
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
      <div className="flex items-center gap-3 mb-5 sm:mb-6">
        {Icon && <Icon className="w-6 h-6 text-brand shrink-0" />}
        <h2 className="text-xl sm:text-2xl font-display font-bold text-brand-deep">{title}</h2>
      </div>
      {children}
    </div>
  );
}
