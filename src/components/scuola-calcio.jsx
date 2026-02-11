"use client";

import { useEffect, useState, useRef } from "react";
import { Baby, Footprints, Zap } from "lucide-react";

const categories = [
  {
    icon: Baby,
    name: "Primi Calci",
    ages: "5 - 7 anni",
    desc: "Il primo approccio al mondo del calcio attraverso il gioco e il divertimento. Coordinazione motoria e socializzazione.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Footprints,
    name: "Pulcini",
    ages: "8 - 10 anni",
    desc: "Sviluppo delle abilita tecniche individuali. Introduzione ai fondamentali e prime esperienze di partita.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Zap,
    name: "Esordienti",
    ages: "11 - 12 anni",
    desc: "Perfezionamento tecnico-tattico, gioco di squadra e preparazione atletica di base per il passaggio al settore giovanile.",
    color: "from-primary/20 to-accent/5",
  },
];

export default function ScuolaCalcio() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="scuola" ref={ref} className="py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/scuola-calcio.jpg"
          alt="Bambini si allenano nella scuola calcio"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Dove Nascono i Campioni
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-foreground leading-none">
            SCUOLA CALCIO
          </h2>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.03] hover:-translate-y-2 ${
                  inView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className={`glass p-6 sm:p-8 h-full bg-gradient-to-br ${cat.color} border border-foreground/5`}>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-primary" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-3xl text-foreground mb-1">{cat.name}</h3>
                  <span className="text-primary text-sm font-semibold">{cat.ages}</span>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                    {cat.desc}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[3rem] transition-all duration-300 group-hover:bg-primary/10" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
