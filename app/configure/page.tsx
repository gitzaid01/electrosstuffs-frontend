import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConfiguratorHero from "./components/ConfiguratorHero";
import ProjectConfigurator from "./components/ProjectConfigurator";

export const metadata: Metadata = {
  title: "Project Configurator — ElectroStuffs",
  description:
    "Configure your project scope, scale, and quality, and get a live estimate.",
};

export default function ConfigurePage() {
  return (
    <main className="min-h-screen bg-bg text-cream overflow-x-hidden">
      <Navbar />
      <section className="container-px py-20">
        <ConfiguratorHero />
        <ProjectConfigurator />
      </section>
      <Footer />
    </main>
  );
}