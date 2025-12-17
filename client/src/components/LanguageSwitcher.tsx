import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (options: any, elementId: string) => any;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "zh-CN", label: "中文 (简体)", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/([^/]+)\/([^;]+)/);
    if (match && match[2] && match[2] !== 'auto') { 
      setSelectedLang(match[2]);
    }

    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const style = document.createElement("style");
      style.innerHTML = `
        .goog-te-banner-frame { display: none !important; }
        .goog-te-gadget { height: 0 !important; overflow: hidden !important; }
        body { top: 0px !important; }
        #google_translate_element { display: none !important; }
        .skiptranslate { display: none !important; }
      `;
      document.head.appendChild(style);

      window.googleTranslateElementInit = () => {
        if (window.google) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: LANGUAGES.map(l => l.code).join(','),
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Sync selected language when route changes
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/([^/]+)\/([^;]+)/);
    if (match && match[2] && match[2] !== 'auto') {
      setSelectedLang(match[2]);
    }
  }, [location]);

  // Function to trigger Google Translate
  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    // Method 1: Try using the select element
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    // Method 2: Directly manipulate cookies and reload (more reliable)
    // This ensures the translation works across route changes
    setTimeout(() => {
      const domain = window.location.hostname;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${domain}`;
      document.cookie = `googtrans=/en/${langCode}; path=/`;
      
      // Force page reload to apply translation
      window.location.reload();
    }, 100);
  };

  const currentLang = LANGUAGES.find(l => l.code === selectedLang) || LANGUAGES[0];

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <div id="google_translate_element" className="absolute h-0 w-0 overflow-hidden" />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="notranslate flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors border border-transparent hover:border-border text-sm font-medium"
      >
        <span className="text-lg leading-none">{currentLang.flag}</span>
        <span className="hidden sm:inline-block">{currentLang.label}</span>
        <ChevronDown className={`h-3 w-3 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-52 rounded-md border bg-popover p-1 shadow-md animate-in fade-in zoom-in-95 duration-200">
          <div className="max-h-[300px] overflow-y-auto py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`notranslate relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground
                  ${selectedLang === lang.code ? "bg-accent/50 text-accent-foreground" : ""}
                `}
              >
                {selectedLang === lang.code && (
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <Check className="h-4 w-4" />
                  </span>
                )}
                <span className="text-lg leading-none mr-2">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}