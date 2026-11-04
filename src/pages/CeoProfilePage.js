import leadershipData from '../data/leadership.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderCeoProfilePage() {
  const ceo = leadershipData.boardMembers.find(m => m.id === 'vitus-agada');

  updateSEO({
    title: 'Pharm. Okechukwu Vitus Agada | Managing Director & CEO | Vitborah Pharmaceuticals',
    description: 'Executive biography of Pharmacist Okechukwu Vitus Agada, Founder and CEO of Vitborah Pharmaceutical Company Limited (RC 753571). Learn about his vision for healthcare access in Nigeria.',
    canonicalPath: '/leadership/vitus-agada/',
    image: '/company_image/pharmacy.jpeg',
    type: 'profile'
  });

  return `
    <!-- Top Breadcrumb Bar -->
    <div style="background-color: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); padding: 1.25rem 0;">
      <div class="container">
        <div class="breadcrumbs" style="margin: 0;">
          <a href="/">Home</a>
          <span class="separator">/</span>
          <a href="/leadership/">Leadership</a>
          <span class="separator">/</span>
          <span class="current">Pharm. Okechukwu Vitus Agada</span>
        </div>
      </div>
    </div>

    <!-- CEO Profile Section -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: start; margin-bottom: 4rem;" class="hero-grid">
          
          <!-- Portrait Card -->
          <div>
            <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xl); border: 4px solid var(--color-primary-surface); position: relative;">
              <img 
                src="/company_image/pharmacy.jpeg" 
                alt="Pharm. Okechukwu Vitus Agada in modern pharmacy" 
                style="width: 100%; height: 460px; object-fit: cover;"
              />
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(7, 72, 36, 0.95), transparent); padding: 2rem 1.5rem 1.5rem; color: #ffffff;">
                <div style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: #a7f3d0; font-weight: 700; margin-bottom: 0.25rem;">
                  Registered Pharmacist & Executive Leader
                </div>
                <div style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800;">
                  Pharm. Okechukwu Vitus Agada
                </div>
                <div style="font-size: 0.85rem; color: #e2e8f0;">
                  B.Pharm, MPSN, FPCPharm
                </div>
              </div>
            </div>

            <!-- Credentials Box -->
            <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; margin-top: 1.5rem;">
              <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); margin-bottom: 1rem;">
                Official Appointments
              </h4>
              <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem;">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                  <span style="color: var(--color-text-muted);">Corporate Role:</span>
                  <strong style="color: var(--color-text-main);">Managing Director & CEO</strong>
                </div>
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                  <span style="color: var(--color-text-muted);">Tenure:</span>
                  <strong style="color: var(--color-text-main);">Since June 2008</strong>
                </div>
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                  <span style="color: var(--color-text-muted);">Regulatory Status:</span>
                  <strong style="color: var(--color-primary-dark);">PCN Registered Pharmacist</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 0.25rem;">
                  <span style="color: var(--color-text-muted);">Corporate Registry:</span>
                  <strong style="color: var(--color-text-main);">CAC RC 753571</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Biography & Leadership Vision -->
          <div>
            <span class="badge badge-green" style="margin-bottom: 0.75rem;">Executive Profile</span>
            <h1 style="font-size: clamp(2rem, 3.5vw, 2.75rem); line-height: 1.2; margin-bottom: 0.5rem; color: var(--color-text-main);">
              Pharm. Okechukwu Vitus Agada
            </h1>
            <div style="font-size: 1.2rem; font-weight: 700; color: var(--color-primary); margin-bottom: 1.5rem;">
              Founder, Managing Director & Chief Executive Officer
            </div>

            <!-- CEO Quote -->
            <div style="background-color: var(--color-primary-surface); border-left: 4px solid var(--color-primary); padding: 1.5rem 1.75rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2rem;">
              <p style="font-size: 1.15rem; font-style: italic; color: var(--color-primary-dark); line-height: 1.6; margin: 0;">
                "${ceo.executiveMessage}"
              </p>
            </div>

            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Professional Background & Vision</h3>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.7; margin-bottom: 1.25rem;">
              Pharmacist Okechukwu Vitus Agada is a distinguished Nigerian pharmacist, healthcare administrator, and entrepreneur with more than two decades of hands-on expertise spanning community pharmacy practice, tertiary pharmaceutical procurement, and international medicine importation.
            </p>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.7; margin-bottom: 1.25rem;">
              Having witnessed firsthand the persistent challenges of counterfeit formulations and erratic supply lines in Nigerian healthcare institutions, Pharm. Agada incorporated <strong>Vitborah Pharmaceutical Company Limited</strong> in June 2008 with an uncompromising commitment to clinical excellence, regulatory compliance with NAFDAC, and dependable nationwide cold-chain delivery.
            </p>

            <h3 style="font-size: 1.35rem; margin-top: 2rem; margin-bottom: 0.75rem;">Strategic Healthcare Contributions</h3>
            <div style="display: flex; flex-direction: column; gap: 0.85rem; font-size: 1rem; color: var(--color-text-body); margin-bottom: 2rem;">
              <div style="display: flex; gap: 0.65rem; align-items: flex-start;">
                <span style="color: var(--color-primary); margin-top: 2px;">${icon('checkCircle', 'w-5 h-5')}</span>
                <span><strong>WHO-GMP Manufacturer Alliances:</strong> Established direct technical supply agreements with certified pharmaceutical facilities globally, guaranteeing that formulations like Boracef Ceftriaxone conform to BP/USP standards.</span>
              </div>
              <div style="display: flex; gap: 0.65rem; align-items: flex-start;">
                <span style="color: var(--color-primary); margin-top: 2px;">${icon('checkCircle', 'w-5 h-5')}</span>
                <span><strong>Cold-Chain Infrastructure Expansion:</strong> Spearheaded the development of temperature-controlled warehousing along the Lekki-Epe expressway in Awoyaya, Lagos.</span>
              </div>
              <div style="display: flex; gap: 0.65rem; align-items: flex-start;">
                <span style="color: var(--color-primary); margin-top: 2px;">${icon('checkCircle', 'w-5 h-5')}</span>
                <span><strong>Philanthropic Healthcare Mission:</strong> Championed the founding of the Vitborah Foundation, funding free grassroots medical screenings and maternal-child treatments.</span>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/leadership/" class="btn btn-secondary">
                ${icon('arrowLeft', 'w-4 h-4')} Back to Board of Directors
              </a>
              <a href="/contact/" class="btn btn-primary">
                Contact Executive Office ${icon('arrowRight', 'w-4 h-4')}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  `;
}
