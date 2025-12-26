import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { toTitleCase } from "@/lib/utils";
import logoImage from "@assets/logo.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

type NavItem = { label: string; type: "section"; href: string };

const navItems: NavItem[] = [
  { label: "Home", type: "section", href: "#home" },
  { label: "About Us", type: "section", href: "#about" },
  { label: "Products", type: "section", href: "#products" },
  { label: "Why Choose Us", type: "section", href: "#whyus" },
  { label: "Quality & Certificate", type: "section", href: "#quality" },
  { label: "Brochure", type: "section", href: "#brochure" },
  { label: "Connect With Us", type: "section", href: "#contact" },
];

const productCategories = {
  "Whole Spices": products.filter(p => 
    ["black-pepper", "cloves", "coriander-seed", "cumin-seed", "mustard-seed", "turmeric-finger", "dry-red-chilli"].includes(p.slug)
  ),
  "Ground Spices": products.filter(p => 
    ["black-pepper-powder", "chilli-powder", "cumin-powder", "turmeric-powder", "dry-ginger-powder"].includes(p.slug)
  ),
  "Dehydrated Spices": products.filter(p => 
    ["dehydrated-garlic", "dehydrated-garlic-powder", "dehydrated-onion", "dehydrated-onion-powder"].includes(p.slug)
  ),
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [, setLocation] = useLocation();

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
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between gap-2 h-16 lg:h-20">
          
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
          <div className="hidden lg:flex items-center ml-auto">
            <nav className="flex items-center gap-2 mr-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                  onMouseEnter={() => item.label === "Products" && setProductsDropdownOpen(true)}
                  onMouseLeave={() => item.label === "Products" && setProductsDropdownOpen(false)}
                >
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="font-medium text-sm px-2"
                  >
                    {item.label}
                    {item.label === "Products" && <ChevronDown className="w-4 h-4 ml-1" />}
                  </Button>
                  
                  <AnimatePresence>
                    {item.label === "Products" && productsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-1 bg-background border rounded-lg shadow-xl p-4 w-[600px] z-50"
                        onMouseEnter={() => setProductsDropdownOpen(true)}
                        onMouseLeave={() => setProductsDropdownOpen(false)}
                      >
                        <div className="grid grid-cols-3 gap-2">
                          {Object.entries(productCategories).map(([category, items]) => (
                            <div key={category}>
                              <h3 className="font-semibold text-sm mb-2 text-primary">{category}</h3>
                              <div className="space-y-1">
                                {items.map((product) => (
                                  <button
                                    key={product.slug}
                                    onClick={() => {
                                      setProductsDropdownOpen(false);
                                      setLocation(`/products/${product.slug}`);
                                    }}
                                    className="block w-full text-left text-xs hover:text-primary transition-colors py-1"
                                  >
                                    {toTitleCase(product.title)}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                    onClick={() => scrollToSection(item.href)}
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