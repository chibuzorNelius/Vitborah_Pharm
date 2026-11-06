import therapeuticProducts from '../data/therapeuticProducts.json';
import supplements from '../data/supplements.json';
import newsArticles from '../data/news.json';
import leadershipData from '../data/leadership.json';
import branchesData from '../data/branches.json';
import { icon } from '../utils/icons.js';
import { renderProductCarousel, initCarouselListeners } from '../components/ProductCarousel.js';
import { renderProductCard } from '../components/ProductCard.js';
import { updateSEO } from '../utils/seo.js';

export function renderHomePage() {
  updateSEO({
    title: 'Vitborah Pharmaceutical Company Limited | Healthcare & Therapeutic Solutions',
    description: 'Official corporate portal of Vitborah Pharmaceutical Company Limited (RC 753571). Delivering NAFDAC-certified therapeutic medicines, New AGE dietary supplements, and nationwide hospital supply across Nigeria.',
    canonicalPath: '/',
    image: '/company_image/pharmacy.jpeg'
  });

  const featuredTherapeutics = therapeuticProducts.filter(p => p.featured);
  const topSupplements = supplements.slice(0, 4);
  const latestNews = newsArticles.slice(0, 3);
  const ceo = leadershipData.boardMembers[0];

  return `
    <!-- Hero Section -->
    <section class="hero-wrapper">
      <div class="container">
        <div class="hero-grid">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255, 255, 255, 0.12); padding: 0.4rem 0.9rem; border-radius: var(--radius-full); margin-bottom: 1.5rem; border: 1px solid rgba(255, 255, 255, 0.2);">
              <span style="color: #4ade80;">${icon('shieldCheck', 'w-4 h-4')}</span>
              <span style="font-size: 0.85rem; font-weight: 600; color: #ecfdf5;">RC: 753571 • 16+ Years of Pharmaceutical Integrity</span>
            </div>

            <h1 class="hero-title">
              Advancing Quality Healthcare Across Nigeria
            </h1>

            <p class="hero-subtitle">
              Vitborah Pharmaceutical Company Limited supplies NAFDAC-certified prescription therapeutics, hospital-grade injectables, and the innovative New AGE dietary supplement portfolio to healthcare institutions and families nationwide.
            </p>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
              <a href="/products/therapeutic/" class="btn btn-primary" style="background-color: #ffffff; color: var(--color-primary-dark) !important; font-weight: 700;">
                Therapeutic Medicines ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="/products/supplements/" class="btn btn-outline" style="border-color: #ffffff; color: #ffffff !important;">
                New AGE Supplements
              </a>
              <a href="/contact/" class="btn btn-secondary" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.3); color: #ffffff !important;">
                Wholesale Inquiry
              </a>
            </div>
          </div>

          <!-- Hero Image & Badge -->
          <div class="hero-img-card">
            <img 
              src="/company_image/pharmacy.jpeg" 
              alt="Licensed Pharmacist Dispensing Vitborah Medicines"
              loading="eager"
            />
            <div class="hero-floating-badge">
              <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: var(--color-primary-surface); color: var(--color-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                ${icon('checkCircle', 'w-6 h-6')}
              </div>
              <div>
                <div style="font-weight: 700; font-size: 0.95rem; color: var(--color-text-main);">Clinical Verification</div>
                <div style="font-size: 0.8rem; color: var(--color-text-muted);">NAFDAC Regulated • WHO-GMP Supply</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Credentials Bar -->
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
              <div class="credential-title">3 Distribution Hubs</div>
              <div class="credential-desc">Ibeju-Lekki HQ, Mushin depot, & Abuja liaison</div>
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

    <!-- Featured Medicines Showcase (Carousel) -->
    <section class="section">
      <div class="container">
        ${renderProductCarousel(featuredTherapeutics, "Flagship Therapeutic Formulations", "Clinically formulated antibiotics, antimalarials, ophthalmic drops, and electrolyte rehydration solutions.")}
      </div>
    </section>

    <!-- Core Therapeutic Focus Areas -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Clinical Focus</span>
          <h2 class="section-title">Therapeutic Areas of Expertise</h2>
          <p class="section-desc">
            Vitborah focuses on key disease burdens in Nigeria, ensuring uninterrupted hospital and pharmacy supply of essential medicines.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 2rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: var(--color-primary-surface); color: var(--color-primary); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('pill', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Anti-Infective & Antibacterial</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Hospital-grade injectable cephalosporins (Boracef), oral ciprofloxacin (Boraflox 500), cefuroxime (Staxim), and lincomycin capsules for targeted infection management.
            </p>
            <a href="/products/therapeutic/" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
              View Antibiotics ${icon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #fef2f2; color: var(--color-accent); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('heartPulse', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Antimalarial ACTs & Injectables</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
              First-line Artemisinin combination therapy (Artborah Tablets) and emergency parenteral Artemether (Vitboter) adhering to WHO treatment guidelines.
            </p>
            <a href="/products/therapeutic/" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
              View Antimalarials ${icon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #eff6ff; color: #1d4ed8; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('shieldCheck', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Ophthalmic & Specialized Care</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
              Sterile ophthalmic beta-blocker drops (Timolol BP 0.5%) for the management of elevated intraocular pressure in chronic glaucoma.
            </p>
            <a href="/products/timolol-eye-drops/" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
              View Timolol Drops ${icon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>

          <div class="card" style="padding: 2rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #f0fdf4; color: #047857; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('award', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Electrolytes & Convalescence</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1rem;">
              WHO-standard Oral Rehydration Salts (ORS orange flavour), fortified Vibiron iron syrup, and convalescent appetite stimulants (Appedor).
            </p>
            <a href="/products/therapeutic/" style="font-size: 0.85rem; font-weight: 600; display: inline-flex; align-items: center; gap: 0.25rem;">
              View Nutritional Care ${icon('chevronRight', 'w-3.5 h-3.5')}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- New AGE Supplements Spotlight -->
    <section class="section">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="badge badge-blue" style="margin-bottom: 0.5rem;">Preventive Wellness Portfolio</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 0.25rem;">New AGE Dietary Supplements</h2>
            <p style="color: var(--color-text-muted); font-size: 1rem;">
              Scientifically formulated nutraceuticals supporting metabolic balance, heart health, and daily vitality.
            </p>
          </div>
          <a href="/products/supplements/" class="btn btn-outline">
            View All 13 Supplements ${icon('arrowRight', 'w-4 h-4')}
          </a>
        </div>

        <div class="product-grid">
          ${topSupplements.map(item => renderProductCard(item, true)).join('')}
        </div>
      </div>
    </section>

    <!-- About Vitborah Overview Banner -->
    <section class="section section-alt" style="position: relative; overflow: hidden;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center;">
          <div style="max-width: 840px;">
            <span class="section-tag">Corporate Identity</span>
            <h2 style="font-size: 2.35rem; margin-bottom: 1.25rem;">
              Dedicated to Trust, Clinical Quality, and Uninterrupted Healthcare Supply
            </h2>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.7; margin-bottom: 1rem;">
              Headquartered along the growing industrial corridor of Ibeju-Lekki, Lagos, <strong>Vitborah Pharmaceutical Company Limited</strong> operates as a registered corporate importer and nationwide distributor of essential medicines and nutraceuticals.
            </p>
            <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 2rem;">
              Under the stewardship of Pharmacist Okechukwu Vitus Agada and our experienced Board of Directors, Vitborah partners with WHO-GMP certified manufacturers globally to guarantee authentic, temperature-regulated, and affordable pharmaceuticals for hospitals and clinics across Nigeria.
            </p>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/about/" class="btn btn-primary">
                Learn About Our History & Vision ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="/about#leadership" class="btn btn-secondary">
                Meet the Board of Directors
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Preview (CEO & Board) -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Executive Leadership</span>
          <h2 class="section-title">Governed by Clinical & Commercial Expertise</h2>
          <p class="section-desc">
            Guided by registered pharmacists and seasoned corporate executives dedicated to ethical pharmaceutical practice in Nigeria.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 2rem; max-width: 960px; margin: 0 auto;">
          <div class="card" style="padding: 2.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center;">
            <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
              <div>
                <span class="badge badge-green" style="margin-bottom: 0.5rem;">Founder & Managing Director</span>
                <h3 style="font-size: 1.85rem; margin-bottom: 0.35rem; color: var(--color-text-main);">
                  ${ceo.name}
                </h3>
                <div style="font-size: 0.95rem; font-weight: 600; color: var(--color-primary); margin-bottom: 1rem;">
                  ${ceo.role} • ${ceo.qualifications}
                </div>
                <p style="font-size: 1rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 1.25rem;">
                  "${ceo.executiveMessage}"
                </p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <a href="/about#leadershipvitus-agada/" class="btn btn-primary btn-sm">
                    Read Full CEO Profile ${icon('arrowRight', 'w-3.5 h-3.5')}
                  </a>
                  <a href="/about#leadership" class="btn btn-secondary btn-sm">
                    View Entire Board of Directors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Charity Foundation Preview -->
    <section class="section section-alt">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center;">
          <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center;" class="hero-grid">
            <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg);">
              <img src="/company_image/charity.jpeg" alt="Vitborah Foundation Community Healthcare Outreach" style="width: 100%; height: 380px; object-fit: cover;" />
            </div>
            <div>
              <span class="section-tag">Social Responsibility</span>
              <h2 style="font-size: 2.25rem; margin-bottom: 1rem;">The Vitborah Foundation</h2>
              <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 1rem;">
                Beyond commercial healthcare distribution, the Vitborah Foundation actively brings free health screenings, blood pressure diagnostics, blood glucose testing, and essential medicines to underserved communities in Lagos and rural areas.
              </p>
              <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.75rem; font-size: 0.95rem;">
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
      </div>
    </section>

    <!-- Latest News & Announcements -->
    <section class="section">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="section-tag">Announcements</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 0.25rem;">Latest Company News</h2>
            <p style="color: var(--color-text-muted); font-size: 1rem;">
              Stay informed on regulatory milestones, cold-chain facility updates, and outreach initiatives.
            </p>
          </div>
          <a href="/news/" class="btn btn-outline">
            Browse All Articles ${icon('arrowRight', 'w-4 h-4')}
          </a>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.75rem;">
          ${latestNews.map(article => `
            <article class="card card-hover" style="display: flex; flex-direction: column;">
              <div style="height: 200px; overflow: hidden; background-color: var(--color-bg-subtle);">
                <img 
                  src="${article.featuredImage || '/company_image/pharmacy.jpeg'}" 
                  alt="${article.title}" 
                  style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;"
                  onmouseover="this.style.transform='scale(1.05)'"
                  onmouseout="this.style.transform='scale(1)'"
                />
              </div>
              <div style="padding: 1.5rem; display: flex; flex-direction: column; flex-grow: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.65rem; font-size: 0.8rem; color: var(--color-text-muted);">
                  <span class="badge badge-green">${article.category}</span>
                  <span>${article.date}</span>
                </div>
                <h3 style="font-size: 1.15rem; line-height: 1.35; margin-bottom: 0.65rem; color: var(--color-text-main);">
                  <a href="/news/${article.slug}/" style="color: inherit;">${article.title}</a>
                </h3>
                <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex-grow: 1;">
                  ${article.summary}
                </p>
                <a href="/news/${article.slug}/" style="font-size: 0.85rem; font-weight: 700; color: var(--color-primary); display: inline-flex; align-items: center; gap: 0.35rem;">
                  Read Full Announcement ${icon('arrowRight', 'w-3.5 h-3.5')}
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Branch Network Preview -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Distribution Infrastructure</span>
          <h2 class="section-title">Strategic Branches & Depots</h2>
          <p class="section-desc">
            Directing wholesale distribution and hospital deliveries from central hubs in Lagos and regional liaison across Nigeria.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          ${branchesData.map(branch => `
            <div class="card" style="padding: 2rem; display: flex; flex-direction: column;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <span class="badge ${branch.isHeadquarters ? 'badge-green' : 'badge-neutral'}">
                  ${branch.isHeadquarters ? 'Corporate Headquarters' : 'Distribution Depot'}
                </span>
                <span style="font-size: 0.75rem; color: var(--color-text-muted); font-weight: 600;">${branch.status}</span>
              </div>
              <h3 style="font-size: 1.25rem; margin-bottom: 0.75rem;">${branch.name}</h3>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 1.25rem; flex-grow: 1;">
                ${icon('mapPin', 'w-4 h-4')} ${branch.address}
              </p>
              <div style="border-top: 1px solid var(--color-border-subtle); padding-top: 1rem; font-size: 0.85rem; display: flex; flex-direction: column; gap: 0.4rem;">
                <div><strong>Phone:</strong> <a href="tel:${branch.phone.replace(/[^0-9+]/g, '')}">${branch.phone}</a></div>
                <div><strong>Email:</strong> <a href="mailto:${branch.email}">${branch.email}</a></div>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="text-align: center; margin-top: 2.5rem;">
          <a href="/about#branches" class="btn btn-secondary">
            View Complete Branch Specifications & Logistics ${icon('arrowRight', 'w-4 h-4')}
          </a>
        </div>
      </div>
    </section>

    <!-- Institutional Partners / Call to Action -->
    <section class="section" style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff;">
      <div class="container" style="text-align: center; max-width: 820px;">
        <span class="badge" style="background: rgba(255, 255, 255, 0.2); color: #ffffff; margin-bottom: 1rem;">
          Healthcare Provider Procurement
        </span>
        <h2 style="color: #ffffff; font-size: clamp(2rem, 4vw, 2.75rem); margin-bottom: 1rem;">
          Partner With Vitborah for Reliable Pharmaceutical Supply
        </h2>
        <p style="color: #d1fae5; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem;">
          Whether you are a teaching hospital, private clinic consortium, or authorized pharmaceutical distributor, our supply team ensures steady stock, certified cold-chain transit, and compliant documentation.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/contact/" class="btn btn-primary" style="background-color: #ffffff; color: var(--color-primary-dark) !important; font-weight: 700;">
            Initiate Distributor Application
          </a>
          <a href="/work-with-us/" class="btn btn-outline" style="border-color: #ffffff; color: #ffffff !important;">
            Careers & Work With Us
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initHomePage() {
  initCarouselListeners();
}

