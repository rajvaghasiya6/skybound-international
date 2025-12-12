import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import logoImage from "@assets/logo.jpg";
import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  "Premium Spices",
  "Basmati Rice",
  "Pulses & Lentils",
  "Tea & Beverages",
  "Nuts & Dry Fruits",
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background relative">
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-xl"
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-scroll-top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center gap-2 mb-5"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logoImage}
                alt="Skybound International"
                className="h-12 w-auto rounded"
              />
              <div>
                <span className="font-serif font-bold text-xl block">Skybound</span>
                <span className="text-xs text-background/70">International</span>
              </div>
            </motion.div>
            <p className="text-background/70 text-sm mb-6 leading-relaxed">
              A prominent exporter of premium spices and agriculture products from India, 
              connecting global markets with quality and reliability.
            </p>
            <div className="flex gap-2">
              <motion.a
                href="https://www.instagram.com/skybound_international"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-transparent border-background/30 text-background hover:bg-background/10"
                  data-testid="button-instagram"
                >
                  <SiInstagram className="w-4 h-4" />
                </Button>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/16dz72MuHk/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-transparent border-background/30 text-background hover:bg-background/10"
                  data-testid="button-facebook"
                >
                  <SiFacebook className="w-4 h-4" />
                </Button>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="bg-transparent border-background/30 text-background hover:bg-background/10"
                  data-testid="button-linkedin"
                >
                  <SiLinkedin className="w-4 h-4" />
                </Button>
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Our Products</h4>
            <ul className="space-y-3">
              {productLinks.map((product) => (
                <li key={product}>
                  <motion.button
                    onClick={() => scrollToSection("#products")}
                    className="text-background/70 hover:text-background text-sm transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {product}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-5">Stay Updated</h4>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to receive updates on new products and export opportunities.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/30 text-background placeholder:text-background/50 h-10"
                data-testid="input-newsletter"
              />
              <Button variant="secondary" data-testid="button-subscribe">
                Subscribe
              </Button>
            </div>

            <div className="mt-8 space-y-3 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 9859886686</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-xs">contact@skyboundinternational.co.in</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-xs">Surat, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-background/20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Skybound International. All rights reserved.</p>
          <div className="flex gap-6">
            <motion.button
              className="hover:text-background transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              className="hover:text-background transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
