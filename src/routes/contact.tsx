import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, User, MessageCircle, Download, FileText, Image } from "lucide-react";
import { company, products } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AK Pharma Engineering" },
      { name: "description", content: "Contact AK Pharma Engineering in Faisalabad, Pakistan for pharmaceutical machinery, tooling and engineering services." },
      { property: "og:title", content: "Contact — AK Pharma Engineering" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Talk to our engineering team" subtitle="We respond within one business day to enquiries about machinery, tooling, spares and projects." />
      <section className="py-16 sm:py-24 md:py-28">
        <div className="container-page grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div className="bg-white border border-border rounded-3xl shadow-card p-8 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-deep">Company Details</h2>
            <ul className="mt-8 sm:mt-10 space-y-6">
              <li className="flex gap-4"><MapPin className="w-5 h-5 text-brand mt-0.5 shrink-0 flex-none" /><div><div className="font-semibold text-brand-deep">Address</div><div className="text-muted-foreground text-sm mt-1 leading-relaxed">{company.address}</div></div></li>
              <li className="flex gap-4"><Phone className="w-5 h-5 text-brand mt-0.5 shrink-0 flex-none" /><div><div className="font-semibold text-brand-deep">Phone</div><a href={`tel:${company.phoneRaw}`} className="text-muted-foreground hover:text-brand text-sm mt-1 transition">{company.phone}</a></div></li>
              <li className="flex gap-4"><Mail className="w-5 h-5 text-brand mt-0.5 shrink-0 flex-none" /><div><div className="font-semibold text-brand-deep">Email</div><a href={`mailto:${company.email}`} className="text-muted-foreground hover:text-brand break-all text-sm mt-1 transition">{company.email}</a></div></li>
              <li className="flex gap-4"><User className="w-5 h-5 text-brand mt-0.5 shrink-0 flex-none" /><div><div className="font-semibold text-brand-deep">Leadership</div><div className="text-muted-foreground text-sm mt-1">CEO: {company.ceo}<br />Management: {company.management}</div></div></li>
            </ul>
            <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-lg hover:bg-[#20BA5D] hover:shadow-lg transition-all duration-200 text-sm min-h-11"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={`tel:${company.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200 text-sm min-h-11"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
            <a
              href="/ak-pharma-engineering-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-white border border-brand text-brand-deep font-semibold py-3 rounded-lg hover:bg-brand/5 hover:border-brand/60 transition-all duration-200 text-sm min-h-11"
            >
              <Download className="w-4 h-4" /> Download Company Profile
            </a>
          </div>

          <form
            className="bg-secondary/50 border border-border rounded-3xl p-8 sm:p-10 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const body = `Name: ${f.get("name")}\nCompany: ${f.get("company")}\nPhone: ${f.get("phone")}\n\nMessage:\n${f.get("message")}`;
              window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Website Enquiry — " + f.get("name"))}&body=${encodeURIComponent(body)}`;
            }}
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-deep">Send us a message</h2>
              <p className="text-muted-foreground text-sm mt-2">We'll get back to you shortly.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-transparent text-base placeholder:text-muted-foreground transition-all"
              />
              <input
                name="company"
                placeholder="Company"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-transparent text-base placeholder:text-muted-foreground transition-all"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-transparent text-base placeholder:text-muted-foreground transition-all"
              />
              <input
                name="phone"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-transparent text-base placeholder:text-muted-foreground transition-all"
              />
            </div>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="How can we help you?"
              className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-transparent text-base placeholder:text-muted-foreground transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full bg-brand-gradient text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 shadow-brand min-h-11"
            >
              Send Enquiry
            </button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you'll be redirected to your email client.</p>
          </form>
        </div>
      </section>

      <section className="py-16 sm:py-24 md:py-28 bg-secondary/40">
        <div className="container-page">
          <div className="mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-display font-bold text-brand-deep">Downloads & Resources</h2>
            <p className="mt-3 text-muted-foreground">Access our company profile and product documentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20">
            <div className="bg-white border border-border rounded-2xl p-8 sm:p-10 shadow-card hover:shadow-brand transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-8 h-8 text-brand shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-deep">Company Profile</h3>
                  <p className="text-sm text-muted-foreground mt-1">Download our detailed company information and credentials.</p>
                </div>
              </div>
              <a
                href="/ak-pharma-engineering-company-profile.pdf"
                download
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand/90 hover:shadow-lg transition-all duration-200 text-sm min-h-11"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 sm:p-10 shadow-card hover:shadow-brand transition-all duration-300">
              <div className="flex items-start gap-4 mb-6">
                <Image className="w-8 h-8 text-brand shrink-0" />
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-deep">Product Brochure</h3>
                  <p className="text-sm text-muted-foreground mt-1">Browse our complete product catalog with specifications.</p>
                </div>
              </div>
              <a
                href="/products"
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand/90 hover:shadow-lg transition-all duration-200 text-sm min-h-11"
              >
                <Image className="w-4 h-4" /> View Products
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-brand-deep mb-8">Featured Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {products && products.length > 0
                ? products.slice(0, 6).map((product) => (
                    <div key={product.slug} className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-brand hover:border-brand/30 transition-all duration-300">
                      <div className="aspect-[4/3] bg-secondary overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          width={600}
                          height={450}
                          className="w-full h-full object-cover hover:scale-110 transition duration-500"
                        />
                      </div>
                      <div className="p-5 sm:p-6">
                        <h4 className="font-display font-bold text-brand-deep text-base sm:text-lg line-clamp-2">{product.name}</h4>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2">{product.short}</p>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
