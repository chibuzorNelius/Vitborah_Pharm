import leadershipData from '../data/leadership.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderLeadershipPage() {
  updateSEO({
    title: 'Board of Directors & Executive Leadership | Vitborah Pharmaceuticals',
    description: 'Meet the Board of Directors of Vitborah Pharmaceutical Company Limited. Led by Mr. Okechukwu Vitus Agada (MD/CEO), steering clinical excellence, corporate governance, and ethical distribution in Nigeria.',
    canonicalPath: '/leadership/',
    image: '/company_image/board members.jpeg'
  });

  const { boardMembers } = leadershipData;

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 3.5rem 0 4rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Board & Leadership</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Corporate Governance
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2rem, 3.8vw, 3rem); margin-bottom: 0.75rem;">
          Board of Directors & Governance
        </h1>
        <p style="color: #d1fae5; font-size: 1.1rem; max-width: 760px; line-height: 1.6; margin: 0;">
          Our Board of Directors provides strategic oversight, clinical stewardship, and statutory corporate governance, ensuring that Vitborah continues to fulfill its mission of delivering safe, accessible healthcare throughout Nigeria.
        </p>
      </div>
    </div>

    <!-- Governance Intro -->
    <section class="section" style="padding-bottom: 1.5rem;">
      <div class="container">
        <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; max-width: 960px; margin: 0 auto; display: flex; gap: 1rem; align-items: flex-start;">
          <span style="color: var(--color-primary); flex-shrink: 0; margin-top: 3px;">${icon('shieldCheck', 'w-6 h-6')}</span>
          <div>
            <h3 style="font-size: 1.1rem; margin-bottom: 0.25rem; color: var(--color-text-main);">Statutory Corporate Governance Structure</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.55; margin: 0;">
              In accordance with Nigerian Companies and Allied Matters Act (CAMA) standards and Pharmacists Council of Nigeria (PCN) statutory regulations, Vitborah maintains strict operational boundaries, clinical audits, and financial reporting.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Cards Grid: Compact with Small Round Profile Placeholder -->
    <section class="section">
      <div class="container">
        <div class="leadership-grid-compact" style="max-width: 1080px; margin: 0 auto;">
          ${boardMembers.map(member => {
            const initials = member.name
              .replace('Pharm.', '')
              .trim()
              .split(' ')
              .map(n => n[0])
              .slice(0, 2)
              .join('');

            return `
              <div class="leadership-card-compact">
                <div class="leader-avatar-circle">
                  ${member.image ? `<img src="${member.image}" alt="${member.name}" />` : initials}
                </div>
                <h3 class="leader-name">${member.name}</h3>
                <div class="leader-role">${member.role}</div>
                ${member.qualifications ? `<div class="leader-qualifications">${member.qualifications}</div>` : ''}
                <p class="leader-bio-compact">${member.bio}</p>
                <div style="margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.5rem; width: 100%;">
                  <span class="badge ${member.type === 'executive' ? 'badge-green' : 'badge-neutral'}" style="font-size: 0.7rem; padding: 0.15rem 0.5rem; align-self: center;">
                    ${member.type === 'executive' ? 'Executive Director' : 'Non-Executive'}
                  </span>
                  ${member.id === 'vitus-agada' ? `
                    <a href="/leadership/vitus-agada/" class="btn btn-primary btn-sm" style="font-size: 0.75rem; padding: 0.4rem 0.75rem; margin-top: 0.25rem;">
                      CEO Profile & Message ${icon('arrowRight', 'w-3 h-3')}
                    </a>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
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

        <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.75rem;">
          <div style="display: grid; grid-template-columns: 1fr; gap: 1rem; font-size: 0.9rem;">
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary); margin-top: 3px;">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Supervised by Registered Pharmacists:</strong> Ensuring that all medicinal product distribution adheres strictly to ethical pharmacy laws in Nigeria.</span>
            </div>
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary); margin-top: 3px;">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Pre-shipment Batch Assay Auditing:</strong> Guaranteeing absence of sub-therapeutic chemical variations or counterfeit goods.</span>
            </div>
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary); margin-top: 3px;">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Zero-Compromise Storage Verification:</strong> Enforcing constant temperature records in Awoyaya and regional warehousing.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
