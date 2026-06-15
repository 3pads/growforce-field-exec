import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, SectionHead } from "@/components/site/SiteLayout";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Shield, Lightbulb, BarChart, Users, Heart, CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/business-meeting.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GrowthForce Africa" },
      { name: "description", content: "GrowthForce Africa brings together people, process and technology to help organizations move from idea to market execution." },
      { property: "og:title", content: "About GrowthForce Africa" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { i: CheckCircle2, t: "Accountability" },
  { i: Award, t: "Professionalism" },
  { i: Lightbulb, t: "Innovation" },
  { i: Shield, t: "Transparency" },
  { i: BarChart, t: "Performance" },
  { i: Users, t: "Youth empowerment" },
  { i: Heart, t: "Client success" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <Section className="bg-soft-gradient">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">About Us</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-deep sm:text-5xl">People, process and technology — for African growth</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              GrowthForce Africa was created to solve a major challenge facing businesses and organizations:
              the difficulty of reaching customers, communities and target markets effectively on the ground.
            </p>
            <p className="mt-4 text-muted-foreground">
              Many organizations have strong ideas, products, services, apps and programs, but they lack the
              trained people, systems and supervision required to execute field campaigns professionally.
              GrowthForce Africa brings together people, process and technology to help organizations move
              from idea to market execution.
            </p>
          </div>
          <img src={teamImg} alt="GrowthForce team" className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl" loading="lazy" width={1280} height={896} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-8">
            <Target className="h-8 w-8 text-orange" />
            <h3 className="mt-4 font-display text-2xl font-extrabold text-navy-deep">Mission</h3>
            <p className="mt-3 text-muted-foreground">To help organizations reach their target markets through professional field teams, technology-enabled tracking and performance-driven campaign execution.</p>
          </Card>
          <Card className="p-8">
            <Eye className="h-8 w-8 text-orange" />
            <h3 className="mt-4 font-display text-2xl font-extrabold text-navy-deep">Vision</h3>
            <p className="mt-3 text-muted-foreground">To become Africa's trusted growth execution partner for businesses, startups, NGOs, schools, financial institutions and community projects.</p>
          </Card>
        </div>
      </Section>

      <Section className="bg-navy-deep text-white">
        <SectionHead eyebrow="Core Values" title="What we stand for" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.t} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange/20 text-orange"><v.i className="h-5 w-5" /></div>
              <p className="mt-3 font-semibold">{v.t}</p>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
