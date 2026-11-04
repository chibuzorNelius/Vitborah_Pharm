# Technical SEO Implementation: Vitborah Pharmaceuticals

Search Engine Optimization (SEO) is a core architectural foundation of the Vitborah platform, ensuring that corporate pages, therapeutic medicines, and dietary supplements are discoverable, crawlable, and indexable.

---

## 1. Canonical Domain Strategy

- **Confirmed Production Domain:** `https://vitborahpharm.com`
- Every route sets an absolute `<link rel="canonical" href="https://vitborahpharm.com/path/">`.
- Preview URLs, localhost ports, and staging instances are never used as canonical addresses.

---

## 2. Dynamic Document Metadata Engine

Managed via `src/utils/seo.js`, every route dynamically updates the document `<head>`:

1. **Title Tag Hierarchy:**
   - Homepage: `Vitborah Pharmaceutical Company Limited | Healthcare & Therapeutic Solutions`
   - Individual Product: `${product.name} | Vitborah Pharmaceuticals`
   - News Article: `${article.title} | Vitborah News`
   - Corporate Pages: `${pageTitle} | Vitborah Pharmaceuticals`
2. **Meta Description:**
   - Reflects the specific pharmaceutical properties, indications, or corporate focus of the rendered page.
3. **Open Graph Protocol (Facebook, LinkedIn, WhatsApp):**
   - `og:type` (website, article, profile)
   - `og:title`
   - `og:description`
   - `og:url` (canonical production URL)
   - `og:image` (high-resolution product packaging or corporate imagery)
4. **Twitter Card Protocol:**
   - `twitter:card` (`summary_large_image`)
   - `twitter:title`
   - `twitter:description`
   - `twitter:image`

---

## 3. Structured Data (JSON-LD) Implementations

The application injects Schema.org JSON-LD structured data into `<script id="vitborah-jsonld" type="application/ld+json">`:

### A. MedicalOrganization & WebSite Schema
Present globally across the application, declaring:
- `@type`: `MedicalOrganization`
- Legal name: `Vitborah Pharmaceutical Company Limited`
- Nigerian CAC identifier: `RC 753571`
- Founding date: `2008-06-16`
- Official logo and corporate headquarters address in Awoyaya, Ibeju-Lekki, Lagos.

### B. Product Schema
Injected on individual product detail pages (`/products/:slug/`):
- `@type`: `Product`
- `name`: Product trade name
- `image`: Absolute URL to product packaging photography
- `description`: Clinically verified description
- `sku`: Product ID
- `category`: Therapeutic or supplement category
- `brand`: `Vitborah` or `New AGE`

### C. NewsArticle Schema
Injected on individual article pages (`/news/:slug/`):
- `@type`: `NewsArticle`
- `headline`: Article title
- `datePublished`: ISO publication date
- `dateModified`: ISO modification date
- `author`: Organization / Communications Desk
- `publisher`: Vitborah Pharmaceutical Company Limited

---

## 4. XML Sitemap (`public/sitemap.xml`)

Located at the public root `/sitemap.xml`. Lists all:
- Corporate pages (`/`, `/about/`, `/leadership/`, `/leadership/vitus-agada/`, `/branches/`, `/charity/`, `/partners/`, `/work-with-us/`, `/contact/`)
- Collection directories (`/products/therapeutic/`, `/products/supplements/`)
- 17 Individual therapeutic medicine pages
- 13 Individual New AGE dietary supplement pages
- 4 Individual corporate news articles
- Excludes duplicate URLs, query parameter filter permutations, and 404 pages.

---

## 5. Robots Configuration (`public/robots.txt`)

Located at `/robots.txt`:
- Grants access to all compliant web crawlers (`User-agent: *`, `Allow: /`).
- Explicitly allows image crawling directories (`/company_image/`, `/products_image/`, `/suppliments_image/`).
- Directs search engines to `https://vitborahpharm.com/sitemap.xml`.

---

## 6. Semantic HTML & Accessible Heading Hierarchy

- Pages use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Exactly one `<h1>` per page reflecting the primary entity or collection title.
- Descriptive alternative text on all packaging photos and corporate images (e.g. `alt="Boracef Ceftriaxone for Injection Packaging - Vitborah Pharmaceuticals"`).
