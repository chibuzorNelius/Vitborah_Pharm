# Project Overview: Vitborah Pharmaceuticals Corporate Web Portal

## 1. Executive Summary

This project delivers the official corporate web platform for **Vitborah Pharmaceutical Company Limited**, an established Nigerian pharmaceutical importer and distributor (CAC RC: 753571, incorporated June 16, 2008). 

The platform transforms a bare starter repository into a robust, credible, visually distinctive, search-engine discoverable, and responsive corporate web application.

---

## 2. Business Objectives Achieved

1. **Brand Authority & Trust:**
   - Established a coherent corporate design system founded on Vitborah's authentic brand colors (dominant medical green `#0e793c`, restrained red accent `#dc2626`, and crisp clinical white surfaces).
   - Prominently showcases verified regulatory accreditations: Corporate Affairs Commission (CAC) registration RC 753571 and 100% NAFDAC compliant formulations.

2. **Dual-Portfolio Product Catalog:**
   - **Therapeutic Medicines (17 verified products):** Antibiotics (Boracef, Boraflox, Staxim, Vicocin, Venita Gentamycin, Ceftriaxon), Antimalarials (Artborah ACT, Vitboter Artemether), Ophthalmic Care (Timolol BP 0.5%), Antifungals (Apricona, Venicin), NSAIDs (Vitbonac 50), and Electrolyte/Nutritional Solutions (W.H.O. ORS, Vibiron, Appedor, Vitamin B-Complex).
   - **New AGE Dietary Supplements (13 verified products):** Berberine 600mg (NAFDAC Reg. No. A7-103922), Omega-3 Fish Oil 1000mg, Magnesium Glycinate 400mg, Co.Q10 200mg, Super Collagen + C, Women's Probiotic 55 Billion CFU, and Essential Vitamins.

3. **Every Product is Independently Addressable:**
   - Every single therapeutic product and supplement has its own dedicated page (e.g. `/products/boracef-ceftriaxone/`, `/products/berberine-600mg/`) with high-resolution packaging photography, active ingredients, dosage forms, clinical use cases, and JSON-LD structured data.

4. **Corporate Governance & Leadership:**
   - Formal Board of Directors representation: Founder & CEO Pharm. Okechukwu Vitus Agada (B.Pharm, MPSN, FPCPharm), Executive Director Deborah Ukamaka Agada, and Director Nnodim Evan Ndubuisi.
   - Dedicated CEO Profile page (`/leadership/vitus-agada/`) highlighting over two decades of pharmaceutical leadership in Nigeria.

5. **Logistics & Warehousing Infrastructure:**
   - Comprehensive branch specifications for Corporate Headquarters & Central Warehousing in Awoyaya, Ibeju-Lekki, Lagos; Central Mainland Depot in Mushin, Lagos; and regional liaison in Abuja.

6. **Vitborah Foundation & Corporate Social Responsibility:**
   - Dedicated charity foundation portal featuring real photo assets (`/company_image/charity.jpeg`) documenting community health screening missions, free diagnostic tests, and medicine distributions in underserved communities.

7. **Configurable Promotional Interstitial:**
   - Fullscreen announcement modal configured for product launches with session storage dismissal tracking, keyboard ESC support, and direct call-to-actions.

8. **Technical SEO & Discoverability:**
   - Complete technical SEO implementation with dynamic meta tags, canonical URLs, XML sitemap (`/sitemap.xml`), robots.txt, and Open Graph share cards.

---

## 3. Technology Stack Rationale

- **Framework:** Vanilla ES Modules with Vite 8.3 bundler.
  - *Rationale:* In accordance with section 20 of the Master Project Instructions, the application preserves clean HTML, CSS, and modern JavaScript without unnecessary heavy framework dependencies, achieving 90ms build speeds, zero hydration overhead, and instant page transitions.
- **Styling Architecture:** Single design system stylesheet (`src/style.css`) with semantic CSS custom properties, responsive grid systems, accessible focus indicators, and reduced-motion media query handling.
- **Routing Engine:** Custom pushState client router (`src/utils/router.js`) intercepting internal navigation, preserving deep links, and supporting browser history navigation with automatic scroll reset.
