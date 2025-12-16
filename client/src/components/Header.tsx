import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo.jpg";
import brochurePdf from "@assets/Skybound-International-Your-Trusted-Partner-for-Premium-Indian-Spices-Export.pdf";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavItem =
  | { label: string; type: "section"; href: string }
  | { label: string; type: "external"; href: string };

const navItems: NavItem[] = [
  { label: "Home", type: "section", href: "#home" },
  { label: "About Us", type: "section", href: "#about" },
  { label: "Products", type: "section", href: "#products" },
  { label: "Quality Assurance & Certificates", type: "section", href: "#quality" },
  { label: "Why Choose Us", type: "section", href: "#why-us" },
  { label: "Connect With Us", type: "section", href: "#contact" },
  { label: "Brochure", type: "external", href: brochurePdf },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-lg border-b transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-10xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
          {/* Logo - Left Side */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={logoImage}
              alt="Skybound International"
              className="h-10 lg:h-12 w-auto rounded"
            />
            <div className="hidden sm:block">
              <span className="font-serif font-bold text-lg">
                Skybound
              </span>
              <span className="block text-xs font-medium text-muted-foreground">
                International
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            <nav className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.type === "section" ? (
                    <Button
                      variant="ghost"
                      onClick={() => scrollToSection(item.href)}
                      className="font-medium"
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="ghost"
                      className="font-medium"
                    >
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    </Button>
                  )}
                </motion.div>
              ))}
            </nav>

            <ThemeToggle />
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="shadow-lg"
              >
                Request Quote
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="hidden sm:flex shadow-lg"
              >
                Request Quote
              </Button>
            </motion.div>

            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="lg:hidden py-4 border-t bg-background/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.type === "section" ? (
                      <Button
                        variant="ghost"
                        className="justify-start w-full"
                        onClick={() => scrollToSection(item.href)}
                      >
                        {item.label}
                      </Button>
                    ) : (
                      <Button
                        asChild
                        variant="ghost"
                        className="justify-start w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.label}
                        </a>
                      </Button>
                    )}
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                  <Button onClick={() => scrollToSection("#contact")} className="mt-2 w-full">
                    Request Quote
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}