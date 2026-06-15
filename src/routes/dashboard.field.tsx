import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell, StatCard } from "@/components/dashboard/DashboardShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, CheckCircle2, MapPin, Upload, Megaphone } from "lucide-react";

export const Route = createFileRoute("/dashboard/field")({
  head: () => ({ meta: [{ title: "Field Associate — GrowthForce" }] }),
  component: FieldDashboard,
});

function FieldDashboard() {
  return (
    <DashboardShell role="field" title="Hi Sarah — Today's Field Plan" subtitle="SACCO Member Drive — Wakiso district">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Today's Target" value="30 visits" accent="navy" />
        <StatCard label="Visits Done" value="17" hint="56% of target" accent="orange" />
        <StatCard label="Leads Submitted" value="12" accent="sky" />
        <StatCard label="This Week Earnings" value="UGX 184,000" accent="navy" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <h2 className="font-display text-lg font-extrabold text-navy-deep">My Assigned Campaign</h2>
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-navy to-navy-deep p-5 text-white">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange"><Megaphone className="h-4 w-4" /> Active campaign</div>
            <p className="mt-2 text-xl font-extrabold">UnityFund SACCO — Member Drive</p>
            <p className="mt-1 text-sm text-white/70">Wakiso district · Through 30 Jun</p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[{ l: "Target", v: "1,500" }, { l: "Achieved", v: "1,124" }, { l: "Days left", v: "12" }].map((s) => (
                <div key={s.l} className="rounded-xl bg-white/10 p-3">
                  <p className="text-lg font-extrabold">{s.v}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Today's Tasks</h3>
          <ul className="mt-3 space-y-2">
            {[
              { t: "Visit 30 households in Bweyogerere", done: true },
              { t: "Submit at least 15 verified leads", done: false },
              { t: "Upload 5 photo evidences", done: false },
              { t: "Complete daily activity report", done: false },
            ].map((t) => (
              <li key={t.t} className="flex items-center gap-3 rounded-xl border p-3 text-sm">
                {t.done ? <CheckCircle2 className="h-5 w-5 text-green-600" /> : <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />}
                <span className={t.done ? "text-muted-foreground line-through" : "font-medium text-navy-deep"}>{t.t}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-lg font-extrabold text-navy-deep">Quick Actions</h2>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button className="h-20 flex-col gap-1 bg-orange text-white hover:bg-orange/90"><MapPin className="h-5 w-5" />Check In</Button>
            <Button variant="outline" className="h-20 flex-col gap-1">Submit Lead</Button>
            <Button variant="outline" className="h-20 flex-col gap-1"><Camera className="h-5 w-5" />Upload Photo</Button>
            <Button variant="outline" className="h-20 flex-col gap-1"><Upload className="h-5 w-5" />Daily Report</Button>
          </div>

          <div className="mt-6 rounded-xl bg-secondary p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Performance</p>
            <p className="mt-2 text-2xl font-extrabold text-navy-deep">92<span className="text-base font-medium text-muted-foreground">/100</span></p>
            <p className="text-xs text-green-600">Top 5% this month</p>
          </div>

          <div className="mt-4 rounded-xl border p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Payment Status</p>
            <p className="mt-2 text-sm font-bold text-navy-deep">UGX 184,000 due Friday</p>
            <p className="text-xs text-muted-foreground">via MTN MoMo · 077XXXXXXX</p>
          </div>
        </Card>
      </div>

      <Card className="mt-6 p-6">
        <h2 className="font-display text-lg font-extrabold text-navy-deep">Announcements</h2>
        <ul className="mt-4 space-y-3">
          {[
            "New training session: Sat 10am — App Onboarding 101",
            "Performance bonus unlocked for top 10 agents this month",
            "Reminder: upload at least 3 photos per day for verification",
          ].map((a) => (
            <li key={a} className="rounded-xl border bg-sky-soft/50 p-3 text-sm font-medium text-navy-deep">{a}</li>
          ))}
        </ul>
      </Card>
    </DashboardShell>
  );
}
