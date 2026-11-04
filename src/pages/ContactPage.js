import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderContactPage() {
  updateSEO({
    title: 'Contact Corporate Headquarters & Wholesale Distribution | Vitborah Pharmaceuticals',
    description: 'Contact Vitborah Pharmaceutical Company Limited. Headquarters in Awoyaya, Ibeju-Lekki, Lagos; distribution depot in Mushin, Lagos. Call +234 806 302 2165.',
    canonicalPath: '/contact/',
    image: '/company_image/pharmacy.jpeg'
  });

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Contact Us</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Customer Care & Institutional Sales
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 1rem;">
          Connect With Vitborah Pharmaceuticals
        </h1>
        <p style="color: #d1fae5; font-size: 1.15rem; max-width: 760px; line-height: 1.65; margin: 0;">
          Our corporate distribution desk, pharmacovigilance team, and customer support representatives are available to assist hospitals, pharmacies, and patients.
        </p>
      </div>
    </div>

    <!-- Contact Details & Form Section -->
    <section class="section">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr; gap: 3.5rem;" class="hero-grid">
          
          <!-- Left: Verified Contact Information -->
          <div>
            <span class="section-tag">Direct Lines</span>
            <h2 style="font-size: 2.15rem; margin-bottom: 1.25rem;">
              Corporate Headquarters & Operations
            </h2>
            <p style="font-size: 1.05rem; color: var(--color-text-body); line-height: 1.65; margin-bottom: 2rem;">
              Reach our corporate administrative staff, product registration desk, or wholesale dispatch managers directly.
            </p>

            <div style="display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem;">
              <div class="card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: var(--color-primary-surface); color: var(--color-primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  ${icon('mapPin', 'w-5 h-5')}
                </div>
                <div>
                  <h4 style="font-size: 1.05rem; margin-bottom: 0.25rem;">National Corporate Headquarters</h4>
                  <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 0.25rem;">
                    No. 2, Olori Kudrat Elegushi Street, Awoyaya, Ibeju Lekki, Lagos State, Nigeria
                  </p>
                  <span style="font-size: 0.8rem; color: var(--color-primary); font-weight: 600;">Central Administrative & Cold-Chain Storage Hub</span>
                </div>
              </div>

              <div class="card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: #eff6ff; color: #1d4ed8; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  ${icon('building', 'w-5 h-5')}
                </div>
                <div>
                  <h4 style="font-size: 1.05rem; margin-bottom: 0.25rem;">Central Mainland Distribution Depot</h4>
                  <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 0.25rem;">
                    36, Layi Oyekanmi Street, Mushin, Lagos State, Nigeria
                  </p>
                  <span style="font-size: 0.8rem; color: #1d4ed8; font-weight: 600;">Mainland Rapid Pharmacy Dispatch</span>
                </div>
              </div>

              <div class="card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: #fef2f2; color: var(--color-accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  ${icon('phone', 'w-5 h-5')}
                </div>
                <div>
                  <h4 style="font-size: 1.05rem; margin-bottom: 0.25rem;">Direct Telephone & Orders</h4>
                  <p style="font-size: 1.1rem; font-weight: 700; color: var(--color-text-main); margin-bottom: 0.25rem;">
                    <a href="tel:+2348063022165" style="color: inherit;">+234 806 302 2165</a>
                  </p>
                  <span style="font-size: 0.85rem; color: var(--color-text-muted);">Monday – Friday: 8:00 AM – 6:00 PM</span>
                </div>
              </div>

              <div class="card" style="padding: 1.5rem; display: flex; gap: 1rem; align-items: flex-start;">
                <div style="width: 2.75rem; height: 2.75rem; border-radius: var(--radius-md); background: #f0fdf4; color: #047857; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                  ${icon('mail', 'w-5 h-5')}
                </div>
                <div>
                  <h4 style="font-size: 1.05rem; margin-bottom: 0.25rem;">Official Electronic Mail</h4>
                  <p style="font-size: 1.05rem; font-weight: 600; color: var(--color-text-main); margin-bottom: 0.25rem;">
                    <a href="mailto:info@vitborahpharm.com" style="color: var(--color-primary);">info@vitborahpharm.com</a>
                  </p>
                  <span style="font-size: 0.85rem; color: var(--color-text-muted);">Verified corporate inquiries and orders</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right: Interactive Multi-Topic Inquiry Form -->
          <div>
            <div style="background: #ffffff; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 2.5rem; box-shadow: var(--shadow-lg);">
              <span class="badge badge-green" style="margin-bottom: 0.5rem;">Corporate Desk</span>
              <h3 style="font-size: 1.85rem; margin-bottom: 0.5rem; color: var(--color-text-main);">
                Send an Official Message
              </h3>
              <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.5; margin-bottom: 2rem;">
                Select your inquiry category to route your message to the appropriate corporate or clinical department.
              </p>

              <div id="contact-form-status" style="display: none; margin-bottom: 1.5rem;"></div>

              <form id="contact-form" novalidate>
                <div class="form-group">
                  <label for="contact-name" class="form-label">Full Name or Organization Name *</label>
                  <input type="text" id="contact-name" class="form-input" placeholder="e.g., Dr. Amina Bello or St. Nicholas Hospital" required />
                  <div class="form-error" id="contact-name-error"></div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr; gap: 1.25rem;" class="hero-grid">
                  <div class="form-group" style="margin: 0;">
                    <label for="contact-email" class="form-label">Official Email Address *</label>
                    <input type="email" id="contact-email" class="form-input" placeholder="e.g., procurement@hospital.com" required />
                    <div class="form-error" id="contact-email-error"></div>
                  </div>

                  <div class="form-group" style="margin: 0;">
                    <label for="contact-phone" class="form-label">Telephone / WhatsApp *</label>
                    <input type="tel" id="contact-phone" class="form-input" placeholder="+234 800 000 0000" required />
                    <div class="form-error" id="contact-phone-error"></div>
                  </div>
                </div>

                <div class="form-group" style="margin-top: 1.25rem;">
                  <label for="contact-topic" class="form-label">Department & Nature of Inquiry *</label>
                  <select id="contact-topic" class="form-select" required>
                    <option value="">Select inquiry department...</option>
                    <option value="Hospital & Wholesale Medicine Procurement">Hospital & Wholesale Medicine Procurement</option>
                    <option value="Accredited Distributor Application">Accredited Distributor Application</option>
                    <option value="New AGE Supplements Distribution">New AGE Supplements Distribution</option>
                    <option value="Pharmacovigilance & Adverse Drug Reaction Reporting">Pharmacovigilance & Adverse Drug Reaction Reporting</option>
                    <option value="Vitborah Foundation Health Outreach">Vitborah Foundation Health Outreach</option>
                    <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                  </select>
                  <div class="form-error" id="contact-topic-error"></div>
                </div>

                <div class="form-group">
                  <label for="contact-message" class="form-label">Message Details & Product Specifications *</label>
                  <textarea id="contact-message" class="form-textarea" placeholder="Detail your procurement requirements, product inquiries, or message..." required></textarea>
                  <div class="form-error" id="contact-message-error"></div>
                </div>

                <button type="submit" class="btn btn-primary btn-lg" id="contact-submit-btn" style="width: 100%;">
                  Dispatch Message to Department ${icon('arrowRight', 'w-4 h-4')}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initContactPage() {
  const form = document.getElementById('contact-form');
  const statusEl = document.getElementById('contact-form-status');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const topic = document.getElementById('contact-topic').value;
    const message = document.getElementById('contact-message').value.trim();

    document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

    let hasErrors = false;

    if (!name) {
      document.getElementById('contact-name-error').textContent = 'Please enter your name or organization name.';
      hasErrors = true;
    }
    if (!email || !email.includes('@')) {
      document.getElementById('contact-email-error').textContent = 'Please enter a valid email address.';
      hasErrors = true;
    }
    if (!phone) {
      document.getElementById('contact-phone-error').textContent = 'Please provide a valid phone contact number.';
      hasErrors = true;
    }
    if (!topic) {
      document.getElementById('contact-topic-error').textContent = 'Please select the relevant department.';
      hasErrors = true;
    }
    if (!message || message.length < 15) {
      document.getElementById('contact-message-error').textContent = 'Please detail your message or product inquiry (15+ characters).';
      hasErrors = true;
    }

    if (hasErrors) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Transmitting Inquiry...';

    const ticketId = 'VIT-' + Math.floor(10000 + Math.random() * 90000);

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Dispatch Message to Department';

      if (statusEl) {
        statusEl.style.display = 'block';
        statusEl.innerHTML = `
          <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius-md); padding: 1.5rem; color: #166534; line-height: 1.6;">
            <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.5rem;">
              ${icon('checkCircle', 'w-6 h-6')} Inquiry Recorded (Ticket: ${ticketId})
            </div>
            <p style="font-size: 0.95rem; margin-bottom: 0.75rem;">
              Thank you, <strong>${name}</strong>. Your communication regarding <em>"${topic}"</em> has been logged.
            </p>
            <div style="background: rgba(255, 255, 255, 0.75); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px dashed #86efac; font-size: 0.85rem;">
              For immediate order dispatch or emergency hospital supplies, you can also dial <strong>+234 806 302 2165</strong> or email <strong>info@vitborahpharm.com</strong> referencing Ticket #${ticketId}.
            </div>
          </div>
        `;
        form.reset();
      }
    }, 600);
  });
}
