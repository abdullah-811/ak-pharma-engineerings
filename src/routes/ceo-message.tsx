import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";
import { Quote } from "lucide-react";
import { company } from "@/data/site";

export const Route = createFileRoute("/ceo-message")({
  head: () => ({
    meta: [
      { title: "CEO Message — AK Pharma Engineering" },
      { name: "description", content: `Message from ${company.ceo}, CEO of AK Pharma Engineering — our vision for pharmaceutical engineering excellence.` },
      { property: "og:title", content: "CEO Message — AK Pharma Engineering" },
      { property: "og:url", content: "/ceo-message" },
    ],
    links: [{ rel: "canonical", href: "/ceo-message" }],
  }),
  component: CeoMessage,
});

function CeoMessage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Leadership" title="A message from our CEO" />
      <section className="py-16 md:py-24">
        <div className="container-page max-w-4xl">
          <div className="bg-white border border-border rounded-2xl shadow-card p-8 md:p-14 relative">
            <Quote className="absolute -top-5 -left-2 w-16 h-16 text-brand/15" />
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                It is an honor to lead AK Pharma Engineering, a company built on the conviction that pharmaceutical manufacturing in Pakistan deserves machinery and tooling of truly international quality.
              </p>
              <p>
                Every blister machine, every die set, every chiller we ship carries the responsibility of producing medicines that reach patients. That responsibility shapes how we design, how we machine, how we test, and how we support our clients long after commissioning.
              </p>
              <p>
                As we continue to grow across Pakistan and into export markets, our promise remains the same: honest engineering, transparent specifications, on-time delivery and lifetime partnership. Thank you for placing your trust in AK Pharma Engineering.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-border">
              <div className="text-xl font-display font-bold text-brand-deep">{company.ceo}</div>
              <div className="text-sm text-muted-foreground">Chief Executive Officer, AK Pharma Engineering</div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
