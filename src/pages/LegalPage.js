import { icon } from '../utils/icons.js';
import { updateSEO } from '../utils/seo.js';

export function renderLegalPage(type = 'privacy') {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Corporate Privacy Policy' : 'Terms of Use & Regulatory Disclaimer';

  updateSEO({
    title: `${title} | Vitborah Pharmaceuticals`,
    description: `Official ${title} for Vitborah Pharmaceutical Company Limited (RC 753571). Review our data governance, clinical terms, and regulatory compliance standards.`,
    canonicalPath: isPrivacy ? '/privacy/' : '/terms/',
    image: '/company_image/pharmacy.jpeg'
  });

  return `
    <!-- Hero Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 4rem 0 4.5rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">${title}</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Regulatory Governance
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2.25rem, 4vw, 3.25rem); margin-bottom: 0.75rem;">
          ${title}
        </h1>
        <p style="color: #d1fae5; font-size: 1.1rem; margin: 0;">
          Last updated and ratified: October 2026 • Vitborah Pharmaceutical Company Limited (RC: 753571)
        </p>
      </div>
    </div>

    <!-- Legal Body -->
    <section class="section">
      <div class="container" style="max-width: 860px;">
        <div style="display: flex; gap: 1rem; margin-bottom: 2.5rem; border-bottom: 1px solid var(--color-border); padding-bottom: 1rem;">
          <a href="/privacy/" class="btn ${isPrivacy ? 'btn-primary btn-sm' : 'btn-secondary btn-sm'}">
            Privacy Policy
          </a>
          <a href="/terms/" class="btn ${!isPrivacy ? 'btn-primary btn-sm' : 'btn-secondary btn-sm'}">
            Terms of Use & Disclaimer
          </a>
        </div>

        ${isPrivacy ? renderPrivacyContent() : renderTermsContent()}
      </div>
    </section>
  `;
}

function renderPrivacyContent() {
  return `
    <div style="font-size: 1.05rem; line-height: 1.75; color: var(--color-text-body);">
      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">1. Purpose & Scope of Data Processing</h3>
      <p style="margin-bottom: 1.5rem;">
        Vitborah Pharmaceutical Company Limited respects your privacy and is dedicated to complying with the Nigeria Data Protection Act (NDPA) 2023. This policy explains how we collect, store, and process personal and institutional data through our corporate website (vitborahpharm.com) and associated distribution channels.
      </p>

      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">2. Information We Collect</h3>
      <p style="margin-bottom: 1rem;">
        We collect only data necessary for ethical pharmaceutical commerce and communications, including:
      </p>
      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li><strong>Commercial & Procurement Information:</strong> Name, professional titles, hospital or pharmacy registration, official email, phone numbers, and delivery addresses.</li>
        <li><strong>Pharmacovigilance Data:</strong> Details of adverse drug events, patient age range, formulation batch numbers, and reporting healthcare professional contact data as mandated by NAFDAC guidelines.</li>
        <li><strong>Recruitment Data:</strong> Curriculum Vitae (CV), professional credentials, and career history submitted via the Work With Us portal.</li>
      </ul>

      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">3. Use of Information</h3>
      <p style="margin-bottom: 1.5rem;">
        Information collected is used strictly to fulfill wholesale orders, respond to clinical inquiries, ensure cold-chain delivery logistics, evaluate distributor qualifications, and comply with statutory public health safety reporting. We never sell, lease, or monetize user data.
      </p>

      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">4. Data Protection & Security</h3>
      <p style="margin-bottom: 1.5rem;">
        All personal and institutional records are retained on secure servers with strict access controls. Only authorized regulatory affairs and customer support personnel may access confidential records.
      </p>

      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">5. Contact for Privacy Matters</h3>
      <p style="margin-bottom: 1rem;">
        To review, rectify, or request erasure of your data, please write to our Data Protection Officer at:
      </p>
      <div style="background: var(--color-bg-subtle); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); font-size: 0.95rem;">
        <strong>Data Protection Desk</strong><br />
        Vitborah Pharmaceutical Company Limited<br />
        No. 2, Olori Kudrat Elegushi Street, Awoyaya, Ibeju Lekki, Lagos State, Nigeria<br />
        Email: <a href="mailto:info@vitborahpharm.com">info@vitborahpharm.com</a>
      </div>
    </div>
  `;
}

function renderTermsContent() {
  return `
    <div style="font-size: 1.05rem; line-height: 1.75; color: var(--color-text-body);">
      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">1. Acceptance of Terms</h3>
      <p style="margin-bottom: 1.5rem;">
        By accessing the corporate website of Vitborah Pharmaceutical Company Limited (RC: 753571), you agree to abide by these Terms of Use, statutory Nigerian healthcare regulations, and intellectual property protections.
      </p>

      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">2. Non-Substitute for Medical Advice</h3>
      <div style="background: #fffbeb; border-left: 4px solid #f59e0b; padding: 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 1.5rem; font-size: 0.95rem; color: #92400e;">
        <strong>Clinical Disclaimer:</strong> The information published on this website regarding prescription therapeutics, injectables, active ingredients, and dietary supplements is for educational and wholesale healthcare trade purposes only. It is not intended to replace consultation with a registered medical practitioner, nor should it be used for self-diagnosis or self-treatment.
      </div>

      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">3. Prescription Drug Dispensation</h3>
      <p style="margin-bottom: 1.5rem;">
        Prescription-only medicines (Rx) displayed on this platform (including Boracef Ceftriaxone, Boraflox, Artborah, Staxim, and Levotreat) are sold only to licensed pharmaceutical premises, teaching hospitals, and registered medical clinics upon presentation of valid regulatory documentation.
      </p>

      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">4. Pharmacovigilance Reporting</h3>
      <p style="margin-bottom: 1.5rem;">
        In alignment with the National Agency for Food and Drug Administration and Control (NAFDAC) post-market surveillance directives, healthcare providers and consumers who observe unexpected adverse drug reactions (ADRs) associated with any Vitborah brand are encouraged to report promptly via our contact desk or directly to NAFDAC pharmacovigilance centers.
      </p>

      <h3 style="font-size: 1.4rem; margin-bottom: 0.75rem; color: var(--color-text-main);">5. Intellectual Property</h3>
      <p style="margin-bottom: 1.5rem;">
        "VITBORAH", the Vitborah corporate insignia, "New AGE", product formulations, packaging graphics, and website design tokens are protected trademarks and proprietary assets of Vitborah Pharmaceutical Company Limited. Unauthorized reproduction or commercial imitation is strictly prohibited.
      </p>
    </div>
  `;
}
