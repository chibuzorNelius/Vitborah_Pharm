import newsArticles from '../data/news.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderArticleDetailPage(params) {
  const slug = params?.slug;
  const article = newsArticles.find(a => a.slug === slug);

  if (!article) {
    return `
      <div class="container section" style="text-align: center; padding: 6rem 1.5rem;">
        <h1 style="font-size: 2.25rem; margin-bottom: 1rem;">Article Not Found</h1>
        <p style="color: var(--color-text-muted); font-size: 1.05rem; margin-bottom: 2rem;">
          The requested news dispatch could not be located.
        </p>
        <a href="/news/" class="btn btn-primary">Return to News &amp; Releases</a>
      </div>
    `;
  }

  updateSEO({
    title: `${article.title} | Vitborah News`,
    description: article.summary,
    canonicalPath: `/news/${article.slug}/`,
    image: article.featuredImage || '/company_image/pharmacy.jpeg',
    type: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      'headline': article.title,
      'image': [
        `https://vitborahpharm.com${article.featuredImage || '/company_image/pharmacy.jpeg'}`
      ],
      'datePublished': article.isoDate,
      'dateModified': article.isoDate,
      'author': [{
        '@type': 'Organization',
        'name': article.author || 'Vitborah Pharmaceutical Company Limited'
      }],
      'publisher': {
        '@type': 'Organization',
        'name': 'Vitborah Pharmaceutical Company Limited',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://vitborahpharm.com/company_image/vitborah-logo.jpeg'
        }
      },
      'description': article.summary
    }
  });

  const isContain = article.imageFit === 'contain';
  const topic = article.topic || article.category;
  const related = newsArticles.filter(a => a.slug !== article.slug).slice(0, 2);

  return `
    <!-- Top Breadcrumb Bar -->
    <div style="background-color: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); padding: 1.15rem 0;">
      <div class="container">
        <div class="breadcrumbs" style="margin: 0;">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/news/">News &amp; Releases</a>
          <span class="separator">/</span>
          <span class="current">${article.title}</span>
        </div>
      </div>
    </div>

    <!-- Article Body Section -->
    <article class="section" style="padding-top: 3rem;">
      <div class="container" style="max-width: 840px;">
        <header style="margin-bottom: 2rem;">
          <div class="news-meta-line" style="margin-bottom: 0.9rem;">
            <span class="news-topic-label ${topic === 'Coming Soon' ? 'news-topic-coming' : (topic === 'Flash Sales' ? 'news-topic-flash' : 'news-topic-live')}">
              ${topic}
            </span>
            <span class="news-meta-sep" aria-hidden="true">&middot;</span>
            <time datetime="${article.isoDate}">${article.date}</time>
            <span class="news-meta-sep" aria-hidden="true">&middot;</span>
            <span>${article.author}</span>
          </div>

          <h1 style="font-size: clamp(1.85rem, 3.8vw, 2.65rem); line-height: 1.22; margin-bottom: 1rem; color: var(--color-text-main);">
            ${article.title}
          </h1>

          <p style="font-size: 1.1rem; color: var(--color-text-body); line-height: 1.6; font-weight: 500; margin: 0;">
            ${article.summary}
          </p>
        </header>

        <!-- Featured Media -->
        <div class="news-article-media ${isContain ? 'is-product-stage' : ''}">
          <img
            src="${article.featuredImage || '/company_image/pharmacy.jpeg'}"
            alt="${article.title}"
            class="${isContain ? 'is-contain' : 'is-cover'}"
          />
        </div>

        <!-- Article Body Paragraphs -->
        <div style="font-size: 1.05rem; line-height: 1.75; color: var(--color-text-body); margin-bottom: 2.25rem;">
          ${article.body.map(para => `<p style="margin-bottom: 1.35rem;">${para}</p>`).join('')}
        </div>

        ${article.ctaUrl ? `
          <div class="news-article-cta-box">
            <div>
              <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary);">
                Related Formulation &amp; Orders
              </div>
              <div style="font-weight: 700; color: var(--color-text-main); font-size: 1rem;">
                Inspect specifications or reach our trade desk directly.
              </div>
            </div>
            <a href="${article.ctaUrl}" class="btn btn-primary btn-sm">
              ${article.ctaText || 'View Product'} ${icon('arrowRight', 'w-3.5 h-3.5')}
            </a>
          </div>
        ` : ''}

        <!-- Tags Row -->
        ${article.tags ? `
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center; padding-top: 1.5rem; border-top: 1px solid var(--color-border); margin-bottom: 3rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-text-muted);">Topics:</span>
            ${article.tags.map(tag => `<span style="font-size: 0.82rem; color: var(--color-text-muted);">#${tag}</span>`).join('')}
          </div>
        ` : ''}

        <!-- Related Articles -->
        ${related.length > 0 ? `
          <div style="border-top: 1px solid var(--color-border); padding-top: 2.5rem;">
            <h2 style="font-size: 1.4rem; margin-bottom: 1.25rem;">More Dispatches</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
              ${related.map(r => `
                <div class="card" style="padding: 1.35rem;">
                  <div class="news-meta-line" style="margin-bottom: 0.45rem;">
                    <span class="news-topic-label ${r.topic === 'Coming Soon' ? 'news-topic-coming' : (r.topic === 'Flash Sales' ? 'news-topic-flash' : 'news-topic-live')}">${r.topic || r.category}</span>
                    <span class="news-meta-sep" aria-hidden="true">&middot;</span>
                    <span>${r.date}</span>
                  </div>
                  <h3 style="font-size: 1.05rem; margin-bottom: 0.5rem;">
                    <a href="/news/${r.slug}/" style="color: inherit;">${r.title}</a>
                  </h3>
                  <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 0.85rem;">
                    ${r.summary}
                  </p>
                  <a href="/news/${r.slug}/" style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary); display: inline-flex; align-items: center; gap: 0.25rem;">
                    Read Dispatch ${icon('chevronRight', 'w-3.5 h-3.5')}
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div style="margin-top: 2.75rem; text-align: center;">
          <a href="/news/" class="btn btn-secondary">
            ${icon('arrowLeft', 'w-4 h-4')} Back to All News &amp; Releases
          </a>
        </div>
      </div>
    </article>
  `;
}
