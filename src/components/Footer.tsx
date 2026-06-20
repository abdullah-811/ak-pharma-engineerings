import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { company, navLinks, products } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo size={48} variant="light" />
          <p className="text-sm text-white/70 leading-relaxed">
            {company.tagline}. Precision engineered pharmaceutical machinery built in Pakistan for the world.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {navLinks.slice(0, 6).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 hover:text-white transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="text-white/70 hover:text-white transition line-clamp-1"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />{company.address}</li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0" /><a href={`tel:${company.phoneRaw}`} className="hover:text-white">{company.phone}</a></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 shrink-0" /><a href={`mailto:${company.email}`} className="hover:text-white break-all">{company.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/60">
          <div>© {new Date().getFullYear()} AK Pharma Engineering. All rights reserved.</div>
          <div>CEO: {company.ceo} • Management: {company.management}</div>
        </div>
      </div>
    </footer>
  );
}
