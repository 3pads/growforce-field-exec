import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { NAV, SITE } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-navy-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="[&_a]:!text-white">
            <Logo variant="light" />
          </div>
          <p className="mt-4 max-w-md text-sm text-white/70">
            {SITE.name} is a managed growth execution company. We design campaigns,
            deploy and supervise trained field teams, track performance in real
            time, and deliver verified results to our clients.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/80">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange" /> {SITE.phone} / {SITE.phone2}</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange" /> {SITE.email}</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange" /> {SITE.location}</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.slice(0, 5).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-orange">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {NAV.slice(5).map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-orange">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/login" className="hover:text-orange">Login</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="max-w-2xl">
            {SITE.name} is responsible for campaign execution, supervision, reporting and field team management
            according to agreed campaign terms. Outcomes depend on market response, product quality, pricing,
            audience and agreed KPIs.
          </p>
        </div>
      </div>
    </footer>
  );
}
