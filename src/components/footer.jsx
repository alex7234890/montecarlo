"use client";

import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contatti" className="border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="Logo ASD Montecarlo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-heading text-foreground text-2xl tracking-wider">MONTECARLO</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Associazione Sportiva Dilettantistica. Passione, disciplina e talento sul campo da oltre 25 anni.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold text-sm tracking-wider uppercase mb-4">
              Navigazione
            </h4>
            <div className="flex flex-col gap-3">
              {["La Societa", "Scuola Calcio", "Settore Giovanile", "Strutture", "Montecarlo Live"].map((link) => (
                <a key={link} href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-foreground font-semibold text-sm tracking-wider uppercase mb-4">
              Categorie
            </h4>
            <div className="flex flex-col gap-3">
              {["Primi Calci", "Pulcini", "Esordienti", "Giovanissimi", "Allievi", "Juniores", "Prima Squadra"].map((cat) => (
                <span key={cat} className="text-muted-foreground text-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold text-sm tracking-wider uppercase mb-4">
              Contatti
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary shrink-0" size={16} />
                <span className="text-muted-foreground text-sm">Via dello Sport 1, Montecarlo</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={16} />
                <span className="text-muted-foreground text-sm">+39 0123 456789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={16} />
                <span className="text-muted-foreground text-sm">info@asdmontecarlo.it</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            2025 ASD Montecarlo. Tutti i diritti riservati.
          </p>
          <p className="text-muted-foreground text-xs">
            P.IVA 12345678901
          </p>
        </div>
      </div>
    </footer>
  );
}
