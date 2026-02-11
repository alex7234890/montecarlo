"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  Play,
  Eye,
  Bell,
  Star,
  Video,
  Download,
  Users,
  Zap,
  Crown,
  Shield,
} from "lucide-react";

const plans = [
  {
    name: "Base",
    price: "9.99",
    period: "mese",
    desc: "Segui le partite del tuo ragazzo in diretta.",
    icon: Play,
    popular: false,
    features: [
      "Streaming partite in diretta",
      "1 categoria a scelta",
      "Qualita video SD",
      "Notifiche partite",
    ],
    excluded: [
      "Allenamenti in diretta",
      "Highlights post-partita",
      "Download video",
      "Multi-categoria",
    ],
  },
  {
    name: "Premium",
    price: "19.99",
    period: "mese",
    desc: "L'esperienza completa per i genitori. La piu scelta.",
    icon: Crown,
    popular: true,
    features: [
      "Streaming partite in diretta",
      "Allenamenti in diretta",
      "Fino a 3 categorie",
      "Qualita video HD",
      "Notifiche instant",
      "Highlights post-partita",
    ],
    excluded: [
      "Download video",
      "Accesso multi-dispositivo illimitato",
    ],
  },
  {
    name: "Family",
    price: "29.99",
    period: "mese",
    desc: "Per tutta la famiglia. Ogni momento, ogni campo.",
    icon: Users,
    popular: false,
    features: [
      "Streaming partite in diretta",
      "Allenamenti in diretta",
      "Tutte le categorie",
      "Qualita video Full HD",
      "Notifiche instant",
      "Highlights post-partita",
      "Download video",
      "5 dispositivi simultanei",
    ],
    excluded: [],
  },
];

const faqs = [
  {
    q: "Come funziona lo streaming?",
    a: "Le nostre telecamere posizionate sui campi trasmettono in diretta su una piattaforma dedicata. Riceverai una notifica all'inizio di ogni partita o allenamento.",
  },
  {
    q: "Posso cambiare piano in qualsiasi momento?",
    a: "Certo! Puoi fare upgrade o downgrade del tuo abbonamento in qualsiasi momento. Il cambio sara effettivo dal mese successivo.",
  },
  {
    q: "Come accedo allo streaming?",
    a: "Dopo l'abbonamento riceverai le credenziali per accedere alla piattaforma web e all'app mobile dedicata.",
  },
  {
    q: "Posso disdire quando voglio?",
    a: "Si, nessun vincolo. Puoi disdire in qualsiasi momento dall'area personale. L'accesso rimarra attivo fino alla fine del periodo pagato.",
  },
];

export default function AbbonamentiPage() {
  const [billingYearly, setBillingYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Back nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300">
            <ArrowLeft size={18} />
            <span className="text-sm">Torna alla Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-heading text-primary-foreground text-sm leading-none">M</span>
            </div>
            <span className="font-heading text-foreground text-lg tracking-wider hidden sm:block">MONTECARLO LIVE</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/parent-watching.jpg"
            alt="Genitore che osserva la partita del figlio"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
              Montecarlo Live
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-foreground leading-none mb-6">
            NON PERDERTI<br />
            <span className="text-primary text-glow-red">NEMMENO UN GOL</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Segui in diretta ogni partita e allenamento di tuo figlio. 
            Ovunque tu sia, sarai sempre a bordo campo.
          </p>

          {/* Billing toggle */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors duration-300 ${!billingYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Mensile
            </span>
            <button
              onClick={() => setBillingYearly(!billingYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                billingYearly ? "bg-primary" : "bg-secondary"
              }`}
              aria-label="Toggle billing period"
            >
              <div className={`absolute top-0.5 w-6 h-6 rounded-full bg-foreground transition-transform duration-300 ${
                billingYearly ? "translate-x-7" : "translate-x-0.5"
              }`} />
            </button>
            <span className={`text-sm font-medium transition-colors duration-300 ${billingYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Annuale
            </span>
            {billingYearly && (
              <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                -20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-28 relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const price = billingYearly
                ? (Number.parseFloat(plan.price) * 0.8 * 12).toFixed(0)
                : plan.price;
              const period = billingYearly ? "anno" : "mese";

              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 ${
                    plan.popular ? "ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
                      Piu Scelto
                    </div>
                  )}
                  <div className={`glass p-8 h-full rounded-2xl border ${plan.popular ? "border-primary/30" : "border-foreground/5"}`}>
                    {/* Icon & Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        plan.popular ? "bg-primary/20" : "bg-secondary"
                      }`}>
                        <Icon className={plan.popular ? "text-primary" : "text-muted-foreground"} size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl text-foreground">{plan.name}</h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6">{plan.desc}</p>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="font-heading text-5xl text-foreground">
                        {billingYearly ? price : plan.price}
                      </span>
                      <span className="text-muted-foreground text-sm">{"/"}{period}</span>
                    </div>

                    {/* CTA */}
                    <button
                      className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wider uppercase transition-all duration-300 mb-8 ${
                        plan.popular
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      Scegli {plan.name}
                    </button>

                    {/* Features */}
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <Check className="text-primary" size={12} />
                          </div>
                          <span className="text-foreground text-sm">{feat}</span>
                        </div>
                      ))}
                      {plan.excluded.map((feat) => (
                        <div key={feat} className="flex items-center gap-3 opacity-40">
                          <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0">
                            <span className="text-muted-foreground text-[10px]">-</span>
                          </div>
                          <span className="text-muted-foreground text-sm line-through">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-secondary/30" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Semplice e Immediato
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground leading-none">
              COME FUNZIONA
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, step: "01", title: "Abbonati", desc: "Scegli il piano adatto e completa la registrazione in pochi minuti." },
              { icon: Bell, step: "02", title: "Ricevi Notifiche", desc: "Sarai avvisato quando inizia una partita o un allenamento." },
              { icon: Video, step: "03", title: "Guarda Live", desc: "Collegati da smartphone, tablet o PC e segui tutto in diretta." },
              { icon: Star, step: "04", title: "Rivivi i Momenti", desc: "Accedi agli highlights e rivivi le giocate migliori." },
            ].map((item) => {
              const StepIcon = item.icon;
              return (
                <div key={item.step} className="text-center group">
                  <div className="relative inline-flex mb-6">
                    <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <StepIcon className="text-primary" size={28} />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Hai Domande?
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground leading-none">
              FAQ
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="glass rounded-xl overflow-hidden border border-foreground/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between"
                >
                  <span className="text-foreground font-medium">{faq.q}</span>
                  <span className={`text-primary transition-transform duration-300 text-xl ${
                    openFaq === i ? "rotate-45" : ""
                  }`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${
                  openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <p className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-heading text-5xl md:text-6xl text-foreground leading-none mb-4">
            PRONTO A <span className="text-primary text-glow-red">PARTIRE?</span>
          </h2>
          <p className="text-muted-foreground text-base mb-8 leading-relaxed">
            Unisciti a centinaia di genitori che gia seguono i loro figli con Montecarlo Live.
          </p>
          <button className="px-10 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 animate-pulse-glow">
            Abbonati Ora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-heading text-primary-foreground text-sm leading-none">M</span>
            </div>
            <span className="text-muted-foreground text-sm">2025 ASD Montecarlo</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Termini</a>
            <Link href="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
