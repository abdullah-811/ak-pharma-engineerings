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
      <section className="py-16 md:py-20">
        <div className="container-page grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-white border border-border rounded-xl p-6 shadow-card hover:border-brand/30 hover:shadow-brand transition">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand"><MapPin className="w-3.5 h-3.5" /> Project</div>
              <h3 className="mt-2 font-display font-bold text-brand-deep text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
