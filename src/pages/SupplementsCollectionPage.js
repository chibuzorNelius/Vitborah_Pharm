import supplements from '../data/supplements.json';
import { icon } from '../utils/icons.js';
import { renderProductCard } from '../components/ProductCard.js';
import { renderProductCarousel, initCarouselListeners } from '../components/ProductCarousel.js';
import { updateSEO } from '../utils/seo.js';

let activeCategory = 'All';
let activeForm = 'All';
let searchQuery = '';

export function renderSupplementsCollectionPage() {
  updateSEO({
    title: 'New AGE Dietary Supplements Collection | Vitborah Pharmaceuticals',
    description: 'Explore the New AGE nutraceutical collection by Vitborah Pharmaceuticals: Berberine 600mg, Omega-3 Fish Oil, Magnesium Glycinate, Co.Q10, and Probiotics for preventive wellness.',
    canonicalPath: '/products/supplements/',
    image: '/company_image/new age.jpeg'
  });

  const categories = [
    'All',
    'Metabolic & Cardiovascular',
    'Heart & Brain Health',
    'Heart & Cellular Energy',
    'Bone, Muscle & Sleep Support',
    'Skin, Hair, Nails & Joints',
    'Digestive & Feminine Health',
    'Immune & Antioxidant Defense',
    'Antioxidant & Skin Vitality',
    'Cellular Defense & Skin Tone',
    'Hormonal & Dermal Balance',
    'Joint Mobility & Cartilage',
    'Bone & Teeth Strength',
    'Comprehensive Essential Fatty Acids'
  ];

  const forms = ['All', 'Softgels', 'Tablets', 'Capsules', 'Gelatin Capsules'];
  const filteredSupplements = filterSupplements(supplements, activeCategory, activeForm, searchQuery);
  const featured = supplements.filter(s => s.featured);

  return `
    <!-- Supplements Hero Banner -->
    <div style="background: linear-gradient(135deg, #0b5e2e 0%, #15803d 60%, #166534 100%); color: #ffffff; padding: 3.5rem 0 4rem;">
      <div class="container">
        <div class="breadcrumbs" style="color: #bbf7d0;">
          <a href="/" style="color: #bbf7d0;">Home</a>
          <span class="separator">/</span>
          <span class="current" style="color: #ffffff;">Dietary Supplements</span>
        </div>

        <span class="badge" style="background: rgba(255, 255, 255, 0.18); border-color: rgba(255, 255, 255, 0.3); color: #ffffff; margin-bottom: 0.75rem;">
          New AGE Nutraceutical Portfolio
        </span>
        <h1 style="color: #ffffff; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 0.75rem;">
          New AGE Dietary Supplements
        </h1>
        <p style="color: #ecfdf5; font-size: 1.1rem; max-width: 760px; line-height: 1.6; margin: 0;">
          Engineered for preventive vitality, longevity, and metabolic resilience. Formulated with standardized, bioavailable bioactive compounds in certified dosage forms to support total wellness.
        </p>
      </div>
    </div>

    <!-- Featured Supplements Showcase -->
    <section class="section" style="padding-bottom: 2rem;">
      <div class="container">
        ${renderProductCarousel(featured, "Featured Nutraceutical Formulations", "Scientifically calibrated botanical extracts, essential fatty acids, and chelated minerals.")}
      </div>
    </section>

    <!-- Main Supplements Directory with Filters -->
    <section class="section" style="padding-top: 1rem;">
      <div class="container">
        <div class="filter-bar">
          <!-- Search box -->
          <div class="filter-search-box">
            <span class="filter-search-icon">${icon('search', 'w-5 h-5')}</span>
            <input 
              type="text" 
              id="supp-search-input" 
              class="filter-search-input" 
              placeholder="Search supplements by name, nutrient, or wellness goal (e.g., Berberine, Omega-3, Magnesium, Collagen)..." 
              value="${searchQuery}"
            />
          </div>

          <!-- Category filter -->
          <div>
            <div style="font-size: 0.825rem; font-weight: 700; color: var(--color-text-main); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.05em;">
              Health & Wellness Category:
            </div>
            <div class="filter-chips-row" id="supp-category-chips">
              ${categories.map(cat => `
                <button type="button" class="filter-chip ${activeCategory === cat ? 'active' : ''}" data-cat="${cat}">
                  ${cat}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Dosage Form filter -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-size: 0.825rem; font-weight: 700; color: var(--color-text-main); text-transform: uppercase; letter-spacing: 0.05em;">
                Dosage Form:
              </span>
              ${(activeCategory !== 'All' || activeForm !== 'All' || searchQuery !== '') ? `
                <button type="button" id="supp-reset-btn" style="background: none; border: none; color: var(--color-accent); font-size: 0.825rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;">
                  ${icon('close', 'w-3.5 h-3.5')} Reset Filters
                </button>
              ` : ''}
            </div>
            <div class="filter-chips-row" id="supp-form-chips">
              ${forms.map(form => `
                <button type="button" class="filter-chip ${activeForm === form ? 'active' : ''}" data-form="${form}">
                  ${form}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Result Status -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--color-text-muted);">
          <span>Showing <strong style="color: var(--color-text-main);">${filteredSupplements.length}</strong> New AGE supplement products</span>
          ${(activeCategory !== 'All' || activeForm !== 'All') ? `
            <span class="badge badge-neutral">Filtered: ${activeCategory !== 'All' ? activeCategory : ''} ${activeForm !== 'All' ? `(${activeForm})` : ''}</span>
          ` : ''}
        </div>

        <!-- Grid Container -->
        <div id="supplements-grid-container">
          ${renderSupplementsList(filteredSupplements)}
        </div>
      </div>
    </section>
  `;
}

function filterSupplements(list, cat, form, query) {
  return list.filter(item => {
    const matchesCat = cat === 'All' || item.category === cat;
    const matchesForm = form === 'All' || (item.dosageForm && item.dosageForm.toLowerCase().includes(form.toLowerCase()));
    const q = query.trim().toLowerCase();
    const matchesQuery = !q || (
      item.name.toLowerCase().includes(q) ||
      (item.activeIngredients && item.activeIngredients.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.category && item.category.toLowerCase().includes(q))
    );
    return matchesCat && matchesForm && matchesQuery;
  });
}

function renderSupplementsList(list) {
  if (list.length === 0) {
    return `
      <div style="text-align: center; padding: 4rem 1.5rem; background: var(--color-bg-subtle); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
        <div style="width: 3.5rem; height: 3.5rem; border-radius: var(--radius-full); background: var(--color-bg-base); color: var(--color-text-muted); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
          ${icon('search', 'w-8 h-8')}
        </div>
        <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem; color: var(--color-text-main);">No matching supplements found</h3>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; max-width: 480px; margin: 0 auto 1.5rem;">
          Try adjusting your search keywords or resetting the category filter.
        </p>
        <button type="button" class="btn btn-primary btn-sm" id="supp-empty-reset">
          Restore All Supplements
        </button>
      </div>
    `;
  }

  return `
    <div class="product-grid">
      ${list.map(s => renderProductCard(s, true)).join('')}
    </div>
  `;
}

export function initSupplementsCollectionPage() {
  initCarouselListeners();

  const searchInput = document.getElementById('supp-search-input');
  const catChips = document.getElementById('supp-category-chips');
  const formChips = document.getElementById('supp-form-chips');
  const resetBtn = document.getElementById('supp-reset-btn');
  const emptyResetBtn = document.getElementById('supp-empty-reset');

  const refreshGrid = () => {
    const list = filterSupplements(supplements, activeCategory, activeForm, searchQuery);
    const container = document.getElementById('supplements-grid-container');
    if (container) {
      container.innerHTML = renderSupplementsList(list);
      document.getElementById('supp-empty-reset')?.addEventListener('click', resetAll);
    }
  };

  const resetAll = () => {
    activeCategory = 'All';
    activeForm = 'All';
    searchQuery = '';
    const mainEl = document.getElementById('main-content');
    if (mainEl) mainEl.innerHTML = renderSupplementsCollectionPage();
    initSupplementsCollectionPage();
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
