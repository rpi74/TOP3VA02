import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Counter } from "@/components/site/Counter";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import {
  MapPin, Search, Globe, BarChart3, Phone, ArrowRight, Check,
  Zap, Target, MessageSquare, ChevronDown, Mail, Instagram,
  Linkedin, Twitter, Sparkles, TrendingUp,
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
      <Trust />
      <Services />
      <Process />
      <BeforeAfter />
      <WhyUs />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground text-background">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* floating pin */}
      <div className="absolute top-1/4 right-[10%] hidden lg:block animate-float-pin">
        <div className="relative">
          <div className="absolute inset-0 bg-primary blur-2xl opacity-50" />
          <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-glow">
            <MapPin className="w-10 h-10 text-primary-foreground" strokeWidth={2.5} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[8%] hidden lg:block animate-float-pin" style={{ animationDelay: "1.5s" }}>
        <div className="w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center shadow-glow">
          <span className="text-background font-display text-xl">3</span>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-32">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-background/20 bg-background/5 backdrop-blur-sm text-xs uppercase tracking-widest mb-8 reveal">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          International Visibility Agency
        </div>
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] uppercase reveal">
          If you're not <span className="text-gradient-red">visible</span>,
          <br />you don't <span className="italic font-light">exist.</span>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-background/70 max-w-2xl mx-auto reveal">
          We help businesses get seen, get contacted, and turn visibility into real clients.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 reveal">
          <Button variant="hero" size="xl" asChild>
            <a href="#contact">Get Your Visibility Audit <ArrowRight /></a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild className="text-background border-background/30 hover:bg-background/10 hover:text-background">
            <a href="#process">See How It Works</a>
          </Button>
        </div>
      </div>

      <a href="#trust" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/60 hover:text-primary transition">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-current animate-scroll-down" />
        </div>
      </a>
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
    <section id="trust" className="py-24 md:py-32 px-6">
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

function Services() {
  const items = [
    { Icon: Globe, t: "Website Design & Creation", d: "Simple, modern, conversion-focused websites that turn visitors into clients." },
    { Icon: Search, t: "Google Visibility Optimization", d: "Get found exactly when people search for your services in your area." },
    { Icon: BarChart3, t: "Online Presence Audit", d: "We pinpoint exactly what's costing you leads — and how to fix it fast." },
    { Icon: Phone, t: "Contact & Booking Systems", d: "Turn visits into calls, messages and confirmed appointments on autopilot." },
  ];
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-muted/40 border-y border-border">
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
    <section id="process" className="py-24 md:py-32 px-6">
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
    <section className="py-24 md:py-32 px-6 bg-foreground text-background overflow-hidden">
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
    <section id="why" className="py-24 md:py-32 px-6">
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
    <section id="contact" className="relative py-24 md:py-40 px-6 bg-foreground text-background overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 blur-[120px] rounded-full" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-xs uppercase tracking-widest mb-8 reveal animate-pulse-glow">
          <MessageSquare className="w-3.5 h-3.5 text-primary" />
          Free visibility audit
        </div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] reveal">
          Start getting more <span className="text-gradient-red">calls & clients.</span>
        </h2>
        <p className="mt-8 text-background/70 text-lg max-w-xl mx-auto reveal">
          We'll review your online presence and send you a clear, actionable report. No commitment. No fluff.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center reveal">
          <Button variant="hero" size="xl" asChild>
            <a href="mailto:contact@top3va.com">Request Your Audit <ArrowRight /></a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild className="text-background border-background/30 hover:bg-background/10 hover:text-background">
            <a href="mailto:contact@top3va.com">Talk to us</a>
          </Button>
        </div>
        <p className="mt-6 text-sm text-background/50 reveal">No commitment. Clear insights.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-border px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="TOP3 VA" className="h-10 w-auto mb-4" />
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
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@top3va.com</li>
            <li className="flex items-center gap-2"><Globe className="w-4 h-4" /> Worldwide</li>
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
