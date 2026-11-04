import therapeuticProducts from '../data/therapeuticProducts.json';
import { icon } from '../utils/icons.js';
import { renderProductCard } from '../components/ProductCard.js';
import { renderProductCarousel, initCarouselListeners } from '../components/ProductCarousel.js';
import { updateSEO } from '../utils/seo.js';

let activeCategory = 'All';
let activeForm = 'All';
let searchQuery = '';

export function renderTherapeuticCollectionPage() {
  updateSEO({
    title: 'Therapeutic Medicines Collection | Vitborah Pharmaceuticals',
    description: 'Browse NAFDAC-certified therapeutic medicines from Vitborah Pharmaceutical Company Limited. Injections, tablets, suspensions, and eye drops for clinical and hospital healthcare in Nigeria.',
    canonicalPath: '/products/therapeutic/',
    image: '/company_image/pharmacy.jpeg'
  });

  const categories = ['All', 'Antibacterial', 'Antimalarial', 'Antifungal', 'Eye care', 'Pain and inflammation', 'Rehydration and electrolyte replacement', 'Vitamins and nutritional support'];
  const dosageForms = ['All', 'Tablet', 'Injection', 'Eye drops', 'Capsule', 'Syrup', 'Powder / sachet'];

  const filteredProducts = filterProducts(therapeuticProducts, activeCategory, activeForm, searchQuery);
  const featured = therapeuticProducts.filter(p => p.featured);

  return `
    <!-- Collection Banner -->
    <div style="background: linear-gradient(135deg, #074824 0%, #0e793c 100%); color: #ffffff; padding: 3.5rem 0 4rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #a7f3d0;">
          <a href="/" style="color: #a7f3d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Therapeutic Medicines</span>
        </div>

        <span class="badge badge-green" style="background: rgba(255, 255, 255, 0.15); border-color: rgba(255, 255, 255, 0.25); color: #ffffff; margin-bottom: 0.75rem;">
          Prescription & Clinical Catalog
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 0.75rem;">
          Therapeutic Medicines Portfolio
        </h1>
        <p style="color: #d1fae5; font-size: 1.1rem; max-width: 720px; line-height: 1.6; margin: 0;">
          Manufactured in compliance with international WHO-GMP pharmacopeial specifications and registered with NAFDAC. Formulated for verified clinical safety, hospital administration, and commercial pharmacy distribution.
        </p>
      </div>
    </div>

    <!-- Featured Showcase Carousel -->
    <section class="section" style="padding-bottom: 2rem;">
      <div class="container">
        ${renderProductCarousel(featured, "Featured Therapeutic Formulations", "Selected clinical interventions across antibiotics, antimalarials, and emergency injectables.")}
      </div>
    </section>

    <!-- Main Products Directory with Dual Filters & Search -->
    <section class="section" style="padding-top: 1rem;">
      <div class="container">
        <!-- Filter Controls Bar -->
        <div class="filter-bar">
          <!-- Search input -->
          <div class="filter-search-box">
            <span class="filter-search-icon">${icon('search', 'w-5 h-5')}</span>
            <input 
              type="text" 
              id="search-input" 
              class="filter-search-input" 
              placeholder="Search by brand name, active ingredient, or indication (e.g., Ceftriaxone, Ciprofloxacin, Artemether)..." 
              value="${searchQuery}"
            />
          </div>

          <!-- Dimension 1: Therapeutic Category Filter -->
          <div>
            <div style="font-size: 0.825rem; font-weight: 700; color: var(--color-text-main); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">
              Therapeutic Category:
            </div>
            <div class="filter-chips-row" id="category-chips">
              ${categories.map(cat => `
                <button type="button" class="filter-chip ${activeCategory === cat ? 'active' : ''}" data-cat="${cat}">
                  ${cat}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Dimension 2: Physical Dosage Form Filter (Independent Dimension) -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-size: 0.825rem; font-weight: 700; color: var(--color-text-main); text-transform: uppercase; letter-spacing: 0.05em;">
                Physical Dosage Form:
              </span>
              ${(activeCategory !== 'All' || activeForm !== 'All' || searchQuery !== '') ? `
                <button type="button" id="reset-filters-btn" style="background: none; border: none; color: var(--color-accent); font-size: 0.825rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;">
                  ${icon('close', 'w-3.5 h-3.5')} Reset All Filters
                </button>
              ` : ''}
            </div>
            <div class="filter-chips-row" id="form-chips">
              ${dosageForms.map(form => `
                <button type="button" class="filter-chip ${activeForm === form ? 'active' : ''}" data-form="${form}">
                  ${form}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Result Status Counter -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--color-text-muted);">
          <span>Showing <strong id="product-count-display" style="color: var(--color-text-main);">${filteredProducts.length}</strong> verified therapeutic formulations</span>
          <span id="active-filter-badge-container">
            ${(activeCategory !== 'All' || activeForm !== 'All') ? `
              <span class="badge badge-neutral">Filtered: ${activeCategory !== 'All' ? activeCategory : ''} ${activeForm !== 'All' ? `(${activeForm})` : ''}</span>
            ` : ''}
          </span>
        </div>

        <!-- Products Grid or Empty State -->
        <div id="therapeutic-grid-container">
          ${renderProductList(filteredProducts)}
        </div>
      </div>
    </section>
  `;
}

function filterProducts(list, cat, form, query) {
  return list.filter(item => {
    const matchesCat = cat === 'All' || item.therapeuticCategory === cat;
    const matchesForm = form === 'All' || (item.productType && item.productType.toLowerCase().includes(form.toLowerCase()));
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || (
      item.name.toLowerCase().includes(q) ||
      (item.activeIngredients && item.activeIngredients.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.therapeuticCategory && item.therapeuticCategory.toLowerCase().includes(q))
    );
    return matchesCat && matchesForm && matchesQuery;
  });
}

function renderProductList(list) {
  if (list.length === 0) {
    return `
      <div style="text-align: center; padding: 4rem 1.5rem; background: var(--color-bg-subtle); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
        <div style="width: 3.5rem; height: 3.5rem; border-radius: var(--radius-full); background: var(--color-bg-base); color: var(--color-text-muted); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          ${icon('search', 'w-8 h-8')}
        </div>
        <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--color-text-main);">No matching formulations found</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; max-width: 480px; margin: 0 auto 1.5rem;">
          We couldn't find any medicine matching your selected filter combination or search keywords.
        </p>
        <button type="button" class="btn btn-primary btn-sm" id="empty-reset-btn">
          Restore All Medicines
        </button>
      </div>
    `;
  }

  return `
    <div class="product-grid">
      ${list.map(p => renderProductCard(p, false)).join('')}
    </div>
  `;
}

export function initTherapeuticCollectionPage() {
  initCarouselListeners();

  const searchInput = document.getElementById('search-input');
  const catChips = document.getElementById('category-chips');
  const formChips = document.getElementById('form-chips');
  const resetBtn = document.getElementById('reset-filters-btn');
  const emptyResetBtn = document.getElementById('empty-reset-btn');

  const refreshGrid = () => {
    const list = filterProducts(therapeuticProducts, activeCategory, activeForm, searchQuery);
    const container = document.getElementById('therapeutic-grid-container');
    if (container) {
      container.innerHTML = renderProductList(list);
      // Re-attach empty reset button if shown
      document.getElementById('empty-reset-btn')?.addEventListener('click', resetAll);
    }
    const countEl = document.getElementById('product-count-display');
    if (countEl) {
      countEl.textContent = list.length;
    }
    const badgeEl = document.getElementById('active-filter-badge-container');
    if (badgeEl) {
      badgeEl.innerHTML = (activeCategory !== 'All' || activeForm !== 'All')
        ? `<span class="badge badge-neutral">Filtered: ${activeCategory !== 'All' ? activeCategory : ''} ${activeForm !== 'All' ? `(${activeForm})` : ''}</span>`
        : '';
    }
  };

  const resetAll = () => {
    activeCategory = 'All';
    activeForm = 'All';
    searchQuery = '';
    const mainEl = document.getElementById('main-content');
    if (mainEl) mainEl.innerHTML = renderTherapeuticCollectionPage();
    initTherapeuticCollectionPage();
  };

  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    refreshGrid();
  });

  catChips?.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    activeCategory = chip.getAttribute('data-cat');
    catChips.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    refreshGrid();
  });

  formChips?.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    activeForm = chip.getAttribute('data-form');
    formChips.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    refreshGrid();
  });

  resetBtn?.addEventListener('click', resetAll);
  emptyResetBtn?.addEventListener('click', resetAll);
}
