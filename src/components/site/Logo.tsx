import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-navy";
  return (
    <Link to="/" className="group flex items-center gap-2">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-navy-deep shadow-md">
        <span className="absolute inset-0 rounded-lg bg-orange/20 blur-md transition group-hover:bg-orange/40" />
        <span className="relative font-display text-base font-black text-white">G</span>
        <span className="absolute -right-1 -bottom-1 h-2.5 w-2.5 rounded-full bg-orange ring-2 ring-background" />
      </span>
      <span className={`font-display text-base font-extrabold tracking-tight ${text}`}>
        GrowthForce<span className="text-orange">.</span>
      </span>
    </Link>
  );
}
