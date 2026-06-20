import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { company, navLinks, products } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white mt-24 sm:mt-32">
      <div className="container-page py-16 sm:py-20 grid gap-12 sm:gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo size={48} variant="light" />
          <p className="text-sm text-white/75 leading-relaxed">
            {company.tagline}. Precision engineered pharmaceutical machinery built in Pakistan for the world.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            {navLinks.slice(0, 6).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/75 hover:text-white transition-colors duration-200">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Products</h4>
          <ul className="space-y-3 text-sm">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="text-white/75 hover:text-white transition-colors duration-200 line-clamp-2"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-1 shrink-0 flex-none" />
              <span className="text-white/75 leading-snug">{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-1 shrink-0 flex-none" />
              <a href={`tel:${company.phoneRaw}`} className="text-white/75 hover:text-white transition-colors">{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-1 shrink-0 flex-none" />
              <a href={`mailto:${company.email}`} className="text-white/75 hover:text-white break-all transition-colors">{company.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 sm:py-8 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} AK Pharma Engineering. All rights reserved.</div>
          <div className="text-center sm:text-right">CEO: {company.ceo} • Management: {company.management}</div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-4 sm:py-5 text-center text-xs text-white/50">
          Web Design by <span className="font-semibold text-white/70">Mr Abdullah</span>
        </div>
      </div>
    </footer>
  );
}
