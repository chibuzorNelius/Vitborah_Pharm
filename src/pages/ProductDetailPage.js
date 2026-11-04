import therapeuticProducts from '../data/therapeuticProducts.json';
import supplements from '../data/supplements.json';
import { icon } from '../utils/icons.js';
import { renderProductCard } from '../components/ProductCard.js';
import { updateSEO } from '../utils/seo.js';

export function renderProductDetailPage(params) {
  const slug = params?.slug;

  // Search in therapeutics and supplements
  const therapeuticMatch = therapeuticProducts.find(p => p.id === slug);
  const supplementMatch = supplements.find(s => s.id === slug);

  if (!therapeuticMatch && !supplementMatch) {
    return renderProductNotFound(slug);
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

  // Related products from same category or collection
  const allInCollection = isSupplement ? supplements : therapeuticProducts;
  const relatedProducts = allInCollection
    .filter(p => p.id !== product.id)
    .filter(p => (isSupplement ? p.category === product.category : p.therapeuticCategory === product.therapeuticCategory) || true)
    .slice(0, 3);

  return `
    <!-- Top Breadcrumb Bar -->
    <div style="background-color: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); padding: 1.25rem 0;">
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
    <section class="section" style="padding-top: 3.5rem;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; margin-bottom: 4.5rem;" class="hero-grid">
          
          <!-- Left: High-Res Packaging Photo -->
          <div>
            <div style="background: radial-gradient(circle, #f8fafc 0%, #f1f5f9 100%); border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2.5rem; display: flex; align-items: center; justify-content: center; position: relative; min-height: 420px; box-shadow: var(--shadow-md);">
              <span class="badge ${isPrescription ? 'badge-red' : (isSupplement ? 'badge-blue' : 'badge-green')}" style="position: absolute; top: 1.25rem; left: 1.25rem; font-size: 0.8rem; padding: 0.4rem 0.85rem;">
                ${isPrescription ? 'Prescription Only (Rx)' : (isSupplement ? 'New AGE Dietary Supplement' : 'Therapeutic Formulation')}
              </span>

              <img 
                src="${product.imagePath}" 
                alt="${product.name} Official Packaging" 
                style="max-width: 100%; max-height: 380px; object-fit: contain; filter: drop-shadow(0 15px 25px rgba(0,0,0,0.12));"
                onerror="this.src='/company_image/vitborah logo.jpeg';"
              />
            </div>

            <!-- Authentic Tamper & Storage Seals -->
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1rem;">
              <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 0.85rem; display: flex; align-items: center; gap: 0.65rem; font-size: 0.825rem;">
                <span style="color: var(--color-primary);">${icon('shieldCheck', 'w-5 h-5')}</span>
                <span>Tamper-Evident Packaging Verification</span>
              </div>
              <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 0.85rem; display: flex; align-items: center; gap: 0.65rem; font-size: 0.825rem;">
                <span style="color: var(--color-primary);">${icon('clock', 'w-5 h-5')}</span>
                <span>Store Below 30°C in Dry Conditions</span>
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

            <h1 style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1.2; margin-bottom: 1rem; color: var(--color-text-main);">
              ${product.name}
            </h1>

            <p style="font-size: 1.1rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 1.75rem;">
              ${product.description || product.shortDescription}
            </p>

            <!-- Specification Attributes Grid -->
            <div style="background-color: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; margin-bottom: 2rem;">
              <h3 style="font-size: 1rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); margin-bottom: 1rem;">
                Verified Specifications
              </h3>

              <div style="display: grid; grid-template-columns: 1fr; gap: 0.85rem; font-size: 0.95rem;">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                  <span style="color: var(--color-text-muted);">Active Formulation:</span>
                  <strong style="color: var(--color-text-main); text-align: right; max-width: 60%;">${product.activeIngredients || 'Standardized active ingredient'}</strong>
                </div>

                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                  <span style="color: var(--color-text-muted);">Dosage Form:</span>
                  <strong style="color: var(--color-text-main);">${product.dosageForm || product.productType || 'Standard Form'}</strong>
                </div>

                ${product.packSize ? `
                  <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                    <span style="color: var(--color-text-muted);">Packaging / Presentation:</span>
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

            <!-- Clinical & Administration Guidance -->
            ${product.useCase ? `
              <div style="margin-bottom: 2rem;">
                <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--color-text-main);">
                  Intended Application & Guidance:
                </h4>
                <p style="font-size: 0.95rem; color: var(--color-text-body); line-height: 1.6;">
                  ${product.useCase}
                </p>
              </div>
            ` : ''}

            <!-- Clinical Safety Warning -->
            <div style="background-color: #fffbeb; border: 1px solid #fde68a; border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-bottom: 2rem; font-size: 0.85rem; color: #92400e; line-height: 1.5; display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: #b45309; margin-top: 2px;">${icon('info', 'w-5 h-5')}</span>
              <div>
                <strong>Safety Notice:</strong> 
                ${isPrescription 
                  ? 'This medicine is a controlled prescription therapeutic. Administration must be supervised by trained healthcare professionals in accordance with approved clinical inserts and diagnosis.'
                  : 'Dietary supplements should not be used as a substitute for a varied, balanced diet and medical consultation.'}
              </div>
            </div>

            <!-- Procurement & Inquiry Buttons -->
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/contact/" class="btn btn-primary" style="flex: 1 1 220px;">
                Request Wholesale Quote ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="${collectionUrl}" class="btn btn-secondary">
                Back to ${collectionName}
              </a>
            </div>

          </div>
        </div>

        <!-- Related Products Section -->
        ${relatedProducts.length > 0 ? `
          <div style="border-top: 1px solid var(--color-border); padding-top: 3.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem;">
              <div>
                <span class="section-tag">Related Portfolio</span>
                <h2 style="font-size: 1.75rem; margin: 0;">Complementary Formulations</h2>
              </div>
              <a href="${collectionUrl}" class="btn btn-outline btn-sm">
                Explore Full Catalog ${icon('arrowRight', 'w-3.5 h-3.5')}
              </a>
            </div>

            <div class="product-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
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
    <div class="container section" style="text-align: center; padding: 6rem 1.5rem;">
      <div style="width: 4rem; height: 4rem; border-radius: var(--radius-full); background: #fee2e2; color: var(--color-accent); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
        ${icon('close', 'w-8 h-8')}
      </div>
      <h1 style="font-size: 2.25rem; margin-bottom: 0.75rem;">Product Record Not Found</h1>
      <p style="font-size: 1.05rem; color: var(--color-text-muted); max-width: 520px; margin: 0 auto 2rem;">
        No pharmaceutical record matches the slug "<code>${slug}</code>". The item may have been reclassified or its URL updated.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
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
