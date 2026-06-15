import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell, StatCard } from "@/components/dashboard/DashboardShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MessageSquare, ImageIcon } from "lucide-react";

export const Route = createFileRoute("/dashboard/client")({
  head: () => ({ meta: [{ title: "Client Dashboard — GrowthForce" }] }),
  component: ClientDashboard,
});

function ClientDashboard() {
  return (
    <DashboardShell role="client" title="UnityFund SACCO — Growth Campaign" subtitle="Live performance across all active campaigns.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Campaigns" value="3" accent="navy" />
        <StatCard label="Team Assigned" value="42" hint="agents + 3 supervisors" accent="orange" />
        <StatCard label="Leads Generated" value="2,148" hint="+184 today" accent="sky" />
        <StatCard label="Locations Covered" value="27" accent="navy" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <h2 className="font-display text-lg font-extrabold text-navy-deep">Daily Progress</h2>
          <svg viewBox="0 0 400 140" className="mt-4 w-full">
            <defs>
              <linearGradient id="cg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.19 48)" stopOpacity=".4" />
                <stop offset="100%" stopColor="oklch(0.72 0.19 48)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline fill="url(#cg)" stroke="oklch(0.72 0.19 48)" strokeWidth="2.5"
              points="0,110 30,95 60,100 90,80 120,85 150,65 180,70 210,55 240,40 270,52 300,30 330,38 360,18 400,22 400,140 0,140" />
            <polyline fill="none" stroke="oklch(0.30 0.10 258)" strokeWidth="2" strokeDasharray="4 4"
              points="0,120 30,115 60,110 90,108 120,102 150,98 180,90 210,88 240,80 270,75 300,68 330,60 360,55 400,48" />
          </svg>
          <div className="mt-2 flex gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="h-2 w-3 rounded-sm bg-orange" /> Leads</span>
            <span className="flex items-center gap-1"><span className="h-2 w-3 rounded-sm bg-navy" /> Visits</span>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-lg font-extrabold text-navy-deep">Campaign Timeline</h2>
          <ol className="mt-4 space-y-3 text-sm">
            {[
              { d: "May 01", t: "Campaign launched", ok: true },
              { d: "May 14", t: "1,000 leads milestone", ok: true },
              { d: "Jun 05", t: "Mid-campaign report", ok: true },
              { d: "Jun 22", t: "2,000 leads milestone", ok: false },
              { d: "Jun 30", t: "Campaign close & final report", ok: false },
            ].map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${s.ok ? "bg-orange" : "bg-border"}`} />
                <div className="min-w-0">
                  <p className="font-semibold text-navy-deep">{s.t}</p>
                  <p className="text-xs text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-extrabold text-navy-deep">Download Reports</h2>
            <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" /> All</Button>
          </div>
          <ul className="mt-4 space-y-2">
            {["Daily Activity — Week 24", "Weekly Performance — Week 23", "Lead Quality Report", "Final Campaign Report (Draft)"].map((r) => (
              <li key={r} className="flex items-center justify-between rounded-xl border p-3 text-sm">
                <span className="font-medium text-navy-deep">{r}</span>
                <Button size="sm" variant="ghost"><Download className="h-4 w-4" /></Button>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-extrabold text-navy-deep"><ImageIcon className="h-5 w-5 text-orange" /> Field Evidence</h2>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-secondary to-sky-soft" />
            ))}
          </div>
        </Card>
      </div>

      <Card className="mt-6 p-6">
        <h2 className="flex items-center gap-2 font-display text-lg font-extrabold text-navy-deep"><MessageSquare className="h-5 w-5 text-orange" /> Messages from GrowthForce</h2>
        <ul className="mt-4 space-y-3">
          {[
            { who: "Account Lead — Aisha", time: "2h ago", msg: "We've hit 75% of the lead target. Sending detailed breakdown by district shortly." },
            { who: "Account Lead — Aisha", time: "Yesterday", msg: "Wakiso team performing 18% above target. Recommend extending coverage to Nansana." },
          ].map((m, i) => (
            <li key={i} className="rounded-xl border p-4 text-sm">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-navy-deep">{m.who}</p>
                <span className="text-xs text-muted-foreground">{m.time}</span>
              </div>
              <p className="mt-1 text-muted-foreground">{m.msg}</p>
            </li>
          ))}
        </ul>
      </Card>
    </DashboardShell>
  );
}
