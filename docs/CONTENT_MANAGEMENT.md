# Content Management Guide: Vitborah Pharmaceuticals

This guide provides practical instructions for developers, content administrators, and company staff to update or expand products, news articles, leadership profiles, branches, and promotional announcements.

All content is managed through structured JSON files in the `src/data/` directory, adhering to the Single Source of Truth principle.

---

## 1. Adding a New Therapeutic Medicine

Open `src/data/therapeuticProducts.json` and append a new product object:

```json
{
  "id": "new-medicine-slug",
  "name": "Trade Name DosageForm",
  "brand": "Vitborah",
  "therapeuticCategory": "Antibacterial",
  "therapeuticSubcategory": "Macrolide antibiotic",
  "productType": "Tablet",
  "packSize": "500 mg; 10 tablets",
  "activeIngredients": "Azithromycin 500 mg per tablet",
  "shortDescription": "Concise 1-sentence clinical summary.",
  "description": "Full description of pharmacological action and therapeutic suitability.",
  "useCase": "Intended clinical applications and administration guidance.",
  "imagePath": "/products_image/your-verified-filename.jpeg",
  "regulatoryInfo": "NAFDAC Reg. No: B4-XXXX.",
  "prescriptionRequired": true,
  "featured": false,
  "route": "/products/new-medicine-slug/"
}
```

### Important Verification Rules:
- **`imagePath`:** Place the verified product photograph inside `/public/products_image/` and reference it with a leading slash (e.g. `/products_image/photo.jpeg`). Never point to an unrelated medicine.
- **`route`:** Set to `/products/<id>/`. This automatically activates its dedicated individual page and generates its sitemap URL.
- **`prescriptionRequired`:** Set to `true` for prescription-only therapeutics (Rx) or `false` for OTC/nutritional products.

---

## 2. Adding a New Dietary Supplement

Open `src/data/supplements.json` and append:

```json
{
  "id": "new-supplement-slug",
  "name": "New AGE Product Name",
  "brand": "New AGE",
  "category": "Immune & Antioxidant Defense",
  "dosageForm": "Softgels",
  "packSize": "60 Softgels",
  "activeIngredients": "Standardized active nutrients and milligram strengths",
  "shortDescription": "1-sentence summary of dietary wellness support.",
  "description": "Detailed explanation of nutritional and cellular benefits.",
  "useCase": "Recommended daily usage and wellness maintenance.",
  "imagePath": "/suppliments_image/your-supplement.jpeg",
  "regulatoryInfo": "NAFDAC Reg. No: A7-XXXXX or Premium Dietary Supplement.",
  "featured": true,
  "route": "/products/new-supplement-slug/"
}
```

---

## 3. Publishing a News Article or Announcement

Open `src/data/news.json` and add:

```json
{
  "id": "unique-article-slug",
  "slug": "unique-article-slug",
  "title": "Headline of Corporate Announcement",
  "date": "November 15, 2026",
  "isoDate": "2026-11-15",
  "category": "Corporate Expansion",
  "author": "Corporate Communications Desk",
  "featuredImage": "/company_image/pharmacy.jpeg",
  "summary": "1-sentence summary visible on news cards.",
  "body": [
    "First paragraph providing the primary news context...",
    "Second paragraph detailing quotes from leadership or technical specifics...",
    "Third concluding paragraph highlighting benefits for healthcare providers."
  ],
  "tags": ["Facility", "Cold-Chain", "Distribution"],
  "featured": true
}
```

---

## 4. Configuring the Promotional Interstitial

Open `src/data/promotions.json`. You can modify the active campaign or dismiss it:

```json
{
  "active": true,
  "campaignId": "vitborah-q1-2027-campaign",
  "badge": "Special Announcement",
  "title": "Headline for Campaign Interstitial",
  "subtitle": "Secondary supporting statement",
  "description": "Brief explanatory text detailing the promotion or conference appearance.",
  "image": "/company_image/new age.jpeg",
  "primaryCtaText": "Explore Portfolio",
  "primaryCtaUrl": "/products/therapeutic/",
  "secondaryCtaText": "Continue to Website",
  "secondaryCtaUrl": "/"
}
```

- When you change `campaignId` (e.g. from `campaign-2026` to `campaign-2027`), visitors who dismissed the previous campaign will see the new announcement once.
- To deactivate the interstitial completely, set `"active": false`.

---

## 5. Adding a Board Member or Executive

Open `src/data/leadership.json` and add to the `boardMembers` array:

```json
{
  "id": "member-slug",
  "slug": "member-slug",
  "name": "Full Name With Title",
  "role": "Official Board Appointment",
  "qualifications": "Academic & Professional Postnominals",
  "type": "executive",
  "image": null,
  "bio": "Verified biographical history and clinical/corporate background.",
  "tenure": "Year of Appointment",
  "committee": "Audit, Clinical Governance, or Operations Committee",
  "verifiedSource": "CAC Form CAC 7 / Corporate Records"
}
```

*Note: Never publish fictitious directors or stock photos as board members.*

---

## 6. Updating the XML Sitemap

When adding new products or articles, update `public/sitemap.xml` with the new canonical URL and last modified date:

```xml
<url>
  <loc>https://vitborahpharm.com/products/your-new-slug/</loc>
  <lastmod>2026-11-04</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```
