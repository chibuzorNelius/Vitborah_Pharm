import partnersData from '../data/partners.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderPartnersPage() {
  updateSEO({
    title: 'Our Partners & Collaborators | Vitborah Pharmaceuticals',
    description: 'Learn about Vitborah Pharmaceutical Company Limited partners: WHO-GMP manufacturing plants, Nigerian teaching hospitals, and accredited pharmaceutical distributors.',
    canonicalPath: '/partners/',
    image: '/company_image/pharmacy.jpeg'
  });

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Our Partners</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Healthcare Alliances
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 1rem;">
          Our Partners & Collaborators
        </h1>
        <p style="color: #d1fae5; font-size: 1.15rem; max-width: 760px; line-height: 1.65; margin: 0;">
          Collaborating with certified international pharmaceutical manufacturers, tertiary health institutions, and nationwide licensed pharmacy distributors.
        </p>
      </div>
    </div>

    <!-- Partner Relationships Grid -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Network Integrity</span>
          <h2 class="section-title">Verified Manufacturing & Institutional Relationships</h2>
          <p class="section-desc">
            Vitborah operates within a strictly auditable network of certified healthcare producers and regulated distributors.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
          ${partnersData.map(p => `
            <div class="card" style="padding: 2.25rem; display: flex; flex-direction: column;">
              <span class="badge badge-green" style="margin-bottom: 0.75rem; align-self: flex-start;">${p.type}</span>
              <h3 style="font-size: 1.35rem; margin-bottom: 0.35rem; color: var(--color-text-main);">${p.name}</h3>
              <div style="font-size: 0.85rem; color: var(--color-primary); font-weight: 600; margin-bottom: 1rem;">
                ${p.location}
              </div>
              <p style="font-size: 0.95rem; color: var(--color-text-body); line-height: 1.6; margin-bottom: 1.25rem; flex-grow: 1;">
                ${p.description}
              </p>
              <div style="background: var(--color-bg-subtle); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border: 1px solid var(--color-border); font-size: 0.825rem; color: var(--color-text-muted);">
                <strong>Scope:</strong> ${p.partnershipScope}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Distributor Onboarding Criteria -->
    <section class="section section-alt">
      <div class="container" style="max-width: 880px;">
        <div class="section-header">
          <span class="section-tag">Distribution Network</span>
          <h2 class="section-title">Becoming an Accredited Vitborah Distributor</h2>
          <p class="section-desc">
            We partner with registered pharmaceutical wholesalers, hospital pharmacy groups, and licensed retail chains.
          </p>
        </div>

        <div class="card" style="padding: 2.5rem; background: #ffffff;">
          <h3 style="font-size: 1.25rem; margin-bottom: 1.25rem;">Accreditation Requirements:</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.95rem; color: var(--color-text-body); margin-bottom: 2rem;">
            <li style="display: flex; gap: 0.65rem; align-items: flex-start;">
              <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Corporate Registration:</strong> Valid CAC Certificate of Incorporation or Business Registration in Nigeria.</span>
            </li>
            <li style="display: flex; gap: 0.65rem; align-items: flex-start;">
              <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Regulatory Pharmacy License:</strong> Valid Pharmacists Council of Nigeria (PCN) Premises License and Superintendent Pharmacist registration.</span>
            </li>
            <li style="display: flex; gap: 0.65rem; align-items: flex-start;">
              <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Cold-Chain & Storage Verification:</strong> Demonstrable facility capacity to store pharmaceuticals below recommended temperature thresholds.</span>
            </li>
            <li style="display: flex; gap: 0.65rem; align-items: flex-start;">
              <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Traceability Compliance:</strong> Adherence to ethical batch-tracking and pharmacovigilance adverse reaction reporting.</span>
            </li>
          </ul>

          <div style="text-align: center;">
            <a href="/contact/" class="btn btn-primary">
              Submit Distributor Application ${icon('arrowRight', 'w-4 h-4')}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}
