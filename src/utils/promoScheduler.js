/**
 * Pure scheduling helpers for Vitborah Coming-Soon Cream Popup Ads.
 * - First ad renders on initial site visit.
 * - Second ad (guaranteed different cream) triggers after 2 minutes (120000 ms) of visit elapsed time.
 */

export const TWO_MINUTES_MS = 120000;

export function pickFirstPromoAd(ads) {
  if (!Array.isArray(ads) || ads.length === 0) return null;
  return ads[0];
}

export function pickSecondPromoAd(ads, firstAdId) {
  if (!Array.isArray(ads) || ads.length === 0) return null;
  const distinct = ads.find((ad) => ad.id !== firstAdId);
  return distinct || ads[0];
}

/**
 * Compute remaining milliseconds before the second popup ad should fire.
 * Returns 0 if 2+ minutes have already elapsed since visitStartTs.
 */
export function getRemainingDelayMs(visitStartTs, nowTs = Date.now(), delayMs = TWO_MINUTES_MS) {
  if (typeof visitStartTs !== 'number' || Number.isNaN(visitStartTs)) {
    return delayMs;
  }
  const elapsed = Math.max(0, nowTs - visitStartTs);
  return Math.max(0, delayMs - elapsed);
}
