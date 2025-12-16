import { Button } from "@/components/ui/button";
import { AlertCircle, Check, Globe } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [selectedLang, setSelectedLang] = useState(
    localStorage.getItem("selectedLanguage") || "en"
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false); // New error state

  useEffect(() => {
    let pollId: number | undefined;
    let errorTimeoutId: NodeJS.Timeout | undefined;

    // === 1. Inject Styles to Hide Google Banner ===
    const style = document.createElement("style");
    style.innerHTML = `
      body { top: 0 !important; }
      .goog-te-banner-frame, 
      .goog-te-balloon-frame, 
      .goog-logo-link {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    const initialize = () => {
      if (
        window.google &&
        window.google.translate &&
        typeof window.google.translate.TranslateElement === "function"
      ) {
        window.googleTranslateElementInit?.();
        return true;
      }
      return false;
    };

    const markLoadedWhenReady = () => {
      if (pollId) return;
      
      // Start polling for the Google Translate dropdown
      pollId = window.setInterval(() => {
        const selectElement = document.querySelector(".goog-te-combo");
        if (selectElement) {
          setIsLoaded(true);
          setHasError(false); // clear error if it eventually loads
          
          // Clear polling and error timeout since we succeeded
          window.clearInterval(pollId);
          clearTimeout(errorTimeoutId); 
          pollId = undefined;
        }
      }, 150);
    };

    // === 2. Set 3-Second Timeout for Error ===
    errorTimeoutId = setTimeout(() => {
      // If still not loaded after 3 seconds, set error
      if (!document.querySelector(".goog-te-combo")) {
        setHasError(true);
        // We do NOT clear the pollId here; we let it keep trying in the background
        // just in case it loads late (e.g., slow network), but we show the error now.
      }
    }, 3000);

    // === 3. Load Google Translate Script ===
    const addScript = () => {
      if (document.getElementById("google-translate-script")) {
        if (initialize()) {
          markLoadedWhenReady();
        }
        return;
      }

      window.googleTranslateElementInit = () => {
        try {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: languages.map((l) => l.code).join(","),
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element",
          );
          
          // Attempt to detect readiness immediately after init
          markLoadedWhenReady();

          // Apply stored language
          const storedTrans = localStorage.getItem("googtrans");
          const storedLangCode = storedTrans ? storedTrans.split("/")[2] : "en";

          if (storedLangCode && storedLangCode !== "en") {
            setTimeout(() => {
              const selectElement = document.querySelector(
                ".goog-te-combo",
              ) as HTMLSelectElement | null;
              if (selectElement) {
                selectElement.value = storedLangCode;
                selectElement.dispatchEvent(new Event("change", { bubbles: true }));
              }
            }, 150);
          }
        } catch (error) {
          console.error("Google Translate initialization error:", error);
          setHasError(true);
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onerror = () => {
        console.error("Failed to load Google Translate");
        setHasError(true);
      };
      document.body.appendChild(script);
    };

    addScript();

    return () => {
      style.remove();
      if (pollId) window.clearInterval(pollId);
      if (errorTimeoutId) clearTimeout(errorTimeoutId);
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    if (!isLoaded) return; // Prevent action if not loaded

    setSelectedLang(langCode);
    setOpen(false);

    const tryChange = (delay: number) => {
      setTimeout(() => {
        const selectElement = document.querySelector(
          ".goog-te-combo",
        ) as HTMLSelectElement | null;

        if (selectElement) {
          selectElement.value = langCode;
          selectElement.dispatchEvent(new Event("change", { bubbles: true }));
          localStorage.setItem("googtrans", `/en/${langCode}`);
          localStorage.setItem("selectedLanguage", langCode);
        } else if (delay < 600) {
          tryChange(delay + 100);
        }
      }, delay);
    };

    tryChange(0);
  };

  return (
    <>
      <div
        id="google_translate_element"
        className="absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden"
      />

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {open && (
          <div className="rounded-lg border bg-background shadow-lg p-3 w-64 max-h-96 overflow-y-auto">
            <div className="flex items-center justify-between mb-3 px-2">
              <p className="text-sm font-semibold">Select Language</p>
              
              {/* Status Indicator Logic */}
              {!isLoaded && !hasError && (
                <span className="text-xs text-muted-foreground animate-pulse">
                  Loading...
                </span>
              )}
              {hasError && !isLoaded && (
                <span className="text-xs text-destructive flex items-center gap-1 font-medium">
                   Unavailable <AlertCircle className="h-3 w-3" />
                </span>
              )}

            </div>
            <div className="space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
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
            {hasError && (
              <p className="text-[10px] text-muted-foreground mt-2 px-2 text-center">
                Please check your internet connection or try again later.
              </p>
            )}
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