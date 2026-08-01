import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyHero from "../components/CaseStudyHero";
import Overview from "../components/Overview";
import ProcessSection from "../components/ProcessSection";
import EngineeredWith from "../components/EngineeredWith";
// import VisualArchitecture from "../components/VisualArchitecture";

export const metadata: Metadata = {
  title: "EWA Transglobal Case Study — ElectroStuffs",
  description:
    "A deep dive into the EWA Transglobal industrial export platform — product catalog, secure admin tooling, and a dark gold design system.",
};

export default function EwaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-bg text-cream overflow-x-hidden">
      <Navbar />
      <CaseStudyHero />
      <Overview />
      <ProcessSection />
      <EngineeredWith />
      {/* <VisualArchitecture /> */}
      <Footer />
    </main>
  );
}