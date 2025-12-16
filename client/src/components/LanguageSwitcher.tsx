import { Button } from "@/components/ui/button";
import { Check, Globe } from "lucide-react";
import { useEffect, useState } from "react";

// The languages array is correct for displaying in your UI
const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  // Initialize with 'en' or attempt to read the last selected language from storage
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // === 1. Inject Styles to Hide Google Translate UI ===
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        top: 0 !important; /* Fixes body offset issue */
      }
      .goog-te-banner-frame, 
      .goog-te-balloon-frame, 
      .goog-logo-link,
      .goog-te-gadget {
        display: none !important;
      }
      /* Ensure other translate elements are hidden */
      #google_translate_element,
      .skiptranslate { 
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // === 2. Load Google Translate Script ===
    const addScript = () => {
      // Prevent script loading if already present
      if (document.getElementById("google-translate-script")) {
        return;
      }

      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en", // Set base language of your site
              includedLanguages: languages.map(l => l.code).join(","),
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element" // Target the hidden div
          );
          setIsLoaded(true);
          console.log("Google Translate widget initialized.");
          
          // CRITICAL: Apply stored language on load
          const storedTrans = localStorage.getItem("googtrans");
          const storedLangCode = storedTrans ? storedTrans.split('/')[2] : 'en';
          
          if (storedLangCode && storedLangCode !== 'en') {
             // 100ms delay to allow the Google Select box to fully populate
             setTimeout(() => {
                const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
                if (selectElement) {
                    selectElement.value = storedLangCode;
                    selectElement.dispatchEvent(new Event("change", { bubbles: true }));
                }
             }, 100);
          }


        } catch (error) {
          console.error("Google Translate initialization error:", error);
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Translate");
      };
      document.body.appendChild(script);
    };

    addScript();

    // Cleanup function: runs when the component unmounts
    return () => {
      style.remove();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const changeLanguage = (langCode: string) => {
    setSelectedLang(langCode);
    setOpen(false);

    if (!isLoaded) {
      alert("Translation service is still loading. Please try again in a moment.");
      return;
    }

    // CRITICAL: Hijack the hidden select element
    setTimeout(() => {
      const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      
      if (selectElement) {
        // 1. Set the new language value
        selectElement.value = langCode;
        // 2. Trigger the native 'change' event to make Google translate the page
        selectElement.dispatchEvent(new Event("change", { bubbles: true }));
        
        // 3. Store the selection for persistence on refresh (required by Google's widget)
        localStorage.setItem("googtrans", `/en/${langCode}`);
        localStorage.setItem("selectedLanguage", langCode);

      } else {
        console.error("Google Translate dropdown not found");
        alert("Translation service not ready. Please refresh the page and try again.");
      }
    }, 100); // Small delay ensures the dropdown is available after the click event
  };


  return (
    <>
      {/* This element must be present in the DOM for the Google script to initialize */}
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {open && (
          <div className="rounded-lg border bg-background shadow-lg p-3 w-64 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-3 px-2">
              <p className="text-sm font-semibold">Select Language</p>
              {!isLoaded && (
                <span className="text-xs text-muted-foreground animate-pulse">Loading...</span>
              )}
            </div>
            <div className="space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  // Disable the button if the service hasn't loaded yet
                  onClick={() => changeLanguage(lang.code)}
                  disabled={!isLoaded} 
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed ${
                    selectedLang === lang.code ? "bg-accent" : ""
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="flex-1 text-left">{lang.name}</span>
                  {selectedLang === lang.code && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
        <Button
          variant="default"
          size="icon"
          className="h-12 w-12 rounded-full shadow-xl"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Translate website"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </div>
    </>
  );
}