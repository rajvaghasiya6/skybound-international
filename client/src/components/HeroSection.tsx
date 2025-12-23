import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/premium_indian_spices_hero.png";
import { motion } from "framer-motion";
import { ChevronDown, Plane, Ship } from "lucide-react";

interface HeroSectionProps {
  onViewProducts?: () => void;
  onContact?: () => void;
}

export default function HeroSection({ onViewProducts, onContact }: HeroSectionProps) {
  const handleViewProducts = () => {
    if (onViewProducts) {
      onViewProducts();
    } else {
      const element = document.querySelector("#products");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContact = () => {
    if (onContact) {
      onContact();
    } else {
      const element = document.querySelector("#contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToStats = () => {
    const element = document.querySelector("#about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-center">
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Ship className="w-4 h-4 text-primary-foreground" />
          <span className="text-white text-sm font-medium tracking-wide">Premium Indian Exports</span>
          <Plane className="w-4 h-4 text-primary-foreground" />
        </motion.div>

        <motion.h1
          className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block">Your Trusted Partner For </span>
          <motion.span
            className="block bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Premium Spices & Agriculture Products
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-sm sm:text-lg text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A Prominent Exporter of Premium Spices & Agriculture Products from India. 
          Connecting global markets with excellence, quality, and reliability.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            onClick={handleViewProducts}
            className="min-w-[180px] text-base font-semibold shadow-lg shadow-primary/30"
            data-testid="button-view-products"
          >
            View Products
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleContact}
            className="min-w-[180px] text-base font-semibold bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
            data-testid="button-contact-us"
          >
            Contact Us
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToStats}
            className="text-white/70 hover:text-white transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            data-testid="button-scroll-down"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
