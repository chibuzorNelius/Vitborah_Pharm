import promotionData from '../data/promotions.json';
import { icon } from '../utils/icons.js';
import { navigate } from '../utils/router.js';

export function renderPromotionalModal() {
  if (!promotionData.active) return '';

  return `
    <div class="interstitial-backdrop" id="promo-interstitial" role="dialog" aria-modal="true" aria-labelledby="promo-title">
      <div class="interstitial-card">
        <button type="button" class="interstitial-close-btn" id="promo-close-btn" aria-label="Dismiss announcement">
          ${icon('close', 'w-5 h-5')}
        </button>
        
        <img src="${promotionData.image}" alt="${promotionData.title}" class="interstitial-img" />

        <div class="interstitial-content">
          <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span class="badge badge-green">${promotionData.badge}</span>
            <span class="badge badge-neutral">Campaign ID: ${promotionData.campaignId}</span>
          </div>

          <h2 id="promo-title" style="font-size: 1.65rem; margin-bottom: 0.4rem; color: var(--color-text-main);">
            ${promotionData.title}
          </h2>

          <h3 style="font-size: 1.05rem; font-weight: 600; color: var(--color-primary); margin-bottom: 0.85rem;">
            ${promotionData.subtitle}
          </h3>

          <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 1.75rem;">
            ${promotionData.description}
          </p>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
            <button type="button" class="btn btn-primary" id="promo-primary-cta">
              ${promotionData.primaryCtaText} ${icon('arrowRight', 'w-4 h-4')}
            </button>
            <button type="button" class="btn btn-secondary" id="promo-secondary-dismiss">
              Continue to Website
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initPromotionalModal() {
  if (!promotionData.active) return;

  const storageKey = `vitborah_interstitial_dismissed_${promotionData.campaignId}`;
  const isDismissed = sessionStorage.getItem(storageKey);

  // If already dismissed during this visit, don't show
  if (isDismissed === 'true') return;

  const modalEl = document.getElementById('promo-interstitial');
  const closeBtn = document.getElementById('promo-close-btn');
  const secondaryBtn = document.getElementById('promo-secondary-dismiss');
  const primaryCta = document.getElementById('promo-primary-cta');

  if (!modalEl) return;

  const openModal = () => {
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeModal = () => {
    modalEl.classList.remove('active');
    document.body.style.overflow = '';
    sessionStorage.setItem(storageKey, 'true');
  };

  // Delay opening slightly (800ms) for smooth entrance
  setTimeout(() => {
    openModal();
  }, 800);

  closeBtn?.addEventListener('click', closeModal);
  secondaryBtn?.addEventListener('click', closeModal);

  primaryCta?.addEventListener('click', () => {
    closeModal();
    navigate(promotionData.primaryCtaUrl);
  });

  // Close on backdrop click outside card
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl) {
      closeModal();
    }
  });

  // Escape key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('active')) {
      closeModal();
    }
  });
}
