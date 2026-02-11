"use client";

import { useEffect, useState, useRef } from "react";
import { Maximize2, Lightbulb, Layers } from "lucide-react";

const fields = [
  {
    name: "Campo a 9",
    subtitle: "Sintetico di Ultima Generazione",
    size: "60 x 40 m",
    desc: "Perfetto per le categorie giovanili. Manto sintetico omologato, impianto di illuminazione LED e spogliatoi dedicati.",
    features: ["Erba sintetica", "Illuminazione LED", "Spogliatoi"],
  },
  {
    name: "Campo a 11",
    subtitle: "Regolamentare per Competizioni",
    size: "105 x 68 m",
    desc: "Il nostro fiore all'occhiello. Campo regolamentare per gare ufficiali con tribuna, spogliatoi e area riscaldamento.",
    features: ["Regolamentare", "Tribuna 200 posti", "Area Warm-Up"],
  },
];

export default function Facilities() {
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
    <section id="strutture" ref={ref} className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/campo-sintetico.jpg"
          alt="Campo sintetico del Montecarlo"
          className="w-full h-full object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Dove Giochiamo
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-foreground leading-none">
            LE NOSTRE STRUTTURE
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {fields.map((field, i) => (
            <div
              key={field.name}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.25}s` }}
            >
              <div className="glass p-8 h-full border border-foreground/5">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-4xl text-foreground">{field.name}</h3>
                    <p className="text-primary text-sm font-semibold">{field.subtitle}</p>
                  </div>
                  <div className="glass rounded-lg px-4 py-2 flex items-center gap-2">
                    <Maximize2 className="text-accent" size={16} />
                    <span className="text-foreground text-sm font-semibold">{field.size}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {field.desc}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-3">
                  {field.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-4 py-2 bg-primary/10 rounded-lg text-primary text-xs font-semibold tracking-wide"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Decorative */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
