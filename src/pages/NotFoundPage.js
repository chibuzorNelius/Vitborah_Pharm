import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';
import { navigate } from '../utils/router.js';

export function renderNotFoundPage(attemptedPath = '') {
  updateSEO({
    title: '404 - Page Not Found | Vitborah Pharmaceuticals',
    description: 'The requested pharmaceutical portal page or product record does not exist on Vitborah Pharmaceutical Company Limited.',
    canonicalPath: '/404'
  });

  return `
    <div class="container section" style="text-align: center; padding: 6rem 1.5rem; max-width: 680px; margin: 0 auto;">
      <div style="width: 5rem; height: 5rem; border-radius: var(--radius-full); background: #fee2e2; color: var(--color-accent); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
        ${icon('close', 'w-10 h-10')}
      </div>

      <span class="badge badge-red" style="margin-bottom: 0.75rem;">Error 404 • Resource Not Located</span>
      <h1 style="font-size: clamp(2rem, 4vw, 2.75rem); margin-bottom: 1rem; color: var(--color-text-main);">
        Page or Product Not Found
      </h1>

      <p style="font-size: 1.1rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 2rem;">
        The requested URL <code style="background: var(--color-bg-subtle); padding: 0.2rem 0.5rem; border-radius: 4px; color: var(--color-text-main); font-weight: 600;">${attemptedPath || window.location.pathname}</code> does not match any current pharmaceutical formulation, news publication, or corporate department.
      </p>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <a href="/" class="btn btn-primary">
          Return to Corporate Home
        </a>
        <a href="/products/therapeutic/" class="btn btn-secondary">
          Browse Therapeutic Medicines
        </a>
        <a href="/products/supplements/" class="btn btn-secondary">
          Browse Dietary Supplements
        </a>
      </div>
    </div>
  `;
}
