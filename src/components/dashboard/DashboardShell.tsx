import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/site/Logo";
import {
  LayoutDashboard, Users, Briefcase, Megaphone, UserCheck, UserCog,
  Target, FileBarChart, CreditCard, Settings, Bell, LogOut, Building2, Smartphone, ClipboardCheck,
} from "lucide-react";

type Item = { to: string; label: string; icon: React.ComponentType<{ className?: string }> };

const NAVS: Record<string, { title: string; items: Item[] }> = {
  admin: {
    title: "Admin",
    items: [
      { to: "/dashboard/admin", label: "Dashboard", icon: LayoutDashboard },
      { to: "/dashboard/admin", label: "Clients", icon: Building2 },
      { to: "/dashboard/admin", label: "Campaign Requests", icon: ClipboardCheck },
      { to: "/dashboard/admin", label: "Campaigns", icon: Megaphone },
      { to: "/dashboard/admin", label: "Field Associates", icon: Users },
      { to: "/dashboard/admin", label: "Supervisors", icon: UserCog },
      { to: "/dashboard/admin", label: "Leads", icon: Target },
      { to: "/dashboard/admin", label: "Reports", icon: FileBarChart },
      { to: "/dashboard/admin", label: "Payments", icon: CreditCard },
      { to: "/dashboard/admin", label: "Settings", icon: Settings },
    ],
  },
  client: {
    title: "Client",
    items: [
      { to: "/dashboard/client-portal", label: "Overview", icon: LayoutDashboard },
      { to: "/dashboard/client-portal", label: "Active Campaigns", icon: Megaphone },
      { to: "/dashboard/client-portal", label: "Leads", icon: Target },
      { to: "/dashboard/client-portal", label: "Reports", icon: FileBarChart },
      { to: "/dashboard/client-portal", label: "Messages", icon: Bell },
    ],
  },
  field: {
    title: "Field Associate",
    items: [
      { to: "/dashboard/field", label: "My Campaign", icon: Briefcase },
      { to: "/dashboard/field", label: "Check In", icon: UserCheck },
      { to: "/dashboard/field", label: "Submit Lead", icon: Target },
      { to: "/dashboard/field", label: "Reports", icon: FileBarChart },
      { to: "/dashboard/field", label: "Payments", icon: CreditCard },
      { to: "/dashboard/field", label: "Mobile App", icon: Smartphone },
    ],
  },
  supervisor: {
    title: "Supervisor",
    items: [
      { to: "/dashboard/supervisor", label: "Overview", icon: LayoutDashboard },
      { to: "/dashboard/supervisor", label: "My Team", icon: Users },
      { to: "/dashboard/supervisor", label: "Approvals", icon: ClipboardCheck },
      { to: "/dashboard/supervisor", label: "Reports", icon: FileBarChart },
      { to: "/dashboard/supervisor", label: "Alerts", icon: Bell },
    ],
  },
};

export function DashboardShell({
  role, title, subtitle, children,
}: {
  role: keyof typeof NAVS;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const nav = NAVS[role];
  return (
    <div className="grid min-h-screen bg-surface lg:grid-cols-[260px_1fr]">
      <aside className="hidden flex-col gap-2 border-r border-sidebar-border bg-sidebar p-4 text-sidebar-foreground lg:flex">
        <div className="[&_a]:!text-white px-2 py-2">
          <Logo variant="light" />
        </div>
        <div className="mt-2 px-2 text-xs font-semibold uppercase tracking-wider text-white/50">{nav.title}</div>
        <nav className="mt-1 space-y-1">
          {nav.items.map((it, i) => {
            const active = i === 0 && pathname === it.to;
            return (
              <Link
                key={i}
                to={it.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                  active ? "bg-sidebar-primary text-white" : "text-white/80 hover:bg-sidebar-accent hover:text-white"
                }`}
              >
                <it.icon className="h-4 w-4" />
                {it.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto space-y-2">
          <Link to="/" className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-white/60 hover:bg-sidebar-accent hover:text-white">
            <LogOut className="h-4 w-4" /> Back to site
          </Link>
        </div>
      </aside>

      <div className="flex flex-col">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b border-border bg-background/85 px-4 backdrop-blur sm:px-8">
          <div className="min-w-0">
            <h1 className="truncate font-display text-lg font-extrabold text-navy-deep sm:text-xl">{title}</h1>
            {subtitle && <p className="truncate text-xs text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            <button className="grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary"><Bell className="h-4 w-4" /></button>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-navy to-orange text-xs font-bold text-white">GA</div>
          </div>
        </header>
        <div className="flex-1 p-4 sm:p-8">{children}</div>
      </div>
    </div>
  );
}

export function StatCard({ label, value, hint, accent = "navy" }: { label: string; value: string; hint?: string; accent?: "navy" | "orange" | "sky" }) {
  const bar = accent === "orange" ? "bg-orange" : accent === "sky" ? "bg-sky" : "bg-navy";
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm card-lift">
      <div className={`absolute left-0 top-0 h-1 w-full ${bar}`} />
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-3 text-3xl font-extrabold text-navy-deep">{value}</p>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
