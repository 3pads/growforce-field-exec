import { createFileRoute } from "@tanstack/react-router";
import { DashboardIndexFallback } from "./dashboard";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardIndexFallback,
});
