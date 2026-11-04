import { icon } from '../utils/icons.js';

export function renderHeader() {
  return `
    <!-- Top Regulatory & Emergency Bar -->
    <div class="top-bar">
      <div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap;">
          <span style="display: inline-flex; align-items: center; gap: 0.35rem;">
            ${icon('shieldCheck', 'w-4 h-4')} <strong>RC: 753571</strong> • NAFDAC Regulated & Quality Assured
          </span>
          <span style="display: inline-flex; align-items: center; gap: 0.35rem; opacity: 0.9;">
            ${icon('mapPin', 'w-4 h-4')} Headquarters: Ibeju Lekki, Lagos
          </span>
        </div>
        <div style="display: flex; align-items: center; gap: 1.25rem;">
          <a href="tel:+2348063022165" style="display: inline-flex; align-items: center; gap: 0.35rem;">
            ${icon('phone', 'w-3.5 h-3.5')} +234 806 302 2165
          </a>
          <a href="mailto:info@vitborahpharm.com" style="display: inline-flex; align-items: center; gap: 0.35rem;">
            ${icon('mail', 'w-3.5 h-3.5')} info@vitborahpharm.com
          </a>
        </div>
      </div>
    </div>

    <!-- Main Sticky Navigation -->
    <header class="site-header" id="site-header">
      <div class="container header-inner">
        <!-- Logo -->
        <a href="/" class="brand-logo-link" title="Vitborah Pharmaceutical Company Limited">
          <img src="/company_image/vitborah logo.jpeg" alt="Vitborah Pharmaceuticals Logo" class="brand-logo-img" />
        </a>

        <!-- Desktop Navigation -->
        <nav class="nav-desktop" aria-label="Main Navigation">
          <a href="/" class="nav-link" data-nav-link>Home</a>
          <a href="/about/" class="nav-link" data-nav-link>About Us</a>
          <a href="/products/therapeutic/" class="nav-link" data-nav-link>Therapeutic Medicines</a>
          <a href="/products/supplements/" class="nav-link" data-nav-link>Supplements</a>
          <a href="/leadership/" class="nav-link" data-nav-link>Leadership</a>
          <a href="/branches/" class="nav-link" data-nav-link>Branches</a>
          <a href="/news/" class="nav-link" data-nav-link>News</a>
          <a href="/charity/" class="nav-link" data-nav-link>Foundation</a>
          <a href="/contact/" class="nav-link" data-nav-link>Contact</a>
        </nav>

        <!-- Right Action Button -->
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <a href="/contact/" class="btn btn-primary btn-sm" style="display: none;" id="header-cta-btn">
            Distributor Inquiries
          </a>
          <button type="button" class="mobile-menu-btn" id="mobile-toggle-btn" aria-label="Open mobile menu">
            ${icon('menu', 'w-6 h-6')}
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
      <div class="mobile-drawer-panel">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
          <a href="/" class="brand-logo-link" style="gap: 0.5rem;">
            <img src="/company_image/vitborah logo.jpeg" alt="Vitborah" style="height: 2.25rem; border-radius: 4px;" />
            <span style="font-family: var(--font-heading); font-weight: 800; color: var(--color-primary-dark); font-size: 1.15rem;">VITBORAH</span>
          </a>
          <button type="button" class="btn btn-secondary btn-sm" id="mobile-close-btn" aria-label="Close mobile menu">
            ${icon('close', 'w-5 h-5')}
          </button>
        </div>

        <nav style="display: flex; flex-direction: column; gap: 0.25rem; margin-bottom: 2rem;">
          <a href="/" class="mobile-nav-link" data-nav-link><span>Home</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/about/" class="mobile-nav-link" data-nav-link><span>About Us</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/products/therapeutic/" class="mobile-nav-link" data-nav-link><span>Therapeutic Medicines</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/products/supplements/" class="mobile-nav-link" data-nav-link><span>Dietary Supplements</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/leadership/" class="mobile-nav-link" data-nav-link><span>Board & Leadership</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/branches/" class="mobile-nav-link" data-nav-link><span>Branches & Depots</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/news/" class="mobile-nav-link" data-nav-link><span>Company News</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/charity/" class="mobile-nav-link" data-nav-link><span>Vitborah Foundation</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/partners/" class="mobile-nav-link" data-nav-link><span>Our Partners</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/work-with-us/" class="mobile-nav-link" data-nav-link><span>Work With Us</span> ${icon('chevronRight', 'w-4 h-4')}</a>
          <a href="/contact/" class="mobile-nav-link" data-nav-link><span>Contact Us</span> ${icon('chevronRight', 'w-4 h-4')}</a>
        </nav>

        <div style="background-color: var(--color-bg-subtle); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--color-border); margin-top: auto;">
          <p style="font-size: 0.825rem; font-weight: 700; color: var(--color-text-main); margin-bottom: 0.5rem;">Corporate Headquarters</p>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.4; margin-bottom: 0.75rem;">
            No. 2, Olori Kudrat Elegushi St, Awoyaya, Ibeju Lekki, Lagos
          </p>
          <a href="tel:+2348063022165" class="btn btn-primary btn-sm" style="width: 100%;">
            ${icon('phone', 'w-4 h-4')} Call +234 806 302 2165
          </a>
        </div>
      </div>
    </div>
  `;
}

export function initHeaderListeners() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const closeBtn = document.getElementById('mobile-close-btn');
  const drawer = document.getElementById('mobile-drawer');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer || e.target.closest('a')) {
        drawer.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Header scroll shadow
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Responsive button display
  const headerCta = document.getElementById('header-cta-btn');
  if (headerCta && window.innerWidth >= 1200) {
    headerCta.style.display = 'inline-flex';
  }
}
