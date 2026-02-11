"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-stadium.jpg"
          alt="Campo dello stadio Montecarlo al tramonto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Animated Red Line Accent */}
      <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-primary/60 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-primary font-semibold text-sm tracking-[0.4em] uppercase mb-4">
            Associazione Sportiva Dilettantistica
          </p>
        </div>

        <h1
          className={`font-heading text-7xl md:text-9xl lg:text-[11rem] leading-none text-foreground tracking-wide transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-glow-red">MONTE</span>
          <span className="text-primary">CARLO</span>
        </h1>

        <div
          className={`mt-6 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Passione, disciplina e talento. Da oltre vent{"'"}anni formiamo campioni e costruiamo futuro.
          </p>
        </div>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#scuola"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Scopri la Scuola Calcio
          </a>
          <a
            href="/abbonamenti"
            className="px-8 py-4 border border-foreground/20 text-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
          >
            Montecarlo Live
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted-foreground text-xs tracking-widest uppercase">Scorri</span>
        <ChevronDown className="text-primary" size={20} />
      </div>
    </section>
  );
}
