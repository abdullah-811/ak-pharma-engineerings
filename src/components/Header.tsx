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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
          : "bg-white/50 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Logo size={44} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-brand-deep transition-colors relative group"
              activeProps={{ className: "text-sm font-semibold text-brand-deep" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-deep transition-all duration-300 group-hover:w-full" />
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-deep scale-x-0 origin-left transition-transform duration-300 has-[&:active]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.phoneRaw}`}
            className="hidden md:inline-flex items-center gap-2 bg-brand-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-brand hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <Phone className="w-4 h-4" /> {company.phone}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2.5 rounded-lg hover:bg-secondary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/10 bg-white/50 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
          <nav className="container-page py-4 flex flex-col">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3.5 text-base font-medium text-foreground border-b border-border/5 last:border-0 hover:text-brand-deep transition-colors duration-200"
                activeProps={{ className: "py-3.5 text-base font-semibold text-brand-deep border-b border-border/5 last:border-0" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${company.phoneRaw}`}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-5 py-3 rounded-lg shadow-brand hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 w-full"
            >
              <Phone className="w-4 h-4" /> Call {company.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
