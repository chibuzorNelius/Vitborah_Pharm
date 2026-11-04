import leadershipData from '../data/leadership.json';
import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderAboutPage() {
  updateSEO({
    title: 'About Us | Corporate Identity & Heritage | Vitborah Pharmaceuticals',
    description: 'Discover Vitborah Pharmaceutical Company Limited (RC 753571, Incorporated 2008). 16+ years of clinical excellence, WHO-GMP partnerships, and nationwide healthcare distribution in Nigeria.',
    canonicalPath: '/about/',
    image: '/company_image/pharmacy.jpeg'
  });

  const milestones = [
    {
      year: '2008',
      title: 'Corporate Incorporation (RC: 753571)',
      desc: 'Officially incorporated on June 16, 2008 by the Corporate Affairs Commission (CAC) in Lagos, Nigeria, establishing operations focused on ethical pharmaceutical importation, distribution, and clinical advocacy.'
    },
    {
      year: '2012',
      title: 'Therapeutic Portfolio Expansion',
      desc: 'Secured landmark NAFDAC product registrations across essential antibacterial and antimalarial categories, including Boraflox 500 Ciprofloxacin and Staxim Cefuroxime tablets.'
    },
    {
      year: '2017',
      title: 'Hospital Sterile Injectable Line',
      desc: 'Partnered with international WHO-GMP manufacturing plants to introduce Boracef Ceftriaxone 1g and Vitboter Artemether injectables for tertiary hospital intensive care in Nigeria.'
    },
    {
      year: '2021',
      title: 'Ibeju-Lekki Central Warehousing Hub',
      desc: 'Commissioned expanded central warehousing facilities at No. 2, Olori Kudrat Elegushi Street, Awoyaya, Ibeju-Lekki, enhancing nationwide distribution throughput and cold-chain capacity.'
    },
    {
      year: '2024',
      title: 'Formalization of Vitborah Foundation',
      desc: 'Formalized corporate social responsibility outreach into the Vitborah Foundation, delivering free community health screenings, diagnostic testing, and essential treatments to underserved populations.'
    },
    {
      year: '2026',
      title: 'New AGE Nutraceutical Portfolio Launch',
      desc: 'Unveiled the New AGE dietary supplement line, providing Nigerian consumers and clinicians with premium NAFDAC-certified formulations including Berberine 600mg, Omega-3, and Magnesium Glycinate.'
    }
  ];

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">About Us</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Our Corporate Heritage
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 1rem;">
          Committed to Clinical Excellence & Healthcare Access in Nigeria
        </h1>
        <p style="color: #d1fae5; font-size: 1.15rem; max-width: 780px; line-height: 1.65; margin: 0;">
          Since 2008, Vitborah Pharmaceutical Company Limited has bridged the gap between global pharmaceutical innovation and local clinical needs, providing trusted medicines and proactive wellness formulations nationwide.
        </p>
      </div>
    </div>

    <!-- Company Overview -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem; align-items: center;" class="hero-grid">
          <div>
            <span class="section-tag">Who We Are</span>
            <h2 style="font-size: 2.25rem; margin-bottom: 1.25rem;">
              A Licensed, Registered Force in Nigerian Healthcare
            </h2>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.7; margin-bottom: 1rem;">
              <strong>Vitborah Pharmaceutical Company Limited</strong> is a fully incorporated Nigerian healthcare enterprise (CAC Registration RC: 753571). We specialize in the importation, registration, marketing, and distribution of verified pharmaceutical formulations and dietary supplements.
            </p>
            <p style="font-size: 1rem; color: var(--color-text-muted); line-height: 1.65; margin-bottom: 1.5rem;">
              With executive headquarters located along the Lekki-Epe expressway corridor in Awoyaya, Lagos, and primary distribution depots in Mushin and liaison hubs in Abuja, Vitborah serves hundreds of teaching hospitals, specialized clinics, pharmaceutical wholesalers, and community dispensaries across all geopolitical zones of Nigeria.
            </p>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; margin-bottom: 2rem;">
              <div style="background-color: var(--color-bg-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                <div style="font-family: var(--font-heading); font-size: 1.75rem; font-weight: 800; color: var(--color-primary); line-height: 1; margin-bottom: 0.35rem;">16+</div>
                <div style="font-size: 0.85rem; color: var(--color-text-muted);">Years in Continuous Operation (Since 2008)</div>
              </div>
              <div style="background-color: var(--color-bg-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                <div style="font-family: var(--font-heading); font-size: 1.75rem; font-weight: 800; color: var(--color-primary); line-height: 1; margin-bottom: 0.35rem;">100%</div>
                <div style="font-size: 0.85rem; color: var(--color-text-muted);">NAFDAC Compliant Portfolio</div>
              </div>
            </div>

            <a href="/leadership/" class="btn btn-primary">
              Meet Our Executive Leadership ${icon('arrowRight', 'w-4 h-4')}
            </a>
          </div>

          <div style="border-radius: var(--radius-xl); overflow: hidden; box-shadow: var(--shadow-xl); border: 1px solid var(--color-border);">
            <img src="/company_image/pharmacy.jpeg" alt="Vitborah Clinical Operations" style="width: 100%; height: 440px; object-fit: cover;" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision & Values -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Core Principles</span>
          <h2 class="section-title">Mission, Vision & Institutional Values</h2>
          <p class="section-desc">
            The ethical bedrock that shapes every batch import, quality control test, and distribution relationship.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.75rem;">
          <div class="card" style="padding: 2.25rem; border-top: 4px solid var(--color-primary);">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: var(--color-primary-surface); color: var(--color-primary); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('award', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Our Mission</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">
              To provide Nigerian clinicians, hospitals, and communities with premium, WHO-GMP certified therapeutic medicines and evidence-based nutraceuticals that guarantee safety, efficacy, and genuine affordability.
            </p>
          </div>

          <div class="card" style="padding: 2.25rem; border-top: 4px solid var(--color-accent);">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #fef2f2; color: var(--color-accent); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('shieldCheck', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Our Vision</h3>
            <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6;">
              To be West Africa's most respected pharmaceutical brand, recognized for uncompromising quality assurance, supply chain reliability, and philanthropic community healthcare transformation.
            </p>
          </div>

          <div class="card" style="padding: 2.25rem; border-top: 4px solid #1d4ed8;">
            <div style="width: 3rem; height: 3rem; border-radius: var(--radius-md); background: #eff6ff; color: #1d4ed8; display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
              ${icon('heartPulse', 'w-6 h-6')}
            </div>
            <h3 style="font-size: 1.35rem; margin-bottom: 0.75rem;">Core Values</h3>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.95rem; color: var(--color-text-muted);">
              <li><strong style="color: var(--color-text-main);">• Clinical Integrity:</strong> Zero tolerance for sub-potent drugs.</li>
              <li><strong style="color: var(--color-text-main);">• Regulatory Compliance:</strong> Strict NAFDAC adherence.</li>
              <li><strong style="color: var(--color-text-main);">• Supply Reliability:</strong> Cold-chain security and rapid dispatch.</li>
              <li><strong style="color: var(--color-text-main);">• Compassion:</strong> Free community outreach through our Foundation.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Company History & Timeline -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Historical Milestones</span>
          <h2 class="section-title">Our Growth & Heritage Timeline</h2>
          <p class="section-desc">
            Documented progression from our founding in 2008 to today's multi-depot national healthcare distribution network.
          </p>
        </div>

        <div style="max-width: 820px; margin: 0 auto; position: relative;">
          <!-- Timeline Vertical Line -->
          <div style="position: absolute; left: 1.25rem; top: 1rem; bottom: 1rem; width: 2px; background: var(--color-border);"></div>

          <div style="display: flex; flex-direction: column; gap: 2.5rem;">
            ${milestones.map((m, idx) => `
              <div style="display: flex; gap: 2rem; position: relative;">
                <div style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-full); background: var(--color-primary); color: #ffffff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 800; flex-shrink: 0; box-shadow: 0 0 0 4px #ffffff; z-index: 2;">
                  ${idx + 1}
                </div>
                <div class="card" style="padding: 1.75rem; flex-grow: 1; background: #ffffff;">
                  <span class="badge badge-green" style="margin-bottom: 0.5rem;">${m.year}</span>
                  <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--color-text-main);">${m.title}</h3>
                  <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.55; margin: 0;">${m.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Assurance & Standards -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Quality Assurance</span>
          <h2 class="section-title">Stringent Pharmaceutical Governance</h2>
          <p class="section-desc">
            Every product distributed by Vitborah is subjected to multi-tiered quality control checks.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.75rem;">
            <div style="color: var(--color-primary); margin-bottom: 0.75rem;">${icon('shieldCheck', 'w-8 h-8')}</div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">WHO-GMP Partner Auditing</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5;">
              We partner exclusively with manufacturers certified under World Health Organization Good Manufacturing Practices (WHO-GMP), ensuring sterile batch lyophilization and cleanroom standards.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.75rem;">
            <div style="color: var(--color-primary); margin-bottom: 0.75rem;">${icon('award', 'w-8 h-8')}</div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">NAFDAC Product Registration</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5;">
              Full compliance with the National Agency for Food and Drug Administration and Control. All products undergo laboratory verification, certificates of analysis (CoA) checks, and post-market surveillance.
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 1.75rem;">
            <div style="color: var(--color-primary); margin-bottom: 0.75rem;">${icon('clock', 'w-8 h-8')}</div>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Cold-Chain Monitoring</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5;">
              Dedicated climate-monitored holding rooms at our Awoyaya central depot safeguard thermal-sensitive injectables and live bacterial probiotic strains against tropical heat degradation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation CTA Bar -->
    <div style="background-color: #074824; color: #ffffff; padding: 3rem 0; text-align: center;">
      <div class="container" style="max-width: 720px;">
        <h3 style="color: #ffffff; font-size: 1.85rem; margin-bottom: 0.75rem;">Ready to Collaborate With Vitborah?</h3>
        <p style="color: #d1fae5; font-size: 1rem; margin-bottom: 1.5rem;">
          Connect with our corporate team for wholesale orders, hospital supply contracts, or community health partnerships.
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <a href="/products/therapeutic/" class="btn btn-primary" style="background: #ffffff; color: var(--color-primary-dark) !important; font-weight: 700;">
            Browse Medicine Catalog
          </a>
          <a href="/contact/" class="btn btn-outline" style="border-color: #ffffff; color: #ffffff !important;">
            Contact Corporate Office
          </a>
        </div>
      </div>
    </div>
  `;
}
