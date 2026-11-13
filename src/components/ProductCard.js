import { icon } from '../utils/icons.js';

export function renderProductCard(product, isSupplement = false) {
  const isPrescription = product.prescriptionRequired;
  const isComingSoon = Boolean(product.comingSoon);
  const category = isSupplement ? product.category : product.therapeuticCategory;
  const badgeClass = isComingSoon
    ? 'badge-amber'
    : (isPrescription ? 'badge-red' : (isSupplement ? 'badge-blue' : 'badge-green'));
  const badgeLabel = isComingSoon
    ? 'Coming Soon'
    : (isPrescription ? 'Prescription Rx' : (isSupplement ? 'Supplement' : 'OTC / Hospital'));

  return `
    <article class="product-card" id="card-${product.id}">
      <div class="product-card-img-wrap">
        <span class="badge ${badgeClass}" style="position: absolute; top: 0.85rem; left: 0.85rem; z-index: 2;">
          ${badgeLabel}
        </span>
        <img 
          src="${product.imagePath}" 
          alt="${product.name} Packaging - Vitborah Pharmaceuticals" 
          class="product-card-img" 
          loading="lazy"
          onerror="this.src='/company_image/vitborah-logo.jpeg'; this.style.objectFit='contain';"
        />
      </div>

      <div class="product-card-body">
        <div class="product-card-category">${category}</div>
        <h3 class="product-card-title">
          <a href="${product.route}" style="color: inherit;">${product.name}</a>
        </h3>
        
        <p class="product-card-desc">
          ${product.shortDescription || product.description}
        </p>

        <div style="display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1rem;">
          ${product.dosageForm || product.productType ? `
            <div style="display: flex; justify-content: space-between;">
              <span>Form:</span>
              <strong style="color: var(--color-text-body);">${product.dosageForm || product.productType}</strong>
            </div>
          ` : ''}
          ${product.packSize ? `
            <div style="display: flex; justify-content: space-between;">
              <span>Pack:</span>
              <strong style="color: var(--color-text-body);">${product.packSize}</strong>
            </div>
          ` : ''}
        </div>

        <div class="product-card-footer">
          <span style="font-size: 0.75rem; color: var(--color-primary); font-weight: 700; text-transform: uppercase;">
            ${product.brand || 'Vitborah'}
          </span>
          <a href="${product.route}" class="btn btn-outline btn-sm" style="gap: 0.35rem;">
            View Details ${icon('arrowRight', 'w-3.5 h-3.5')}
          </a>
        </div>
      </div>
    </article>
  `;
}
