import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, User, MessageCircle, Download } from "lucide-react";
import { company } from "@/data/site";

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
      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-2 gap-10">
          <div className="bg-white border border-border rounded-2xl shadow-card p-8">
            <h2 className="text-2xl font-display font-bold text-brand-deep">Company Details</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex gap-4"><MapPin className="w-5 h-5 text-brand mt-0.5" /><div><div className="font-semibold text-brand-deep">Address</div><div className="text-muted-foreground">{company.address}</div></div></li>
              <li className="flex gap-4"><Phone className="w-5 h-5 text-brand mt-0.5" /><div><div className="font-semibold text-brand-deep">Phone</div><a href={`tel:${company.phoneRaw}`} className="text-muted-foreground hover:text-brand">{company.phone}</a></div></li>
              <li className="flex gap-4"><Mail className="w-5 h-5 text-brand mt-0.5" /><div><div className="font-semibold text-brand-deep">Email</div><a href={`mailto:${company.email}`} className="text-muted-foreground hover:text-brand break-all">{company.email}</a></div></li>
              <li className="flex gap-4"><User className="w-5 h-5 text-brand mt-0.5" /><div><div className="font-semibold text-brand-deep">Leadership</div><div className="text-muted-foreground">CEO: {company.ceo}<br />Management: {company.management}</div></div></li>
            </ul>
            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-md hover:opacity-95 transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold py-3 rounded-md hover:opacity-95 transition">
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
            <a href="/ak-pharma-engineering-company-profile.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-white border border-brand text-brand-deep font-semibold py-3 rounded-md hover:bg-brand/5 transition">
              <Download className="w-4 h-4" /> Download Company Profile (PDF)
            </a>
          </div>

          <form
            className="bg-secondary/40 border border-border rounded-2xl p-8 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const body = `Name: ${f.get("name")}\nCompany: ${f.get("company")}\nPhone: ${f.get("phone")}\n\nMessage:\n${f.get("message")}`;
              window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Website Enquiry — " + f.get("name"))}&body=${encodeURIComponent(body)}`;
            }}
          >
            <h2 className="text-2xl font-display font-bold text-brand-deep">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40" />
              <input name="company" placeholder="Company" className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="email" type="email" required placeholder="Email" className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40" />
              <input name="phone" placeholder="Phone" className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40" />
            </div>
            <textarea name="message" rows={5} required placeholder="How can we help you?" className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-brand/40" />
            <button type="submit" className="w-full bg-brand-gradient text-white font-semibold py-3 rounded-md hover:opacity-95 transition shadow-brand">
              Send Enquiry
            </button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you'll be redirected to your email client.</p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
