import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import StatsCounter from "@/components/stats-counter";
import AboutSection from "@/components/about-section";
import ScuolaCalcio from "@/components/scuola-calcio";
import SettoreGiovanile from "@/components/settore-giovanile";
import Facilities from "@/components/facilities";
import LiveCTA from "@/components/live-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsCounter />
      <AboutSection />
      <ScuolaCalcio />
      <SettoreGiovanile />
      <Facilities />
      <LiveCTA />
      <Footer />
    </main>
  );
}
