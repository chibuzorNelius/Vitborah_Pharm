import leadershipData from '../data/leadership.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderCeoProfilePage() {
  const ceo = leadershipData.boardMembers.find(m => m.id === 'vitus-agada');

  updateSEO({
    title: 'Mr. Okechukwu Vitus Agada | Managing Director & CEO | Vitborah Pharmaceuticals',
    description: 'Executive biography of Mr. Okechukwu Vitus Agada, Founder and Managing Director/CEO of Vitborah Pharmaceutical Company Limited (RC 753571). Learn about his executive vision for healthcare access in Nigeria.',
    canonicalPath: '/leadership/vitus-agada/',
    image: '/company_image/CEO profile.jpeg',
    type: 'profile'
  });

  return `
    <!-- Large CEO Top Banner -->
    <div style="position: relative; background: linear-gradient(135deg, rgba(7, 72, 36, 0.94) 0%, rgba(7, 72, 36, 0.85) 45%, rgba(14, 121, 60, 0.65) 100%), url('/company_image/CEO photo.jpeg') center 25% / cover no-repeat; color: #ffffff; padding: 4.5rem 0 5rem; border-bottom: 3px solid var(--color-primary-light);">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0; margin-bottom: 1.25rem;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <a href="/about#leadership" style="color: #a7f3d0;">Board & Leadership</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Mr. Okechukwu Vitus Agada</span>
        </div>

        <div style="max-width: 820px;">
          <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.18); border-color: rgba(255, 255, 255, 0.3); color: #ffffff; margin-bottom: 0.85rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">
            Executive Profile & Leadership
          </span>
          <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4.5vw, 3.4rem); font-family: var(--font-heading); font-weight: 800; line-height: 1.15; margin-bottom: 0.75rem;">
            Mr. Okechukwu Vitus Agada
          </h1>
          <div style="font-size: clamp(1.1rem, 2vw, 1.35rem); color: #a7f3d0; font-weight: 600; margin-bottom: 1rem;">
            Founder, Managing Director & Chief Executive Officer
          </div>
          <p style="color: #f1f5f9; font-size: 1.05rem; line-height: 1.65; max-width: 720px; margin: 0;">
            Guiding Vitborah Pharmaceutical Company Limited since incorporation in 2008 with a steadfast corporate mission to deliver authentic, WHO-GMP certified therapeutic medicines and essential dietary supplements across Nigeria.
          </p>
        </div>
      </div>
    </div>

    <!-- CEO Profile Details Section -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: start; margin-bottom: 3rem;" class="hero-grid">
          
          <!-- Portrait & Credentials Column -->
          <div>
            <div style="max-width: 460px; margin: 0 auto; border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xl); border: 4px solid var(--color-primary-surface); position: relative; background: #fff;">
              <img 
                src="/company_image/CEO profile.jpeg" 
                alt="Mr. Okechukwu Vitus Agada - Managing Director & CEO" 
                style="width: 100%; height: auto; display: block; object-fit: contain; object-position: center top;"
              />
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(7, 72, 36, 0.95), transparent); padding: 2rem 1.5rem 1.25rem; color: #ffffff;">
                <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #a7f3d0; font-weight: 700; margin-bottom: 0.25rem;">
                  Corporate Founder & Executive Director
                </div>
                <div style="font-family: var(--font-heading); font-size: 1.35rem; font-weight: 800;">
                  Mr. Okechukwu Vitus Agada
                </div>
                <div style="font-size: 0.85rem; color: #e2e8f0;">
                  Managing Director & CEO
                </div>
              </div>
            </div>

            <!-- Credentials Box -->
            <div style="background: var(--color-bg-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.5rem; margin-top: 1.5rem;">
              <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted); margin-bottom: 1rem;">
                Executive Credentials
              </h4>
              <div style="display: flex; flex-direction: column; gap: 0.75rem; font-size: 0.9rem;">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                  <span style="color: var(--color-text-muted);">Executive Office:</span>
                  <strong style="color: var(--color-text-main);">Managing Director & CEO</strong>
                </div>
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                  <span style="color: var(--color-text-muted);">Tenure:</span>
                  <strong style="color: var(--color-text-main);">Since June 2008 (Founder)</strong>
                </div>
                <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 0.5rem;">
                  <span style="color: var(--color-text-muted);">Corporate Registry:</span>
                  <strong style="color: var(--color-primary-dark);">CAC RC 753571</strong>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 0.25rem;">
                  <span style="color: var(--color-text-muted);">Governance Focus:</span>
                  <strong style="color: var(--color-text-main);">Strategic Growth & Supply Chain</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Biography & Leadership Vision -->
          <div>
            <span class="badge badge-green" style="margin-bottom: 0.75rem;">Executive Biography</span>
            <h2 style="font-size: clamp(1.85rem, 3.2vw, 2.5rem); line-height: 1.2; margin-bottom: 0.5rem; color: var(--color-text-main);">
              Mr. Okechukwu Vitus Agada
            </h2>
            <div style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-bottom: 1.5rem;">
              Founder, Managing Director & Chief Executive Officer
            </div>

            <!-- CEO Quote -->
            <div style="background-color: var(--color-primary-surface); border-left: 4px solid var(--color-primary); padding: 1.5rem 1.75rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2rem;">
              <p style="font-size: 1.1rem; font-style: italic; color: var(--color-primary-dark); line-height: 1.6; margin: 0;">
                "${ceo?.executiveMessage || 'Our founding ethos has always been centered on one uncompromising principle: quality without compromise.'}"
              </p>
            </div>

            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Professional Background & Vision</h3>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.7; margin-bottom: 1.25rem;">
              <strong>Mr. Okechukwu Vitus Agada</strong> is a distinguished Nigerian corporate executive, healthcare administrator, and entrepreneur with more than two decades of commercial leadership spanning pharmaceutical importation, nationwide wholesale supply, and corporate enterprise management.
            </p>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.7; margin-bottom: 1.25rem;">
              Recognizing the acute demand for genuine, temperature-controlled medicines and certified therapeutic alternatives across Nigerian hospitals and retail pharmacies, Mr. Agada incorporated <strong>Vitborah Pharmaceutical Company Limited</strong> in June 2008. Under his guidance, Vitborah established direct strategic partnerships with WHO-GMP certified manufacturing facilities internationally, providing high-potency antibiotics, antimalarials, and clinical injectables certified by NAFDAC.
            </p>

            <h3 style="font-size: 1.35rem; margin-top: 2rem; margin-bottom: 0.75rem;">Key Strategic Achievements</h3>
            <div style="display: flex; flex-direction: column; gap: 0.95rem; font-size: 1rem; color: var(--color-text-body); margin-bottom: 2rem;">
              <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
                <span style="color: var(--color-primary); margin-top: 2px;">${icon('checkCircle', 'w-5 h-5')}</span>
                <span><strong>International Manufacturing Alliances:</strong> Structured direct technical supply agreements with certified global facilities, ensuring products such as Boracef Ceftriaxone, Boraflox 500, and Staxim 500 conform strictly to official BP/USP compendial standards.</span>
              </div>
              <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
                <span style="color: var(--color-primary); margin-top: 2px;">${icon('checkCircle', 'w-5 h-5')}</span>
                <span><strong>Nationwide Distribution Infrastructure:</strong> Developed temperature-regulated central warehousing in Awoyaya, Ibeju-Lekki, Lagos, alongside rapid distribution depots in Mushin, Abuja, Kaduna, Onitsha, and Aba.</span>
              </div>
              <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
                <span style="color: var(--color-primary); margin-top: 2px;">${icon('checkCircle', 'w-5 h-5')}</span>
                <span><strong>Pharmaceutical Scientific Integration:</strong> Empowered licensed pharmaceutical specialists within the executive governance to direct strict clinical quality verification and regulatory conformity.</span>
              </div>
              <div style="display: flex; gap: 0.75rem; align-items: flex-start;">
                <span style="color: var(--color-primary); margin-top: 2px;">${icon('checkCircle', 'w-5 h-5')}</span>
                <span><strong>The Vitborah Charity Foundation:</strong> Founded the corporate philanthropic wing to provide grassroots medical screenings, educational support at youth learning centres, and nutritional supplies for underserved families.</span>
              </div>
            </div>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/about#leadership" class="btn btn-secondary">
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
