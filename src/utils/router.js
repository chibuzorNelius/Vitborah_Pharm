// Client-Side PushState Router for Vitborah Pharmaceuticals
import { stopAutoPlay } from '../components/ProductCarousel.js';

let routes = [];
let notFoundHandler = null;
let currentPath = '';

export function registerRoutes(routeList, onNotFound) {
  routes = routeList;
  notFoundHandler = onNotFound;
}

export function getCurrentPath() {
  return window.location.pathname;
}

export function navigate(url, replace = false) {
  if (url === window.location.pathname && !url.includes('#')) return;
  if (replace) {
    window.history.replaceState({}, '', url);
  } else {
    window.history.pushState({}, '', url);
  }
  handleRoute();
}

export function handleRoute() {
  // Always stop running background carousel timers on route change
  stopAutoPlay();

  const path = window.location.pathname;
  currentPath = path;

  // Clean path (normalize trailing slash except root)
  const normalizedPath = path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path;

  for (const route of routes) {
    const match = matchRoute(route.path, normalizedPath);
    if (match) {
      route.handler(match.params);
      updateActiveNavLinks(path);
      handleScrollPosition();
      return;
    }
  }

  // Not found
  if (notFoundHandler) {
    notFoundHandler(path);
    updateActiveNavLinks(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function handleScrollPosition() {
  if (window.location.hash) {
    const hash = window.location.hash;
    setTimeout(() => {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 50);
  } else {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

function matchRoute(routePattern, currentPath) {
  // Normalize route pattern
  const pattern = routePattern.length > 1 && routePattern.endsWith('/') 
    ? routePattern.slice(0, -1) 
    : routePattern;

  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = currentPath.split('/').filter(Boolean);

  if (patternParts.length !== pathParts.length) return null;

  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    if (patternParts[i].startsWith(':')) {
      const paramName = patternParts[i].slice(1);
      params[paramName] = pathParts[i];
    } else if (patternParts[i] !== pathParts[i]) {
      return null;
    }
  }

  return { params };
}

export function initRouter() {
  // Intercept internal link clicks
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    // Ignore external links, mailto, tel
    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      anchor.getAttribute('target') === '_blank' ||
      anchor.getAttribute('download') !== null
    ) {
      return;
    }

    if (href.startsWith('#')) {
      return; // allow smooth anchor scrolling on same page
    }

    if (href.startsWith('/')) {
      e.preventDefault();
      navigate(href);
    }
  });

  // Listen to popstate (back/forward)
  window.addEventListener('popstate', () => {
    handleRoute();
  });

  // Initial trigger
  handleRoute();
}

function updateActiveNavLinks(currentPath) {
  document.querySelectorAll('a[data-nav-link]').forEach((link) => {
    const href = link.getAttribute('href');
    const cleanHref = href?.replace(/\/$/, '') || '';
    const cleanCurrent = currentPath.replace(/\/$/, '') || '';
    const isActive = cleanHref === cleanCurrent || (cleanHref !== '' && cleanCurrent.startsWith(cleanHref));
    if (isActive) {
      link.classList.add('nav-active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('nav-active');
      link.removeAttribute('aria-current');
    }
  });
}
