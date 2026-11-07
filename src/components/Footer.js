import { icon } from '../utils/icons.js';

export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Identity & Credentials -->
          <div>
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
              <img src="/company_image/vitborah-logo.jpeg" alt="Vitborah Logo" style="height: 2.75rem; border-radius: 4px; background: #fff; padding: 2px;" />
              <div>
                <span style="font-family: var(--font-heading); font-weight: 800; font-size: 1.35rem; color: #ffffff; letter-spacing: -0.01em; display: block; line-height: 1;">VITBORAH</span>
                <span style="font-size: 0.75rem; color: #a7f3d0; text-transform: uppercase; letter-spacing: 0.08em;">Pharmaceutical Company Ltd.</span>
              </div>
            </div>
            <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 1.25rem;">
              Incorporated under Nigerian laws (RC: 753571) since June 2008. Dedicated to marketing and nationwide distribution of NAFDAC-certified therapeutic medicines and premium New AGE dietary supplements.
            </p>
            <div style="display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem; color: #a7f3d0;">
              <span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                ${icon('shieldCheck', 'w-4 h-4')} 100% NAFDAC Regulated Formulations
              </span>
              <span style="display: inline-flex; align-items: center; gap: 0.5rem;">
                ${icon('award', 'w-4 h-4')} WHO-GMP Manufacturing Standards
              </span>
            </div>
          </div>

          <!-- Col 2: Quick Links -->
          <div>
            <h4 class="footer-col-title">Corporate Portal</h4>
            <ul class="footer-links">
              <li><a href="/">Corporate Home</a></li>
              <li><a href="/about/">About Vitborah</a></li>
              <li><a href="/about#leadership">Board of Directors</a></li>
              <li><a href="/about#branches">Branches & Depots</a></li>
              <li><a href="/leadership/vitus-agada/">CEO Profile</a></li>
              <li><a href="/charity/">Vitborah Foundation</a></li>
              <li><a href="/news/">News & Announcements</a></li>
              <li><a href="/partners/">Our Partners</a></li>
              <li><a href="/work-with-us/">Careers / Work With Us</a></li>
              <li><a href="/contact/">Contact Headquarters</a></li>
            </ul>
          </div>

          <!-- Col 3: Pharmaceutical Portfolios -->
          <div>
            <h4 class="footer-col-title">Product Portfolio</h4>
            <ul class="footer-links">
              <li><a href="/products/therapeutic/">Therapeutic Medicines Catalog</a></li>
              <li><a href="/products/supplements/">New AGE Dietary Supplements</a></li>
              <li><a href="/products/boracef-ceftriaxone/">Boracef Ceftriaxone 1g</a></li>
              <li><a href="/products/boraflox/">Boraflox 500 Ciprofloxacin</a></li>
              <li><a href="/products/artborah-tablets/">Artborah ACT Antimalarial</a></li>
              <li><a href="/products/staxim-tablet/">Staxim 500 Cefuroxime</a></li>
              <li><a href="/products/berberine-600mg/">New AGE Berberine 600mg</a></li>
              <li><a href="/products/omega-3-fish-oil-1000mg/">New AGE Omega-3 Fish Oil</a></li>
              <li><a href="/products/magnesium-glycinate-400mg/">New AGE Magnesium Glycinate</a></li>
            </ul>
          </div>

          <!-- Col 4: Corporate Contacts -->
          <div>
            <h4 class="footer-col-title">Headquarters & Supply</h4>
            <div style="display: flex; flex-direction: column; gap: 1rem; font-size: 0.9rem; color: #cbd5e1;">
              <div style="display: flex; align-items: flex-start; gap: 0.65rem;">
                <span style="color: #a7f3d0; margin-top: 3px;">${icon('mapPin', 'w-4 h-4')}</span>
                <span>
                  <strong>Corporate Headquarters:</strong><br />
                  No. 2, Olori Kudrat Elegushi Street, Awoyaya, Ibeju Lekki, Lagos State, Nigeria
                </span>
              </div>
              <div style="display: flex; align-items: flex-start; gap: 0.65rem;">
                <span style="color: #a7f3d0; margin-top: 3px;">${icon('building', 'w-4 h-4')}</span>
                <span>
                  <strong>Mainland Distribution Depot:</strong><br />
                  36, Layi Oyekanmi Street, Mushin, Lagos State, Nigeria
                </span>
              </div>
              <div style="display: flex; align-items: center; gap: 0.65rem;">
                <span style="color: #a7f3d0;">${icon('phone', 'w-4 h-4')}</span>
                <a href="tel:+2348063022165" style="color: #ffffff; font-weight: 600;">+234 806 302 2165</a>
              </div>
              <div style="display: flex; align-items: center; gap: 0.65rem;">
                <span style="color: #a7f3d0;">${icon('mail', 'w-4 h-4')}</span>
                <a href="mailto:info@vitborahpharm.com" style="color: #ffffff;">info@vitborahpharm.com</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Copyright -->
        <div class="footer-bottom">
          <div>
            &copy; 2008 – 2026 <strong>Vitborah Pharmaceutical Company Limited</strong>. All rights reserved. Registration RC: 753571.
          </div>
          <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
            <a href="/privacy/" style="color: #94a3b8;">Privacy Policy</a>
            <a href="/terms/" style="color: #94a3b8;">Terms of Use</a>
            <a href="/sitemap.xml" target="_blank" style="color: #94a3b8;">XML Sitemap</a>
            <a href="/contact/" style="color: #94a3b8;">Pharmacovigilance Reporting</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
