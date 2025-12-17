import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo.jpg";
// Assuming you have this file
import brochurePdf from "@assets/Skybound-International-Your-Trusted-Partner-for-Premium-Indian-Spices-Export.pdf";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

type NavItem =
  | { label: string; type: "section"; href: string }
  | { label: string; type: "external"; href: string };

const navItems: NavItem[] = [
  { label: "Home", type: "section", href: "#home" },
  { label: "About Us", type: "section", href: "#about" },
  { label: "Products", type: "section", href: "#products" },
  { label: "Quality", type: "section", href: "#quality" },
  { label: "Contact", type: "section", href: "#contact" },
  { label: "Brochure", type: "external", href: brochurePdf },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <motion.header
      // Added overflow-visible to ensure dropdowns don't get clipped
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg border-b transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
          
          {/* Logo */}
          <motion.a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== '/') {
                window.location.href = '/';
              } else {
                scrollToSection("#home");
              }
            }}
            className="flex items-center gap-2 shrink-0"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={logoImage}
              alt="Skybound International"
              className="h-10 lg:h-12 w-auto rounded"
            />
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-lg leading-tight block">
                Skybound
              </span>
              <span className="block text-xs font-medium text-muted-foreground">
                International
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            <nav className="flex items-center gap-1 mr-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    onClick={() => item.type === "section" ? scrollToSection(item.href) : window.open(item.href, '_blank')}
                    className="font-medium text-sm px-3"
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </nav>

            <div className="h-6 w-px bg-border mx-2" />
            <LanguageSwitcher />
            <div className="h-6 w-px bg-border mx-2" />
            <ThemeToggle />
            
            <Button
              onClick={() => scrollToSection("#contact")}
              className="shadow-sm ml-4"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="hidden sm:block">
               <LanguageSwitcher />
            </div>
            
            <ThemeToggle />
            
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-1"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden py-4 border-t bg-background/95 backdrop-blur-md max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-1 px-2 pb-6">
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="justify-start w-full text-base"
                    onClick={() => {
                        if(item.type === "section") scrollToSection(item.href);
                        else window.open(item.href, '_blank');
                    }}
                  >
                    {item.label}
                  </Button>
                ))}

                {/* Mobile Language Switcher (Only visible on very small screens) */}
                <div className="sm:hidden border-t pt-4 mt-2">
                  <div className="text-xs font-medium text-muted-foreground mb-3 px-2">
                    Select Language
                  </div>
                  <div className="px-2">
                    <LanguageSwitcher />
                  </div>
                </div>

                <Button 
                    onClick={() => scrollToSection("#contact")} 
                    className="mt-4 w-full"
                >
                  Request Quote
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}