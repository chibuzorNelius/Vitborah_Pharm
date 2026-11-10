import { icon } from '../utils/icons.js';

let carouselTimer = null;
let currentSlideIndex = 0;
let slideItems = [];

export function renderProductCarousel(products, title = "Featured Formulations Showcase", subtitle = "Highlighted therapeutic medicines verified for clinical efficacy and hospital delivery.") {
  slideItems = products;
  currentSlideIndex = 0;

  if (!products || products.length === 0) return '';

  return `
    <div class="carousel-wrap" id="featured-carousel">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="badge badge-green" style="margin-bottom: 0.5rem;">Corporate Spotlight</span>
          <h2 style="font-size: 1.75rem; margin-bottom: 0.25rem;">${title}</h2>
          <p style="color: var(--color-text-muted); font-size: 0.95rem; margin: 0;">${subtitle}</p>
        </div>
        <div class="carousel-controls">
          <button type="button" class="carousel-btn" id="carousel-prev-btn" aria-label="Previous product">
            ${icon('chevronLeft', 'w-5 h-5')}
          </button>
          <button type="button" class="carousel-btn" id="carousel-next-btn" aria-label="Next product">
            ${icon('chevronRight', 'w-5 h-5')}
          </button>
        </div>
      </div>

      <div id="carousel-slide-content">
        ${renderCurrentSlide(products[0])}
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 2rem; flex-wrap: wrap; gap: 1rem;">
        <div class="carousel-dots" id="carousel-dots-container">
          ${products.map((_, idx) => `
            <button type="button" class="carousel-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
          `).join('')}
        </div>
        <div style="font-size: 0.8rem; color: var(--color-text-muted);">
          Slide <span id="carousel-current-num">1</span> of <span>${products.length}</span>
        </div>
      </div>
    </div>
  `;
}

function renderCurrentSlide(product) {
  if (!product) return '';
  const isPrescription = product.prescriptionRequired;

  return `
    <div class="carousel-grid">
      <div class="carousel-img-container">
        <img 
          src="${product.imagePath}" 
          alt="${product.name} Packaging - Vitborah Pharmaceuticals"
          onerror="this.src='/company_image/vitborah-logo.jpeg';"
        />
      </div>

      <div>
        <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
          <span class="badge ${isPrescription ? 'badge-red' : 'badge-green'}">
            ${isPrescription ? 'Prescription Medicine' : 'Dietary / Hospital Formulation'}
          </span>
          <span class="badge badge-neutral">
            ${product.dosageForm || product.productType || 'Formulation'}
          </span>
        </div>

        <h3 style="font-size: 2rem; margin-bottom: 0.75rem; color: var(--color-text-main);">
          ${product.name}
        </h3>

        <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.6; margin-bottom: 1.25rem;">
          ${product.description || product.shortDescription}
        </p>

        <div style="background-color: var(--color-bg-subtle); border-radius: var(--radius-md); padding: 1rem 1.25rem; border: 1px solid var(--color-border); margin-bottom: 1.75rem;">
          <div style="font-size: 0.825rem; color: var(--color-text-muted); margin-bottom: 0.25rem;">Active Formulation:</div>
          <div style="font-size: 0.95rem; font-weight: 600; color: var(--color-text-main); margin-bottom: 0.5rem;">
            ${product.activeIngredients || 'Standardized active pharmaceutical ingredient'}
          </div>
          ${product.regulatoryInfo ? `
            <div style="font-size: 0.8rem; color: var(--color-primary-dark); font-weight: 600;">
              ${icon('checkCircle', 'w-3.5 h-3.5')} ${product.regulatoryInfo}
            </div>
          ` : ''}
        </div>

        <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
          <a href="${product.route}" class="btn btn-primary">
            Explore Full Specifications ${icon('arrowRight', 'w-4 h-4')}
          </a>
          <a href="/contact/" class="btn btn-secondary">
            Request Wholesale Quote
          </a>
        </div>
      </div>
    </div>
  `;
}

export function initCarouselListeners() {
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const dotsContainer = document.getElementById('carousel-dots-container');
  const carouselWrap = document.getElementById('featured-carousel');

  if (!carouselWrap || slideItems.length <= 1) return;

  const updateSlide = (newIndex) => {
    currentSlideIndex = (newIndex + slideItems.length) % slideItems.length;
    const contentEl = document.getElementById('carousel-slide-content');
    const numEl = document.getElementById('carousel-current-num');

    if (contentEl) contentEl.innerHTML = renderCurrentSlide(slideItems[currentSlideIndex]);
    if (numEl) numEl.textContent = (currentSlideIndex + 1).toString();

    // Update dots
    document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
      if (idx === currentSlideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  prevBtn?.addEventListener('click', () => {
    stopAutoPlay();
    updateSlide(currentSlideIndex - 1);
  });

  nextBtn?.addEventListener('click', () => {
    stopAutoPlay();
    updateSlide(currentSlideIndex + 1);
  });

  dotsContainer?.addEventListener('click', (e) => {
    const dot = e.target.closest('.carousel-dot');
    if (!dot) return;
    const idx = parseInt(dot.getAttribute('data-index'), 10);
    stopAutoPlay();
    updateSlide(idx);
  });

  // Auto rotation
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    startAutoPlay(updateSlide);
    carouselWrap.addEventListener('mouseenter', stopAutoPlay);
    carouselWrap.addEventListener('mouseleave', () => startAutoPlay(updateSlide));
    carouselWrap.addEventListener('focusin', stopAutoPlay);
    carouselWrap.addEventListener('focusout', () => startAutoPlay(updateSlide));
  }
}

function startAutoPlay(updateSlideFn) {
  stopAutoPlay();
  carouselTimer = setInterval(() => {
    updateSlideFn(currentSlideIndex + 1);
  }, 2000);
}

export function stopAutoPlay() {
  if (carouselTimer) {
    clearInterval(carouselTimer);
    carouselTimer = null;
  }
}
