import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderWorkWithUsPage() {
  updateSEO({
    title: 'Work With Us | Careers & Partnership Applications | Vitborah Pharmaceuticals',
    description: 'Apply to work with Vitborah Pharmaceutical Company Limited as an authorized distributor, sales representative, healthcare partner, or team member in Nigeria.',
    canonicalPath: '/work-with-us/',
    image: '/company_image/pharmacy.jpeg'
  });

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 3.5rem 0 4rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Work With Us</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Partnerships & Careers Portal
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2rem, 3.8vw, 3rem); margin-bottom: 0.75rem;">
          Work With Vitborah Pharmaceuticals
        </h1>
        <p style="color: #d1fae5; font-size: 1.05rem; max-width: 760px; line-height: 1.6; margin: 0;">
          Whether you are an individual medical sales professional, a commercial healthcare distributor, or an institutional partner seeking reliable pharmaceutical supply across Nigeria, we welcome your collaboration.
        </p>
      </div>
    </div>

    <!-- Application Form Section -->
    <section class="section">
      <div class="container">
        <div style="max-width: 820px; margin: 0 auto; background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: clamp(1.5rem, 3vw, 2.75rem); box-shadow: var(--shadow-lg);">
          
          <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--color-border-subtle); padding-bottom: 1.25rem;">
            <span class="badge badge-green" style="margin-bottom: 0.5rem;">Application & Partnership Intake</span>
            <h2 style="font-size: clamp(1.5rem, 2.5vw, 2rem); margin-bottom: 0.35rem; color: var(--color-text-main);">
              Partnership & Employment Application
            </h2>
            <p style="color: var(--color-text-muted); font-size: 0.925rem; margin: 0;">
              Please complete the verified form below. Our executive partnerships and recruitment committee reviews submissions promptly.
            </p>
          </div>

          <!-- Status Message Target -->
          <div id="work-form-status" style="display: none; margin-bottom: 1.5rem;"></div>

          <form id="work-with-us-form" novalidate>
            
            <!-- 1. Applicant Type (Individual or Company) -->
            <div class="form-group" style="margin-bottom: 1.5rem;">
              <label class="form-label" style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem; display: block;">
                Applicant Type *
              </label>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.75rem;">
                <label style="display: flex; align-items: center; gap: 0.65rem; padding: 0.85rem 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; background: var(--color-bg-subtle);" class="applicant-type-card">
                  <input type="radio" name="applicantType" value="Individual" checked id="type-individual" />
                  <div>
                    <strong style="display: block; font-size: 0.9rem; color: var(--color-text-main);">Individual</strong>
                    <span style="font-size: 0.75rem; color: var(--color-text-muted);">Practitioner, Sales Rep, or Career Candidate</span>
                  </div>
                </label>

                <label style="display: flex; align-items: center; gap: 0.65rem; padding: 0.85rem 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; background: var(--color-bg-subtle);" class="applicant-type-card">
                  <input type="radio" name="applicantType" value="Company" id="type-company" />
                  <div>
                    <strong style="display: block; font-size: 0.9rem; color: var(--color-text-main);">Company / Entity</strong>
                    <span style="font-size: 0.75rem; color: var(--color-text-muted);">Wholesaler, Clinic, Pharmacy Chain, or Hospital</span>
                  </div>
                </label>
              </div>
            </div>

            <!-- 2. Role They Want: Distributor, Sales Representative, Partner, Other -->
            <div class="form-group" style="margin-bottom: 1.75rem;">
              <label class="form-label" style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem; display: block;">
                Role / Engagement Category *
              </label>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 0.65rem;">
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer;">
                  <input type="radio" name="roleCategory" value="Distributor" checked />
                  <span style="font-size: 0.85rem; font-weight: 600;">Distributor</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer;">
                  <input type="radio" name="roleCategory" value="Sales Representative" />
                  <span style="font-size: 0.85rem; font-weight: 600;">Sales Representative</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer;">
                  <input type="radio" name="roleCategory" value="Partner" />
                  <span style="font-size: 0.85rem; font-weight: 600;">Partner / Hospital</span>
                </label>
                <label style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer;">
                  <input type="radio" name="roleCategory" value="Other" />
                  <span style="font-size: 0.85rem; font-weight: 600;">Other Discipline</span>
                </label>
              </div>
            </div>

            <!-- 3. Form Input Fields -->
            <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem;" class="hero-grid">
              <div class="form-group" style="margin: 0;">
                <label for="work-name" class="form-label" id="name-label">Full Name *</label>
                <input type="text" id="work-name" class="form-input" placeholder="e.g., Pharm. Chukwuemeka Bello" required />
                <div class="form-error" id="work-name-error"></div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label for="work-email" class="form-label">Email Address *</label>
                <input type="email" id="work-email" class="form-input" placeholder="e.g., contact@example.com" required />
                <div class="form-error" id="work-email-error"></div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 1.25rem;" class="hero-grid">
              <div class="form-group" style="margin: 0;">
                <label for="work-phone" class="form-label">Phone / WhatsApp Number *</label>
                <input type="tel" id="work-phone" class="form-input" placeholder="+234 800 000 0000" required />
                <div class="form-error" id="work-phone-error"></div>
              </div>

              <div class="form-group" style="margin: 0;">
                <label for="work-location" class="form-label">Location (State & City) *</label>
                <input type="text" id="work-location" class="form-input" placeholder="e.g., Lagos (Ikeja), Abuja, Onitsha, Kano..." required />
                <div class="form-error" id="work-location-error"></div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-top: 1.25rem;" class="hero-grid">
              <div class="form-group" style="margin: 0;">
                <label for="work-region" class="form-label">Proposed Territory / Distribution Area</label>
                <input type="text" id="work-region" class="form-input" placeholder="e.g., Lagos Island & Lekki, South-East States, North-Central FCT..." />
              </div>

              <div class="form-group" style="margin: 0;">
                <label for="work-experience" class="form-label">Years of Commercial / Clinical Experience</label>
                <select id="work-experience" class="form-select">
                  <option value="Entry / Under 2 years">Entry / Under 2 years</option>
                  <option value="2 – 5 years" selected>2 – 5 years</option>
                  <option value="5 – 10 years">5 – 10 years</option>
                  <option value="10+ years (Established Distributor)">10+ years (Established Distributor / Network)</option>
                </select>
              </div>
            </div>

            <!-- Message Field -->
            <div class="form-group" style="margin-top: 1.25rem; margin-bottom: 1.5rem;">
              <label for="work-message" class="form-label">
                Why do you want to work with Vitborah Pharmaceuticals? *
              </label>
              <textarea 
                id="work-message" 
                class="form-textarea" 
                rows="4" 
                placeholder="Share a short message describing your distribution infrastructure, current retail network, or professional clinical goals with Vitborah..."
                required
              ></textarea>
              <div class="form-error" id="work-message-error"></div>
            </div>

            <div style="background-color: var(--color-bg-subtle); border-radius: var(--radius-md); padding: 0.85rem 1rem; border: 1px solid var(--color-border); font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 1.5rem; display: flex; gap: 0.65rem; align-items: center;">
              <span style="color: var(--color-primary); flex-shrink: 0;">${icon('shieldCheck', 'w-5 h-5')}</span>
              <span><strong>Data Privacy:</strong> All partnership and career submissions are held in strict commercial confidence in accordance with the Nigerian Data Protection Act (NDPA).</span>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" id="work-submit-btn" style="width: 100%; justify-content: center; font-weight: 700;">
              Submit Application to Executive Committee ${icon('arrowRight', 'w-4 h-4')}
            </button>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function initWorkWithUsPage() {
  const form = document.getElementById('work-with-us-form');
  const statusEl = document.getElementById('work-form-status');
  const submitBtn = document.getElementById('work-submit-btn');
  const nameLabel = document.getElementById('name-label');
  const nameInput = document.getElementById('work-name');

  if (!form) return;

  // Toggle label depending on Applicant Type
  document.querySelectorAll('input[name="applicantType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (nameLabel && nameInput) {
        if (e.target.value === 'Company') {
          nameLabel.textContent = 'Company / Institutional Name *';
          nameInput.placeholder = 'e.g., Apex Healthcare Logistics Ltd / Good Shepherd Hospital';
        } else {
          nameLabel.textContent = 'Full Legal Name *';
          nameInput.placeholder = 'e.g., Pharm. Chukwuemeka Bello';
        }
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameVal = document.getElementById('work-name')?.value.trim();
    const emailVal = document.getElementById('work-email')?.value.trim();
    const phoneVal = document.getElementById('work-phone')?.value.trim();
    const locationVal = document.getElementById('work-location')?.value.trim();
    const regionVal = document.getElementById('work-region')?.value.trim();
    const messageVal = document.getElementById('work-message')?.value.trim();
    const applicantType = document.querySelector('input[name="applicantType"]:checked')?.value || 'Individual';
    const roleCategory = document.querySelector('input[name="roleCategory"]:checked')?.value || 'Distributor';

    // Clear previous errors
    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

    let hasErrors = false;

    if (!nameVal) {
      document.getElementById('work-name-error').textContent = 'Please enter your name or company name.';
      hasErrors = true;
    }
    if (!emailVal || !emailVal.includes('@')) {
      document.getElementById('work-email-error').textContent = 'Please provide a valid email address.';
      hasErrors = true;
    }
    if (!phoneVal || phoneVal.length < 8) {
      document.getElementById('work-phone-error').textContent = 'Please enter a valid telephone or WhatsApp contact.';
      hasErrors = true;
    }
    if (!locationVal) {
      document.getElementById('work-location-error').textContent = 'Please specify your state and city location.';
      hasErrors = true;
    }
    if (!messageVal || messageVal.length < 15) {
      document.getElementById('work-message-error').textContent = 'Please provide a brief statement (15+ characters) about why you want to work with Vitborah.';
      hasErrors = true;
    }

    if (hasErrors) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Recording Application...';

    const refId = 'VIB-APP-' + Math.floor(100000 + Math.random() * 900000);

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit Application to Executive Committee';

      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.innerHTML = `
          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 1.5rem; color: #166534; line-height: 1.6;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; font-size: 1.15rem; margin-bottom: 0.5rem;">
              ${icon('checkCircle', 'w-6 h-6')} Application Received Successfully
            </div>
            <p style="font-size: 0.95rem; margin-bottom: 0.75rem;">
              Thank you, <strong>${nameVal}</strong>. Your application as a <strong>${roleCategory}</strong> (${applicantType}) has been logged in our central registry with Reference ID <strong>${refId}</strong>.
            </p>
            <div style="background: rgba(255, 255, 255, 0.8); border: 1px dashed #86efac; border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.85rem; margin-bottom: 1.25rem;">
              <div><strong>Tracking Reference:</strong> ${refId}</div>
              <div><strong>Applicant:</strong> ${nameVal} (${applicantType})</div>
              <div><strong>Target Category:</strong> ${roleCategory}</div>
              <div><strong>Primary Location:</strong> ${locationVal}${regionVal ? ` • Coverage: ${regionVal}` : ''}</div>
            </div>
            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <a href="mailto:info@vitborahpharm.com?subject=Partnership%20Application%20Ref:%20${refId}%20-%20${encodeURIComponent(nameVal)}&body=${encodeURIComponent(`Reference: ${refId}\nApplicant: ${nameVal} (${applicantType})\nRole: ${roleCategory}\nPhone: ${phoneVal}\nLocation: ${locationVal}\nMessage: ${messageVal}`)}" class="btn btn-primary btn-sm" style="flex: 1; justify-content: center; min-width: 180px;">
                ${icon('mail', 'w-4 h-4')} Send Direct Email (Ref: ${refId})
              </a>
              <a href="https://wa.me/2348063022165?text=${encodeURIComponent(`Hello Vitborah Partnerships,\n\nI just submitted my application via the portal:\n- Reference: ${refId}\n- Name: ${nameVal} (${applicantType})\n- Role: ${roleCategory}\n- Location: ${locationVal}`)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="flex: 1; justify-content: center; min-width: 180px;">
                ${icon('phone', 'w-4 h-4')} Chat on WhatsApp
              </a>
            </div>
          </div>
        `;
        form.reset();
        statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 600);
  });
}
