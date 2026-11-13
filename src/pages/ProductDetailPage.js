import therapeuticProducts from '../data/therapeuticProducts.json';
import supplements from '../data/supplements.json';
import { icon } from '../utils/icons.js';
import { renderProductCard } from '../components/ProductCard.js';
import { updateSEO } from '../utils/seo.js';
import { escapeHTML } from '../utils/security.js';
import { initExpandableToggles } from '../utils/domHelpers.js';

export function renderProductDetailPage(params) {
  const rawSlug = params?.slug || '';
  const safeSlug = escapeHTML(rawSlug);

  // Search in therapeutics and supplements
  const therapeuticMatch = therapeuticProducts.find(p => p.id === rawSlug);
  const supplementMatch = supplements.find(s => s.id === rawSlug);

  if (!therapeuticMatch && !supplementMatch) {
    return renderProductNotFound(safeSlug);
  }

  const isSupplement = !!supplementMatch;
  const product = supplementMatch || therapeuticMatch;

  const collectionName = isSupplement ? 'Dietary Supplements' : 'Therapeutic Medicines';
  const collectionUrl = isSupplement ? '/products/supplements/' : '/products/therapeutic/';
  const category = isSupplement ? product.category : product.therapeuticCategory;
  const isPrescription = product.prescriptionRequired;

  // SEO Update
  updateSEO({
    title: `${product.name} | Vitborah Pharmaceuticals`,
    description: `${product.name} - ${product.shortDescription || product.description}. Official NAFDAC verified pharmaceutical portfolio of Vitborah Pharmaceutical Company Limited.`,
    canonicalPath: `/products/${product.id}/`,
    image: product.imagePath,
    schema: {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      'name': product.name,
      'image': `https://vitborahpharm.com${product.imagePath}`,
      'description': product.description || product.shortDescription,
      'sku': product.id,
      'category': category,
      'brand': {
        '@type': 'Brand',
        'name': product.brand || 'Vitborah'
      }
    }
  });

  // Accurate related products matching same category (fixed from previous || true bug)
  const allInCollection = isSupplement ? supplements : therapeuticProducts;
  const sameCategoryProducts = allInCollection.filter(
    p => p.id !== product.id && (isSupplement ? p.category === product.category : p.therapeuticCategory === product.therapeuticCategory)
  );

  // If fewer than 3 in same category, supplement with other items from the collection
  const otherProducts = allInCollection.filter(
    p => p.id !== product.id && !sameCategoryProducts.some(sc => sc.id === p.id)
  );
  const relatedProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 3);

  return `
    <!-- Top Breadcrumb Bar -->
    <div style="background-color: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); padding: 1rem 0;">
      <div class="container">
        <div class="breadcrumbs" style="margin: 0;">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="${collectionUrl}">${collectionName}</a>
          <span class="separator">/</span>
          <span class="current">${product.name}</span>
        </div>
      </div>
    </div>

    <!-- Main Product Detail View -->
    <section class="section" style="padding-top: 2.5rem; padding-bottom: 3.5rem;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; margin-bottom: 3.5rem;" class="hero-grid">
          
          <!-- Left: High-Res Packaging Photo (Responsive for Mobile) -->
          <div>
            <div class="product-detail-img-card" style="background: radial-gradient(circle, #f8fafc 0%, #f1f5f9 100%); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 1.5rem; display: flex; align-items: center; justify-content: center; position: relative; min-height: 320px; box-shadow: var(--shadow-sm);">
              <span class="badge ${product.comingSoon ? 'badge-amber' : (isPrescription ? 'badge-red' : (isSupplement ? 'badge-blue' : 'badge-green'))}" style="position: absolute; top: 1rem; left: 1rem; font-size: 0.775rem; padding: 0.35rem 0.75rem;">
                ${product.comingSoon ? 'Coming Soon · Not Yet Arrived' : (isPrescription ? 'Prescription Only (Rx)' : (isSupplement ? 'Dietary Supplement' : 'Therapeutic Formulation'))}
              </span>

              <img 
                src="${product.imagePath}" 
                alt="${product.name} Official Packaging" 
                class="product-detail-hero-img"
                style="max-width: 100%; max-height: 340px; object-fit: contain; filter: drop-shadow(0 12px 20px rgba(0,0,0,0.1));"
                onerror="this.src='/company_image/vitborah-logo.jpeg';"
              />
            </div>

            <!-- Authentic Tamper & Storage Seals -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; margin-top: 0.75rem;">
              <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem;">
                <span style="color: var(--color-primary); flex-shrink: 0;">${icon('shieldCheck', 'w-4 h-4')}</span>
                <span>Tamper-Evident Verification</span>
              </div>
              <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem;">
                <span style="color: var(--color-primary); flex-shrink: 0;">${icon('clock', 'w-4 h-4')}</span>
                <span>Store Below 30°C</span>
              </div>
            </div>
          </div>

          <!-- Right: Formulation Specifications & Clinical Info -->
          <div>
            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
              <span class="badge badge-green">${category}</span>
              ${product.therapeuticSubcategory ? `<span class="badge badge-neutral">${product.therapeuticSubcategory}</span>` : ''}
              <span class="badge badge-neutral">${product.brand || 'Vitborah'}</span>
            </div>

            <h1 style="font-size: clamp(1.85rem, 3.5vw, 2.5rem); line-height: 1.2; margin-bottom: 0.75rem; color: var(--color-text-main);">
              ${product.name}
            </h1>

            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.6; margin-bottom: 1.25rem;">
              ${product.description || product.shortDescription}
            </p>

            <!-- Specification Attributes Grid -->
            <div style="background-color: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.25rem; margin-bottom: 1.5rem;">
              <h3 style="font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); margin-bottom: 0.85rem;">
                Clinical Specifications
              </h3>

              <div style="display: grid; grid-template-columns: 1fr; gap: 0.75rem; font-size: 0.9rem;">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.4rem;">
                  <span style="color: var(--color-text-muted);">Active Formulation:</span>
                  <strong style="color: var(--color-text-main); text-align: right; max-width: 60%;">${product.activeIngredients || 'Standardized active ingredient'}</strong>
                </div>

                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.4rem;">
                  <span style="color: var(--color-text-muted);">Dosage Form:</span>
                  <strong style="color: var(--color-text-main);">${product.dosageForm || product.productType || 'Standard Form'}</strong>
                </div>

                ${product.packSize ? `
                  <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.4rem;">
                    <span style="color: var(--color-text-muted);">Presentation:</span>
                    <strong style="color: var(--color-text-main);">${product.packSize}</strong>
                  </div>
                ` : ''}

                ${product.regulatoryInfo ? `
                  <div style="display: flex; justify-content: space-between; padding-top: 0.25rem;">
                    <span style="color: var(--color-text-muted);">Regulatory Status:</span>
                    <strong style="color: var(--color-primary-dark); text-align: right;">${product.regulatoryInfo}</strong>
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Clinical & Administration Guidance with Mobile Expandable Detail -->
            ${product.useCase ? `
              <div style="margin-bottom: 1.5rem;">
                <h4 style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--color-text-main);">
                  Clinical Administration & Guidance:
                </h4>
                <div id="product-clinical-use" class="mobile-expandable-content">
                  <p style="font-size: 0.925rem; color: var(--color-text-body); line-height: 1.6; margin: 0;">
                    ${product.useCase}
                  </p>
                </div>
                <button type="button" class="btn btn-outline btn-sm mobile-expand-btn" data-toggle-expand="product-clinical-use" data-more-text="Read Full Clinical Guidance" data-less-text="Show Less Guidance" style="margin-top: 0.5rem;">
                  Read Full Clinical Guidance
                </button>
              </div>
            ` : ''}

            ${product.comingSoon ? `
              <div style="background-color: #fffbeb; border: 1px solid #fcd34d; border-radius: var(--radius-md); padding: 0.9rem 1rem; margin-bottom: 1rem; font-size: 0.85rem; color: #92400e; line-height: 1.5; display: flex; gap: 0.65rem; align-items: flex-start;">
                <span style="color: #d97706; margin-top: 2px;">${icon('clock', 'w-4 h-4')}</span>
                <div>
                  <strong>Pre-Arrival Notice (Not Yet in Stock):</strong>
                  This product has not arrived in our warehouse yet. Licensed pharmacies and distributors may register advance allocation inquiries ahead of stock release.
                </div>
              </div>
            ` : ''}

            <!-- Clinical Safety Warning -->
            <div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-md); padding: 0.85rem 1rem; margin-bottom: 1.5rem; font-size: 0.825rem; color: #92400e; line-height: 1.5; display: flex; gap: 0.65rem; align-items: flex-start;">
              <span style="color: #b45309; margin-top: 2px;">${icon('info', 'w-4 h-4')}</span>
              <div>
                <strong>Safety Notice:</strong> 
                ${isPrescription 
                  ? 'Controlled prescription therapeutic. Must be prescribed and administered strictly by licensed practitioners.'
                  : 'Dietary supplements should not replace a balanced clinical diet or professional medical consultation.'}
              </div>
            </div>

            <!-- Procurement & Direct Contact Buttons -->
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <a href="/contact/" class="btn btn-primary" style="flex: 1 1 200px; justify-content: center;">
                ${product.comingSoon ? 'Request Pre-Arrival Allocation' : 'Request Wholesale Quote'} ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="${collectionUrl}" class="btn btn-secondary">
                Back to ${collectionName}
              </a>
            </div>

          </div>
        </div>

        <!-- Related Products Section -->
        ${relatedProducts.length > 0 ? `
          <div style="border-top: 1px solid var(--color-border); padding-top: 2.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem;">
              <div>
                <span class="section-tag">Complementary Medicines</span>
                <h2 style="font-size: 1.5rem; margin: 0;">Related Healthcare Formulations</h2>
              </div>
              <a href="${collectionUrl}" class="btn btn-outline btn-sm">
                View All ${icon('arrowRight', 'w-3.5 h-3.5')}
              </a>
            </div>

            <div class="product-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
              ${relatedProducts.map(p => renderProductCard(p, isSupplement)).join('')}
            </div>
          </div>
        ` : ''}

      </div>
    </section>
  `;
}

function renderProductNotFound(slug) {
  return `
    <div class="container section" style="text-align: center; padding: 5rem 1.5rem;">
      <div style="width: 3.5rem; height: 3.5rem; border-radius: var(--radius-full); background: #fee2e2; color: var(--color-accent); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
        ${icon('close', 'w-6 h-6')}
      </div>
      <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">Product Record Not Found</h1>
      <p style="font-size: 1rem; color: var(--color-text-muted); max-width: 500px; margin: 0 auto 1.75rem;">
        No pharmaceutical record matches the slug "<code>${slug}</code>". The item may have been reclassified or its URL updated.
      </p>
      <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
        <a href="/products/therapeutic/" class="btn btn-primary">
          Browse Therapeutic Medicines
        </a>
        <a href="/products/supplements/" class="btn btn-secondary">
          Browse Supplements
        </a>
      </div>
    </div>
  `;
}

export function initProductDetailPage() {
  initExpandableToggles();
}
