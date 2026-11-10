import { icon } from '../utils/icons.js';

/**
 * CatalogBannerCarousel — polished split-layout product banner.
 *
 * Layout: LEFT = warm light/neutral panel with the product image, properly contained.
 *         RIGHT = rich gradient panel (colour derived per page) with product text.
 * This avoids the previous "flat green block vs white box" clash by giving both
 * sides a cohesive complementary treatment.
 *
 * On mobile the layout stacks: image panel on top, info panel below.
 */
export function renderCatalogBannerCarousel(products, carouselId = 'catalog-banner', options = {}) {
  const {
    // Gradient for the info (text) panel — right side on desktop
    gradient = 'linear-gradient(135deg, #052c16 0%, #0e793c 100%)',
    // Light tint for the image panel — left side on desktop
    imagePanelBg = 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
    badgeText = 'Featured Formulation'
  } = options;

  if (!products || products.length === 0) return '';

  return `
    <div class="cbc-wrap" id="${carouselId}">
      <div class="cbc-track">
        ${products.map((product, idx) => `
          <div class="cbc-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
            <div class="cbc-grid">

              <!-- LEFT: Product image panel — neutral warm background, image contained properly -->
              <div class="cbc-img-panel" style="background: ${imagePanelBg};">
                <div class="cbc-img-frame">
                  <img
                    src="${product.imagePath || product.image || '/company_image/pharmacy.jpeg'}"
                    alt="${product.name}"
                    class="cbc-product-img"
                    loading="${idx === 0 ? 'eager' : 'lazy'}"
                  />
                </div>
                <!-- Product name label under image on the light side -->
                <div class="cbc-img-label">
                  <span class="badge" style="background: rgba(14,121,60,0.12); border-color: rgba(14,121,60,0.25); color: #065f46; font-size: 0.72rem;">
                    ${product.therapeuticCategory || product.category || badgeText}
                  </span>
                </div>
              </div>

              <!-- RIGHT: Info panel — gradient colour, article text -->
              <div class="cbc-info-panel" style="background: ${gradient};">
                <div class="cbc-info-inner">
                  <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.85rem; flex-wrap: wrap;">
                    ${product.dosageForm || product.productType ? `
                      <span class="badge" style="background: rgba(255, 255, 255, 0.18); border-color: rgba(255, 255, 255, 0.28); color: #d1fae5; font-size: 0.74rem;">
                        ${product.dosageForm || product.productType}
                      </span>
                    ` : ''}
                    ${product.nafdacNumber ? `
                      <span class="badge" style="background: rgba(255, 255, 255, 0.10); border-color: rgba(255, 255, 255, 0.18); color: #bbf7d0; font-size: 0.72rem;">
                        NAFDAC Verified
                      </span>
                    ` : ''}
                  </div>

                  <h2 class="cbc-product-name">${product.name}</h2>

                  ${product.activeIngredients ? `
                    <p class="cbc-active-ingredient">
                      ${icon('pill', 'w-4 h-4')} ${product.activeIngredients}
                    </p>
                  ` : ''}

                  <p class="cbc-product-desc">
                    ${product.description || 'NAFDAC-registered, WHO-GMP manufactured formulation adhering to strict clinical standards for safety and therapeutic efficacy.'}
                  </p>

                  <div class="cbc-cta-row">
                    <a href="${product.route || `/products/${product.slug || product.id}/`}" class="cbc-view-btn">
                      View more ${icon('arrowRight', 'w-4 h-4')}
                    </a>
                    <span class="cbc-slide-counter-label">
                      <span class="cbc-counter-current">${idx + 1}</span> / ${products.length}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        `).join('')}
      </div>

      <!-- Navigation controls — overlaid on the info panel bottom-right -->
      <div class="cbc-controls">
        <span class="cbc-auto-hint">${icon('refresh', 'w-3.5 h-3.5')} Auto-rotating &bull; hover to pause</span>
        <div class="cbc-arrow-row">
          <button type="button" class="cbc-arrow-btn cbc-prev-btn" aria-label="Previous product">
            ${icon('arrowLeft', 'w-4 h-4')}
          </button>
          <button type="button" class="cbc-arrow-btn cbc-next-btn" aria-label="Next product">
            ${icon('arrowRight', 'w-4 h-4')}
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initCatalogBannerCarousel(carouselId = 'catalog-banner', intervalMs = 7000) {
  const container = document.getElementById(carouselId);
  if (!container) return;

  const slides = container.querySelectorAll('.cbc-slide');
  if (slides.length <= 1) return;

  const prevBtn = container.querySelector('.cbc-prev-btn');
  const nextBtn = container.querySelector('.cbc-next-btn');

  let currentIndex = 0;
  let timer = null;

  const showSlide = (index) => {
    slides[currentIndex]?.classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex]?.classList.add('active');
    // Sync all visible slide counters (the label inside each slide)
    // We also update the shared counter inside the controls if present
  };

  const nextSlide = () => showSlide(currentIndex + 1);
  const prevSlide = () => showSlide(currentIndex - 1);

  const startAutoPlay = () => {
    stopAutoPlay();
    timer = setInterval(nextSlide, intervalMs);
  };

  const stopAutoPlay = () => {
    if (timer) { clearInterval(timer); timer = null; }
  };

  nextBtn?.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
  prevBtn?.addEventListener('click', () => { prevSlide(); startAutoPlay(); });

  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);
  container.addEventListener('touchstart', stopAutoPlay, { passive: true });
  container.addEventListener('touchend', startAutoPlay, { passive: true });

  startAutoPlay();
}
