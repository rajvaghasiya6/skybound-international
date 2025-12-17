// src/types/global.d.ts

// This file extends the global Window interface for external libraries.

interface GTranslateElementOptions {
    pageLanguage: string;
    includedLanguages: string;
    layout: any; // Use 'any' or define the specific Google Translate layout enum if needed
    autoDisplay: boolean;
    // ... other options
}

interface GTranslateElement {
    new (options: GTranslateElementOptions, elementId: string): any;
}

interface GTranslate {
    TranslateElement: GTranslateElement;
}

declare global {
  interface Window {
    /** Global callback function used by the Google Translate script. */
    googleTranslateElementInit?: () => void;
    
    /** The global Google object, which contains the translate property. */
    google?: {
        translate: GTranslate;
    };
  }
}