import promotionData from '../data/promotions.json';
import { icon } from '../utils/icons.js';
import { navigate } from '../utils/router.js';
import {
  TWO_MINUTES_MS,
  pickFirstPromoAd,
  pickSecondPromoAd,
  getRemainingDelayMs
} from '../utils/promoScheduler.js';

const VISIT_START_KEY = 'vitborah_visit_start_ts';
const POPUP1_SHOWN_KEY = 'vitborah_popup1_shown';
const POPUP2_SHOWN_KEY = 'vitborah_popup2_shown';

let secondPopupTimerId = null;
let firstPopupTimerId = null;

function renderAdInner(ad) {
  if (!ad) return '';
  return `
    <div class="promo-ad-stage">
      <button
        type="button"
        class="promo-ad-close"
        id="promo-close-btn"
        aria-label="Close advertisement"
        title="Close"
      >
        ${icon('close', 'w-4 h-4')}
      </button>
      <img
        src="${ad.image}"
        alt="${ad.title} Packaging"
        class="promo-ad-img"
      />
    </div>

    <div class="promo-ad-body">
      <div class="promo-ad-eyebrow">${ad.eyebrow}</div>
      <h2 id="promo-title" class="promo-ad-title">${ad.title}</h2>
      ${ad.ingredients ? `<div class="promo-ad-meta">${ad.ingredients}</div>` : ''}
      <p class="promo-ad-desc">${ad.description}</p>
      <div class="promo-ad-actions">
        <button type="button" class="btn btn-primary btn-sm promo-ad-cta" id="promo-primary-cta">
          ${ad.ctaText || 'View more'} ${icon('arrowRight', 'w-3.5 h-3.5')}
        </button>
      </div>
    </div>
  `;
}

export function renderPromotionalModal() {
  if (!promotionData.active || !Array.isArray(promotionData.ads) || promotionData.ads.length === 0) {
    return '';
  }

  const initialAd = pickFirstPromoAd(promotionData.ads);

  return `
    <div
      class="promo-ad-backdrop"
      id="promo-interstitial"
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div class="promo-ad-card" id="promo-ad-card">
        ${renderAdInner(initialAd)}
      </div>
    </div>
  `;
}

export function initPromotionalModal() {
  if (!promotionData.active || !Array.isArray(promotionData.ads) || promotionData.ads.length === 0) {
    return;
  }

  const modalEl = document.getElementById('promo-interstitial');
  const cardEl = document.getElementById('promo-ad-card');
  if (!modalEl || !cardEl) return;

  const ads = promotionData.ads;
  const firstAd = pickFirstPromoAd(ads);
  const secondAd = pickSecondPromoAd(ads, firstAd?.id);
  const delayMs = typeof promotionData.secondPopupDelayMs === 'number'
    ? promotionData.secondPopupDelayMs
    : TWO_MINUTES_MS;

  // Persist initial visit timestamp for this browser session so SPA navigation doesn't reset timer
  let visitStartTs = parseInt(sessionStorage.getItem(VISIT_START_KEY) || '', 10);
  if (Number.isNaN(visitStartTs)) {
    visitStartTs = Date.now();
    sessionStorage.setItem(VISIT_START_KEY, String(visitStartTs));
  }

  let currentAd = firstAd;
  let pendingSecondAfterClose = false;

  const bindCardActions = () => {
    const closeBtn = document.getElementById('promo-close-btn');
    const primaryCta = document.getElementById('promo-primary-cta');

    closeBtn?.addEventListener('click', () => {
      closeModal();
    });

    primaryCta?.addEventListener('click', () => {
      const targetUrl = currentAd?.ctaUrl || '/products/therapeutic/';
      closeModal();
      navigate(targetUrl);
    });
  };

  const openModalWithAd = (ad) => {
    if (!ad) return;
    currentAd = ad;
    cardEl.innerHTML = renderAdInner(ad);
    bindCardActions();
    modalEl.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('promo-close-btn')?.focus();
  };

  const closeModal = () => {
    modalEl.classList.remove('active');
    document.body.style.overflow = '';

    if (pendingSecondAfterClose && sessionStorage.getItem(POPUP2_SHOWN_KEY) !== 'true') {
      pendingSecondAfterClose = false;
      setTimeout(() => {
        if (!modalEl.classList.contains('active') && sessionStorage.getItem(POPUP2_SHOWN_KEY) !== 'true') {
          sessionStorage.setItem(POPUP2_SHOWN_KEY, 'true');
          openModalWithAd(secondAd);
        }
      }, 350);
    }
  };

  // Clear stale timers on re-init
  if (firstPopupTimerId) {
    clearTimeout(firstPopupTimerId);
    firstPopupTimerId = null;
  }
  if (secondPopupTimerId) {
    clearTimeout(secondPopupTimerId);
    secondPopupTimerId = null;
  }

  // 1. Show First Popup immediately on first visit
  if (sessionStorage.getItem(POPUP1_SHOWN_KEY) !== 'true') {
    firstPopupTimerId = setTimeout(() => {
      if (sessionStorage.getItem(POPUP1_SHOWN_KEY) !== 'true') {
        sessionStorage.setItem(POPUP1_SHOWN_KEY, 'true');
        openModalWithAd(firstAd);
      }
    }, 180);
  }

  // 2. Schedule Second Popup (different cream) after ~2 minutes on the website
  if (sessionStorage.getItem(POPUP2_SHOWN_KEY) !== 'true' && secondAd) {
    const remainingMs = getRemainingDelayMs(visitStartTs, Date.now(), delayMs);
    secondPopupTimerId = setTimeout(() => {
      if (sessionStorage.getItem(POPUP2_SHOWN_KEY) === 'true') return;
      if (modalEl.classList.contains('active')) {
        // Wait cleanly until visitor closes Popup 1 rather than interrupting/stacking
        pendingSecondAfterClose = true;
      } else {
        sessionStorage.setItem(POPUP2_SHOWN_KEY, 'true');
        openModalWithAd(secondAd);
      }
    }, remainingMs);
  }

  // Escape key dismissal for accessibility (backdrop intentionally blocks casual outside clicks)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalEl.classList.contains('active')) {
      closeModal();
    }
  });
}
