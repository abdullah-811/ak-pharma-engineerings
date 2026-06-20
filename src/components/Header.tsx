import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { navLinks, company } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur shadow-card" : "bg-white"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <Logo size={44} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-brand-deep transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-brand-deep" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${company.phoneRaw}`}
            className="hidden md:inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-semibold px-4 py-2.5 rounded-md shadow-brand hover:opacity-95 transition"
          >
            <Phone className="w-4 h-4" /> {company.phone}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container-page py-3 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 text-base font-medium text-foreground border-b border-border/60 last:border-0"
                activeProps={{ className: "py-3 text-base font-semibold text-brand-deep border-b border-border/60 last:border-0" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${company.phoneRaw}`}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-4 py-3 rounded-md"
            >
              <Phone className="w-4 h-4" /> Call {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
