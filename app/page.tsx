import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero"; 
import MarqueeBanner from "@/components/MarqueeBanner";
import Services from "@/components/Services";
import Work from "@/components/Work";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-cream overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <Services />
      <Work />
      <TechStack />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}