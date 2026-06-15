import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout, Section } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Login — GrowthForce Africa" }],
  }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [role, setRole] = useState("admin");
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Welcome back");
    nav({ to: role === "client" ? "/dashboard/client-portal" : role === "field" ? "/dashboard/field" : role === "supervisor" ? "/dashboard/supervisor" : "/dashboard/admin" });
  };
  return (
    <SiteLayout>
      <Section>
        <div className="mx-auto max-w-md">
          <h1 className="font-display text-3xl font-extrabold text-navy-deep">Login</h1>
          <p className="mt-2 text-sm text-muted-foreground">Access your GrowthForce dashboard.</p>

          <Tabs value={role} onValueChange={setRole} className="mt-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="client">Client</TabsTrigger>
              <TabsTrigger value="field">Field</TabsTrigger>
              <TabsTrigger value="supervisor">Sup.</TabsTrigger>
            </TabsList>
            <TabsContent value={role} className="mt-0" />
          </Tabs>

          <form onSubmit={submit} className="mt-6 space-y-4 rounded-2xl border border-border bg-card p-6 shadow-xl">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="demo@growthforceafrica.com" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="demo" className="mt-1.5" />
            </div>
            <Button type="submit" className="w-full bg-orange text-white hover:bg-orange/90">Sign in as {role}</Button>
            <p className="text-center text-xs text-muted-foreground">Preview only — no real authentication is wired.</p>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account? <Link to="/contact" className="font-semibold text-navy hover:text-orange">Contact us</Link>
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
}
