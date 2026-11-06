import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';
import { escapeHTML } from '../utils/security.js';

export function renderNotFoundPage(attemptedPath = '') {
  const safePath = escapeHTML(attemptedPath || window.location.pathname);

  updateSEO({
    title: '404 - Page Not Found | Vitborah Pharmaceuticals',
    description: 'The requested pharmaceutical portal page or product record does not exist on Vitborah Pharmaceutical Company Limited.',
    canonicalPath: '/404'
  });

  return `
    <div class="container section" style="text-align: center; padding: 5rem 1.5rem; max-width: 680px; margin: 0 auto;">
      <div style="width: 4rem; height: 4rem; border-radius: var(--radius-full); background: #fee2e2; color: var(--color-accent); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
        ${icon('close', 'w-8 h-8')}
      </div>

      <span class="badge badge-red" style="margin-bottom: 0.75rem;">Error 404 • Resource Not Located</span>
      <h1 style="font-size: clamp(1.85rem, 3.5vw, 2.5rem); margin-bottom: 0.75rem; color: var(--color-text-main);">
        Page or Product Not Found
      </h1>

      <p style="font-size: 1.05rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 2rem;">
        The requested URL <code style="background: var(--color-bg-subtle); padding: 0.2rem 0.5rem; border-radius: 4px; color: var(--color-text-main); font-weight: 600;">${safePath}</code> does not match any current pharmaceutical formulation, news publication, or corporate department.
      </p>

      <div style="display: flex; gap: 0.85rem; justify-content: center; flex-wrap: wrap;">
        <a href="/" class="btn btn-primary">
          Return to Corporate Home
        </a>
        <a href="/products/therapeutic/" class="btn btn-secondary">
          Browse Therapeutic Medicines
        </a>
        <a href="/products/supplements/" class="btn btn-secondary">
          Browse Supplements
        </a>
      </div>
    </div>
  `;
}
