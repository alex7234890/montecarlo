"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Eye, Bell, Star } from "lucide-react";
import Link from "next/link";

export default function LiveCTA() {
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
    <section ref={ref} className="py-28 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/parent-watching.jpg"
          alt="Genitore guarda il proprio figlio giocare"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
          {/* Left content */}
          <div className={`transition-all duration-1000 ${inView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
                Nuovo Servizio
              </span>
            </div>
            <h2 className="font-heading text-5xl md:text-7xl text-foreground leading-none mb-6">
              MONTECARLO<br />
              <span className="text-primary text-glow-red">LIVE</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg">
              Non perderti nemmeno un momento. Con Montecarlo Live puoi seguire 
              in diretta le partite e gli allenamenti di tuo figlio, ovunque tu sia. 
              Abbonati e resta sempre connesso alla sua crescita sportiva.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: Play, text: "Partite in Diretta" },
                { icon: Eye, text: "Allenamenti Live" },
                { icon: Bell, text: "Notifiche Instant" },
                { icon: Star, text: "Highlights Esclusivi" },
              ].map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <span className="text-foreground text-sm font-medium">{feat.text}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/abbonamenti"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wider uppercase rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Play size={16} />
                Scopri gli Abbonamenti
              </Link>
              <span className="text-muted-foreground text-sm self-center">
                A partire da 9.99/mese
              </span>
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className={`transition-all duration-1000 delay-300 ${inView ? "animate-slide-in-right" : "opacity-0"}`}>
            <div className="relative">
              {/* Mock device frame */}
              <div className="glass rounded-3xl p-3 border border-foreground/10">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/images/youth-training.jpg"
                    alt="Diretta streaming di una partita giovanile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Live badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-primary px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                    <span className="text-primary-foreground text-xs font-bold tracking-wider">LIVE</span>
                  </div>

                  {/* Bottom overlay info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-foreground font-semibold text-sm">Pulcini - Allenamento</p>
                          <p className="text-muted-foreground text-xs">Campo Sintetico a 9</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="text-primary" size={14} />
                          <span className="text-muted-foreground text-xs">47 spettatori</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-4 animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="flex items-center gap-3">
                  <Bell className="text-primary" size={18} />
                  <div>
                    <p className="text-foreground text-xs font-semibold">Partita iniziata!</p>
                    <p className="text-muted-foreground text-[10px]">Pulcini vs FC Riviera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
