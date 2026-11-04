import leadershipData from '../data/leadership.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderLeadershipPage() {
  updateSEO({
    title: 'Board of Directors & Executive Leadership | Vitborah Pharmaceuticals',
    description: 'Meet the Board of Directors of Vitborah Pharmaceutical Company Limited. Led by Pharmacist Okechukwu Vitus Agada (MD/CEO), steering clinical excellence, corporate governance, and ethical distribution in Nigeria.',
    canonicalPath: '/leadership/',
    image: '/company_image/pharmacy.jpeg'
  });

  const { boardMembers } = leadershipData;

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Board & Leadership</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Corporate Governance
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 1rem;">
          Board of Directors
        </h1>
        <p style="color: #d1fae5; font-size: 1.15rem; max-width: 760px; line-height: 1.65; margin: 0;">
          Our Board of Directors provides strategic oversight, clinical stewardship, and statutory corporate governance, ensuring that Vitborah continues to fulfill its mission of delivering safe, accessible healthcare throughout Nigeria.
        </p>
      </div>
    </div>

    <!-- Governance Intro -->
    <section class="section" style="padding-bottom: 1rem;">
      <div class="container">
        <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 2rem; max-width: 960px; margin: 0 auto; display: flex; gap: 1.25rem; align-items: flex-start;">
          <span style="color: var(--color-primary); flex-shrink: 0; margin-top: 4px;">${icon('shieldCheck', 'w-6 h-6')}</span>
          <div>
            <h3 style="font-size: 1.15rem; margin-bottom: 0.35rem; color: var(--color-text-main);">Statutory Corporate Governance Structure</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
              In accordance with Nigerian Companies and Allied Matters Act (CAMA) standards and Pharmacists Council of Nigeria (PCN) statutory regulations, Vitborah maintains strict operational boundaries, clinical audits, and financial reporting.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Cards Grid -->
    <section class="section">
      <div class="container">
        <div style="display: flex; flex-direction: column; gap: 3rem; max-width: 1040px; margin: 0 auto;">
          ${boardMembers.map(member => `
            <article class="card" style="padding: 2.5rem; display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: center;" class="hero-grid">
              <div style="display: grid; grid-template-columns: 1fr; gap: 2rem;">
                <div style="display: flex; gap: 1.75rem; flex-direction: column;" class="leadership-content">
                  <div>
                    <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
                      <span class="badge ${member.type === 'executive' ? 'badge-green' : 'badge-neutral'}">
                        ${member.type === 'executive' ? 'Executive Director' : 'Non-Executive Director'}
                      </span>
                      <span class="badge badge-neutral">${member.tenure}</span>
                    </div>

                    <h2 style="font-size: 1.85rem; margin-bottom: 0.25rem; color: var(--color-text-main);">
                      ${member.name}
                    </h2>

                    <div style="font-size: 1rem; font-weight: 700; color: var(--color-primary); margin-bottom: 1.25rem;">
                      ${member.role}
                    </div>

                    <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 1.5rem;">
                      ${member.bio}
                    </p>

                    ${member.committee ? `
                      <div style="background-color: var(--color-bg-subtle); border-radius: var(--radius-md); padding: 0.85rem 1.25rem; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.5rem; border: 1px solid var(--color-border-subtle);">
                        <strong>Board Committee Assignment:</strong> ${member.committee}
                      </div>
                    ` : ''}

                    ${member.id === 'vitus-agada' ? `
                      <a href="/leadership/vitus-agada/" class="btn btn-primary btn-sm">
                        View Detailed CEO Profile & Message ${icon('arrowRight', 'w-3.5 h-3.5')}
                      </a>
                    ` : ''}
                  </div>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Governance Code of Conduct -->
    <section class="section section-alt">
      <div class="container" style="max-width: 860px;">
        <div class="section-header">
          <span class="section-tag">Ethics & Standards</span>
          <h2 class="section-title">Clinical Quality & Compliance Committee</h2>
          <p class="section-desc">
            The board conducts routine reviews of pharmacovigilance reports, cold-chain integrity logs, and compliance with the National Drug Policy.
          </p>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 2rem;">
          <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; font-size: 0.95rem;">
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary); margin-top: 3px;">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Supervised by Registered Pharmacists:</strong> Ensuring that all medicinal product distribution adheres strictly to ethical pharmacy laws in Nigeria.</span>
            </div>
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary); margin-top: 3px;">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Pre-shipment Batch Assay Auditing:</strong> Guaranteeing absence of sub-therapeutic chemical variations or counterfeit counterfeits.</span>
            </div>
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary); margin-top: 3px;">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Zero-Compromise Storage Verification:</strong> Enforcing constant temperature records in Awoyaya and Mushin warehousing.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
