import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "./components/AboutHero";
import Philosophy from "./components/Philosophy";
import WhatIEnjoy from "./components/WhatIEnjoy";
import TechnicalPrinciples from "./components/TechnicalPrinciples";
import VisionSection from "./components/VisionSection";

export const metadata: Metadata = {
  title: "About — ElectroStuffs",
  description:
    "Zaid Siddiqui, Founder & Lead Engineer at ElectroStuffs — the philosophy, principles, and technical evolution behind the studio.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg text-cream overflow-x-hidden">
      <Navbar />
      <AboutHero />
      <Philosophy />
      <WhatIEnjoy />
      <TechnicalPrinciples />
      <VisionSection />
      <Footer />
    </main>
  );
}