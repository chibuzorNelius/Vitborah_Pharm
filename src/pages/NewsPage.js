import newsArticles from '../data/news.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';
import { filterNewsByTopic, countNewsByTopics } from '../utils/catalogFilters.js';

let activeTopic = 'All';

const TOPICS = [
  { id: 'All', label: 'All Updates' },
  { id: 'Coming Soon', label: 'Coming Soon' },
  { id: 'Now Selling', label: 'Now Selling' },
  { id: 'Flash Sales', label: 'Flash Sales' }
];

function getTopicToneClass(topic) {
  if (topic === 'Coming Soon') return 'news-topic-coming';
  if (topic === 'Flash Sales') return 'news-topic-flash';
  return 'news-topic-live';
}

function renderFeaturedDispatch(article) {
  if (!article) return '';
  const isContain = article.imageFit === 'contain';
  const topic = article.topic || article.category;

  return `
    <article class="news-featured-card">
      <div class="news-featured-media ${isContain ? 'is-product-stage' : ''}">
        <img
          src="${article.featuredImage || '/company_image/pharmacy.jpeg'}"
          alt="${article.title}"
          class="${isContain ? 'is-contain' : 'is-cover'}"
        />
      </div>

      <div class="news-featured-body">
        <div class="news-meta-line">
          <span class="news-topic-label ${getTopicToneClass(topic)}">${topic}</span>
          <span class="news-meta-sep" aria-hidden="true">&middot;</span>
          <time datetime="${article.isoDate}">${article.date}</time>
          <span class="news-meta-sep" aria-hidden="true">&middot;</span>
          <span>${article.author}</span>
        </div>

        <h2 class="news-featured-title">
          <a href="/news/${article.slug}/">${article.title}</a>
        </h2>

        <p class="news-featured-summary">${article.summary}</p>

        <div class="news-featured-actions">
          <a href="/news/${article.slug}/" class="btn btn-primary btn-sm">
            Read Full Dispatch ${icon('arrowRight', 'w-3.5 h-3.5')}
          </a>
          ${article.ctaUrl ? `
            <a href="${article.ctaUrl}" class="btn btn-outline btn-sm">
              ${article.ctaText || 'View Product'}
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderArticleCard(article) {
  const isContain = article.imageFit === 'contain';
  const topic = article.topic || article.category;

  return `
    <article class="card card-hover news-grid-card">
      <a href="/news/${article.slug}/" class="news-card-media ${isContain ? 'is-product-stage' : ''}">
        <img
          src="${article.featuredImage || '/company_image/pharmacy.jpeg'}"
          alt="${article.title}"
          class="${isContain ? 'is-contain' : 'is-cover'}"
          loading="lazy"
        />
      </a>

      <div class="news-card-content">
        <div class="news-meta-line">
          <span class="news-topic-label ${getTopicToneClass(topic)}">${topic}</span>
          <span class="news-meta-sep" aria-hidden="true">&middot;</span>
          <time datetime="${article.isoDate}">${article.date}</time>
        </div>

        <h3 class="news-card-title">
          <a href="/news/${article.slug}/">${article.title}</a>
        </h3>

        <p class="news-card-summary">${article.summary}</p>

        <div class="news-card-footer">
          <a href="/news/${article.slug}/" class="news-read-link">
            Read Dispatch ${icon('arrowRight', 'w-3.5 h-3.5')}
          </a>
          ${article.ctaUrl ? `
            <a href="${article.ctaUrl}" class="news-product-link">
              ${article.ctaText || 'Details'}
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `;
}

function renderNewsContent(topic) {
  const filtered = filterNewsByTopic(newsArticles, topic);
  if (filtered.length === 0) {
    return `
      <div style="text-align: center; padding: 3.5rem 1.5rem; background: var(--color-bg-subtle); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">No updates in this category yet</h3>
        <p style="color: var(--color-text-muted); margin-bottom: 1.25rem;">Switch back to view all product releases, upcoming arrivals, and flash sale notices.</p>
        <button type="button" class="btn btn-primary btn-sm" id="news-reset-filter-btn">Show All Updates</button>
      </div>
    `;
  }

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return `
    ${renderFeaturedDispatch(featured)}
    ${rest.length > 0 ? `
      <div class="news-grid-header">
        <h2 class="news-section-heading">${topic === 'All' ? 'More Product Releases & Flash Sales' : `${topic} Updates`}</h2>
        <span class="news-count-label">${filtered.length} ${filtered.length === 1 ? 'dispatch' : 'dispatches'}</span>
      </div>
      <div class="news-cards-grid">
        ${rest.map(renderArticleCard).join('')}
      </div>
    ` : ''}
  `;
}

export function renderNewsPage() {
  updateSEO({
    title: 'Product News, Arrivals & Flash Sales | Vitborah Pharmaceuticals',
    description: 'Latest updates from Vitborah Pharmaceutical Company Limited: coming-soon skin creams (Skibora, Boraclear, Borbact), newly stocked medicines now selling, and pharmacy flash sales.',
    canonicalPath: '/news/',
    image: '/products_image/boraclear.png'
  });

  const counts = countNewsByTopics(newsArticles);

  return `
    <!-- Clean Editorial Dispatch Header -->
    <section class="news-hero-band">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0; margin-bottom: 1rem;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">News &amp; Releases</span>
        </div>

        <div class="news-hero-layout">
          <div>
            <div class="news-hero-kicker">Vitborah Product &amp; Trade Bulletins</div>
            <h1 class="news-hero-title">Product Arrivals, Coming Soon &amp; Flash Sales</h1>
            <p class="news-hero-desc">
              Stay updated on upcoming topical creams, newly stocked therapeutic formulations open for immediate ordering, and seasonal institutional flash sales.
            </p>
          </div>

          <div class="news-hero-summary">
            <div class="news-stat-tile">
              <span class="news-stat-value">${counts['Coming Soon']}</span>
              <span class="news-stat-label">Coming Soon</span>
            </div>
            <div class="news-stat-tile">
              <span class="news-stat-value">${counts['Now Selling']}</span>
              <span class="news-stat-label">Now Selling</span>
            </div>
            <div class="news-stat-tile">
              <span class="news-stat-value">${counts['Flash Sales']}</span>
              <span class="news-stat-label">Flash Sales</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Tabs & Dispatches -->
    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="news-filter-bar">
          <div class="filter-chips-row" id="news-topic-chips" role="tablist" aria-label="Filter news by topic">
            ${TOPICS.map(t => `
              <button
                type="button"
                role="tab"
                aria-selected="${activeTopic === t.id ? 'true' : 'false'}"
                class="filter-chip ${activeTopic === t.id ? 'active' : ''}"
                data-topic="${t.id}"
              >
                ${t.label} (${counts[t.id] ?? 0})
              </button>
            `).join('')}
          </div>

          <a href="/contact/" class="news-trade-cta">
            Trade &amp; Allocation Desk ${icon('arrowRight', 'w-3.5 h-3.5')}
          </a>
        </div>

        <div id="news-content-container">
          ${renderNewsContent(activeTopic)}
        </div>
      </div>
    </section>
  `;
}

export function initNewsPage() {
  const chipsContainer = document.getElementById('news-topic-chips');
  const contentContainer = document.getElementById('news-content-container');
  if (!chipsContainer || !contentContainer) return;

  const updateView = (topic) => {
    activeTopic = topic;
    chipsContainer.querySelectorAll('.filter-chip').forEach((btn) => {
      const isMatch = btn.getAttribute('data-topic') === topic;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', isMatch ? 'true' : 'false');
    });
    contentContainer.innerHTML = renderNewsContent(topic);
    document.getElementById('news-reset-filter-btn')?.addEventListener('click', () => updateView('All'));
  };

  chipsContainer.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    const topic = chip.getAttribute('data-topic') || 'All';
    updateView(topic);
  });

  document.getElementById('news-reset-filter-btn')?.addEventListener('click', () => updateView('All'));
}
