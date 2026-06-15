import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, SectionHead } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight, DoorOpen, Users, Rocket, Megaphone, BarChart3, Heart,
  CheckCircle2, MapPin, ShieldCheck, LineChart, Clock, Eye,
  GraduationCap, Landmark, Stethoscope, HandHeart, Building2, Shield,
  Smartphone, ShoppingBag, Wifi, Network, Activity, FileCheck2, Sparkles,
} from "lucide-react";
import heroImg from "@/assets/hero-field-team.jpg";
import meetingImg from "@/assets/business-meeting.jpg";
import doorImg from "@/assets/door-to-door.jpg";
import { STATS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GrowthForce Africa — Managed Field Teams & Growth Execution" },
      { name: "description", content: "We help organizations reach customers through trained field teams, real-time tracking, supervision and performance reporting." },
      { property: "og:title", content: "GrowthForce Africa" },
      { property: "og:description", content: "Managed field execution for sales, customer acquisition, product launches and community mobilization." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const WHAT_WE_DO = [
  { icon: DoorOpen, title: "Door-to-Door Sales Campaigns", desc: "Trained agents reach customers in homes, markets, offices and communities." },
  { icon: Users, title: "Customer Acquisition", desc: "Sign-ups, registrations, members, students and verified leads at scale." },
  { icon: Rocket, title: "Product & App Launches", desc: "Onboard real users with demos, downloads and on-the-ground activation." },
  { icon: Megaphone, title: "Brand Activation", desc: "Promoter teams that build awareness and engage your target communities." },
  { icon: BarChart3, title: "Market Research", desc: "Surveys, insights, competitor mapping and customer feedback from the field." },
  { icon: Heart, title: "Community Mobilization", desc: "Reach households, groups and beneficiaries for NGO and development programs." },
];

const WHY_US = [
  { icon: ShieldCheck, title: "Trained field teams" },
  { icon: Network, title: "Technology-powered tracking" },
  { icon: Eye, title: "Daily supervision" },
  { icon: FileCheck2, title: "Verified lead collection" },
  { icon: LineChart, title: "Performance dashboards" },
  { icon: CheckCircle2, title: "Transparent reporting" },
  { icon: Clock, title: "Campaign-based execution" },
  { icon: Sparkles, title: "Youth employment creation" },
];

const INDUSTRIES = [
  { icon: GraduationCap, name: "Schools & Universities" },
  { icon: Landmark, name: "SACCOs & Financial Institutions" },
  { icon: Stethoscope, name: "Hospitals & Clinics" },
  { icon: HandHeart, name: "NGOs & Development Projects" },
  { icon: Building2, name: "Real Estate Companies" },
  { icon: Shield, name: "Insurance Companies" },
  { icon: Smartphone, name: "Startups & Apps" },
  { icon: ShoppingBag, name: "Retail & Product Companies" },
  { icon: Wifi, name: "Telecom & Internet Providers" },
  { icon: Activity, name: "Government & Community Projects" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Managed Growth Execution
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              We Help Organizations Reach Customers Through{" "}
              <span className="text-gradient-brand">Managed Field Teams</span> & Technology
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
              GrowthForce Africa designs and executes sales, marketing, customer acquisition,
              market research, community outreach and product launch campaigns using trained
              field teams, real-time tracking, supervision and performance reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-orange text-white hover:bg-orange/90">
                <Link to="/businesses">Request a Growth Campaign <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
                <Link to="/field-associates">Join Our Field Network</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                  <div className="text-xl font-extrabold text-white sm:text-2xl">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero composition */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img src={heroImg} alt="African field sales team using tablets" className="aspect-[4/3] w-full object-cover" width={1536} height={1024} />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-deep/60 via-transparent to-transparent" />
            </div>

            {/* Floating CRM card */}
            <div className="absolute -left-4 bottom-8 hidden w-64 rounded-2xl border border-white/15 bg-white/95 p-4 text-navy-deep shadow-2xl backdrop-blur sm:block">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span>Live Campaign</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] text-green-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600" /> Active
                </span>
              </div>
              <div className="mt-3 text-sm font-bold">SACCO Member Drive — Wakiso</div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-lg bg-sky-soft p-2">
                  <div className="font-extrabold text-navy">1,284</div>
                  <div className="text-muted-foreground">Leads</div>
                </div>
                <div className="rounded-lg bg-orange-soft p-2">
                  <div className="font-extrabold text-navy">42</div>
                  <div className="text-muted-foreground">Agents</div>
                </div>
              </div>
            </div>

            {/* Floating growth chart */}
            <div className="absolute -right-3 -top-6 hidden w-56 rounded-2xl border border-white/15 bg-white/95 p-4 text-navy-deep shadow-2xl backdrop-blur md:block">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold">Conversion</span>
                <span className="font-extrabold text-green-600">+34%</span>
              </div>
              <svg viewBox="0 0 120 50" className="mt-2 w-full">
                <polyline fill="none" stroke="oklch(0.30 0.10 258)" strokeWidth="2.5"
                  points="0,40 15,32 30,35 50,22 70,26 90,12 110,16 120,6" />
                <polyline fill="oklch(0.30 0.10 258 / 12%)" stroke="none"
                  points="0,40 15,32 30,35 50,22 70,26 90,12 110,16 120,6 120,50 0,50" />
              </svg>
              <div className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground">
                <MapPin className="h-3 w-3 text-orange" /> 12 districts tracked
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <Section>
        <SectionHead eyebrow="What We Do" title="Field execution across the customer journey" description="Six core campaign types that take your product, service, app or idea directly to the market." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHAT_WE_DO.map((s) => (
            <Card key={s.title} className="card-lift border-border/70 p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROBLEM / SOLUTION */}
      <Section className="bg-soft-gradient">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={meetingImg} alt="Business owners discussing growth challenges" loading="lazy" width={1280} height={896}
                className="aspect-[3/4] w-full rounded-2xl object-cover shadow-xl" />
              <img src={doorImg} alt="GrowthForce field agent door-to-door" loading="lazy" width={1280} height={896}
                className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover shadow-xl" />
            </div>
            <div className="absolute -bottom-6 left-6 hidden rounded-2xl border bg-white p-4 shadow-xl md:block">
              <div className="text-xs font-semibold text-muted-foreground">Today</div>
              <div className="mt-1 text-2xl font-extrabold text-navy">328 verified visits</div>
            </div>
          </div>

          <div>
            <SectionHead eyebrow="The Problem We Solve" title="Great products. Hard distribution." description="Many organizations have good products, services, apps, schools, SACCOs, health services and ideas, but struggle to reach customers physically. Recruiting, training, supervising, tracking and managing field teams is costly and time-consuming." />
            <div className="mt-6 rounded-2xl border border-orange/30 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange">GrowthForce Africa</p>
              <p className="mt-2 text-lg font-bold text-navy-deep">A fully managed field execution system — people, process and technology in one.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* OUR SOLUTION - 4 STEPS */}
      <Section>
        <SectionHead center eyebrow="Our Solution" title="How a campaign comes to life" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", t: "Client signs with us", d: "We agree on goals, deliverables, KPIs and timeline." },
            { n: "02", t: "We design the campaign", d: "Strategy, locations, team size, message and budget." },
            { n: "03", t: "We deploy & supervise", d: "Trained field teams executing under daily supervision." },
            { n: "04", t: "Reports & results", d: "Verified leads, dashboards, photos and insights." },
          ].map((s, i) => (
            <div key={s.n} className="relative">
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm card-lift">
                <div className="font-display text-3xl font-black text-orange">{s.n}</div>
                <h3 className="mt-4 text-lg font-bold text-navy-deep">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
              {i < 3 && (
                <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-orange lg:block" />
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section className="bg-navy-deep text-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">Why GrowthForce</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">Built for serious organizations that need real results.</h2>
            <p className="mt-4 max-w-xl text-white/70">From household visits to live dashboards, every part of the campaign is designed for accountability and performance.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4">
            {WHY_US.map((w) => (
              <div key={w.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/10">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange/15 text-orange">
                  <w.icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-semibold">{w.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <SectionHead eyebrow="Industries We Serve" title="Sectors we help reach the ground" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {INDUSTRIES.map((i) => (
            <Card key={i.name} className="card-lift flex flex-col items-start gap-3 border-border/70 p-5">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-soft text-navy">
                <i.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-navy-deep">{i.name}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient px-6 py-16 text-center text-white sm:px-16">
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:20px_20px]" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Have an idea, product, service or campaign you want to push into the market?
            </h2>
            <p className="mt-4 text-white/80">We'll design the strategy, deploy the team, supervise the work and deliver verified results.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-orange text-white hover:bg-orange/90">
                <Link to="/businesses">Start a Campaign With Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/15">
                <Link to="/how-it-works">See how it works</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
