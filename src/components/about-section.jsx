"use client";

import { useEffect, useState, useRef } from "react";
import { Shield, Heart, Target } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Disciplina",
    desc: "Il rispetto delle regole e dei compagni e alla base del nostro percorso formativo.",
  },
  {
    icon: Heart,
    title: "Passione",
    desc: "L'amore per il calcio come motore di crescita personale e sportiva.",
  },
  {
    icon: Target,
    title: "Obiettivo",
    desc: "Formare atleti completi, pronti per le sfide dentro e fuori dal campo.",
  },
];

export default function AboutSection() {
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
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image + Accent */}
          <div className={`relative transition-all duration-1000 ${inView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/about-team.jpg"
                alt="Squadra Montecarlo in azione durante una partita"
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass rounded-xl p-4 sm:p-6 animate-pulse-glow max-w-[180px] sm:max-w-none">
              <p className="font-heading text-3xl sm:text-4xl text-primary">320+</p>
              <p className="text-muted-foreground text-xs sm:text-sm">Tesserati nella stagione corrente</p>
            </div>
          </div>

          {/* Right - Text */}
          <div className={`transition-all duration-1000 delay-300 ${inView ? "animate-slide-in-right" : "opacity-0"}`}>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Chi Siamo
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-foreground leading-none mb-6">
              UNA FAMIGLIA,<br />UN{"'"}UNICA PASSIONE
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-8">
              L{"'"}ASD Montecarlo nasce dalla volonta di creare un punto di riferimento 
              calcistico per il territorio. Da oltre vent{"'"}anni lavoriamo con dedizione 
              per formare giovani talenti, offrendo un ambiente sano e stimolante dove 
              crescere come atleti e come persone. Con una scuola calcio riconosciuta 
              e un settore giovanile competitivo, rappresentiamo l{"'"}eccellenza del calcio 
              dilettantistico.
            </p>

            <div className="flex flex-col gap-6">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/20">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold text-lg mb-1">{v.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
