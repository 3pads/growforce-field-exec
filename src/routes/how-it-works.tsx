import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, SectionHead } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — GrowthForce Africa" },
      { name: "description", content: "From consultation to campaign closure — a clear seven-step process for managed field execution." },
      { property: "og:title", content: "How It Works — GrowthForce Africa" },
      { property: "og:url", content: "/how-it-works" },
    ],
    links: [{ rel: "canonical", href: "/how-it-works" }],
  }),
  component: HowItWorksPage,
});

const STEPS = [
  { t: "Consultation", d: "We understand the client's product, service, idea, target market, goals and budget." },
  { t: "Campaign Strategy", d: "We design the field execution plan: locations, team size, messaging, timeline and KPIs." },
  { t: "Agreement", d: "Client and GrowthForce Africa agree on deliverables, reporting structure, payment terms, timeline and performance indicators." },
  { t: "Team Selection & Training", d: "We select suitable field associates and train them on the campaign, message, reporting tools and expected conduct." },
  { t: "Field Deployment", d: "Teams are deployed under supervisors to execute the campaign." },
  { t: "Tracking & Reporting", d: "Activities, leads, visits, locations and performance are tracked daily." },
  { t: "Results & Closure", d: "Client receives campaign reports, verified leads, insights and recommendations." },
];

function HowItWorksPage() {
  return (
    <SiteLayout>
      <Section className="bg-soft-gradient">
        <SectionHead center eyebrow="Our Process" title="From idea to verified results" description="A clear, repeatable seven-step process that turns ambition into market traction." />
      </Section>

      <Section className="pt-0">
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-orange via-navy to-sky sm:block" />
          <ol className="space-y-6">
            {STEPS.map((s, i) => (
              <li key={s.t} className="relative grid grid-cols-[40px_1fr] gap-6 sm:grid-cols-[60px_1fr]">
                <div className="relative">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-navy font-bold text-white shadow-lg sm:h-12 sm:w-12">{i + 1}</div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm card-lift">
                  <h3 className="font-display text-xl font-extrabold text-navy-deep">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-orange text-white hover:bg-orange/90">
            <Link to="/businesses">Book a Consultation</Link>
          </Button>
        </div>
      </Section>
    </SiteLayout>
  );
}
