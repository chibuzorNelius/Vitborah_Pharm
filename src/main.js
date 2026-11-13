import './style.css';
import { renderHeader, initHeaderListeners } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderPromotionalModal, initPromotionalModal } from './components/PromotionalModal.js';
import { registerRoutes, initRouter } from './utils/router.js';

// Pages
import { renderHomePage, initHomePage } from './pages/HomePage.js';
import { renderTherapeuticCollectionPage, initTherapeuticCollectionPage } from './pages/TherapeuticCollectionPage.js';
import { renderSupplementsCollectionPage, initSupplementsCollectionPage } from './pages/SupplementsCollectionPage.js';
import { renderProductDetailPage, initProductDetailPage } from './pages/ProductDetailPage.js';
import { renderAboutPage, initAboutPage } from './pages/AboutPage.js';
import { renderCeoProfilePage } from './pages/CeoProfilePage.js';
import { renderNewsPage, initNewsPage } from './pages/NewsPage.js';
import { renderArticleDetailPage } from './pages/ArticleDetailPage.js';
import { renderCharityPage, initCharityPage } from './pages/CharityPage.js';
import { renderPartnersPage } from './pages/PartnersPage.js';
import { renderWorkWithUsPage, initWorkWithUsPage } from './pages/WorkWithUsPage.js';
import { renderContactPage, initContactPage } from './pages/ContactPage.js';
import { renderLegalPage } from './pages/LegalPage.js';
import { renderNotFoundPage } from './pages/NotFoundPage.js';

function mountLayout() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  appEl.innerHTML = `
    ${renderHeader()}
    <main id="main-content"></main>
    ${renderFooter()}
    ${renderPromotionalModal()}
  `;

  initHeaderListeners();
  initPromotionalModal();
}

function setPageContent(html, initFn = null) {
  const mainEl = document.getElementById('main-content');
  if (mainEl) {
    mainEl.innerHTML = html;
    if (typeof initFn === 'function') {
      initFn();
    }
  }
}

// Bootstrap layout
mountLayout();

// Register application routes
registerRoutes([
  {
    path: '/',
    handler: () => setPageContent(renderHomePage(), initHomePage)
  },
  {
    path: '/about',
    handler: () => setPageContent(renderAboutPage(), initAboutPage)
  },
  {
    path: '/about/',
    handler: () => setPageContent(renderAboutPage(), initAboutPage)
  },
  {
    path: '/products/therapeutic',
    handler: () => setPageContent(renderTherapeuticCollectionPage(), initTherapeuticCollectionPage)
  },
  {
    path: '/products/therapeutic/',
    handler: () => setPageContent(renderTherapeuticCollectionPage(), initTherapeuticCollectionPage)
  },
  {
    path: '/therapeutic-medicines',
    handler: () => setPageContent(renderTherapeuticCollectionPage(), initTherapeuticCollectionPage)
  },
  {
    path: '/therapeutic-medicines/',
    handler: () => setPageContent(renderTherapeuticCollectionPage(), initTherapeuticCollectionPage)
  },
  {
    path: '/products/supplements',
    handler: () => setPageContent(renderSupplementsCollectionPage(), initSupplementsCollectionPage)
  },
  {
    path: '/products/supplements/',
    handler: () => setPageContent(renderSupplementsCollectionPage(), initSupplementsCollectionPage)
  },
  {
    path: '/supplements',
    handler: () => setPageContent(renderSupplementsCollectionPage(), initSupplementsCollectionPage)
  },
  {
    path: '/supplements/',
    handler: () => setPageContent(renderSupplementsCollectionPage(), initSupplementsCollectionPage)
  },
  {
    path: '/products/:slug',
    handler: (params) => setPageContent(renderProductDetailPage(params), initProductDetailPage)
  },
  {
    path: '/products/:slug/',
    handler: (params) => setPageContent(renderProductDetailPage(params), initProductDetailPage)
  },
  // Leadership & Branches packed into About Us with smooth anchor scrolling
  {
    path: '/leadership',
    handler: () => {
      setPageContent(renderAboutPage(), initAboutPage);
      setTimeout(() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  },
  {
    path: '/leadership/',
    handler: () => {
      setPageContent(renderAboutPage(), initAboutPage);
      setTimeout(() => document.getElementById('leadership')?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  },
  {
    path: '/leadership/vitus-agada',
    handler: () => setPageContent(renderCeoProfilePage())
  },
  {
    path: '/leadership/vitus-agada/',
    handler: () => setPageContent(renderCeoProfilePage())
  },
  {
    path: '/branches',
    handler: () => {
      setPageContent(renderAboutPage(), initAboutPage);
      setTimeout(() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  },
  {
    path: '/branches/',
    handler: () => {
      setPageContent(renderAboutPage(), initAboutPage);
      setTimeout(() => document.getElementById('branches')?.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  },
  {
    path: '/news',
    handler: () => setPageContent(renderNewsPage(), initNewsPage)
  },
  {
    path: '/news/',
    handler: () => setPageContent(renderNewsPage(), initNewsPage)
  },
  {
    path: '/news/:slug',
    handler: (params) => setPageContent(renderArticleDetailPage(params))
  },
  {
    path: '/news/:slug/',
    handler: (params) => setPageContent(renderArticleDetailPage(params))
  },
  {
    path: '/charity',
    handler: () => setPageContent(renderCharityPage(), initCharityPage)
  },
  {
    path: '/charity/',
    handler: () => setPageContent(renderCharityPage(), initCharityPage)
  },
  {
    path: '/partners',
    handler: () => setPageContent(renderPartnersPage())
  },
  {
    path: '/partners/',
    handler: () => setPageContent(renderPartnersPage())
  },
  {
    path: '/work-with-us',
    handler: () => setPageContent(renderWorkWithUsPage(), initWorkWithUsPage)
  },
  {
    path: '/work-with-us/',
    handler: () => setPageContent(renderWorkWithUsPage(), initWorkWithUsPage)
  },
  {
    path: '/careers',
    handler: () => setPageContent(renderWorkWithUsPage(), initWorkWithUsPage)
  },
  {
    path: '/careers/',
    handler: () => setPageContent(renderWorkWithUsPage(), initWorkWithUsPage)
  },
  {
    path: '/contact',
    handler: () => setPageContent(renderContactPage(), initContactPage)
  },
  {
    path: '/contact/',
    handler: () => setPageContent(renderContactPage(), initContactPage)
  },
  {
    path: '/privacy',
    handler: () => setPageContent(renderLegalPage('privacy'))
  },
  {
    path: '/privacy/',
    handler: () => setPageContent(renderLegalPage('privacy'))
  },
  {
    path: '/terms',
    handler: () => setPageContent(renderLegalPage('terms'))
  },
  {
    path: '/terms/',
    handler: () => setPageContent(renderLegalPage('terms'))
  }
], (path) => {
  setPageContent(renderNotFoundPage(path));
});

initRouter();

// Vite Hot Module Replacement (HMR) auto update & refresh
if (import.meta.hot) {
  import.meta.hot.accept();
}
