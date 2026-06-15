import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout, Section, SectionHead } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SITE } from "@/lib/site";
import { Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GrowthForce Africa" },
      { name: "description", content: "Get in touch with GrowthForce Africa about campaigns, partnerships or joining the field network." },
      { property: "og:title", content: "Contact GrowthForce Africa" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent", { description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <SiteLayout>
      <Section className="bg-soft-gradient">
        <SectionHead center eyebrow="Contact" title="Let's talk about your growth" description="Reach out about a campaign, partnership or general inquiry." />
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-1">
            <ContactCard icon={Phone} title="Call us" lines={[SITE.phone, SITE.phone2]} />
            <ContactCard icon={Mail} title="Email" lines={[SITE.email]} />
            <ContactCard icon={MapPin} title="Location" lines={[SITE.location]} />
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10 lg:col-span-2">
            <div className="grid gap-5 sm:grid-cols-2">
              <FieldX label="Name" name="name" required />
              <FieldX label="Organization" name="org" />
              <FieldX label="Phone" name="phone" type="tel" />
              <FieldX label="Email" name="email" type="email" required />
              <div className="sm:col-span-2">
                <Label htmlFor="interest">Interest</Label>
                <Select name="interest">
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select interest" /></SelectTrigger>
                  <SelectContent>
                    {["Request a Campaign", "Join Field Network", "Partnership", "General Inquiry"].map((o) =>
                      <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={6} className="mt-1.5" required />
              </div>
            </div>
            <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full bg-orange text-white hover:bg-orange/90 sm:w-auto">
              {submitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </div>
      </Section>
    </SiteLayout>
  );
}

function ContactCard({ icon: I, title, lines }: { icon: React.ComponentType<{ className?: string }>; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-orange/15 text-orange"><I className="h-5 w-5" /></div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
      {lines.map((l) => <p key={l} className="mt-1 text-sm font-semibold text-navy-deep">{l}</p>)}
    </div>
  );
}

function FieldX({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} className="mt-1.5" />
    </div>
  );
}
