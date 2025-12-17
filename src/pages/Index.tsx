import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import SustainabilitySection from "@/components/sections/SustainabilitySection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ValueProposition />
        <SustainabilitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
