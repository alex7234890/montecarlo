"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowRight } from "lucide-react";

const teams = [
  {
    name: "Giovanissimi",
    ages: "13 - 14 anni",
    desc: "Consolidamento tattico e tecnico. Competizioni regionali e sviluppo dell'identita di gioco.",
    image: "/images/youth-training.jpg",
  },
  {
    name: "Allievi",
    ages: "15 - 16 anni",
    desc: "Preparazione atletica avanzata, schemi di gioco complessi e crescita competitiva ad alto livello.",
    image: "/images/team-action.jpg",
  },
  {
    name: "Juniores",
    ages: "17 - 18 anni",
    desc: "L'ultimo step prima della prima squadra. Competizioni agonistiche e mentalita da professionista.",
    image: "/images/hero-stadium.jpg",
  },
  {
    name: "Prima Squadra",
    ages: "Agonistica",
    desc: "Il vertice del nostro progetto sportivo. Calcio competitivo, spirito di squadra e risultati.",
    image: "/images/campo-sintetico.jpg",
  },
];

export default function SettoreGiovanile() {
  const [inView, setInView] = useState(false);
  const [activeTeam, setActiveTeam] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="settore" ref={ref} className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Il Percorso Verso L{"'"}Eccellenza
          </p>
          <h2 className="font-heading text-5xl md:text-7xl text-foreground leading-none">
            SETTORE GIOVANILE
          </h2>
        </div>

        {/* Interactive layout */}
        <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}>
          {/* Left - Image showcase */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] lg:h-[550px]">
            {teams.map((team, i) => (
              <img
                key={team.name}
                src={team.image || "/placeholder.svg"}
                alt={`${team.name} - ${team.ages}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  activeTeam === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass rounded-xl p-5">
                <h3 className="font-heading text-4xl text-foreground">{teams[activeTeam].name}</h3>
                <p className="text-primary font-semibold text-sm">{teams[activeTeam].ages}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{teams[activeTeam].desc}</p>
              </div>
            </div>
          </div>

          {/* Right - Team selector */}
          <div className="flex flex-col gap-4">
            {teams.map((team, i) => (
              <button
                key={team.name}
                onClick={() => setActiveTeam(i)}
                className={`group text-left p-6 rounded-xl transition-all duration-500 ${
                  activeTeam === i
                    ? "glass border-l-4 border-l-primary"
                    : "hover:bg-secondary/50 border-l-4 border-l-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-heading text-3xl transition-colors duration-300 ${
                      activeTeam === i ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {team.name}
                    </h3>
                    <span className={`text-sm font-semibold ${
                      activeTeam === i ? "text-primary" : "text-muted-foreground/60"
                    }`}>
                      {team.ages}
                    </span>
                  </div>
                  <ArrowRight
                    className={`transition-all duration-300 ${
                      activeTeam === i
                        ? "text-primary translate-x-0 opacity-100"
                        : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50"
                    }`}
                    size={24}
                  />
                </div>
                {activeTeam === i && (
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed lg:hidden">
                    {team.desc}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
