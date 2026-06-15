import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout, Section, SectionHead } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import meetingImg from "@/assets/business-meeting.jpg";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "For Businesses — GrowthForce Africa" },
      { name: "description", content: "Launch, promote and grow with a managed field team. Sales, leads, app downloads, recruitment and market research campaigns." },
      { property: "og:title", content: "For Businesses — GrowthForce Africa" },
      { property: "og:url", content: "/businesses" },
    ],
    links: [{ rel: "canonical", href: "/businesses" }],
  }),
  component: BusinessesPage,
});

const CAMPAIGN_TYPES = [
  "Sales Campaigns", "Lead Generation Campaigns", "App Download Campaigns",
  "Student Recruitment Campaigns", "SACCO Member Recruitment", "Health Awareness Campaigns",
  "Product Launch Campaigns", "NGO Community Mobilization", "Market Surveys", "Brand Promotion",
];

const STEPS = [
  "Book a consultation",
  "Tell us your goal",
  "We prepare a campaign strategy and budget",
  "Agreement is signed",
  "We train and deploy the field team",
  "We track performance daily",
  "You receive reports and verified results",
];

const DELIVERABLES = [
  "Campaign strategy", "Field team deployment", "Team leader / supervisor",
  "Lead collection system", "CRM tracking", "Daily activity reports",
  "Weekly performance reports", "Final campaign report", "Photos and field evidence",
];

function BusinessesPage() {
  return (
    <SiteLayout>
      <Section className="bg-soft-gradient">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">For Businesses</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-deep sm:text-5xl">
              Launch, Promote, and Grow With a Managed Field Team
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether you need more students, new SACCO members, app downloads, product awareness,
              customer leads, community registrations or sales conversions — GrowthForce Africa
              provides the people, process, technology and supervision to execute your campaign.
            </p>
          </div>
          <img src={meetingImg} alt="Business consultation" className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl" loading="lazy" width={1280} height={896} />
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Campaign Types" title="Pick the outcome — we'll design the campaign" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {CAMPAIGN_TYPES.map((t) => (
            <Card key={t} className="card-lift border-border/70 p-5">
              <p className="text-sm font-semibold text-navy-deep">{t}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/40">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHead eyebrow="How It Works" title="How businesses work with us" />
            <ol className="mt-8 space-y-4">
              {STEPS.map((s, i) => (
                <li key={s} className="flex gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white">{i + 1}</span>
                  <p className="text-sm font-medium text-navy-deep">{s}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHead eyebrow="Deliverables" title="What clients get" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span className="text-sm font-medium text-navy-deep">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="request">
        <SectionHead center eyebrow="Request a Campaign" title="Tell us about your goal" description="A growth strategist will reach out within one business day." />
        <RequestForm />
      </Section>
    </SiteLayout>
  );
}

function RequestForm() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Campaign request received", { description: "Our team will contact you within 1 business day." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Organization Name" name="org" required />
        <Field label="Contact Person" name="contact" required />
        <Field label="Phone Number" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <SelectField label="Industry" name="industry" options={[
          "Education", "Finance / SACCO", "Health", "NGO", "Real Estate",
          "Insurance", "Startup / App", "Retail", "Telecom", "Government", "Other"
        ]} />
        <Field label="Campaign Goal" name="goal" placeholder="e.g. recruit 1,000 new SACCO members" />
        <Field label="Target Location" name="location" placeholder="Kampala, Wakiso, Mukono…" />
        <Field label="Number of People You Want to Reach" name="reach" type="number" />
        <Field label="Estimated Campaign Duration" name="duration" placeholder="e.g. 6 weeks" />
        <SelectField label="Primary Outcome Needed" name="outcome" options={[
          "Sales", "Leads", "Awareness", "Registrations", "App Downloads", "Market Research"
        ]} />
      </div>
      <div className="mt-5">
        <Label htmlFor="details">Additional Details</Label>
        <Textarea id="details" name="details" rows={5} placeholder="Anything else we should know about your product, audience or constraints?" className="mt-1.5" />
      </div>
      <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full bg-orange text-white hover:bg-orange/90 sm:w-auto">
        {submitting ? "Submitting…" : "Submit Request"}
      </Button>
    </form>
  );
}

export function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} required={required} className="mt-1.5" />
    </div>
  );
}

export function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Select name={name}>
        <SelectTrigger className="mt-1.5"><SelectValue placeholder={`Select ${label.toLowerCase()}`} /></SelectTrigger>
        <SelectContent>
          {options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}
