import spicesImage from "@assets/generated_images/whole_spices_collection.png";
import riceImage from "@assets/generated_images/premium_basmati_rice.png";
import pulsesImage from "@assets/generated_images/indian_pulses_lentils.png";
import teaImage from "@assets/generated_images/premium_indian_tea.png";
import nutsImage from "@assets/generated_images/nuts_and_dried_fruits.png";
import heroImage from "@assets/generated_images/premium_indian_spices_hero.png";

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  items: string[];
  description: string;
  highlights: string[];
  specs: ProductSpec[];
  applications: string[];
};

export const products: Product[] = [
  {
    slug: "premium-spices",
    title: "Premium Spices",
    image: spicesImage,
    summary: "Hand-selected whole spices with rich natural oils and aroma intact.",
    items: ["Turmeric", "Cardamom", "Cumin", "Coriander"],
    description:
      "Our premium range of whole spices are sourced directly from trusted farms across India, cleaned at source, and processed with minimal handling to preserve the volatile oils that deliver authentic flavor and fragrance.",
    highlights: [
      "Steam-sterilized and cleaned for export readiness",
      "Uniform grading for consistent aroma and appearance",
      "Moisture controlled packaging to lock in freshness",
    ],
    specs: [
      { label: "Moisture", value: "< 10%" },
      { label: "Impurities", value: "< 0.5%" },
      { label: "Packaging", value: "25kg / 50kg food-grade bags" },
    ],
    applications: [
      "Retail spice packs",
      "Food processing and seasoning blends",
      "HORECA supply",
    ],
  },
  {
    slug: "spice-powders",
    title: "Spice Powders",
    image: heroImage,
    summary: "Vibrant spice powders milled to order for maximum potency.",
    items: ["Red Chili", "Turmeric Powder", "Garam Masala", "Black Pepper"],
    description:
      "Finely milled spice powders crafted in controlled environments to ensure bright color, natural pungency, and consistent mesh sizes that blend perfectly into formulations and ready-to-cook mixes.",
    highlights: [
      "Cold grinding to preserve natural oils",
      "Custom mesh sizes on request",
      "Batch-wise lab tested for ASTA color and purity",
    ],
    specs: [
      { label: "Mesh Size", value: "20-60 mesh (customizable)" },
      { label: "ASTA Color", value: "Aligned to customer spec" },
      { label: "Packaging", value: "1kg / 5kg / 25kg options" },
    ],
    applications: [
      "Blended masalas and seasonings",
      "Snack flavoring and marinades",
      "Retail spice jars and pouches",
    ],
  },
  {
    slug: "basmati-rice",
    title: "Basmati Rice",
    image: riceImage,
    summary: "Aged basmati grains with exceptional elongation and aroma.",
    items: ["Long Grain", "Extra Long", "Aged Basmati", "Sella Rice"],
    description:
      "Sourced from the Himalayan foothills and aged for enhanced aroma, our basmati variants deliver consistent grain length, low breakage, and non-sticky texture preferred by chefs and consumers alike.",
    highlights: [
      "Aged 12-24 months for richer aroma",
      "Low broken percentage with uniform grain",
      "Steam and parboiled options available",
    ],
    specs: [
      { label: "Average Grain Length", value: "8.3mm - 8.5mm" },
      { label: "Broken", value: "< 2%" },
      { label: "Packaging", value: "5kg / 10kg / 25kg laminated bags" },
    ],
    applications: [
      "Retail premium packs",
      "HORECA and catering supply",
      "Ready-to-eat meal kits",
    ],
  },
  {
    slug: "pulses-and-lentils",
    title: "Pulses & Lentils",
    image: pulsesImage,
    summary: "Protein-rich pulses cleaned and graded for global kitchens.",
    items: ["Moong Dal", "Masoor Dal", "Chickpeas", "Urad Dal"],
    description:
      "Nutrient-dense pulses sourced from certified suppliers, machine-cleaned and color sorted for purity, delivering excellent cooking consistency and taste across cuisines.",
    highlights: [
      "Double-sortex cleaning for minimal foreign matter",
      "Stable cooking time with uniform grain size",
      "Compliant with global residue standards",
    ],
    specs: [
      { label: "Moisture", value: "< 12%" },
      { label: "Purity", value: "> 99%" },
      { label: "Packaging", value: "1kg consumer / 25kg bulk bags" },
    ],
    applications: [
      "Retail packaging",
      "Canned and ready meals",
      "Institutional and food service supply",
    ],
  },
  {
    slug: "tea-and-beverages",
    title: "Tea & Beverages",
    image: teaImage,
    summary: "Estate-fresh teas with layered aromas and balanced liquor.",
    items: ["Black Tea", "Green Tea", "Assam Tea", "Darjeeling"],
    description:
      "Curated teas from premier estates, blended by experts to deliver consistent flavor notes, bright liquor, and cup clarity suitable for branded packs and specialty blends.",
    highlights: [
      "Sourced from Rainforest Alliance compliant estates",
      "Custom blends for flavor, body, and color",
      "Nitrogen-flushed packs for extended freshness",
    ],
    specs: [
      { label: "Grade Options", value: "Dust / BOP / BOPSM / Fannings" },
      { label: "Moisture", value: "< 8%" },
      { label: "Packaging", value: "Cartons, foil pouches, or tea bags" },
    ],
    applications: [
      "Retail branded packs",
      "Tea bagging and instant mixes",
      "Food service blends",
    ],
  },
  {
    slug: "nuts-and-dry-fruits",
    title: "Nuts & Dry Fruits",
    image: nutsImage,
    summary: "Premium grade nuts and dry fruits with strict quality control.",
    items: ["Cashews", "Almonds", "Raisins", "Dried Figs"],
    description:
      "Carefully procured nuts and dry fruits, sorted for size and appearance, moisture-balanced, and packed in controlled conditions to maintain crunch, flavor, and shelf life during transit.",
    highlights: [
      "Aflatoxin-safe sourcing with batch-wise testing",
      "Uniform sizing and color grading",
      "Vacuum and nitrogen options for extended shelf life",
    ],
    specs: [
      { label: "Moisture", value: "< 6%" },
      { label: "Defects", value: "Aligned to AFI standards" },
      { label: "Packaging", value: "10kg / 25kg cartons or vacuum packs" },
    ],
    applications: [
      "Retail snacking packs",
      "Bakery and confectionery",
      "Cereal and trail mix blends",
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

