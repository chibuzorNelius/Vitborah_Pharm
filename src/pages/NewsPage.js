import newsArticles from '../data/news.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderNewsPage() {
  updateSEO({
    title: 'Company News & Corporate Announcements | Vitborah Pharmaceuticals',
    description: 'Official announcements, cold-chain distribution updates, regulatory milestones, and Vitborah Foundation outreach reports from Vitborah Pharmaceutical Company Limited.',
    canonicalPath: '/news/',
    image: '/company_image/pharmacy.jpeg'
  });

  const featured = newsArticles[0];
  const others = newsArticles.slice(1);

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">News & Announcements</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Press & Corporate Dispatch
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 1rem;">
          Company News & Announcements
        </h1>
        <p style="color: #d1fae5; font-size: 1.15rem; max-width: 760px; line-height: 1.65; margin: 0;">
          Read verified reports on our regulatory achievements, cold-chain facility updates, healthcare distribution initiatives, and community medical missions.
        </p>
      </div>
    </div>

    <!-- Featured News Story -->
    <section class="section" style="padding-bottom: 2rem;">
      <div class="container">
        <div class="card" style="display: grid; grid-template-columns: 1fr; overflow: hidden; border: 1px solid var(--color-border); box-shadow: var(--shadow-lg);" class="hero-grid">
          <div style="display: grid; grid-template-columns: 1fr; gap: 0;" class="hero-grid">
            <div style="height: 380px; overflow: hidden; background-color: var(--color-bg-subtle);">
              <img 
                src="${featured.featuredImage || '/company_image/pharmacy.jpeg'}" 
                alt="${featured.title}" 
                style="width: 100%; height: 100%; object-fit: cover;"
              />
            </div>
            <div style="padding: 2.5rem; display: flex; flex-direction: column; justify-content: center;">
              <div style="display: flex; gap: 0.75rem; align-items: center; margin-bottom: 0.75rem; font-size: 0.85rem; color: var(--color-text-muted);">
                <span class="badge badge-green">${featured.category}</span>
                <span>${featured.date}</span>
                <span>• ${featured.author}</span>
              </div>
              <h2 style="font-size: 1.85rem; line-height: 1.25; margin-bottom: 1rem; color: var(--color-text-main);">
                <a href="/news/${featured.slug}/" style="color: inherit;">${featured.title}</a>
              </h2>
              <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.6; margin-bottom: 1.5rem;">
                ${featured.summary}
              </p>
              <div>
                <a href="/news/${featured.slug}/" class="btn btn-primary">
                  Read Full Article ${icon('arrowRight', 'w-4 h-4')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Other News Articles Grid -->
    <section class="section" style="padding-top: 1rem;">
      <div class="container">
        <h2 style="font-size: 1.75rem; margin-bottom: 2rem;">Recent Publications</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
          ${others.map(article => `
            <article class="card card-hover" style="display: flex; flex-direction: column;">
              <div style="height: 220px; overflow: hidden; background-color: var(--color-bg-subtle);">
                <img 
                  src="${article.featuredImage || '/company_image/pharmacy.jpeg'}" 
                  alt="${article.title}" 
                  style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
                  onmouseover="this.style.transform='scale(1.05)'"
                  onmouseout="this.style.transform='scale(1)'"
                />
              </div>
              <div style="padding: 1.75rem; display: flex; flex-direction: column; flex-grow: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem; font-size: 0.8rem; color: var(--color-text-muted);">
                  <span class="badge badge-green">${article.category}</span>
                  <span>${article.date}</span>
                </div>
                <h3 style="font-size: 1.2rem; line-height: 1.35; margin-bottom: 0.75rem; color: var(--color-text-main);">
                  <a href="/news/${article.slug}/" style="color: inherit;">${article.title}</a>
                </h3>
                <p style="font-size: 0.925rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 1.25rem; flex-grow: 1;">
                  ${article.summary}
                </p>
                <div style="border-top: 1px solid var(--color-border-subtle); padding-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                  <span style="font-size: 0.8rem; color: var(--color-text-muted);">${article.author}</span>
                  <a href="/news/${article.slug}/" style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary); display: inline-flex; align-items: center; gap: 0.35rem;">
                    Read Article ${icon('arrowRight', 'w-3.5 h-3.5')}
                  </a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
