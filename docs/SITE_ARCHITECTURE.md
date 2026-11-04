# Site Architecture: Vitborah Pharmaceuticals

## 1. Directory Structure

```text
/
├── index.html                      # HTML entrypoint with typography & fallback SEO tags
├── package.json                    # Project dependencies & build scripts
├── vite.config.js                  # Vite server, port 3000 & preview configuration
├── metadata.json                   # AI Studio applet title and capabilities metadata
├── public/
│   ├── sitemap.xml                 # XML Sitemap indexing all canonical URLs
│   ├── robots.txt                  # Robots crawling permissions & sitemap reference
│   ├── favicon.svg                 # Site favicon
│   ├── icons.svg                   # Legacy icon sprite
│   ├── company_image/              # Corporate photos (vitborah logo, pharmacy, charity, new age)
│   ├── products_image/             # 17 Verified therapeutic medicine package photographs
│   └── suppliments_image/          # 13 Verified New AGE supplement package photographs
├── src/
│   ├── main.js                     # Application bootstrapper, layout mount & route registry
│   ├── style.css                   # Vitborah design tokens, components, cards, & utilities
│   ├── data/                       # Single source of truth content records
│   │   ├── therapeuticProducts.json # 17 Therapeutic medicine records with mapped image assets
│   │   ├── supplements.json        # 13 New AGE supplement records
│   │   ├── leadership.json         # Board of Directors & CEO profile records
│   │   ├── branches.json           # Headquarters, Mainland depot, and Abuja liaison records
│   │   ├── news.json               # 4 Corporate announcements & press releases
│   │   ├── partners.json           # WHO-GMP manufacturers, hospitals, & ACPN partners
│   │   └── promotions.json         # Interstitial announcement campaign configuration
│   ├── utils/
│   │   ├── icons.js                # Accessible, inline SVG icon library
│   │   ├── seo.js                  # Dynamic metadata, canonical link & JSON-LD schema injector
│   │   └── router.js               # Client-side pushState router & link interception
│   ├── components/
│   │   ├── Header.js               # Top regulatory bar, main navigation, & mobile drawer
│   │   ├── Footer.js               # Comprehensive corporate footer, disclaimers, & links
│   │   ├── ProductCard.js          # Reusable medicine & supplement product card
│   │   ├── ProductCarousel.js      # Accessible rotating product showcase carousel
│   │   └── PromotionalModal.js     # Fullscreen announcement overlay with session memory
│   └── pages/
│       ├── HomePage.js             # 16-section corporate homepage
│       ├── TherapeuticCollectionPage.js # Medicines catalog with dual-dimension filters & search
│       ├── SupplementsCollectionPage.js # New AGE supplements catalog with filters & search
│       ├── ProductDetailPage.js    # Dedicated page for all 30 medicines & supplements
│       ├── AboutPage.js            # Heritage, mission, vision, & 2008-2026 timeline
│       ├── LeadershipPage.js       # Board of Directors & statutory governance
│       ├── CeoProfilePage.js       # Dedicated executive profile for Pharm. Okechukwu Vitus Agada
│       ├── BranchesPage.js         # Strategic branches, warehousing, & cold-chain logistics
│       ├── NewsPage.js             # News listing & recent corporate publications
│       ├── ArticleDetailPage.js    # Full individual article page with Article schema
│       ├── CharityPage.js          # Vitborah Foundation & grassroots medical outreach
│       ├── PartnersPage.js         # Alliances with WHO-GMP plants, hospitals & distributors
│       ├── WorkWithUsPage.js       # Careers & expression of interest portal
│       ├── ContactPage.js          # Multi-topic department contact & emergency lines
│       ├── LegalPage.js            # Privacy Policy (NDPA) & Terms of Use / Disclaimer
│       └── NotFoundPage.js         # 404 error page with navigational recovery links
└── docs/                           # Comprehensive technical & editorial documentation
```

---

## 2. Page Map & Public Routes

| URL Pattern | Page / Component | Key Content & Primary Purpose |
|:---|:---|:---|
| `/` | `HomePage` | Full corporate overview, credentials bar, featured carousels, leadership, charity, news. |
| `/about/` | `AboutPage` | Corporate history, 2008–2026 milestone timeline, mission, vision, QA standards. |
| `/products/therapeutic/` | `TherapeuticCollectionPage` | Catalog of 17 therapeutic medicines with category & dosage filters, and instant search. |
| `/products/supplements/` | `SupplementsCollectionPage` | Catalog of 13 New AGE supplements with wellness category filters and instant search. |
| `/products/:slug/` | `ProductDetailPage` | Canonical individual page for each medicine or supplement, specs, safety notice. |
| `/leadership/` | `LeadershipPage` | Formal Board of Directors representation & governance structure. |
| `/leadership/vitus-agada/` | `CeoProfilePage` | Dedicated executive profile for Founder & CEO Pharm. Okechukwu Vitus Agada. |
| `/branches/` | `BranchesPage` | Details for Ibeju-Lekki HQ, Mushin depot, and Abuja northern distribution liaison. |
| `/news/` | `NewsPage` | Listing of verified company announcements, facility updates, and press releases. |
| `/news/:slug/` | `ArticleDetailPage` | Full article page with author, date, body, tags, and JSON-LD `NewsArticle` schema. |
| `/charity/` | `CharityPage` | The Vitborah Foundation, real community health outreach photography, CSR programs. |
| `/partners/` | `PartnersPage` | WHO-GMP manufacturers, tertiary hospitals, ACPN, and distributor accreditation criteria. |
| `/work-with-us/` | `WorkWithUsPage` | Careers, professional disciplines, validated candidate form, honest application routing. |
| `/contact/` | `ContactPage` | Direct phone lines, email addresses, headquarters map details, and department inquiry form. |
| `/privacy/` | `LegalPage` | Corporate Privacy Policy adhering to the Nigeria Data Protection Act (NDPA). |
| `/terms/` | `LegalPage` | Terms of Use, clinical non-substitute disclaimer, and intellectual property. |
| `*` (Catch-all) | `NotFoundPage` | Dedicated 404 page providing direct return pathways to catalogs and homepage. |

---

## 3. Client-Side Routing Strategy

The router (`src/utils/router.js`) uses the standard HTML5 History API (`pushState` and `popstate`):
1. Normalizes trailing slashes so both `/about` and `/about/` match the same route handler.
2. Supports dynamic parameters (e.g. `:slug` for products and articles).
3. Intercepts clicks on internal `<a>` links while allowing standard browser behavior for external links, anchor hashes, and file downloads.
4. Updates active navigation states (`data-nav-link` attribute and `.nav-active` CSS class).
5. Resets scroll position to `(0, 0)` on every route transition.
6. Gracefully handles 404 errors by invoking `NotFoundPage` with the invalid attempted path.
