import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { toTitleCase } from "@/lib/utils";
import logoImage from "@assets/logo.jpg";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiGooglemaps, SiInstagram, SiLinkedin, SiThreads, SiX } from "react-icons/si";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");

    // Simulate API Call (Replace with your actual backend or Mailchimp/Resend logic)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus("success");
    setEmail("");

    // Reset back to idle after 3 seconds
    setTimeout(() => setStatus("idle"), 3000);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-foreground text-background relative">
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-xl z-10"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Brand Column - Protected from Translation */}
          <div className="lg:col-span-1 notranslate">
            <motion.div className="flex items-center gap-2 mb-5">
              <img src={logoImage} alt="Logo" className="h-12 w-auto rounded" />
              <div>
                <span className="font-serif font-bold text-xl block">Skybound</span>
                <span className="text-xs text-background/70">International</span>
              </div>
            </motion.div>
            <p className="text-background/70 text-sm mb-6 leading-relaxed translate">
              A prominent exporter of premium spices and agriculture products from India.
            </p>
            <div className="flex gap-2">
              {[
                { icon: SiInstagram, href: "https://www.instagram.com/skybound_international" },
                { icon: SiFacebook, href: "https://www.facebook.com/share/16dz72MuHk/" },
                { icon: SiLinkedin, href: "https://www.linkedin.com/company/skybound-international/" },
                { icon: SiX, href: "https://x.com/Skybound_Export" },
                { icon: SiThreads, href: "https://www.threads.com/@skybound_international" },
                { icon: SiGooglemaps, href: "https://maps.app.goo.gl/KHuAMZz2nrN2uuk8A?g_st=aw" },



              ].map((social, i) => (
                <Button key={i} size="icon" variant="outline" asChild className="bg-transparent border-background/30 text-background hover:bg-background/10">
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Why Choose Us", href: "#whyus" },
                { label: "Quality & Certificate", href: "#quality" },
                { label: "Brochure", href: "#brochure" },
                { label: "Connect With Us", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-background/70 hover:text-background text-sm transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Our Products</h4>
            <ul className="space-y-3">
              {products.slice(0, 5).map((p, i) => (
                <li key={i}>
                  <button onClick={() => scrollToSection("#products")} className="text-background/70 hover:text-background text-sm text-left">
                    {toTitleCase(p.title)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column - Better Solution Logic */}
          <div>
            <h4 className="font-semibold text-lg mb-5">Contact Us</h4>
            {/* <p className="text-background/70 text-sm mb-4">
              Get the latest export market insights.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  disabled={status !== "idle"}
                  className="bg-background/10 border-background/30 text-background placeholder:text-background/50 h-11 pr-12"
                />
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                      className="absolute right-3 top-3 text-green-400"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <Button 
                type="submit" 
                variant={status === "success" ? "secondary" : "default"}
                disabled={status !== "idle"}
                className="w-full h-11 transition-all duration-300 relative overflow-hidden"
              >
                {status === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : status === "success" ? (
                  "Subscribed!"
                ) : (
                  "Subscribe Now"
                )}
              </Button>
            </form> */}

            {/* Contact Details - Non-Translate for data accuracy */}
            <div className="mt-8 space-y-3 text-sm text-background/70 notranslate">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9859886686</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-[10px] sm:text-xs">contact@skyboundinternational.co.in</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="translate">Surat, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-background/20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p className="notranslate">&copy; {new Date().getFullYear()} Skybound International.</p>
          <div className="flex gap-6">
            <button className="hover:text-background transition-colors">Privacy Policy</button>
            <button className="hover:text-background transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}