// Lightweight UI Helper for Mobile Expandables & Debounce

export function debounce(func, wait = 200) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function initExpandableToggles(scopeEl = document) {
  scopeEl.querySelectorAll('[data-toggle-expand]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-toggle-expand');
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const isExpanded = targetEl.classList.contains('expanded');
      if (isExpanded) {
        targetEl.classList.remove('expanded');
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = btn.getAttribute('data-more-text') || 'Read More';
      } else {
        targetEl.classList.add('expanded');
        btn.setAttribute('aria-expanded', 'true');
        btn.innerHTML = btn.getAttribute('data-less-text') || 'Show Less';
      }
    });
  });
}
