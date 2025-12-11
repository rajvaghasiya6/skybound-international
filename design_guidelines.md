# Skybound International - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from premium B2B export platforms and agricultural commerce leaders. We're blending the professional credibility of international trade platforms with the warmth and richness of Indian agricultural heritage.

Primary references: Alibaba's product showcases, premium food export sites, and India-focused trade platforms with emphasis on trust, quality, and global reach.

## Typography System

**Font Families:**
- Primary: 'Inter' (Google Fonts) - Clean, professional for body text and UI
- Accent: 'Playfair Display' (Google Fonts) - Elegant serif for headlines and product names

**Hierarchy:**
- Hero Headline: text-5xl lg:text-7xl font-bold (Playfair Display)
- Section Headings: text-3xl lg:text-5xl font-bold (Playfair Display)
- Subheadings: text-xl lg:text-2xl font-semibold (Inter)
- Body: text-base lg:text-lg (Inter)
- Small Print: text-sm (Inter)

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20
- Section padding: py-16 lg:py-24
- Component gaps: gap-6 lg:gap-8
- Card padding: p-6 lg:p-8

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-4
- Content sections: max-w-6xl
- Text-heavy areas: max-w-4xl

## Page Structure (7 Sections)

### 1. Hero Section (80vh)
- Full-width background image: Vibrant spices and agricultural products (saffron, turmeric, cardamom) with subtle overlay
- Centered content with company logo, headline, tagline
- Two CTAs: "View Products" (primary) + "Contact Us" (secondary) with blurred button backgrounds
- Floating trust badge: "Premium Indian Exports Since [Year]"

### 2. Introduction Strip
- Single row with 3-4 key stats in columns (grid-cols-2 lg:grid-cols-4)
- Example: "500+ Global Partners" | "25+ Countries" | "Premium Quality" | "ISO Certified"
- Icons from Heroicons, large numbers with small descriptive text

### 3. About Section
- Two-column layout (lg:grid-cols-2)
- Left: Compelling narrative about quality, commitment, Indian heritage
- Right: High-quality image of product sourcing/facility or spice collection
- Include company mission statement prominently

### 4. Product Showcase (Feature Section)
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- 6-8 product category cards with:
  - Product category image (spices, grains, pulses, etc.)
  - Category name in Playfair Display
  - 2-3 bullet points of key products
  - "Explore" link
- Cards with subtle elevation (shadow-lg), hover lift effect minimal

### 5. Why Choose Us / USPs
- Asymmetric layout with 4 key differentiators
- Grid: grid-cols-1 md:grid-cols-2 gap-8
- Each with icon, bold heading, descriptive paragraph
- Examples: "Quality Assurance" | "Global Logistics" | "Competitive Pricing" | "Sustainable Sourcing"

### 6. Global Reach Map (Optional Visual)
- Full-width section with world map visualization or imagery
- Overlay text: Countries served, shipping capabilities
- Trust indicators: certifications, partnerships

### 7. Contact Section
- Two-column layout (lg:grid-cols-2 gap-12)
- Left: Contact form (Name, Email, Country, Message, Product Interest dropdown)
- Right: Contact details card with:
  - Phone with India flag icon
  - Email with link
  - Full address with location icon
  - Business hours
  - WhatsApp contact option (popular in India B2B)

### 8. Footer
- Three-column layout (grid-cols-1 md:grid-cols-3)
- Column 1: Company brief + social links
- Column 2: Quick links (Products, About, Contact, Export Guidelines)
- Column 3: Newsletter signup + certifications/badges
- Bottom strip: Copyright, Terms, Privacy

## Component Design

**Navigation:**
- Fixed/sticky header with company logo left
- Desktop: Horizontal nav right (Home, Products, About, Contact)
- Mobile: Hamburger menu
- CTA button: "Request Quote" in header

**Cards:**
- Rounded corners: rounded-xl
- Subtle shadows: shadow-md hover:shadow-xl
- Padding: p-6 lg:p-8
- White background on slightly off-white page

**Buttons:**
- Primary: Solid with medium roundedness (rounded-lg), font-semibold
- Secondary: Outlined with same roundedness
- Padding: px-8 py-3

**Forms:**
- Input fields: border border-gray-300 rounded-lg px-4 py-3
- Focus states with visible ring
- Labels above inputs, text-sm font-medium

## Images Strategy

**Required Images:**
1. **Hero Background:** Wide shot of colorful Indian spices in bowls/jars, professional product photography (full-width, 80vh)
2. **About Section:** Warehouse/sourcing facility or close-up of premium spice collection
3. **Product Cards:** 6-8 category images (turmeric powder, whole spices, grains, pulses, tea, rice, nuts, dried fruits)
4. **Trust Section:** Optional - certificates, team, or facility images

All images should convey premium quality, freshness, and Indian authenticity.

## Accessibility & Interaction

- High contrast text on all backgrounds
- Minimum touch targets: 44x44px for mobile
- Keyboard navigation for all interactive elements
- Form validation with clear error messages
- Loading states for form submission

## Key Principles

1. **Trust Building:** Professional imagery, certifications visible, clear contact info
2. **Premium Positioning:** Quality typography, elegant spacing, rich product photography
3. **Global Appeal:** English-first, international business aesthetic with Indian authenticity
4. **Mobile-First:** Responsive grids, stacked layouts on mobile, touch-friendly interactions
5. **Action-Oriented:** Multiple CTAs, clear conversion paths (quote requests, contact)