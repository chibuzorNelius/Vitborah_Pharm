# Content Required From Company: Vitborah Pharmaceuticals

This checklist categorizes all company information, distinguishing between what has already been reliably verified and what requires direct company confirmation prior to commercial launch.

---

## 1. Verified & Implemented Information

| Item | Verified Value | Source | Status in Application |
|:---|:---|:---|:---|
| **Legal Company Name** | Vitborah Pharmaceutical Company Limited | CAC Registry / Packaging | Implemented across all pages and legal notices |
| **CAC Registration Number** | RC: 753571 | CAC Registry (Inc. June 16, 2008) | Prominently displayed in header, footer & About page |
| **Corporate Headquarters** | No. 2, Olori Kudrat Elegushi Street, Awoyaya, Ibeju Lekki, Lagos | Physical packaging (Boracef) | Listed as primary headquarters across website |
| **Central Mainland Depot** | 36, Layi Oyekanmi Street, Mushin, Lagos | Official CAC filing & Phonebook | Listed as Central Mainland Distribution Depot |
| **Primary Telephone** | +234 806 302 2165 | Verified business records | Configured in clickable tel links in header/footer |
| **Corporate Email** | `info@vitborahpharm.com` | Business registry | Primary electronic mail contact across forms |
| **Founder / Managing Director & CEO** | Pharm. Okechukwu Vitus Agada | CAC Directors Register / PCN | Featured in Board section & dedicated CEO Profile |
| **Executive Director** | Deborah Ukamaka Agada | CAC Directors Register | Featured on Board of Directors page |
| **Non-Executive Director** | Nnodim Evan Ndubuisi | CAC Directors Register | Featured on Board of Directors page |
| **Therapeutic Products (17)** | Boracef, Boraflox, Artborah, Staxim, Vitboter, Timolol, ORS, etc. | `src/Datas/therapeutic-products.json` & packaging | 100% mapped to verified packaging photography |
| **New AGE Supplements (13)** | Berberine 600mg (A7-103922), Omega-3, Magnesium Glycinate, etc. | `/public/suppliments_image/` | 100% mapped to verified packaging photography |
| **Community Outreach** | Vitborah Foundation health outreach | `/public/company_image/charity.jpeg` | Featured on Homepage and dedicated Foundation page |

---

## 2. Information Requiring Company Review & Confirmation

Before deploying to the public production domain, the company should review and confirm the following optional items:

### A. Executive & Director Photographs
- **Current State:** The CEO profile currently displays the verified pharmacy image (`/company_image/pharmacy.jpeg`). Board members Deborah Agada and Nnodim Ndubuisi have placeholder initials/badges.
- **Required Action:** The company should supply approved executive studio portraits (e.g. 800×1000px high-resolution headshots) for Deborah Ukamaka Agada and Nnodim Evan Ndubuisi.
- **Destination:** Save to `/public/company_image/` and reference in `src/data/leadership.json`.

### B. Production Domain DNS & SSL
- **Current State:** Configured centrally as `https://vitborahpharm.com`.
- **Required Action:** Confirm DNS A/CNAME records pointing to the hosting server with an active SSL/TLS certificate.

### C. Live Backend SMTP / Mail Server Credentials
- **Current State:** The contact and job application forms perform comprehensive client-side validation and generate formatted tickets/reference IDs (e.g. `VIT-12345` and `VIB-2026-123456`), instructing applicants to email `info@vitborahpharm.com`.
- **Required Action:** If automatic direct email delivery from the browser is desired, provide an authenticated server-side API proxy route (e.g. via Resend, SendGrid, or corporate SMTP).

### D. Specific Branch Manager Names & Mobile Extensions
- **Current State:** Branches display full street addresses, shared corporate line (+234 806 302 2165), and central dispatch emails.
- **Required Action:** If specific branch depot managers wish to be named publicly on the website, supply their full names and direct desk extensions.
- **Destination:** Update `src/data/branches.json`.

### E. Foundation Official Registration Number (if separate CAC NGO)
- **Current State:** Presented as the Corporate Social Responsibility (CSR) and community health outreach wing of Vitborah Pharmaceutical Company Limited.
- **Required Action:** If the Vitborah Foundation is registered under Part C (Incorporated Trustees) with a separate CAC IT number, supply the registration number to display in the Foundation footer.
- **Destination:** Update `src/pages/CharityPage.js`.

### F. Additional Product Dossier Certificates
- **Current State:** NAFDAC registration numbers are included where verified on packaging (e.g., Boracef B4-1435, Vitbonac A4-8115, Staxim B4-6022, Venicin A4-7934, Vit B-Complex B4-6754, Berberine A7-103922).
- **Required Action:** Supply updated NAFDAC certificate numbers for products undergoing periodic cycle renewal.
- **Destination:** Update `src/data/therapeuticProducts.json` and `src/data/supplements.json`.
