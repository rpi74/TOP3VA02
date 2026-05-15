import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/site/Navbar";
import { Counter } from "@/components/site/Counter";
import logo from "@/assets/logo.png";
import teamOffice from "@/assets/team-office.png";
import teamMember from "@/assets/team-member.png";
import teamDashboard from "@/assets/team-dashboard.png";
import teamWhiteboard from "@/assets/team-whiteboard.png";
import teamGroup from "@/assets/team-group.png";
import {
  MapPin, Search, Globe, BarChart3, Phone, ArrowRight, Check,
  Zap, Target, MessageSquare, ChevronDown, Mail, Instagram,
  Linkedin, Twitter, TrendingUp, Star, Quote,
  EyeOff, MousePointerClick, Users, DollarSign,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOP3 — VA Visibility Agency | Be Seen. Get Clients." },
      { name: "description", content: "If you're not visible, you don't exist. We turn online visibility into real clients — calls, messages, and bookings." },
      { property: "og:title", content: "TOP3 — VA Visibility Agency" },
      { property: "og:description", content: "We turn online visibility into real clients." },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Trust />
      <BehindTheScenes />
      <Services />
      <Process />
      <BeforeAfter />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-gradient-to-b from-background via-muted/40 to-background pt-44 md:pt-52 pb-16 md:pb-20">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full" />

      <div className="absolute top-[22%] right-[6%] hidden lg:block animate-float-pin">
        <div className="relative">
          <div className="absolute inset-0 bg-primary blur-2xl opacity-40" />
          <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow">
            <MapPin className="w-10 h-10 text-primary-foreground" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/80 backdrop-blur-sm text-xs uppercase tracking-widest mb-5 reveal">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Visibility Agency
        </div>
        <h1 className="font-display text-[clamp(2rem,7vw,7.5rem)] leading-[1.05] uppercase reveal max-w-none w-full tracking-[-0.04em]">
          <span className="block md:whitespace-nowrap">If you're not <span className="text-gradient-red">visible</span>,</span>
          <span className="block md:whitespace-nowrap">...you don't <span className="text-gradient-red">exist</span></span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl reveal">
          We help businesses rank higher, attract ready-to-buy customers, and increase revenue through powerful websites and visibility strategies.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 reveal">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact"><Phone className="w-5 h-5" /> Book Your Free Strategy Call</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#process">See How It Works</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const pains = [
    { Icon: EyeOff, t: "You don't show up on Google", d: "Customers searching for your service can't find you — they find competitors instead." },
    { Icon: MousePointerClick, t: "Your site doesn't convert", d: "Visitors land, get confused, and bounce. No calls, no messages, no bookings." },
    { Icon: Users, t: "Competitors steal your clients", d: "While you stay invisible, they capture the leads that should be yours." },
    { Icon: DollarSign, t: "You leave money on the table", d: "Every day without visibility is revenue walking straight to someone else." },
  ];
  return (
    <section className="py-16 md:py-20 px-6 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">The Problem</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95]">
            If you're <span className="text-gradient-red">invisible</span>,<br />
            you leave money on the table.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pains.map(({ Icon, t, d }, i) => (
            <div
              key={t}
              className="reveal group relative p-6 rounded-2xl bg-background/5 border border-background/10 hover:border-primary/50 hover:bg-background/10 transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl uppercase mb-2 leading-tight">{t}</h3>
              <p className="text-background/60 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const stats = [
    { v: 320, s: "%", l: "Avg. increase in calls" },
    { v: 12500, s: "+", l: "Leads generated" },
    { v: 87, s: "%", l: "Visibility improvement" },
    { v: 48, s: "h", l: "From audit to action" },
  ];
  return (
    <section id="trust" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Visibility that converts</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase max-w-3xl mx-auto leading-tight">
            We don't sell traffic. We deliver <span className="text-gradient-red">real clients.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Less technical complexity, more results that move the needle: more calls, more messages, more booked appointments.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border reveal">
          {stats.map((st) => (
            <div key={st.l} className="bg-background p-8 text-center hover:bg-muted transition-colors">
              <div className="font-display text-4xl md:text-6xl text-foreground">
                <Counter to={st.v} suffix={st.s} />
              </div>
              <div className="mt-3 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">{st.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BehindTheScenes() {
  return (
    <section className="py-16 md:py-20 px-6 bg-muted/30 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Behind the scenes</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight">
            A real team. <span className="text-gradient-red">Real work.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            No outsourced freelancers. No black boxes. A dedicated team obsessed with your visibility and your results.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          <div className="relative md:col-span-2 md:row-span-2 aspect-square md:aspect-auto rounded-2xl overflow-hidden border border-border group">
            <img src={teamOffice} alt="TOP3-VA office and team at work" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-background">
              <div className="text-xs uppercase tracking-widest opacity-80">Our HQ</div>
              <div className="font-display text-xl md:text-2xl uppercase">Where visibility is built</div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border group">
            <img src={teamMember} alt="TOP3-VA specialist analyzing client dashboards" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border group">
            <img src={teamWhiteboard} alt="Team strategizing visibility plan on whiteboard" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border group">
            <img src={teamGroup} alt="TOP3-VA team standing together in the office" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative aspect-square col-span-2 md:col-span-2 rounded-2xl overflow-hidden border border-border group">
            <img src={teamDashboard} alt="Team reviewing client growth metrics" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    { Icon: Globe, t: "Website Design & Creation", d: "Simple, modern, conversion-focused websites that turn visitors into clients." },
    { Icon: Search, t: "Google Visibility Optimization", d: "Get found exactly when people search for your services in your area." },
    { Icon: BarChart3, t: "Online Presence Audit", d: "We pinpoint exactly what's costing you leads — and how to fix it fast." },
    { Icon: Phone, t: "Contact & Booking Systems", d: "Turn visits into calls, messages and confirmed appointments on autopilot." },
  ];
  return (
    <section id="services" className="py-16 md:py-20 px-6 bg-muted/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">What we do</p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight max-w-2xl">
              Built to make you <span className="text-gradient-red">impossible to miss.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ Icon, t, d }, i) => (
            <div
              key={t}
              className="reveal group relative p-8 md:p-10 rounded-2xl bg-background border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant overflow-hidden"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/0 group-hover:bg-primary/10 blur-3xl rounded-full transition-all duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-foreground text-background flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase mb-3">{t}</h3>
                <p className="text-muted-foreground leading-relaxed">{d}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", Icon: Search, t: "Quick Diagnosis", d: "We analyze your current visibility and identify the leaks." },
    { n: "02", Icon: Target, t: "Clear Proposal", d: "A focused plan, no jargon. You know exactly what we'll do." },
    { n: "03", Icon: Zap, t: "Agile Implementation", d: "We move fast. Most projects launch in days, not months." },
    { n: "04", Icon: TrendingUp, t: "Results Focus", d: "We track calls, messages, conversions — not vanity metrics." },
  ];
  return (
    <section id="process" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">How it works</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase">A clear path to <span className="text-gradient-red">more clients.</span></h2>
        </div>
        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          {steps.map(({ n, Icon, t, d }, i) => (
            <div key={n} className="reveal text-center relative" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative mx-auto w-20 h-20 rounded-full bg-background border-2 border-border flex items-center justify-center group hover:border-primary transition-colors">
                <Icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-glow">{n}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl uppercase">{t}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const before = ["Cluttered & confusing", "Outdated design", "No clear call to action", "Invisible on Google"];
  const after = ["Clean & focused", "Modern, premium feel", "Conversion-driven CTAs", "Found by ready-to-buy clients"];
  return (
    <section className="py-16 md:py-20 px-6 bg-foreground text-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Before / After</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase">The transformation is <span className="text-gradient-red">obvious.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="reveal p-8 md:p-10 rounded-2xl border border-background/10 bg-background/5">
            <div className="text-xs uppercase tracking-widest text-background/50 mb-2">Before</div>
            <h3 className="font-display text-3xl md:text-4xl uppercase mb-6 text-background/70">Invisible</h3>
            <ul className="space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-start gap-3 text-background/60">
                  <span className="w-5 h-5 rounded-full border border-background/20 mt-0.5 shrink-0" />
                  <span className="line-through">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal p-8 md:p-10 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 to-transparent shadow-glow">
            <div className="text-xs uppercase tracking-widest text-primary mb-2">After</div>
            <h3 className="font-display text-3xl md:text-4xl uppercase mb-6">Unmissable</h3>
            <ul className="space-y-3">
              {after.map((a) => (
                <li key={a} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary mt-0.5 shrink-0 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { t: "No technical complexity", d: "Plain language. Clear deliverables. Zero jargon." },
    { t: "Real results focus", d: "We measure calls and clients, not impressions." },
    { t: "Fast implementation", d: "Days, not months. We ship and iterate." },
    { t: "Clear communication", d: "One contact, weekly updates, no surprises." },
  ];
  return (
    <section id="why" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Why choose us</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-tight">
            Agencies talk. We <span className="text-gradient-red">deliver.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-md">
            Built for business owners who want one thing: more qualified clients walking through the door.
          </p>
        </div>
        <ul className="space-y-5">
          {points.map(({ t, d }, i) => (
            <li key={t} className="reveal flex items-start gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/40 hover:shadow-elegant transition-all" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" strokeWidth={3} />
              </div>
              <div>
                <div className="font-display text-xl uppercase">{t}</div>
                <div className="text-muted-foreground text-sm mt-1">{d}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-6 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 blur-[120px] rounded-full" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs uppercase tracking-widest mb-8 reveal animate-pulse-glow">
            <MessageSquare className="w-3.5 h-3.5 text-primary" />
            Free visibility audit
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase leading-[0.95] reveal">
            Start getting more <span className="text-gradient-red">calls & clients.</span>
          </h2>
          <p className="mt-6 text-background/70 text-lg max-w-xl mx-auto lg:mx-0 reveal">
            Tell us about your business. We'll send you a clear, actionable visibility report within 48 hours.
          </p>
          <ul className="mt-8 space-y-3 reveal max-w-md mx-auto lg:mx-0 text-left">
            {["100% free, no commitment", "Personalized to your business", "Actionable report in 48h"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-background/80">
                <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <AuditForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="TOP3 VA" className="h-20 w-auto mb-4" />
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            We turn online visibility into real clients. Worldwide visibility agency built for results.
          </p>
        </div>
        <div>
          <h4 className="font-display uppercase mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#process" className="hover:text-primary">Process</a></li>
            <li><a href="#why" className="hover:text-primary">Why us</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display uppercase mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>contact@top3va.com</span></li>
            <li className="flex items-center gap-2"><Globe className="w-4 h-4" /><span>Worldwide</span></li>
          </ul>
          <div className="flex gap-3 mt-4">
            {[Instagram, Linkedin, Twitter].map((I, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition">
                <I className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} TOP3 — VA Visibility Agency. All rights reserved.</div>
        <div className="flex items-center gap-2"><ChevronDown className="w-3 h-3 rotate-180" /> Built for visibility.</div>
      </div>
    </footer>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Marco R.",
      role: "Restaurant Owner, Milan",
      text: "We went from invisible on Google to fully booked weekends. Calls tripled in the first month.",
      rating: 5,
    },
    {
      name: "Sarah L.",
      role: "Dental Clinic, London",
      text: "Clear strategy, fast execution, real results. Best investment we made for our practice.",
      rating: 5,
    },
    {
      name: "Diego P.",
      role: "Auto Detailing, Madrid",
      text: "No fluff. They rebuilt our presence and bookings doubled within 6 weeks. Highly recommended.",
      rating: 5,
    },
  ];
  return (
    <section id="testimonials" className="py-16 md:py-20 px-6 bg-muted/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">Client stories</p>
          <h2 className="font-display text-4xl md:text-6xl uppercase">
            Real businesses. <span className="text-gradient-red">Real growth.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={t.name}
              className="reveal relative p-8 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/15" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{t.text}"</p>
              <div className="pt-4 border-t border-border">
                <div className="font-display uppercase text-lg">{t.name}</div>
                <div className="text-muted-foreground text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const auditSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  goals: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(1000),
});

function AuditForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", website: "", goals: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = auditSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setLoading(true);
    try {
      const subject = encodeURIComponent(`Visibility audit request — ${result.data.name}`);
      const body = encodeURIComponent(
        `Name: ${result.data.name}\nEmail: ${result.data.email}\nWebsite: ${result.data.website || "—"}\n\nGoals:\n${result.data.goals}`
      );
      window.location.href = `mailto:contact@top3va.com?subject=${subject}&body=${body}`;
      toast.success("Opening your email — we'll reply within 48h.");
      setForm({ name: "", email: "", website: "", goals: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="reveal relative p-6 md:p-8 rounded-2xl bg-background text-foreground border border-border shadow-elegant"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-transparent opacity-50 -z-10 blur-md" />
      <h3 className="font-display text-2xl md:text-3xl uppercase mb-1">Request your audit</h3>
      <p className="text-muted-foreground text-sm mb-6">Free • 48h turnaround • No commitment</p>
      <div className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Your name</Label>
          <Input id="name" placeholder="Jane Doe" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="website">Website (optional)</Label>
          <Input id="website" placeholder="https://yoursite.com" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} maxLength={255} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="goals">Your goals</Label>
          <Textarea id="goals" placeholder="More calls? More bookings? Tell us what success looks like." rows={4} value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} maxLength={1000} required />
        </div>
        <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
          {loading ? "Sending..." : (<>Get My Free Audit <ArrowRight /></>)}
        </Button>
        <p className="text-xs text-muted-foreground text-center">We respect your privacy. No spam, ever.</p>
      </div>
    </form>
  );
}
