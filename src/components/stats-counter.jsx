"use client";

import { useEffect, useState, useRef } from "react";
import { Users, Trophy, Calendar, MapPin } from "lucide-react";

const stats = [
  { icon: Users, value: 320, label: "Tesserati", suffix: "+" },
  { icon: Trophy, value: 8, label: "Categorie Attive", suffix: "" },
  { icon: Calendar, value: 25, label: "Anni di Storia", suffix: "+" },
  { icon: MapPin, value: 2, label: "Campi Sintetici", suffix: "" },
];

function AnimatedNumber({ target, suffix, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-heading text-6xl md:text-7xl text-primary text-glow-red">
      {count}{suffix}
    </span>
  );
}

export default function StatsCounter() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, hsl(0 75% 50%) 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center glass rounded-2xl p-8 transition-all duration-700 hover:scale-105 ${
                  inView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <AnimatedNumber target={stat.value} suffix={stat.suffix} inView={inView} />
                <span className="text-muted-foreground text-sm mt-2 tracking-wide uppercase">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
