import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpertiseHero from "./components/ExpertiseHero";
import TechnicalJourney from "./components/TechnicalJourney";
import HowIBuild from "./components/HowIBuild";
import TechArsenal from "./components/TechArsenal";
import WorkingProcess from "./components/WorkingProcess";

export const metadata: Metadata = {
  title: "Expertise — ElectroStuffs",
  description:
    "Engineering beyond websites — healthcare integrations, real-time communication, browser extensions, and large-scale platforms.",
};

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-bg text-cream overflow-x-hidden">
      <Navbar />
      <ExpertiseHero />
      <TechnicalJourney />
      <HowIBuild />
      <TechArsenal />
      <WorkingProcess />
      <Footer />
    </main>
  );
}