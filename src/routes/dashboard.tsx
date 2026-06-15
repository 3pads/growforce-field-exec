import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  component: () => <Outlet />,
  head: () => ({ meta: [{ title: "Dashboard — GrowthForce Africa" }] }),
});

export function DashboardIndexFallback() {
  return (
    <div className="grid min-h-screen place-items-center bg-surface p-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-extrabold text-navy-deep">Select a dashboard</h1>
        <div className="mt-6 grid gap-3">
          {[
            { to: "/dashboard/admin", label: "Admin Dashboard" },
            { to: "/dashboard/client", label: "Client Dashboard" },
            { to: "/dashboard/field", label: "Field Associate" },
            { to: "/dashboard/supervisor", label: "Supervisor" },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="rounded-xl border border-border bg-card p-4 font-semibold text-navy-deep shadow-sm hover:bg-secondary">{l.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
