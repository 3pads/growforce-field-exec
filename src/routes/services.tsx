import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, SectionHead } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import doorImg from "@/assets/door-to-door.jpg";
import agentImg from "@/assets/agent-mobile.jpg";
import brandImg from "@/assets/brand-activation.jpg";
import communityImg from "@/assets/community.jpg";
import supervisorImg from "@/assets/supervisor.jpg";
import meetingImg from "@/assets/business-meeting.jpg";
import trainingImg from "@/assets/training-session.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GrowthForce Africa" },
      { name: "description", content: "Door-to-door sales, customer acquisition, product launches, brand activation, market research, community mobilization and CRM tracking." },
      { property: "og:title", content: "Services — GrowthForce Africa" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { t: "Door-to-Door Sales Execution", d: "We deploy trained sales teams to physically reach potential customers, explain products, collect leads and support conversions.", img: doorImg },
  { t: "Customer Acquisition Campaigns", d: "We help organizations acquire customers, members, students, patients, users, subscribers or clients through structured field campaigns.", img: meetingImg },
  { t: "Product & App Launch Campaigns", d: "We help startups and companies introduce new products and mobile applications to real users through field promotions, demos, onboarding and download campaigns.", img: agentImg },
  { t: "Brand Activation", d: "We provide promoters and field teams to create awareness, demonstrate products, distribute materials and engage target communities.", img: brandImg },
  { t: "Market Research & Surveys", d: "We collect field data, customer feedback, market insights, competitor information and community responses.", img: trainingImg },
  { t: "Community Mobilization", d: "We support NGOs, development organizations, health projects, schools and community initiatives to reach households, groups and beneficiaries.", img: communityImg },
  { t: "CRM & Field Tracking", d: "We use technology to track field activities, leads, locations, reports, performance and campaign outcomes.", img: supervisorImg },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <Section className="bg-soft-gradient">
        <SectionHead eyebrow="Services" title="End-to-end growth execution services" description="Each service is delivered by trained field teams, supervised daily and tracked with our technology stack." />
      </Section>

      <Section className="pt-0">
        <div className="space-y-20">
          {SERVICES.map((s, i) => (
            <div key={s.t} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <img src={s.img} alt={s.t} loading="lazy" width={1280} height={896}
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange">Service 0{i + 1}</span>
                <h3 className="mt-3 font-display text-3xl font-extrabold text-navy-deep">{s.t}</h3>
                <p className="mt-4 text-muted-foreground">{s.d}</p>
                <Button asChild className="mt-6 bg-navy text-white hover:bg-navy-deep">
                  <Link to="/businesses">Discuss this service</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
