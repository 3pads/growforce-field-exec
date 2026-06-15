import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout, Section, SectionHead } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Field, SelectField } from "./businesses";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import trainingImg from "@/assets/training-session.jpg";

export const Route = createFileRoute("/field-associates")({
  head: () => ({
    meta: [
      { title: "Join Our Field Network — GrowthForce Africa" },
      { name: "description", content: "Join GrowthForce Africa's field growth network. Get trained and deployed on professional campaigns across Uganda." },
      { property: "og:title", content: "Join Our Field Network" },
      { property: "og:url", content: "/field-associates" },
    ],
    links: [{ rel: "canonical", href: "/field-associates" }],
  }),
  component: FieldAssociatesPage,
});

const WHO = ["Sales agents", "Field marketers", "Brand promoters", "Youth looking for work", "Community mobilizers", "Data collectors", "Product promoters", "App promoters", "Student recruitment agents"];
const LOOK_FOR = ["Good communication", "Confidence", "Honesty", "Smartphone access", "Ability to move in the field", "Ability to report daily", "Professional behavior", "Willingness to learn"];
const BENEFITS = ["Sales & marketing training", "Campaign-based opportunities", "Performance-based payments", "Experience with real companies", "Digital reporting skills", "Career growth"];

function FieldAssociatesPage() {
  return (
    <SiteLayout>
      <Section className="bg-soft-gradient">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange">For Field Associates</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold text-navy-deep sm:text-5xl">Join Our Field Growth Network</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              GrowthForce Africa trains and deploys motivated people to work on professional campaigns
              for companies, schools, NGOs, SACCOs, hospitals, startups and other organizations.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-orange/30 bg-orange-soft/40 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
              <p className="text-sm text-navy-deep">
                <strong>Important:</strong> Joining the network does not guarantee immediate work. Field associates are selected and deployed based on campaign requirements, location, skills, availability and performance.
              </p>
            </div>
          </div>
          <img src={trainingImg} alt="Training session" className="aspect-[5/4] w-full rounded-3xl object-cover shadow-xl" loading="lazy" width={1280} height={896} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <Panel title="Who Can Join" items={WHO} />
          <Panel title="What We Look For" items={LOOK_FOR} />
          <Panel title="Benefits" items={BENEFITS} />
        </div>
      </Section>

      <Section className="bg-secondary/40" id="apply">
        <SectionHead center eyebrow="Apply" title="Join the field network" description="Complete your application — selected candidates are contacted when a matching campaign opens." />
        <ApplyForm />
      </Section>
    </SiteLayout>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="border-border/70 p-6">
      <h3 className="font-display text-xl font-extrabold text-navy-deep">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function ApplyForm() {
  const [submitting, setSubmitting] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application submitted", { description: "We'll contact you when a matching campaign opens." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <form onSubmit={submit} className="mx-auto mt-10 max-w-4xl rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Phone Number" name="phone" type="tel" required />
        <Field label="WhatsApp Number" name="whatsapp" type="tel" />
        <Field label="Email" name="email" type="email" />
        <Field label="District" name="district" required />
        <Field label="Area of Residence" name="area" />
        <SelectField label="Age Range" name="age" options={["18-24","25-30","31-35","36-45","46+"]} />
        <SelectField label="Education Level" name="education" options={["Primary","Secondary","Diploma","Bachelors","Masters","Other"]} />
        <SelectField label="Do You Have Sales Experience?" name="experience" options={["None","Less than 1 year","1-3 years","3+ years"]} />
        <SelectField label="Do You Own a Smartphone?" name="smartphone" options={["Yes","No"]} />
        <Field label="Languages Spoken" name="languages" placeholder="e.g. English, Luganda, Swahili" />
        <Field label="Areas You Can Cover" name="coverage" placeholder="e.g. Kampala, Wakiso" />
        <SelectField label="Availability" name="availability" options={["Full-time","Part-time","Weekends","Campaign-based"]} />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="cv">Upload CV</Label>
          <Input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="id">Upload National ID / Identification</Label>
          <Input id="id" name="id" type="file" accept="image/*,.pdf" className="mt-1.5" />
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="why">Why Do You Want to Join?</Label>
        <Textarea id="why" name="why" rows={4} className="mt-1.5" placeholder="Tell us about your motivation, skills and goals." />
      </div>

      <Button type="submit" disabled={submitting} size="lg" className="mt-6 w-full bg-orange text-white hover:bg-orange/90 sm:w-auto">
        {submitting ? "Submitting…" : "Submit Application"}
      </Button>
    </form>
  );
}
