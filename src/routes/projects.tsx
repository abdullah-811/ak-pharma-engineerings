import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { MapPin } from "lucide-react";
import { projects } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — AK Pharma Engineering" },
      { name: "description", content: "Selected pharmaceutical machinery, tooling and turnkey projects delivered by AK Pharma Engineering across Pakistan and export markets." },
      { property: "og:title", content: "Projects — AK Pharma Engineering" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Projects" title="Selected projects & installations" subtitle="A snapshot of pharmaceutical engineering work delivered for clients across Pakistan and abroad." />
      <section className="py-16 sm:py-24 md:py-28">
        <div className="container-page grid md:grid-cols-2 gap-6 sm:gap-7">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-white border border-border rounded-2xl p-6 sm:p-7 shadow-card hover:border-brand/30 hover:shadow-brand transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand"><MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" /> Project</div>
              <h3 className="mt-4 font-display font-bold text-brand-deep text-lg sm:text-xl">{p.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
