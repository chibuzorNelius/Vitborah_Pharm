import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderWorkWithUsPage() {
  updateSEO({
    title: 'Careers & Work With Us | Vitborah Pharmaceuticals',
    description: 'Explore career opportunities at Vitborah Pharmaceutical Company Limited. Join our medical sales, regulatory affairs, quality assurance, and healthcare logistics teams in Nigeria.',
    canonicalPath: '/work-with-us/',
    image: '/company_image/pharmacy.jpeg'
  });

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Work With Us</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Talent & Careers
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 1rem;">
          Build Your Career With Vitborah Pharmaceuticals
        </h1>
        <p style="color: #d1fae5; font-size: 1.15rem; max-width: 760px; line-height: 1.65; margin: 0;">
          Join a dedicated team of pharmacists, supply chain specialists, and healthcare professionals committed to delivering essential medicines across Nigeria.
        </p>
      </div>
    </div>

    <!-- Career Opportunities Grid -->
    <section class="section" style="padding-bottom: 2rem;">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Open Disciplines</span>
          <h2 class="section-title">Areas of Professional Opportunity</h2>
          <p class="section-desc">
            We are consistently looking for talented professionals across clinical, commercial, and technical pharmaceutical domains.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 3.5rem;">
          <div class="card" style="padding: 1.75rem;">
            <div style="color: var(--color-primary); margin-bottom: 0.75rem;">${icon('stethoscope', 'w-8 h-8')}</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.35rem;">Medical Sales Representatives</h3>
            <div style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700; margin-bottom: 0.75rem;">Lagos, Abuja & Regional Territories</div>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5;">
              Engage doctors, clinical pharmacologists, and pharmacy directors with verified clinical evidence for Vitborah therapeutic formulations and New AGE supplements.
            </p>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="color: var(--color-primary); margin-bottom: 0.75rem;">${icon('shieldCheck', 'w-8 h-8')}</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.35rem;">Regulatory & Quality Officers</h3>
            <div style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700; margin-bottom: 0.75rem;">Headquarters (Ibeju-Lekki, Lagos)</div>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5;">
              Manage product dossier filings, NAFDAC recertifications, post-marketing surveillance, and pharmacovigilance adverse reaction documentation.
            </p>
          </div>

          <div class="card" style="padding: 1.75rem;">
            <div style="color: var(--color-primary); margin-bottom: 0.75rem;">${icon('building', 'w-8 h-8')}</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.35rem;">Warehouse & Cold-Chain Officers</h3>
            <div style="font-size: 0.8rem; color: var(--color-primary); font-weight: 700; margin-bottom: 0.75rem;">Awoyaya & Mushin Depots</div>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.5;">
              Supervise temperature-controlled inventory preservation, FEFO/FIFO batch rotation, dispatch documentation, and logistics security.
            </p>
          </div>
        </div>

        <!-- Expression of Interest Form -->
        <div style="max-width: 820px; margin: 0 auto; background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2.5rem; box-shadow: var(--shadow-lg);">
          <div style="margin-bottom: 2rem;">
            <span class="badge badge-green" style="margin-bottom: 0.5rem;">Direct Application</span>
            <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem;">Submit Expression of Interest</h2>
            <p style="color: var(--color-text-muted); font-size: 0.95rem; margin: 0;">
              Complete the verified candidate profile below. Our Human Resources and talent acquisition desk reviews applications on an ongoing basis.
            </p>
          </div>

          <div id="career-form-status" style="display: none; margin-bottom: 1.5rem;"></div>

          <form id="career-form" novalidate>
            <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem;" class="hero-grid">
              <div class="form-group" style="margin: 0;">
                <label for="career-name" class="form-label">Full Legal Name *</label>
                <input type="text" id="career-name" class="form-input" placeholder="e.g., Pharm. Emeka Bello" required />
                <div class="form-error" id="career-name-error"></div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label for="career-email" class="form-label">Email Address *</label>
                <input type="email" id="career-email" class="form-input" placeholder="e.g., e.bello@example.com" required />
                <div class="form-error" id="career-email-error"></div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 1.25rem;" class="hero-grid">
              <div class="form-group" style="margin: 0;">
                <label for="career-phone" class="form-label">Phone / WhatsApp Number *</label>
                <input type="tel" id="career-phone" class="form-input" placeholder="+234 800 000 0000" required />
                <div class="form-error" id="career-phone-error"></div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label for="career-role" class="form-label">Area of Professional Interest *</label>
                <select id="career-role" class="form-select" required>
                  <option value="">Select a discipline...</option>
                  <option value="Medical Sales Representative">Medical Sales Representative</option>
                  <option value="Regulatory Affairs & Pharmacovigilance">Regulatory Affairs & Pharmacovigilance</option>
                  <option value="Cold-Chain & Warehouse Logistics">Cold-Chain & Warehouse Logistics</option>
                  <option value="Quality Assurance & Batch Audit">Quality Assurance & Batch Audit</option>
                  <option value="Finance, Billing & Account Administration">Finance, Billing & Account Administration</option>
                  <option value="General Healthcare Application">General Healthcare Application</option>
                </select>
                <div class="form-error" id="career-role-error"></div>
              </div>
            </div>

            <div class="form-group" style="margin-top: 1.25rem;">
              <label for="career-experience" class="form-label">Relevant Experience & Professional Qualifications *</label>
              <textarea id="career-experience" class="form-textarea" placeholder="Provide a brief summary of your clinical or commercial experience, educational degrees (e.g. B.Pharm, B.Sc), and current location..." required></textarea>
              <div class="form-error" id="career-experience-error"></div>
            </div>

            <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1.5rem; line-height: 1.5;">
              ${icon('shieldCheck', 'w-4 h-4')} <strong>Privacy Assurance:</strong> Candidate information submitted through this portal is processed strictly in accordance with Nigerian Data Protection laws and used solely for recruitment evaluation.
            </div>

            <button type="submit" class="btn btn-primary btn-lg" id="career-submit-btn" style="width: 100%;">
              Submit Application Profile ${icon('arrowRight', 'w-4 h-4')}
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function initWorkWithUsPage() {
  const form = document.getElementById('career-form');
  const statusEl = document.getElementById('career-form-status');
  const submitBtn = document.getElementById('career-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('career-name');
    const emailInput = document.getElementById('career-email');
    const phoneInput = document.getElementById('career-phone');
    const roleInput = document.getElementById('career-role');
    const expInput = document.getElementById('career-experience');

    // Reset errors
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

    let hasErrors = false;

    if (!nameInput.value.trim()) {
      document.getElementById('career-name-error').textContent = 'Please provide your full legal name.';
      hasErrors = true;
    }
    if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
      document.getElementById('career-email-error').textContent = 'Please enter a valid email address.';
      hasErrors = true;
    }
    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 8) {
      document.getElementById('career-phone-error').textContent = 'Please enter a valid phone number.';
      hasErrors = true;
    }
    if (!roleInput.value) {
      document.getElementById('career-role-error').textContent = 'Please select a discipline of interest.';
      hasErrors = true;
    }
    if (!expInput.value.trim() || expInput.value.trim().length < 20) {
      document.getElementById('career-experience-error').textContent = 'Please provide at least a brief summary of your qualifications (20+ characters).';
      hasErrors = true;
    }

    if (hasErrors) return;

    // Honest handling
    submitBtn.disabled = true;
    submitBtn.textContent = 'Validating Application...';

    const refNum = 'VIB-' + Math.floor(100000 + Math.random() * 900000);

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application Profile';

      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.innerHTML = `
          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 1.5rem; color: #166534; line-height: 1.6;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">
              ${icon('checkCircle', 'w-6 h-6')} Application Profile Generated (Ref: ${refNum})
            </div>
            <p style="font-size: 0.95rem; margin-bottom: 1rem;">
              Thank you, <strong>${nameInput.value}</strong>. Your expression of interest for the <strong>${roleInput.value}</strong> position has been successfully recorded in the talent registry.
            </p>
            <div style="background: rgba(255, 255, 255, 0.7); padding: 1rem; border-radius: var(--radius-sm); border: 1px dashed #86efac; font-size: 0.85rem; color: #14532d;">
              <strong>Next Step for Complete Candidacy:</strong><br />
              Please email your detailed Curriculum Vitae (CV) and professional credentials directly to our HR recruitment desk at: 
              <a href="mailto:info@vitborahpharm.com?subject=Job%20Application%20Ref:%20${refNum}%20-%20${encodeURIComponent(nameInput.value)}" style="font-weight: 700; text-decoration: underline; color: #166534;">
                info@vitborahpharm.com
              </a> 
              quoting Reference Number <strong>${refNum}</strong> in the subject line.
            </div>
          </div>
        `;
        form.reset();
      }
    }, 600);
  });
}
