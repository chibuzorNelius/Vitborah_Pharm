import therapeuticProducts from '../data/therapeuticProducts.json';
import supplements from '../data/supplements.json';
import newsArticles from '../data/news.json';
import leadershipData from '../data/leadership.json';
import branchesData from '../data/branches.json';
import { icon } from '../utils/icons.js';
import { renderProductCarousel, initCarouselListeners } from '../components/ProductCarousel.js';
import { updateSEO } from '../utils/seo.js';

let heroTimer = null;
let currentHeroIndex = 0;

export function renderHomePage() {
  updateSEO({
    title: 'Vitborah Pharmaceutical Company Limited | Healthcare & Therapeutic Solutions',
    description: 'Official corporate portal of Vitborah Pharmaceutical Company Limited (RC 753571). Delivering NAFDAC-certified therapeutic medicines, New AGE dietary supplements, and nationwide hospital supply across Nigeria.',
    canonicalPath: '/',
    image: '/company_image/pharmacy.jpeg'
  });

  const featuredTherapeutics = therapeuticProducts.filter(p => p.featured);
  const latestNews = newsArticles.slice(0, 3);
  const ceo = leadershipData.boardMembers[0];

  // Helper to render scroller card with exact route
  const renderScrollerCard = (item, isSupplement = false) => {
    const url = item.route || `/products/${item.id || item.slug}/`;
    const image = item.imagePath || item.image || (isSupplement ? '/public/supplements_image/berberine.jpeg' : '/public/products_image/artborah.jpeg');
    const title = item.brandName || item.name;
    const badge = item.category || (isSupplement ? 'New AGE' : 'Prescription');
    const desc = item.shortDescription || item.description || item.indications || '';

    return `
      <a href="${url}" class="scroller-card" title="View details for ${title}">
        <div class="scroller-card-img-wrap">
          <img src="${image}" alt="${title}" loading="lazy" />
        </div>
        <div class="scroller-card-body">
          <span class="scroller-card-badge">${badge}</span>
          <h3 class="scroller-card-title">${title}</h3>
          <p class="scroller-card-desc">${desc}</p>
          <span class="scroller-card-action">
            Product Details ${icon('chevronRight', 'w-3.5 h-3.5')}
          </span>
        </div>
      </a>
    `;
  };

  // Duplicate arrays to achieve seamless infinite marquee loop
  const therapeuticMarqueeItems = [...therapeuticProducts, ...therapeuticProducts];
  const supplementMarqueeItems = [...supplements, ...supplements];

  return `
    <!-- 1. HERO SECTION: Auto-sliding Carousel (Changes every 3s, linear-gradient overlay, infinite loop) -->
    <section class="hero-carousel-container" id="hero-carousel" aria-label="Vitborah Key Portfolios">
      <!-- Slide 1: Therapeutic Medicine (Image of man / pharmacy) -->
      <div class="hero-slide active" style="background-image: url('/company_image/pharmacy.jpeg');" data-index="0">
        <div class="hero-slide-overlay"></div>
        <div class="container" style="position: relative; z-index: 3; width: 100%;">
          <div class="hero-slide-content">
            <div class="hero-slide-badge">
              <span>${icon('shieldCheck', 'w-4 h-4')}</span>
              <span>100% NAFDAC Certified • WHO-GMP Formulations</span>
            </div>
            <h1 class="hero-slide-title">
              Advanced Therapeutic Medicine for Clinical Precision
            </h1>
            <p class="hero-slide-desc">
              Essential injectable cephalosporins, first-line ACT antimalarials, oral broad-spectrum antibiotics, and sterile ophthalmic drops supplying teaching hospitals and community pharmacies across Nigeria.
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
              <a href="/products/therapeutic/" class="btn btn-primary" style="font-weight: 700; background-color: #22c55e; border-color: #22c55e; color: #ffffff;">
                Explore Therapeutic Portfolio ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="/about/" class="btn btn-outline" style="border-color: rgba(255,255,255,0.7); color: #ffffff;">
                Clinical Integrity & Quality
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 2: New AGE Supplement (Uploaded banner) -->
      <div class="hero-slide" style="background-image: url('/company_image/newAge bannner.jpeg');" data-index="1">
        <div class="hero-slide-overlay"></div>
        <div class="container" style="position: relative; z-index: 3; width: 100%;">
          <div class="hero-slide-content">
            <div class="hero-slide-badge" style="background: rgba(34, 197, 94, 0.25); border-color: rgba(34, 197, 94, 0.4); color: #a7f3d0;">
              <span>${icon('award', 'w-4 h-4')}</span>
              <span>New AGE Dietary Supplements • Preventive Wellness</span>
            </div>
            <h2 class="hero-slide-title">
              Discover the New AGE Supplement Portfolio
            </h2>
            <p class="hero-slide-desc">
              Scientifically calibrated nutraceuticals formulated to support metabolic regulation, cardiovascular vitality, and immune defense. Featuring premium Berberine 600mg, Triple Strength Omega-3, and Magnesium Glycinate.
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
              <a href="/products/supplements/" class="btn btn-primary" style="font-weight: 700; background-color: #22c55e; border-color: #22c55e; color: #ffffff;">
                View All 13 Supplements ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="/work-with-us/" class="btn btn-outline" style="border-color: rgba(255,255,255,0.7); color: #ffffff;">
                Distributor Inquiries
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Slide 3: Charity Foundation (Charity outreach image) -->
      <div class="hero-slide" style="background-image: url('/company_image/charity.jpeg');" data-index="2">
        <div class="hero-slide-overlay"></div>
        <div class="container" style="position: relative; z-index: 3; width: 100%;">
          <div class="hero-slide-content">
            <div class="hero-slide-badge" style="background: rgba(59, 130, 246, 0.25); border-color: rgba(59, 130, 246, 0.4); color: #bfdbfe;">
              <span>${icon('heartPulse', 'w-4 h-4')}</span>
              <span>The Vitborah Foundation • Community Healthcare Outreach</span>
            </div>
            <h2 class="hero-slide-title">
              Caring for Underserved Communities Across Nigeria
            </h2>
            <p class="hero-slide-desc">
              Free clinical screenings, blood pressure diagnostics, blood glucose checks, and life-saving medications delivered directly to vulnerable families and rural communities as part of our social mission.
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
              <a href="/charity/" class="btn btn-primary" style="font-weight: 700; background-color: #22c55e; border-color: #22c55e; color: #ffffff;">
                Explore Foundation Mission ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="/work-with-us/" class="btn btn-outline" style="border-color: rgba(255,255,255,0.7); color: #ffffff;">
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrow Controls -->
      <button class="hero-nav-arrow hero-nav-prev" id="hero-prev-btn" aria-label="Previous Slide">
        ${icon('chevronLeft', 'w-5 h-5')}
      </button>
      <button class="hero-nav-arrow hero-nav-next" id="hero-next-btn" aria-label="Next Slide">
        ${icon('chevronRight', 'w-5 h-5')}
      </button>

      <!-- Indicators -->
      <div class="hero-indicators" id="hero-indicators">
        <button class="hero-indicator-dot active" data-slide="0" aria-label="Slide 1"></button>
        <button class="hero-indicator-dot" data-slide="1" aria-label="Slide 2"></button>
        <button class="hero-indicator-dot" data-slide="2" aria-label="Slide 3"></button>
      </div>
    </section>

    <!-- Credentials Bar (Retained) -->
    <div class="credentials-bar">
      <div class="container">
        <div class="credentials-grid">
          <div class="credential-item">
            <div class="credential-icon">${icon('shieldCheck', 'w-6 h-6')}</div>
            <div>
              <div class="credential-title">CAC RC: 753571</div>
              <div class="credential-desc">Incorporated June 2008 in Lagos, Nigeria</div>
            </div>
          </div>
          <div class="credential-item">
            <div class="credential-icon">${icon('award', 'w-6 h-6')}</div>
            <div>
              <div class="credential-title">100% NAFDAC Certified</div>
              <div class="credential-desc">Every product batch rigorously tested & approved</div>
            </div>
          </div>
          <div class="credential-item">
            <div class="credential-icon">${icon('building', 'w-6 h-6')}</div>
            <div>
              <div class="credential-title">Nationwide Hubs</div>
              <div class="credential-desc">Lagos HQ, Mushin, Abuja, Kaduna, Onitsha & Aba</div>
            </div>
          </div>
          <div class="credential-item">
            <div class="credential-icon">${icon('heartPulse', 'w-6 h-6')}</div>
            <div>
              <div class="credential-title">Community Impact</div>
              <div class="credential-desc">Vitborah Foundation free medical outreach</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. THERAPEUTIC MEDICINE SECTION: Continuous Infinite Loop Scrolling LEFT -->
    <section class="scroller-section" style="background-color: var(--color-bg); padding-top: 3.5rem;">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-green" style="margin-bottom: 0.5rem;">Prescription Therapeutics</span>
            <h2 class="section-title" style="margin-bottom: 0.25rem;">Therapeutic Medicine Showcase</h2>
            <p class="section-desc" style="margin: 0; text-align: left;">
              NAFDAC-regulated prescription antibiotics, antimalarials, ophthalmic drops, and hospital-grade injectables. (Hover card to pause, click to view details)
            </p>
          </div>
          <a href="/products/therapeutic/" class="btn btn-outline btn-sm">
            Browse All 17 Medicines ${icon('arrowRight', 'w-3.5 h-3.5')}
          </a>
        </div>
      </div>

      <!-- Scroller Track: Infinite Scroll Left -->
      <div class="scroller-wrapper" aria-label="Therapeutic medicines scrolling left">
        <div class="scroller-track">
          ${therapeuticMarqueeItems.map(item => renderScrollerCard(item, false)).join('')}
        </div>
      </div>
    </section>

    <!-- 3. NEW AGE SUPPLEMENTS SECTION: Continuous Infinite Loop Scrolling RIGHT -->
    <section class="scroller-section" style="background-color: var(--color-bg-subtle);">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-blue" style="margin-bottom: 0.5rem;">New AGE Nutraceuticals</span>
            <h2 class="section-title" style="margin-bottom: 0.25rem;">New Age Dietary Supplements</h2>
            <p class="section-desc" style="margin: 0; text-align: left;">
              Daily health optimization, metabolic support, cardiovascular defense, and essential joint formulas. (Continuous rightward flow, pause on hover)
            </p>
          </div>
          <a href="/products/supplements/" class="btn btn-outline btn-sm">
            Browse All 13 Supplements ${icon('arrowRight', 'w-3.5 h-3.5')}
          </a>
        </div>
      </div>

      <!-- Scroller Track: Infinite Scroll Right -->
      <div class="scroller-wrapper" aria-label="Supplements scrolling right">
        <div class="scroller-track-right">
          ${supplementMarqueeItems.map(item => renderScrollerCard(item, true)).join('')}
        </div>
      </div>
    </section>

    <!-- 4. FLAGSHIP THERAPY FORMATION CAROUSEL (Placed after both scrollers as requested) -->
    <section class="section">
      <div class="container">
        ${renderProductCarousel(featuredTherapeutics, "Flagship Therapeutic Formulations", "Clinically formulated antibiotics, antimalarials, ophthalmic drops, and electrolyte rehydration solutions.")}
      </div>
    </section>

    <!-- 5. CORE THERAPEUTIC FOCUS AREAS (Retained Essential Section) -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Clinical Focus</span>
          <h2 class="section-title">Therapeutic Areas of Expertise</h2>
          <p class="section-desc">
            Vitborah focuses on key disease burdens in Nigeria, ensuring uninterrupted hospital and pharmacy supply of essential medicines.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 1.75rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: var(--color-primary-surface); color: var(--color-primary); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              ${icon('pill', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Anti-Infective & Antibacterial</h3>
            <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 1rem;">
              Hospital-grade injectable cephalosporins (Boracef), oral ciprofloxacin (Boraflox 500), cefuroxime (Staxim), and lincomycin capsules for targeted infection management.
            </p>
            <a href="/products/therapeutic/" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
              View Antibiotics ${icon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #fef2f2; color: var(--color-accent); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              ${icon('heartPulse', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Antimalarial ACTs & Injectables</h3>
            <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 1rem;">
              First-line Artemisinin combination therapy (Artborah Tablets) and emergency parenteral Artemether (Vitboter) adhering to WHO treatment guidelines.
            </p>
            <a href="/products/therapeutic/" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
              View Antimalarials ${icon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #eff6ff; color: #1d4ed8; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              ${icon('shieldCheck', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Ophthalmic & Specialized Care</h3>
            <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 1rem;">
              Sterile ophthalmic beta-blocker drops (Timolol BP 0.5%) for the management of elevated intraocular pressure in chronic glaucoma.
            </p>
            <a href="/products/timolol-eye-drops/" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
              View Timolol Drops ${icon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #f0fdf4; color: #047857; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              ${icon('award', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">Electrolytes & Convalescence</h3>
            <p style="font-size: 0.875rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 1rem;">
              WHO-standard Oral Rehydration Salts (ORS orange flavour), fortified Vibiron iron syrup, and convalescent appetite stimulants (Appedor).
            </p>
            <a href="/products/therapeutic/" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
              View Nutritional Care ${icon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. CORPORATE FACILITY OVERVIEW (Retained) -->
    <section class="section" style="position: relative; overflow: hidden;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center;">
          <div style="max-width: 840px;">
            <span class="section-tag">Corporate Identity</span>
            <h2 style="font-size: clamp(1.8rem, 3vw, 2.35rem); margin-bottom: 1.25rem;">
              Dedicated to Trust, Clinical Quality, and Uninterrupted Healthcare Supply
            </h2>
            <p style="font-size: 1rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 1rem;">
              Headquartered along the industrial corridor of Ibeju-Lekki, Lagos, <strong>Vitborah Pharmaceutical Company Limited</strong> operates as a registered corporate importer and nationwide distributor of essential medicines and nutraceuticals.
            </p>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1.75rem;">
              Under the executive stewardship of Mr. Okechukwu Vitus Agada, supported by our pharmaceutical directors and experienced Board of Directors, Vitborah partners with WHO-GMP certified manufacturers globally to guarantee authentic, temperature-regulated, and affordable pharmaceuticals.
            </p>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/about/" class="btn btn-primary">
                About Our History & Vision ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="/about#leadership" class="btn btn-secondary">
                Board & Leadership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. LEADERSHIP PREVIEW: Compact Cards with Round Avatar -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Executive Leadership</span>
          <h2 class="section-title">Governed by Clinical & Commercial Expertise</h2>
          <p class="section-desc">
            Guided by registered pharmacists and seasoned corporate executives dedicated to ethical pharmaceutical practice in Nigeria.
          </p>
        </div>

        <div class="leadership-grid-compact" style="max-width: 980px; margin: 0 auto;">
          ${leadershipData.boardMembers.map(member => {
            const initials = member.name.replace('Pharm.', '').trim().split(' ').map(n => n[0]).slice(0, 2).join('');
            return `
              <div class="leadership-card-compact">
                <div class="leader-avatar-circle">
                  ${member.image ? `<img src="${member.image}" alt="${member.name}" />` : initials}
                </div>
                <h3 class="leader-name">${member.name}</h3>
                <div class="leader-role">${member.role}</div>
                ${member.qualifications ? `<div class="leader-qualifications">${member.qualifications}</div>` : ''}
                <p class="leader-bio-compact">${member.bio}</p>
                <div style="margin-top: auto; padding-top: 0.5rem; width: 100%;">
                  ${member.id === 'vitus-agada' ? `
                    <a href="/leadership/vitus-agada/" class="btn btn-primary btn-sm" style="width: 100%; justify-content: center; font-size: 0.8rem;">
                      CEO Profile & Vision ${icon('arrowRight', 'w-3 h-3')}
                    </a>
                  ` : `
                    <a href="/about#leadership" class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center; font-size: 0.8rem;">
                      Governance Role
                    </a>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>

    <!-- 8. CHARITY FOUNDATION PREVIEW (Retained) -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center;" class="hero-grid">
          <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg);">
            <img src="/company_image/foundationGroup.jpeg" alt="Vitborah Foundation Community Healthcare Group" style="width: 100%; height: 340px; object-fit: cover; object-position: center top;" />
          </div>
          <div>
            <span class="section-tag">Social Responsibility</span>
            <h2 style="font-size: clamp(1.8rem, 3vw, 2.25rem); margin-bottom: 1rem;">The Vitborah Foundation</h2>
            <p style="font-size: 1rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 1rem;">
              Beyond commercial healthcare distribution, the Vitborah Foundation actively brings free health screenings, blood pressure diagnostics, blood glucose testing, and essential medicines to underserved communities in Lagos and rural areas.
            </p>
            <div style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.5rem; font-size: 0.9rem;">
              <div style="display: flex; align-items: center; gap: 0.65rem;">
                <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
                <span>Free maternal and pediatric health screenings</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.65rem;">
                <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
                <span>Complimentary rehydration salts and antimalarial treatments</span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.65rem;">
                <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
                <span>Health awareness and preventive hygiene education</span>
              </div>
            </div>
            <a href="/charity/" class="btn btn-primary">
              Learn More About Our Foundation ${icon('arrowRight', 'w-4 h-4')}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. LATEST NEWS & ANNOUNCEMENTS (Retained) -->
    <section class="section section-alt">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="section-tag">Announcements</span>
            <h2 class="section-title" style="margin-bottom: 0.25rem;">Latest Company News</h2>
            <p class="section-desc" style="margin: 0; text-align: left;">
              Stay informed on regulatory milestones, cold-chain facility updates, and outreach initiatives.
            </p>
          </div>
          <a href="/news/" class="btn btn-outline btn-sm">
            Browse All Articles ${icon('arrowRight', 'w-3.5 h-3.5')}
          </a>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          ${latestNews.map(article => `
            <article class="card card-hover" style="display: flex; flex-direction: column;">
              <div style="height: 180px; overflow: hidden; background-color: var(--color-bg-subtle);">
                <img 
                  src="${article.featuredImage || '/company_image/pharmacy.jpeg'}" 
                  alt="${article.title}" 
                  style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
                  loading="lazy"
                />
              </div>
              <div style="padding: 1.25rem; display: flex; flex-direction: column; flex-grow: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.775rem; color: var(--color-text-muted);">
                  <span class="badge badge-green" style="font-size: 0.7rem;">${article.category}</span>
                  <span>${article.date}</span>
                </div>
                <h3 style="font-size: 1.1rem; line-height: 1.35; margin-bottom: 0.5rem; color: var(--color-text-main);">
                  <a href="/news/${article.slug}/" style="color: inherit;">${article.title}</a>
                </h3>
                <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem; flex-grow: 1;">
                  ${article.summary}
                </p>
                <a href="/news/${article.slug}/" style="font-size: 0.825rem; font-weight: 700; color: var(--color-primary); display: inline-flex; align-items: center; gap: 0.35rem;">
                  Read Full Announcement ${icon('arrowRight', 'w-3.5 h-3.5')}
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- 10. STRATEGIC BRANCHES: Simple Compact Cards (Abuja, Kaduna, Onitsha, Aba, etc.) -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Distribution Infrastructure</span>
          <h2 class="section-title">Strategic Branches & Distribution Hubs</h2>
          <p class="section-desc">
            Directing wholesale distribution and hospital deliveries from central hubs in Lagos and key commercial depots across Nigeria.
          </p>
        </div>

        <div class="branches-grid-compact" style="max-width: 1100px; margin: 0 auto;">
          ${branchesData.slice(0, 6).map(branch => `
            <div class="branch-card-compact ${branch.isHeadquarters ? 'is-hq' : 'is-depot'}">
              <span class="branch-compact-badge" style="color: ${branch.isHeadquarters ? 'var(--color-primary)' : '#0284c7'};">
                ${branch.isHeadquarters ? 'Headquarters' : 'Regional Hub'}
              </span>
              <h3 class="branch-compact-title">${branch.city}</h3>
              <div class="branch-compact-region">${branch.region}</div>
              <p class="branch-compact-address">${branch.address}</p>
              <div class="branch-compact-contact">
                <span>${branch.status}</span>
                <a href="tel:${branch.phone.replace(/[^0-9+]/g, '')}">Call Hub</a>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 2rem;">
          <a href="/about#branches" class="btn btn-secondary btn-sm">
            View All 8 Branches & Contact Details ${icon('arrowRight', 'w-3.5 h-3.5')}
          </a>
        </div>
      </div>
    </section>

    <!-- 11. WORK WITH US / PARTNERSHIP CALL TO ACTION -->
    <section class="section" style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff;">
      <div class="container" style="text-align: center; max-width: 780px;">
        <span class="badge" style="background: rgba(255, 255, 255, 0.2); color: #ffffff; margin-bottom: 1rem;">
          Healthcare Procurement & Distribution
        </span>
        <h2 style="color: #ffffff; font-size: clamp(1.85rem, 3.5vw, 2.5rem); margin-bottom: 1rem;">
          Work With Vitborah Pharmaceuticals
        </h2>
        <p style="color: #d1fae5; font-size: 1rem; line-height: 1.6; margin-bottom: 2rem;">
          Join our nationwide network as an authorized distributor, sales representative, or healthcare partner. We offer certified cold-chain logistics, consistent supply, and regulatory compliance.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/work-with-us/" class="btn btn-primary" style="background-color: #ffffff; color: var(--color-primary-dark) !important; font-weight: 700;">
            Apply to Work With Us ${icon('arrowRight', 'w-4 h-4')}
          </a>
          <a href="/products/therapeutic/" class="btn btn-outline" style="border-color: #ffffff; color: #ffffff !important;">
            Explore Catalog
          </a>
        </div>
      </div>
    </section>
  `;
}

function initHeroCarousel() {
  const container = document.getElementById('hero-carousel');
  if (!container) return;

  const slides = container.querySelectorAll('.hero-slide');
  const dots = container.querySelectorAll('.hero-indicator-dot');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  function goToSlide(index) {
    currentHeroIndex = (index + totalSlides) % totalSlides;
    slides.forEach((slide, i) => {
      if (i === currentHeroIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentHeroIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function startTimer() {
    stopTimer();
    heroTimer = setInterval(() => {
      goToSlide(currentHeroIndex + 1);
    }, 3000); // strictly 3 seconds
  }

  function stopTimer() {
    if (heroTimer) {
      clearInterval(heroTimer);
      heroTimer = null;
    }
  }

  // Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToSlide(currentHeroIndex - 1);
      startTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToSlide(currentHeroIndex + 1);
      startTimer();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIdx = parseInt(dot.getAttribute('data-slide') || '0', 10);
      goToSlide(slideIdx);
      startTimer();
    });
  });

  // Pause on hover or touch
  container.addEventListener('mouseenter', stopTimer);
  container.addEventListener('mouseleave', startTimer);
  container.addEventListener('touchstart', stopTimer, { passive: true });
  container.addEventListener('touchend', startTimer, { passive: true });

  // Start auto-slide immediately
  startTimer();
}

export function initHomePage() {
  initHeroCarousel();
  initCarouselListeners();
}
