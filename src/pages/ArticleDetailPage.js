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
          The requested corporate news announcement could not be located.
        </p>
        <a href="/news/" class="btn btn-primary">Return to News Archive</a>
      </div>
    `;
  }

  // SEO Update
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

  const related = newsArticles.filter(a => a.slug !== article.slug).slice(0, 2);

  return `
    <!-- Top Breadcrumb Bar -->
    <div style="background-color: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); padding: 1.25rem 0;">
      <div class="container">
        <div class="breadcrumbs" style="margin: 0;">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/news/">Company News</a>
          <span class="separator">/</span>
          <span class="current">${article.title}</span>
        </div>
      </div>
    </div>

    <!-- Article Body Section -->
    <article class="section" style="padding-top: 3.5rem;">
      <div class="container" style="max-width: 860px;">
        <header style="margin-bottom: 2.5rem;">
          <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 1rem; flex-wrap: wrap;">
            <span class="badge badge-green">${article.category}</span>
            <span style="font-size: 0.85rem; color: var(--color-text-muted);">${article.date}</span>
            <span style="font-size: 0.85rem; color: var(--color-text-muted);">• By ${article.author}</span>
          </div>

          <h1 style="font-size: clamp(2rem, 4vw, 2.85rem); line-height: 1.25; margin-bottom: 1.25rem; color: var(--color-text-main);">
            ${article.title}
          </h1>

          <p style="font-size: 1.15rem; color: var(--color-text-body); line-height: 1.6; font-weight: 500; border-left: 4px solid var(--color-primary); padding-left: 1.25rem; margin: 0;">
            ${article.summary}
          </p>
        </header>

        <!-- Featured Media -->
        <div style="border-radius: var(--radius-xl); overflow: hidden; margin-bottom: 3rem; box-shadow: var(--shadow-lg);">
          <img 
            src="${article.featuredImage || '/company_image/pharmacy.jpeg'}" 
            alt="${article.title}" 
            style="width: 100%; max-height: 480px; object-fit: cover;"
          />
        </div>

        <!-- Article Body Paragraphs -->
        <div style="font-size: 1.1rem; line-height: 1.8; color: var(--color-text-body); margin-bottom: 3rem;">
          ${article.body.map(para => `<p style="margin-bottom: 1.5rem;">${para}</p>`).join('')}
        </div>

        <!-- Tags Row -->
        ${article.tags ? `
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center; padding-top: 1.5rem; border-top: 1px solid var(--color-border); margin-bottom: 3.5rem;">
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-text-muted);">Tags:</span>
            ${article.tags.map(tag => `<span class="badge badge-neutral">#${tag}</span>`).join('')}
          </div>
        ` : ''}

        <!-- Related Articles -->
        ${related.length > 0 ? `
          <div style="border-top: 2px solid var(--color-border); padding-top: 3rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">More Announcements</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
              ${related.map(r => `
                <div class="card" style="padding: 1.5rem;">
                  <span class="badge badge-green" style="margin-bottom: 0.5rem;">${r.category}</span>
                  <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">
                    <a href="/news/${r.slug}/" style="color: inherit;">${r.title}</a>
                  </h4>
                  <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
                    ${r.summary}
                  </p>
                  <a href="/news/${r.slug}/" style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary); display: inline-flex; align-items: center; gap: 0.25rem;">
                    Read Article ${icon('chevronRight', 'w-3.5 h-3.5')}
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div style="margin-top: 3rem; text-align: center;">
          <a href="/news/" class="btn btn-secondary">
            ${icon('arrowLeft', 'w-4 h-4')} Back to All Company News
          </a>
        </div>
      </div>
    </article>
  `;
}
