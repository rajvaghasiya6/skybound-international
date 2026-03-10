import AboutSection from "@/components/AboutSection";
import BrochureSection from "@/components/BrochureSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import QualitySection from "@/components/QualitySection";
import StatsSection from "@/components/StatsSection";
import WhyUsSection from "@/components/WhyUsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProductsSection />
        <QualitySection />
        <WhyUsSection />
        <BrochureSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
