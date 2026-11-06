import { icon } from '../utils/icons.js';

export function renderCatalogBannerCarousel(products, carouselId = 'catalog-banner', options = {}) {
  const {
    gradient = 'linear-gradient(135deg, #052c16 0%, #0e793c 100%)',
    badgeText = 'Featured Formulation'
  } = options;

  if (!products || products.length === 0) return '';

  return `
    <div class="catalog-banner-carousel" id="${carouselId}" style="background: ${gradient};">
      <div class="catalog-banner-slides-track">
        ${products.map((product, idx) => `
          <div class="catalog-banner-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
            <div class="catalog-banner-grid">
              <!-- Content Panel (Gradient Side) -->
              <div class="catalog-banner-info">
                <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap;">
                  <span class="badge" style="background: rgba(255, 255, 255, 0.2); border-color: rgba(255, 255, 255, 0.3); color: #ffffff; font-size: 0.75rem;">
                    ${product.therapeuticCategory || product.category || badgeText}
                  </span>
                  ${product.dosageForm || product.productType ? `
                    <span class="badge" style="background: rgba(255, 255, 255, 0.1); border-color: rgba(255, 255, 255, 0.2); color: #d1fae5; font-size: 0.75rem;">
                      ${product.dosageForm || product.productType}
                    </span>
                  ` : ''}
                </div>

                <h2 style="color: #ffffff; font-size: clamp(1.6rem, 3.2vw, 2.35rem); font-weight: 800; line-height: 1.2; margin-bottom: 0.65rem; letter-spacing: -0.01em;">
                  ${product.name}
                </h2>

                ${product.activeIngredients ? `
                  <p style="color: #86efac; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.75rem;">
                    Active: ${product.activeIngredients}
                  </p>
                ` : ''}

                <p style="color: #d1fae5; font-size: 0.95rem; line-height: 1.55; margin-bottom: 1.5rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                  ${product.description || 'NAFDAC-registered, WHO-GMP manufactured formulation adhering to strict clinical standards for safety and therapeutic efficacy.'}
                </p>

                <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
                  <a href="${product.route || `/products/${product.slug || product.id}/`}" class="btn" style="background: #ffffff; color: var(--color-primary-dark); font-weight: 700; border: none; padding: 0.65rem 1.35rem; font-size: 0.9rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    View more ${icon('arrowRight', 'w-4 h-4')}
                  </a>
                  <span style="font-size: 0.8rem; color: #a7f3d0; opacity: 0.9;">
                    NAFDAC Verified
                  </span>
                </div>
              </div>

              <!-- Product Image Box -->
              <div class="catalog-banner-img-box">
                <img 
                  src="${product.imagePath || product.image || '/company_image/pharmacy.jpeg'}" 
                  alt="${product.name}" 
                  loading="${idx === 0 ? 'eager' : 'lazy'}" 
                />
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Controls Row: Counter, Indicators, Arrows -->
      <div style="padding: 0 1.5rem 1.5rem; max-width: 1200px; margin: 0 auto;">
        <div class="catalog-banner-controls">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="font-size: 0.8rem; color: #a7f3d0; font-weight: 600;">
              Slide <span class="carousel-counter-current">1</span> of ${products.length}
            </div>
            <div style="font-size: 0.75rem; color: rgba(255,255,255,0.6);">
              (Auto-rotating &bull; hover to pause)
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <button type="button" class="hero-arrow-btn carousel-prev-btn" aria-label="Previous slide" style="width: 2.25rem; height: 2.25rem;">
              ${icon('arrowLeft', 'w-4 h-4')}
            </button>
            <button type="button" class="hero-arrow-btn carousel-next-btn" aria-label="Next slide" style="width: 2.25rem; height: 2.25rem;">
              ${icon('arrowRight', 'w-4 h-4')}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initCatalogBannerCarousel(carouselId = 'catalog-banner', intervalMs = 6000) {
  const container = document.getElementById(carouselId);
  if (!container) return;

  const slides = container.querySelectorAll('.catalog-banner-slide');
  if (slides.length <= 1) return;

  const prevBtn = container.querySelector('.carousel-prev-btn');
  const nextBtn = container.querySelector('.carousel-next-btn');
  const counterCurrent = container.querySelector('.carousel-counter-current');

  let currentIndex = 0;
  let timer = null;

  const showSlide = (index) => {
    slides[currentIndex]?.classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex]?.classList.add('active');
    if (counterCurrent) {
      counterCurrent.textContent = currentIndex + 1;
    }
  };

  const nextSlide = () => showSlide(currentIndex + 1);
  const prevSlide = () => showSlide(currentIndex - 1);

  const startAutoPlay = () => {
    stopAutoPlay();
    timer = setInterval(nextSlide, intervalMs);
  };

  const stopAutoPlay = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    startAutoPlay();
  });

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    startAutoPlay();
  });

  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);
  container.addEventListener('touchstart', stopAutoPlay, { passive: true });
  container.addEventListener('touchend', startAutoPlay, { passive: true });

  startAutoPlay();
}
