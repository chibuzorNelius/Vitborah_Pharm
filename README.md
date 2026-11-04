# Vitborah Pharmaceutical Company Limited — Corporate Web Platform

[![NAFDAC Compliant](https://img.shields.io/badge/NAFDAC-100%25%20Compliant-0e793c)](https://vitborahpharm.com)
[![CAC Registered](https://img.shields.io/badge/CAC%20RC-753571-0e793c)](https://vitborahpharm.com)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Proprietary-dc2626)](https://vitborahpharm.com)

Welcome to the official web application and pharmaceutical portal for **Vitborah Pharmaceutical Company Limited** (Corporate Affairs Commission Registration **RC: 753571**, incorporated June 16, 2008). 

Vitborah is a registered Nigerian pharmaceutical importer and nationwide distributor of prescription therapeutic formulations (antibiotics, antimalarials, injectables, eye drops, oral rehydration salts) and the **New AGE** premium nutraceutical dietary supplement range.

---

## 🏛️ Corporate Highlights & Verification

- **Official Legal Name:** Vitborah Pharmaceutical Company Limited
- **CAC Registration Number:** RC 753571
- **Date of Incorporation:** June 16, 2008
- **Corporate Headquarters & Central Warehouse:** No. 2, Olori Kudrat Elegushi Street, Awoyaya, Ibeju Lekki, Lagos State, Nigeria
- **Mainland Depot:** 36, Layi Oyekanmi Street, Mushin, Lagos State, Nigeria
- **Managing Director & CEO:** Pharmacist Okechukwu Vitus Agada (B.Pharm, MPSN, FPCPharm)
- **Executive Leadership:** Deborah Ukamaka Agada (Executive Director), Nnodim Evan Ndubuisi (Director)
- **Corporate Telephone:** +234 806 302 2165
- **Official Inquiries & Orders:** `info@vitborahpharm.com`
- **Official Domain:** `https://vitborahpharm.com`

---

## 🚀 Key Website Features

1. **Substantial Corporate Homepage:**
   - 16 distinct sections including corporate credentials bar, clinical focus areas, interactive featured carousel, leadership preview, and institutional distributor callouts.
2. **Therapeutic Medicines Collection (`/products/therapeutic/`):**
   - 17 verified formulations with dual-dimension filters (Therapeutic Category vs. Physical Dosage Form), real-time search, NAFDAC badges, and empty states.
3. **New AGE Dietary Supplements Collection (`/products/supplements/`):**
   - 13 verified nutraceuticals including Berberine 600mg (NAFDAC Reg. No: A7-103922), Omega-3 Fish Oil, Magnesium Glycinate, and Probiotics with health category filters and search.
4. **Dedicated Product Detail Pages (`/products/:slug/`):**
   - Every single medicine and supplement has its own canonical, addressable page with high-resolution packaging photography, active formulation details, clinical usage, safety disclaimers, and JSON-LD Product schema.
5. **Corporate History & Timeline (`/about/`):**
   - 16+ years heritage timeline from 2008 CAC incorporation, hospital injectable expansion, Ibeju-Lekki warehousing commissioning, to New AGE supplements launch.
6. **Board of Directors & Governance (`/leadership/`):**
   - Formal board governance structure and dedicated **CEO Profile** for Pharm. Okechukwu Vitus Agada (`/leadership/vitus-agada/`).
7. **Branch & Warehousing Network (`/branches/`):**
   - Operating specifications, services, and contacts for Ibeju-Lekki HQ, Mushin depot, and Abuja northern institutional liaison.
8. **Editorial & News Archive (`/news/` & `/news/:slug/`):**
   - Structured corporate dispatch system with verified announcements and JSON-LD `NewsArticle` structured data.
9. **Vitborah Foundation & CSR (`/charity/`):**
   - Real documented outreach photography (`/company_image/charity.jpeg`), showcasing free grassroots diagnostic screenings and medicine distribution in Lagos communities.
10. **Partners & Collaborators (`/partners/`):**
    - Technical alliances with international WHO-GMP manufacturing plants (Zhejiang Jutai Pharmaceutical Co. Ltd), Nigerian teaching hospitals, and accredited distributors.
11. **Careers / Work With Us (`/work-with-us/`):**
    - Candidate application portal with client-side validation, unique reference code generation (`VIB-2026-XXXX`), and honest routing instructions for CV submission.
12. **Promotional Announcement Interstitial:**
    - Fullscreen, accessible announcement overlay with session storage dismissal tracking, keyboard ESC support, and direct CTA.
13. **Comprehensive Technical SEO:**
    - Dynamic document title and meta updates, canonical URL management, Open Graph cards, XML sitemap (`/sitemap.xml`), and `robots.txt`.

---

## 🛠️ Technology Stack & Architecture

- **Runtime:** Node.js 22 (LTS)
- **Bundler & Dev Server:** Vite 8.3
- **Language:** Modern ECMAScript (ES Modules)
- **Styling:** Bespoke, responsive design system in `src/style.css` based on brand tokens (Medical Green `#0e793c`, Crimson Red `#dc2626`, Clean White `#ffffff`)
- **Data Architecture:** Single source of truth JSON records (`src/data/`)
- **Client Router:** History API pushState router supporting deep linking, clean URLs, and custom 404 page

---

## 💻 Local Development & Installation

### Prerequisites
- Node.js version 20+ or 22+
- npm version 9+

### Setup Commands

```bash
# 1. Clone repository
git clone https://github.com/chibuzorNelius/Vitborah_Pharm.git
cd Vitborah_Pharm

# 2. Install dependencies
npm install

# 3. Start local development server (serves on port 3000)
npm run dev

# 4. Create production build
npm run build

# 5. Preview production build locally
npm run preview
```

The development server binds to `http://localhost:3000` with host `0.0.0.0` enabled.

---

## 📚 Project Documentation Index

Detailed technical and editorial documentation is maintained in the [`docs/`](./docs) directory:

- [**docs/PROJECT_OVERVIEW.md**](./docs/PROJECT_OVERVIEW.md): Business vision, completed components, and operational scope.
- [**docs/SITE_ARCHITECTURE.md**](./docs/SITE_ARCHITECTURE.md): Directory structure, routing map, and component hierarchy.
- [**docs/CONTENT_MANAGEMENT.md**](./docs/CONTENT_MANAGEMENT.md): Step-by-step instructions for adding new medicines, supplements, news, branches, or announcements.
- [**docs/SEO_IMPLEMENTATION.md**](./docs/SEO_IMPLEMENTATION.md): Canonical URLs, Open Graph, XML sitemap, robots configuration, and structured schema rules.
- [**docs/IMPLEMENTATION_AUDIT.md**](./docs/IMPLEMENTATION_AUDIT.md): Technical audit of the original repository, modifications made, and architectural refactoring.
- [**docs/CONTENT_REQUIRED_FROM_COMPANY.md**](./docs/CONTENT_REQUIRED_FROM_COMPANY.md): Comprehensive checklist of exact company information verified versus pending future updates.

---

## 🔒 Pharmacovigilance & Legal Disclaimer

*The pharmaceutical formulations displayed on this website are distributed in compliance with Nigerian laws and NAFDAC regulations. Prescription medications must only be dispensed and administered under qualified medical supervision. Healthcare professionals observing any adverse drug reaction (ADR) should report directly to `info@vitborahpharm.com`.*
