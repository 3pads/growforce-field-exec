import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell, StatCard } from "@/components/dashboard/DashboardShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, CheckCircle2, Flag, Send } from "lucide-react";

export const Route = createFileRoute("/dashboard/supervisor")({
  head: () => ({ meta: [{ title: "Supervisor Dashboard — GrowthForce" }] }),
  component: SupervisorDashboard,
});

const TEAM = [
  { name: "Sarah Nantongo", checkin: "08:12", visits: 17, leads: 12, status: "On Field", perf: 92 },
  { name: "Brian Kasule", checkin: "—", visits: 0, leads: 0, status: "Not Checked In", perf: 78 },
  { name: "Patience Mirembe", checkin: "08:45", visits: 14, leads: 9, status: "On Field", perf: 84 },
  { name: "James Okello", checkin: "09:02", visits: 12, leads: 7, status: "On Field", perf: 71 },
];

function SupervisorDashboard() {
  return (
    <DashboardShell role="supervisor" title="Wakiso Team — Field Operations" subtitle="Monitoring 24 agents across the SACCO Member Drive">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Assigned Agents" value="24" accent="navy" />
        <StatCard label="Checked In Today" value="21" hint="3 not checked in" accent="orange" />
        <StatCard label="Leads Today" value="187" accent="sky" />
        <StatCard label="Pending Approvals" value="6" accent="navy" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="overflow-hidden p-0 lg:col-span-2">
          <div className="border-b p-5">
            <h2 className="font-display text-lg font-extrabold text-navy-deep">My Team</h2>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {["Agent", "Check-in", "Visits", "Leads", "Status", "Performance", "Action"].map(h => <TableHead key={h}>{h}</TableHead>)}
                </TableRow>
              </TableHeader>
              <TableBody>
                {TEAM.map((t) => (
                  <TableRow key={t.name}>
                    <TableCell className="font-semibold text-navy-deep">{t.name}</TableCell>
                    <TableCell className="text-sm">{t.checkin}</TableCell>
                    <TableCell>{t.visits}</TableCell>
                    <TableCell>{t.leads}</TableCell>
                    <TableCell>
                      <Badge className={`border-0 ${t.status === "On Field" ? "bg-green-100 text-green-800" : "bg-orange-soft text-orange"}`}>{t.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-20 overflow-hidden rounded-full bg-secondary">
                          <div className="h-full bg-gradient-to-r from-navy to-orange" style={{ width: `${t.perf}%` }} />
                        </div>
                        <span className="text-xs font-bold">{t.perf}</span>
                      </div>
                    </TableCell>
                    <TableCell><Button size="sm" variant="outline">View</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-lg font-extrabold text-navy-deep">Live Alerts</h2>
          <ul className="mt-4 space-y-3">
            {[
              { i: AlertTriangle, t: "Brian K. has not checked in", c: "text-orange" },
              { i: AlertTriangle, t: "Lead quality dip in Najjera area", c: "text-orange" },
              { i: CheckCircle2, t: "Patience M. submitted 9 leads", c: "text-green-600" },
              { i: CheckCircle2, t: "Sarah N. completed photo upload", c: "text-green-600" },
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border p-3 text-sm">
                <a.i className={`mt-0.5 h-4 w-4 ${a.c}`} />
                <span>{a.t}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="mt-4 w-full"><Flag className="mr-1 h-4 w-4" /> Flag Issue</Button>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="font-display text-lg font-extrabold text-navy-deep">Approve Reports</h2>
          <ul className="mt-4 space-y-3">
            {["Sarah N. — Daily activity", "Patience M. — Lead batch #14", "James O. — Photo evidence (5)"].map((r) => (
              <li key={r} className="flex items-center justify-between rounded-xl border p-3 text-sm">
                <span className="font-medium text-navy-deep">{r}</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View</Button>
                  <Button size="sm" className="bg-orange text-white hover:bg-orange/90">Approve</Button>
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="font-display text-lg font-extrabold text-navy-deep">Submit Supervisor Report</h2>
          <textarea className="mt-3 w-full rounded-xl border border-border bg-background p-3 text-sm" rows={5} placeholder="Daily summary, blockers, recommendations…" />
          <Button className="mt-3 bg-navy text-white hover:bg-navy-deep"><Send className="mr-1 h-4 w-4" /> Send to Admin</Button>
        </Card>
      </div>
    </DashboardShell>
  );
}
