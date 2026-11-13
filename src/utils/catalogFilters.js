/**
 * Pure filtering helpers for Vitborah catalogs and news dispatches.
 * Decoupled from DOM so logic can be verified directly via unit tests.
 */

export function filterTherapeuticProducts(list, category = 'All', dosageForm = 'All', query = '') {
  if (!Array.isArray(list)) return [];
  const normalizedQuery = (query || '').trim().toLowerCase();

  return list.filter((item) => {
    const matchesCategory = category === 'All' || item.therapeuticCategory === category;
    const matchesForm =
      dosageForm === 'All' ||
      (item.productType && item.productType.toLowerCase().includes(dosageForm.toLowerCase()));

    const matchesQuery =
      !normalizedQuery ||
      (item.name && item.name.toLowerCase().includes(normalizedQuery)) ||
      (item.activeIngredients && item.activeIngredients.toLowerCase().includes(normalizedQuery)) ||
      (item.description && item.description.toLowerCase().includes(normalizedQuery)) ||
      (item.therapeuticCategory && item.therapeuticCategory.toLowerCase().includes(normalizedQuery)) ||
      (item.regulatoryInfo && item.regulatoryInfo.toLowerCase().includes(normalizedQuery));

    return matchesCategory && matchesForm && matchesQuery;
  });
}

export function filterNewsByTopic(articles, topic = 'All') {
  if (!Array.isArray(articles)) return [];
  if (!topic || topic === 'All') return articles;
  return articles.filter(
    (article) => article.topic === topic || article.category === topic
  );
}

export function countNewsByTopics(articles) {
  const counts = {
    All: Array.isArray(articles) ? articles.length : 0,
    'Coming Soon': 0,
    'Now Selling': 0,
    'Flash Sales': 0
  };
  if (!Array.isArray(articles)) return counts;

  for (const article of articles) {
    const key = article.topic || article.category;
    if (key && Object.prototype.hasOwnProperty.call(counts, key)) {
      counts[key] += 1;
    }
  }
  return counts;
}
