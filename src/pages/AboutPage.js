import leadershipData from '../data/leadership.json';
import branchesData from '../data/branches.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';
import { initExpandableToggles } from '../utils/domHelpers.js';

export function renderAboutPage() {
  updateSEO({
    title: 'About Us | Corporate Identity, Board & Nationwide Network | Vitborah Pharmaceuticals',
    description: 'Discover Vitborah Pharmaceutical Company Limited (RC 753571, Incorporated 2008). 16+ years of clinical excellence, executive board leadership, and distribution hubs across Nigeria.',
    canonicalPath: '/about/',
    image: '/company_image/pharmacy.jpeg'
  });

  const milestones = [
    {
      year: '2008',
      title: 'Corporate Incorporation (RC: 753571)',
      desc: 'Officially incorporated on June 16, 2008 by the Corporate Affairs Commission (CAC) in Lagos, Nigeria, establishing ethical pharmaceutical importation and distribution.'
    },
    {
      year: '2012',
      title: 'Therapeutic Portfolio Expansion',
      desc: 'Secured landmark NAFDAC product registrations across essential antibacterial and antimalarial categories including Boraflox 500 Ciprofloxacin and Staxim Cefuroxime.'
    },
    {
      year: '2017',
      title: 'Hospital Sterile Injectable Line',
      desc: 'Partnered with international WHO-GMP manufacturing plants to introduce Boracef Ceftriaxone 1g and Vitboter Artemether injectables for intensive clinical care.'
    },
    {
      year: '2021',
      title: 'Ibeju-Lekki Central Warehousing Hub',
      desc: 'Commissioned expanded central warehousing at No. 2, Olori Kudrat Elegushi Street, Awoyaya, Ibeju-Lekki, boosting cold-chain capacity.'
    },
    {
      year: '2024',
      title: 'Formalization of Vitborah Foundation',
      desc: 'Formalized corporate social responsibility outreach into the Vitborah Foundation, delivering free community health screenings and essential treatments.'
    },
    {
      year: '2026',
      title: 'New AGE Nutraceutical Portfolio Launch',
      desc: 'Unveiled the New AGE dietary supplement line, providing certified formulations including Berberine 600mg, Omega-3, and Magnesium Glycinate.'
    }
  ];

  const { boardMembers } = leadershipData;

  return `
    <!-- Hero Banner: Full-bleed board members image with semi-transparent overlay -->
    <div class="about-hero-banner">
      <!-- Background image -->
      <div class="about-hero-bg">
        <img
          src="/company_image/boarmembers.jpeg"
          alt="Vitborah Board Members and Leadership Team"
          class="about-hero-bg-img"
        />
      </div>
      <!-- Semi-transparent overlay -->
      <div class="about-hero-overlay"></div>
      <div class="container about-hero-content">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">About Us</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Our Corporate Heritage &amp; Operations
        </span>
        <h1 class="about-hero-title">
          Committed to Clinical Excellence &amp; Healthcare Access in Nigeria
        </h1>
        <p class="about-hero-desc">
          Since 2008, Vitborah Pharmaceutical Company Limited (RC: 753571) has connected international pharmaceutical manufacturing standards with Nigerian clinical needs, supplying verified prescription medicines and nutritional supplements nationwide.
        </p>

        <!-- Quick Anchor Jump Bar -->
        <div class="about-anchor-bar">
          <a href="#overview" class="anchor-chip">Overview</a>
          <a href="#principles" class="anchor-chip">Mission &amp; Values</a>
          <a href="#timeline" class="anchor-chip">16-Year Heritage</a>
          <a href="#leadership" class="anchor-chip">Board &amp; Leadership</a>
          <a href="#branches" class="anchor-chip">Branches &amp; Depots</a>
        </div>
      </div>
    </div>

    <!-- Section 1: Board Members & Company Leadership -->
    <section class="section" id="overview">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center;" class="hero-grid">
          <div>
            <span class="section-tag">Board Members & Leadership</span>
            <h2 style="font-size: clamp(1.75rem, 3vw, 2.25rem); margin-bottom: 1rem;">
              Governed by Experienced Board Members & Global Partners
            </h2>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 1rem;">
              <strong>Vitborah Pharmaceutical Company Limited</strong> (CAC Registration RC: 753571, incorporated June 16, 2008) is guided by an executive Board of Directors in strategic alignment with international pharmaceutical manufacturing partners.
            </p>

            <div id="overview-extended" class="mobile-expandable-content">
              <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1rem;">
                Under the leadership of Mr. Okechukwu Vitus Agada (CEO) and our executive board, Vitborah operates corporate headquarters in Awoyaya, Ibeju-Lekki, Lagos, with nationwide distribution depots spanning Mushin, Abuja, Kaduna, Onitsha, and Aba, serving hundreds of hospitals, clinics, and pharmacies across all 36 states and the FCT.
              </p>
              <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 1rem;">
                Every batch imported under our stewardship is subject to verified certificates of analysis (CoA), temperature-controlled cold-chain logistics, and full NAFDAC compliance.
              </p>
            </div>

            <button type="button" class="btn btn-outline btn-sm mobile-expand-btn" data-toggle-expand="overview-extended" data-more-text="Read Full Overview" data-less-text="Show Less">
              Read Full Overview
            </button>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 1.5rem; margin-bottom: 1.5rem;">
              <div style="background-color: var(--color-bg-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                <div style="font-family: var(--font-heading); font-size: 1.65rem; font-weight: 800; color: var(--color-primary); line-height: 1; margin-bottom: 0.25rem;">16+</div>
                <div style="font-size: 0.8rem; color: var(--color-text-muted);">Years Continuous Operation</div>
              </div>
              <div style="background-color: var(--color-bg-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                <div style="font-family: var(--font-heading); font-size: 1.65rem; font-weight: 800; color: var(--color-primary); line-height: 1; margin-bottom: 0.25rem;">100%</div>
                <div style="font-size: 0.8rem; color: var(--color-text-muted);">NAFDAC Verified Portfolio</div>
              </div>
            </div>
          </div>

          <div class="responsive-img-frame" style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-lg); border: 1px solid var(--color-border);">
            <img src="/company_image/boarmembers.jpeg" alt="Vitborah Board Members and Manufacturing Partners" style="width: 100%; max-height: 440px; object-fit: cover;" loading="lazy" />
            <div style="background: var(--color-bg-subtle); padding: 0.75rem 1rem; font-size: 0.85rem; color: var(--color-text-muted); border-top: 1px solid var(--color-border); text-align: center;">
              <strong>Vitborah Board Members:</strong> Executive leadership and international technical manufacturing partners collaborating on healthcare solutions.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Mission, Vision & Values -->
    <section class="section section-alt" id="principles">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Institutional Principles</span>
          <h2 class="section-title">Mission, Vision & Core Values</h2>
          <p class="section-desc">
            The ethical bedrock that shapes every batch import, quality control test, and distribution relationship.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div class="card" style="padding: 1.75rem; border-top: 4px solid var(--color-primary);">
            <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: var(--color-primary-surface); color: var(--color-primary); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              ${icon('award', 'w-5 h-5')}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Our Mission</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
              To provide Nigerian clinicians, hospitals, and communities with premium, WHO-GMP certified therapeutic medicines and evidence-based nutraceuticals that guarantee safety, clinical efficacy, and genuine affordability.
            </p>
          </div>

          <div class="card" style="padding: 1.75rem; border-top: 4px solid var(--color-accent);">
            <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: #fef2f2; color: var(--color-accent); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              ${icon('shieldCheck', 'w-5 h-5')}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Our Vision</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
              To be West Africa's most respected pharmaceutical brand, recognized for uncompromising quality assurance, supply chain reliability, and philanthropic community healthcare transformation.
            </p>
          </div>

          <div class="card" style="padding: 1.75rem; border-top: 4px solid #1d4ed8;">
            <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: #eff6ff; color: #1d4ed8; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
              ${icon('heartPulse', 'w-5 h-5')}
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Core Values</h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.875rem; color: var(--color-text-muted);">
              <li><strong style="color: var(--color-text-main); font-weight: 600;">â€¢ Clinical Integrity:</strong> Absolute zero tolerance for sub-potent or unverified medicines.</li>
              <li><strong style="color: var(--color-text-main); font-weight: 600;">â€¢ Strict Compliance:</strong> 100% adherence to PCN and NAFDAC statutory regulations.</li>
              <li><strong style="color: var(--color-text-main); font-weight: 600;">â€¢ Cold-Chain Care:</strong> Meticulous temperature monitoring for delicate formulations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Company Timeline -->
    <section class="section" id="timeline">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Historical Milestones</span>
          <h2 class="section-title">Our Growth & Heritage Timeline</h2>
          <p class="section-desc">
            Documented progression from our founding in 2008 to today's multi-depot national distribution network.
          </p>
        </div>

        <div style="max-width: 820px; margin: 0 auto; position: relative;">
          <!-- Timeline Vertical Line -->
          <div style="position: absolute; left: 1.25rem; top: 1rem; bottom: 1rem; width: 2px; background: var(--color-border);"></div>

          <div style="display: flex; flex-direction: column; gap: 1.75rem;">
            ${milestones.slice(0, 3).map((m, idx) => `
              <div style="display: flex; gap: 1.5rem; position: relative;">
                <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-full); background: var(--color-primary); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800; flex-shrink: 0; box-shadow: 0 0 0 4px #ffffff; z-index: 2;">
                  ${idx + 1}
                </div>
                <div class="card" style="padding: 1.25rem; flex-grow: 1; background: #ffffff;">
                  <span class="badge badge-green" style="margin-bottom: 0.35rem;">${m.year}</span>
                  <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem; color: var(--color-text-main);">${m.title}</h3>
                  <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin: 0;">${m.desc}</p>
                </div>
              </div>
            `).join('')}

            <div id="timeline-extended" class="mobile-expandable-content" style="display: flex; flex-direction: column; gap: 1.75rem;">
              ${milestones.slice(3).map((m, idx) => `
                <div style="display: flex; gap: 1.5rem; position: relative;">
                  <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-full); background: var(--color-primary); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800; flex-shrink: 0; box-shadow: 0 0 0 4px #ffffff; z-index: 2;">
                    ${idx + 4}
                  </div>
                  <div class="card" style="padding: 1.25rem; flex-grow: 1; background: #ffffff;">
                    <span class="badge badge-green" style="margin-bottom: 0.35rem;">${m.year}</span>
                    <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem; color: var(--color-text-main);">${m.title}</h3>
                    <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5; margin: 0;">${m.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <div style="text-align: center; margin-top: 0.5rem;">
              <button type="button" class="btn btn-outline btn-sm mobile-expand-btn" data-toggle-expand="timeline-extended" data-more-text="View Complete 16-Year Timeline" data-less-text="Show Fewer Milestones">
                View Complete 16-Year Timeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Board of Directors & Leadership (Compact Cards with Round Avatars) -->
    <section class="section section-alt" id="leadership">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-green" style="margin-bottom: 0.5rem;">Corporate Governance</span>
          <h2 class="section-title">Board of Directors & Leadership</h2>
          <p class="section-desc">
            Experienced pharmaceutical and executive governance steering clinical integrity, regulatory compliance, and nationwide distribution.
          </p>
        </div>

        <div class="leadership-grid-compact" style="max-width: 1040px; margin: 0 auto;">
          ${boardMembers.map(member => {
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
                    <span class="badge ${member.type === 'executive' ? 'badge-green' : 'badge-neutral'}" style="font-size: 0.725rem; display: inline-block;">
                      ${member.type === 'executive' ? 'Executive Director' : 'Non-Executive'}
                    </span>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>

    <!-- Section 5: Operational Branches & Depots (Small, Simple Cards) -->
    <section class="section" id="branches">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-blue" style="margin-bottom: 0.5rem;">National Network</span>
          <h2 class="section-title">Operational Branches & Distribution Hubs</h2>
          <p class="section-desc">
            Serving teaching hospitals, clinics, and wholesale distributors through strategically positioned hubs across Nigeria.
          </p>
        </div>

        <div class="branches-grid-compact" style="max-width: 1100px; margin: 0 auto;">
          ${branchesData.map(branch => `
            <div class="branch-card-compact ${branch.isHeadquarters ? 'is-hq' : 'is-depot'}">
              <span class="branch-compact-badge" style="color: ${branch.isHeadquarters ? 'var(--color-primary)' : '#0284c7'};">
                ${branch.isHeadquarters ? 'National Headquarters' : 'Distribution Hub'}
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
      </div>
    </section>

    <!-- Navigation CTA Bar -->
    <div style="background-color: #074824; color: #ffffff; padding: 3rem 0; text-align: center;">
      <div class="container" style="max-width: 720px;">
        <h3 style="color: #ffffff; font-size: 1.75rem; margin-bottom: 0.75rem;">Partner With Vitborah Pharmaceuticals</h3>
        <p style="color: #d1fae5; font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;">
          Connect directly with our headquarters or depot dispatch managers for hospital supply contracts, certified distribution, or institutional healthcare partnership.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/products/therapeutic/" class="btn btn-primary" style="background: #ffffff; color: var(--color-primary-dark) !important; font-weight: 700;">
            Browse Medicine Catalog
          </a>
          <a href="/contact/" class="btn btn-outline" style="border-color: #ffffff; color: #ffffff !important;">
            Contact Headquarters
          </a>
        </div>
      </div>
    </div>
  `;
}

export function initAboutPage() {
  initExpandableToggles();
}
