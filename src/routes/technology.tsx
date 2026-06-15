import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, SectionHead } from "@/components/site/SiteLayout";
import { Card } from "@/components/ui/card";
import { Activity, MapPin, Smartphone, Users, Clock, TrendingUp, CheckCircle2, AlertCircle, Camera, Upload } from "lucide-react";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — GrowthForce Africa" },
      { name: "description", content: "Field execution powered by real-time tracking, CRM, supervisor dashboards and mobile field reporting." },
      { property: "og:title", content: "Technology — GrowthForce Africa" },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <SiteLayout>
      <Section className="bg-hero-gradient text-white">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Technology</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Field Execution Powered by Data, Automation & Real-Time Tracking</h1>
            <p className="mt-5 max-w-xl text-white/80">Every field agent, lead, visit and report flows into a single live system — so clients and supervisors always know what's happening on the ground.</p>
          </div>
          <DashboardMock />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="p-6">
            <h3 className="font-display text-xl font-extrabold text-navy-deep">Our Tracking System</h3>
            <p className="mt-3 text-muted-foreground">Our field teams use digital reporting tools to check in, submit leads, upload evidence, report daily activity and update campaign progress.</p>
          </Card>
          <Card className="p-6">
            <h3 className="font-display text-xl font-extrabold text-navy-deep">CRM & Lead Management</h3>
            <p className="mt-3 text-muted-foreground">Every lead collected is organized, tracked, followed up and reported through a structured CRM pipeline.</p>
          </Card>
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <SectionHead eyebrow="Client Reporting Dashboard" title="Total visibility into your campaign" />
        <ClientDashboardMock />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="Supervisor Dashboard" title="Built for team leads" />
            <SupervisorMock />
          </div>
          <div>
            <SectionHead eyebrow="Mobile Field Reporting" title="What agents see" />
            <MobileMock />
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function DashboardMock() {
  return (
    <div className="rounded-3xl border border-white/15 bg-white p-5 text-navy-deep shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">Live Campaign Overview</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-600" /> Live</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { l: "Leads", v: "2,148", c: "bg-sky-soft" },
          { l: "Visits", v: "5,302", c: "bg-orange-soft" },
          { l: "Agents", v: "68", c: "bg-secondary" },
        ].map((s) => (
          <div key={s.l} className={`rounded-xl ${s.c} p-3`}>
            <div className="text-lg font-extrabold">{s.v}</div>
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-secondary p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Conversion trend</p>
        <svg viewBox="0 0 200 60" className="mt-2 w-full">
          <defs>
            <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.30 0.10 258)" stopOpacity=".5" />
              <stop offset="100%" stopColor="oklch(0.30 0.10 258)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline fill="url(#g)" stroke="oklch(0.30 0.10 258)" strokeWidth="2"
            points="0,45 20,40 40,35 60,28 80,32 100,22 120,18 140,24 160,14 180,10 200,5 200,60 0,60" />
        </svg>
      </div>
      <div className="mt-4 space-y-2">
        {[
          { name: "Wakiso district", v: 86, c: "bg-navy" },
          { name: "Kampala Central", v: 72, c: "bg-orange" },
          { name: "Mukono", v: 54, c: "bg-sky" },
        ].map((r) => (
          <div key={r.name}>
            <div className="flex justify-between text-xs"><span>{r.name}</span><span className="font-bold">{r.v}%</span></div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
              <div className={`h-full ${r.c}`} style={{ width: `${r.v}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientDashboardMock() {
  const stats = [
    { l: "Total leads generated", v: "2,148", i: Users },
    { l: "Daily visits", v: "418", i: MapPin },
    { l: "Active field agents", v: "68", i: Activity },
    { l: "Locations covered", v: "27", i: MapPin },
    { l: "Conversion rate", v: "18.4%", i: TrendingUp },
    { l: "Campaign progress", v: "62%", i: Clock },
  ];
  return (
    <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <div key={s.l} className="rounded-2xl border border-border p-5 card-lift">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.l}</p>
              <s.i className="h-4 w-4 text-orange" />
            </div>
            <p className="mt-3 text-3xl font-extrabold text-navy-deep">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl bg-secondary/50 p-5">
        <p className="text-sm font-bold text-navy-deep">Team Performance</p>
        <div className="mt-4 space-y-3">
          {[
            { a: "Sarah N.", v: 92 },
            { a: "James O.", v: 81 },
            { a: "Patience M.", v: 76 },
            { a: "Brian K.", v: 64 },
          ].map((a) => (
            <div key={a.a}>
              <div className="flex justify-between text-xs"><span className="font-medium">{a.a}</span><span className="font-bold">{a.v}%</span></div>
              <div className="mt-1 h-2 overflow-hidden rounded-full bg-background">
                <div className="h-full bg-gradient-to-r from-navy to-orange" style={{ width: `${a.v}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SupervisorMock() {
  return (
    <div className="mt-6 rounded-3xl border border-border bg-card p-6 shadow-xl">
      <p className="text-sm font-bold text-navy-deep">Today's Field Operations</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          { l: "Assigned agents", v: "24" },
          { l: "Checked in", v: "21" },
          { l: "Leads today", v: "187" },
          { l: "Pending reports", v: "3" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-secondary/60 p-3">
            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.l}</p>
            <p className="text-xl font-extrabold text-navy-deep">{s.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Alerts</p>
        {[
          { i: AlertCircle, t: "Agent Brian K. has not checked in", c: "text-orange" },
          { i: CheckCircle2, t: "Patience M. submitted 12 leads", c: "text-green-600" },
          { i: CheckCircle2, t: "Sarah N. completed daily report", c: "text-green-600" },
        ].map((a, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg border p-2 text-sm">
            <a.i className={`h-4 w-4 ${a.c}`} />
            <span>{a.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMock() {
  return (
    <div className="mt-6 mx-auto w-full max-w-sm rounded-[2.5rem] border-8 border-navy-deep bg-navy-deep p-2 shadow-2xl">
      <div className="rounded-[2rem] bg-background p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Today's campaign</p>
            <p className="text-base font-bold text-navy-deep">SACCO Member Drive</p>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-orange/15 text-orange"><Smartphone className="h-5 w-5" /></div>
        </div>
        <button className="mt-4 w-full rounded-xl bg-orange py-3 text-sm font-bold text-white shadow-lg">Check In</button>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { i: Users, l: "Submit Lead" },
            { i: Camera, l: "Photo" },
            { i: Upload, l: "Report" },
          ].map((b) => (
            <div key={b.l} className="rounded-xl border bg-secondary/60 p-3 text-center">
              <b.i className="mx-auto h-5 w-5 text-navy" />
              <p className="mt-1 text-[11px] font-semibold">{b.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-secondary/60 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Today's tasks</p>
          <ul className="mt-2 space-y-1.5 text-xs">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Visit 30 households</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Submit 15 leads</li>
            <li className="flex items-center gap-2"><div className="h-3.5 w-3.5 rounded-full border-2 border-muted-foreground" /> Upload 5 photos</li>
          </ul>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-navy p-3 text-white">
          <span className="text-xs">Earnings (week)</span>
          <span className="text-base font-extrabold">UGX 184,000</span>
        </div>
      </div>
    </div>
  );
}
