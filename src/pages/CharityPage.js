import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderCharityPage() {
  updateSEO({
    title: 'The Vitborah Foundation | Community Health Outreach & CSR',
    description: 'The charitable arm of Vitborah Pharmaceutical Company Limited. Providing free health screenings, blood pressure checks, pediatric rehydration, and antimalarials to vulnerable Nigerian communities.',
    canonicalPath: '/charity/',
    image: '/company_image/charity.jpeg'
  });

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Vitborah Foundation</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Corporate Social Responsibility
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 1rem;">
          The Vitborah Foundation
        </h1>
        <p style="color: #d1fae5; font-size: 1.15rem; max-width: 760px; line-height: 1.65; margin: 0;">
          Extending essential healthcare, diagnostic screening, and life-saving therapeutic interventions to vulnerable families and underserved communities across Nigeria.
        </p>
      </div>
    </div>

    <!-- Outreach Mission Overview -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: center;" class="hero-grid">
          <div>
            <span class="section-tag">Grassroots Impact</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.25rem;">
              Healthcare Beyond the Commercial Dispensary
            </h2>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.7; margin-bottom: 1rem;">
              At Vitborah Pharmaceuticals, our corporate responsibility is rooted in public health advocacy. Millions of vulnerable citizens face systemic barriers accessing primary medical diagnostics and emergency treatment for preventable conditions like malaria, severe dehydration, and undetected hypertension.
            </p>
            <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.65; margin-bottom: 2rem;">
              Through the <strong>Vitborah Foundation</strong>, volunteer healthcare professionals—pharmacists, physicians, and community health nurses—conduct free medical screening camps, dispense certified therapeutic medicines under medical supervision, and provide preventive health education in rural and peri-urban neighborhoods.
            </p>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <a href="/contact/" class="btn btn-primary">
                Partner on Community Outreach ${icon('arrowRight', 'w-4 h-4')}
              </a>
              <a href="/news/vitborah-foundation-health-outreach-lagos/" class="btn btn-secondary">
                Read Latest Outreach Report
              </a>
            </div>
          </div>

          <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xl); border: 1px solid var(--color-border);">
            <img src="/company_image/charity.jpeg" alt="Vitborah Foundation Medical Outreach in Lagos" style="width: 100%; height: 440px; object-fit: cover;" />
            <div style="background: var(--color-bg-subtle); padding: 0.85rem 1.25rem; font-size: 0.825rem; color: var(--color-text-muted); border-top: 1px solid var(--color-border);">
              <strong>Documented Outreach:</strong> Healthcare volunteers from Vitborah Foundation conducting health assessments and distributing medicines in Lagos.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Outreach Pillars -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Action Pillars</span>
          <h2 class="section-title">Core Foundation Initiatives</h2>
          <p class="section-desc">
            Focused clinical and philanthropic programs designed for maximum public health efficacy.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.75rem;">
          <div class="card" style="padding: 2.25rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: var(--color-primary-surface); color: var(--color-primary); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('heartPulse', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Diagnostic Health Camps</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">
              Free rapid blood pressure checks, blood glucose testing, body mass index evaluations, and malaria rapid diagnostic tests (RDTs) to identify asymptomatic chronic disease early.
            </p>
          </div>

          <div class="card" style="padding: 2.25rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #fef2f2; color: var(--color-accent); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('pill', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Essential Medicine Supply</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">
              Complimentary provision of clinician-directed artemisinin antimalarials, WHO-standard Oral Rehydration Salts (ORS), and pediatric hematinic iron syrups to families in need.
            </p>
          </div>

          <div class="card" style="padding: 2.25rem;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #eff6ff; color: #1d4ed8; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('shieldCheck', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Maternal & Child Health</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">
              Educating expectant mothers on proper prenatal nutrition, hydration balance, malaria chemoprophylaxis during pregnancy, and hygienic child-rearing practices.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Foundation Contact / Collaboration -->
    <div style="background-color: #074824; color: #ffffff; padding: 3.5rem 0; text-align: center;">
      <div class="container" style="max-width: 740px;">
        <h3 style="color: #ffffff; font-size: 1.85rem; margin-bottom: 0.75rem;">Collaborate with the Vitborah Foundation</h3>
        <p style="color: #d1fae5; font-size: 1rem; margin-bottom: 1.5rem; line-height: 1.6;">
          Are you a certified medical NGO, health development agency, or community health worker interested in co-organizing health outreaches? We welcome ethical partnerships.
        </p>
        <a href="/contact/" class="btn btn-primary" style="background: #ffffff; color: var(--color-primary-dark) !important; font-weight: 700;">
          Contact Foundation Secretariat
        </a>
      </div>
    </div>
  `;
}
