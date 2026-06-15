import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell, StatCard } from "@/components/dashboard/DashboardShell";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Plus } from "lucide-react";

export const Route = createFileRoute("/dashboard/admin")({
  head: () => ({ meta: [{ title: "Admin Dashboard — GrowthForce" }] }),
  component: AdminDashboard,
});

const CAMPAIGNS = [
  { name: "SACCO Member Drive", client: "UnityFund SACCO", industry: "Finance", location: "Wakiso", start: "2026-05-01", end: "2026-06-30", target: 1500, supervisor: "Brian K.", agents: 24, status: "Active", budget: "UGX 18M", kpi: "Verified members" },
  { name: "App Download Push", client: "PayLite Africa", industry: "Startup", location: "Kampala", start: "2026-05-15", end: "2026-06-20", target: 5000, supervisor: "Sarah N.", agents: 18, status: "Active", budget: "UGX 12M", kpi: "Installs" },
  { name: "School Recruitment", client: "Bright Academy", industry: "Education", location: "Mukono", start: "2026-04-10", end: "2026-05-30", target: 800, supervisor: "Patience M.", agents: 12, status: "Completed", budget: "UGX 9M", kpi: "Enrollments" },
  { name: "Insurance Awareness", client: "SafeLife Insurance", industry: "Insurance", location: "Jinja", start: "2026-06-01", end: "2026-07-15", target: 2500, supervisor: "James O.", agents: 16, status: "Pending", budget: "UGX 15M", kpi: "Quotes" },
];

const ASSOCIATES = [
  { name: "Sarah Nantongo", phone: "+256 7XX 111", district: "Kampala", skills: "Sales, Apps", availability: "Full-time", rating: 4.9, history: 6, payment: "Up to date", verified: "Verified" },
  { name: "Brian Kasule", phone: "+256 7XX 222", district: "Wakiso", skills: "SACCO, Sales", availability: "Full-time", rating: 4.8, history: 4, payment: "Pending", verified: "Verified" },
  { name: "Patience Mirembe", phone: "+256 7XX 333", district: "Mukono", skills: "Education", availability: "Part-time", rating: 4.7, history: 3, payment: "Up to date", verified: "Pending" },
];

const LEADS = [
  { lead: "Daniel Okello", phone: "+256 7XX 998", location: "Bweyogerere", interest: "High", campaign: "SACCO Drive", agent: "Sarah N.", date: "Today", status: "New", notes: "Wants to join, requested call back" },
  { lead: "Florence Atim", phone: "+256 7XX 887", location: "Ntinda", interest: "Medium", campaign: "App Download", agent: "Brian K.", date: "Today", status: "Contacted", notes: "Installed app, needs onboarding" },
  { lead: "Moses Kato", phone: "+256 7XX 776", location: "Najjera", interest: "High", campaign: "Insurance", agent: "James O.", date: "Yesterday", status: "Qualified", notes: "Requested quote for family plan" },
];

function AdminDashboard() {
  return (
    <DashboardShell role="admin" title="Operations Dashboard" subtitle="Real-time view of campaigns, teams and performance.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active Campaigns" value="14" hint="+3 this month" accent="navy" />
        <StatCard label="Registered Associates" value="487" hint="64 verified this week" accent="orange" />
        <StatCard label="Total Clients" value="38" hint="6 new this quarter" accent="sky" />
        <StatCard label="Leads Generated" value="12,304" hint="2,148 this month" accent="navy" />
        <StatCard label="Pending Requests" value="9" hint="Avg response 12h" accent="orange" />
        <StatCard label="Completed Campaigns" value="62" accent="navy" />
        <StatCard label="Payments Due" value="UGX 8.4M" accent="orange" />
        <StatCard label="Field Agents Active Today" value="142" hint="of 168 assigned" accent="sky" />
      </div>

      {/* Campaigns */}
      <Card className="mt-8 overflow-hidden p-0">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-5">
          <div>
            <h2 className="font-display text-lg font-extrabold text-navy-deep">Campaign Management</h2>
            <p className="text-xs text-muted-foreground">All campaigns across clients and industries.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" /> Export</Button>
            <Button size="sm" className="bg-orange text-white hover:bg-orange/90"><Plus className="mr-1 h-4 w-4" /> New Campaign</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {["Campaign", "Client", "Industry", "Location", "Start", "End", "Target", "Supervisor", "Agents", "Status", "Budget", "KPI"].map(h => <TableHead key={h}>{h}</TableHead>)}
              </TableRow>
            </TableHeader>
            <TableBody>
              {CAMPAIGNS.map((c) => (
                <TableRow key={c.name}>
                  <TableCell className="font-semibold text-navy-deep">{c.name}</TableCell>
                  <TableCell>{c.client}</TableCell>
                  <TableCell>{c.industry}</TableCell>
                  <TableCell>{c.location}</TableCell>
                  <TableCell className="text-muted-foreground">{c.start}</TableCell>
                  <TableCell className="text-muted-foreground">{c.end}</TableCell>
                  <TableCell>{c.target.toLocaleString()}</TableCell>
                  <TableCell>{c.supervisor}</TableCell>
                  <TableCell>{c.agents}</TableCell>
                  <TableCell><StatusBadge status={c.status} /></TableCell>
                  <TableCell>{c.budget}</TableCell>
                  <TableCell className="text-xs text-muted-foreground">{c.kpi}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden p-0">
          <div className="border-b p-5">
            <h2 className="font-display text-lg font-extrabold text-navy-deep">Associate Management</h2>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader><TableRow>
                {["Name", "Phone", "District", "Skills", "Availability", "Rating", "History", "Payment", "Status"].map(h => <TableHead key={h}>{h}</TableHead>)}
              </TableRow></TableHeader>
              <TableBody>
                {ASSOCIATES.map((a) => (
                  <TableRow key={a.name}>
                    <TableCell className="font-semibold text-navy-deep">{a.name}</TableCell>
                    <TableCell className="text-xs">{a.phone}</TableCell>
                    <TableCell>{a.district}</TableCell>
                    <TableCell className="text-xs">{a.skills}</TableCell>
                    <TableCell className="text-xs">{a.availability}</TableCell>
                    <TableCell>⭐ {a.rating}</TableCell>
                    <TableCell>{a.history}</TableCell>
                    <TableCell><StatusBadge status={a.payment} /></TableCell>
                    <TableCell><StatusBadge status={a.verified} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>

        <Card className="overflow-hidden p-0">
          <div className="border-b p-5">
            <h2 className="font-display text-lg font-extrabold text-navy-deep">Lead Management</h2>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader><TableRow>
                {["Lead", "Phone", "Location", "Interest", "Campaign", "Agent", "Date", "Status"].map(h => <TableHead key={h}>{h}</TableHead>)}
              </TableRow></TableHeader>
              <TableBody>
                {LEADS.map((l) => (
                  <TableRow key={l.lead}>
                    <TableCell className="font-semibold text-navy-deep">{l.lead}</TableCell>
                    <TableCell className="text-xs">{l.phone}</TableCell>
                    <TableCell>{l.location}</TableCell>
                    <TableCell><StatusBadge status={l.interest} /></TableCell>
                    <TableCell className="text-xs">{l.campaign}</TableCell>
                    <TableCell className="text-xs">{l.agent}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{l.date}</TableCell>
                    <TableCell><StatusBadge status={l.status} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>

      <Card className="mt-8 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-lg font-extrabold text-navy-deep">Reports</h2>
            <p className="text-xs text-muted-foreground">Daily activity, agent performance, campaign performance and client reports.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" /> Export PDF</Button>
            <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" /> Export Excel</Button>
          </div>
        </div>
      </Card>
    </DashboardShell>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "bg-green-100 text-green-800",
    Completed: "bg-sky-soft text-navy",
    Pending: "bg-orange-soft text-orange",
    Verified: "bg-green-100 text-green-800",
    "Up to date": "bg-green-100 text-green-800",
    New: "bg-sky-soft text-navy",
    Contacted: "bg-orange-soft text-orange",
    Qualified: "bg-green-100 text-green-800",
    High: "bg-green-100 text-green-800",
    Medium: "bg-orange-soft text-orange",
    Low: "bg-secondary text-muted-foreground",
  };
  return <Badge className={`${map[status] ?? "bg-secondary text-foreground"} border-0`}>{status}</Badge>;
}
