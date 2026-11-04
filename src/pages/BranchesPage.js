import branchesData from '../data/branches.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderBranchesPage() {
  updateSEO({
    title: 'Branches & Distribution Hubs | Vitborah Pharmaceuticals',
    description: 'Corporate headquarters in Awoyaya, Ibeju-Lekki, Lagos; central mainland distribution depot in Mushin, Lagos; and northern institutional liaison in Abuja. Vitborah Pharmaceutical Company Limited.',
    canonicalPath: '/branches/',
    image: '/company_image/pharmacy.jpeg'
  });

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Branches & Locations</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Distribution Infrastructure
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 1rem;">
          Operational Branches & Warehousing Hubs
        </h1>
        <p style="color: #d1fae5; font-size: 1.15rem; max-width: 760px; line-height: 1.65; margin: 0;">
          Our strategically located operational centers provide rapid pharmaceutical dispatch, cold-chain temperature preservation, and localized wholesale support across all regions of Nigeria.
        </p>
      </div>
    </div>

    <!-- Branch Cards Grid -->
    <section class="section">
      <div class="container">
        <div style="display: flex; flex-direction: column; gap: 3rem; max-width: 1040px; margin: 0 auto;">
          ${branchesData.map(branch => `
            <div class="card" style="padding: 2.5rem; border-left: 6px solid ${branch.isHeadquarters ? 'var(--color-primary)' : '#0284c7'};">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;">
                <span class="badge ${branch.isHeadquarters ? 'badge-green' : 'badge-blue'}">
                  ${branch.isHeadquarters ? 'National Corporate Headquarters' : 'Regional Distribution Hub'}
                </span>
                <span class="badge badge-neutral">${branch.status}</span>
              </div>

              <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem; color: var(--color-text-main);">
                ${branch.name}
              </h2>
              <div style="font-size: 0.95rem; font-weight: 600; color: var(--color-primary); margin-bottom: 1.5rem;">
                ${branch.region}
              </div>

              <div style="display: grid; grid-template-columns: 1fr; gap: 1.75rem; margin-bottom: 2rem;" class="hero-grid">
                <div>
                  <div style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1.25rem; font-size: 1rem;">
                    <span style="color: var(--color-primary); margin-top: 3px;">${icon('mapPin', 'w-5 h-5')}</span>
                    <div>
                      <strong>Physical Address:</strong><br />
                      <span style="color: var(--color-text-body);">${branch.address}</span>
                    </div>
                  </div>

                  <div style="display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1.25rem; font-size: 1rem;">
                    <span style="color: var(--color-primary); margin-top: 3px;">${icon('clock', 'w-5 h-5')}</span>
                    <div>
                      <strong>Operating Hours:</strong><br />
                      <span style="color: var(--color-text-muted);">${branch.operatingHours}</span>
                    </div>
                  </div>

                  <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; font-size: 0.95rem;">
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <span style="color: var(--color-primary);">${icon('phone', 'w-4 h-4')}</span>
                      <a href="tel:${branch.phone.replace(/[^0-9+]/g, '')}"><strong>${branch.phone}</strong></a>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <span style="color: var(--color-primary);">${icon('mail', 'w-4 h-4')}</span>
                      <a href="mailto:${branch.email}"><strong>${branch.email}</strong></a>
                    </div>
                  </div>
                </div>

                <div style="background-color: var(--color-bg-subtle); border-radius: var(--radius-md); padding: 1.5rem; border: 1px solid var(--color-border);">
                  <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); margin-bottom: 0.85rem;">
                    Key Operations & Capabilities
                  </h4>
                  <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.9rem; color: var(--color-text-body);">
                    ${branch.services.map(s => `
                      <li style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: var(--color-primary);">${icon('check', 'w-4 h-4')}</span>
                        <span>${s}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>

              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="/contact/" class="btn btn-primary btn-sm">
                  Send Inquiry to this Location ${icon('arrowRight', 'w-3.5 h-3.5')}
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Nationwide Logistics Assurance -->
    <section class="section section-alt">
      <div class="container" style="max-width: 860px;">
        <div class="section-header">
          <span class="section-tag">Logistics Protocols</span>
          <h2 class="section-title">Nationwide Delivery Assurance</h2>
          <p class="section-desc">
            How we protect formulation bio-potency across inter-state transit routes.
          </p>
        </div>

        <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 2.25rem;">
          <div style="display: flex; flex-direction: column; gap: 1.25rem; font-size: 0.95rem; color: var(--color-text-body);">
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Temperature Logging During Transit:</strong> Temperature-sensitive injectable consignments include data loggers verifying continuous climate control.</span>
            </div>
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Certified Carrier Fleet:</strong> Dedicated delivery vehicles equipped to protect cargo from moisture, road shock, and direct sunlight.</span>
            </div>
            <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
              <span style="color: var(--color-primary);">${icon('checkCircle', 'w-5 h-5')}</span>
              <span><strong>Rapid Emergency Hospital Dispatch:</strong> Critical cephalosporin and antimalarial orders dispatched within 24 hours of confirmation.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
