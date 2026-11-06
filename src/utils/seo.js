// Vitborah Technical SEO & Structured Data Engine
const PRODUCTION_DOMAIN = 'https://vitborahpharm.com';

export function updateSEO({
  title,
  description,
  canonicalPath = '',
  image = '/company_image/pharmacy.jpeg',
  type = 'website',
  schema = null
}) {
  const fullTitle = title 
    ? `${title} | Vitborah Pharmaceutical Company Limited`
    : 'Vitborah Pharmaceutical Company Limited | Healthcare & Therapeutic Solutions';
  
  const fullDesc = description || 
    'Official corporate portal for Vitborah Pharmaceutical Company Limited (RC 753571). Supplying high-grade therapeutic medicines and New AGE dietary supplements across Nigeria.';
  
  const fullCanonical = `${PRODUCTION_DOMAIN}${canonicalPath}`;
  const fullImage = image.startsWith('http') ? image : `${PRODUCTION_DOMAIN}${image}`;

  // Update Title
  document.title = fullTitle;

  // Helper for meta tags
  const setMeta = (nameAttr, nameVal, content) => {
    let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(nameAttr, nameVal);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('name', 'title', fullTitle);
  setMeta('name', 'description', fullDesc);

  // Open Graph
  setMeta('property', 'og:title', fullTitle);
  setMeta('property', 'og:description', fullDesc);
  setMeta('property', 'og:url', fullCanonical);
  setMeta('property', 'og:image', fullImage);
  setMeta('property', 'og:type', type);

  // Twitter
  setMeta('property', 'twitter:title', fullTitle);
  setMeta('property', 'twitter:description', fullDesc);
  setMeta('property', 'twitter:url', fullCanonical);
  setMeta('property', 'twitter:image', fullImage);

  // Canonical
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', fullCanonical);

  // Structured Data (JSON-LD)
  let scriptEl = document.getElementById('vitborah-jsonld');
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'vitborah-jsonld';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const baseOrganizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    'name': 'Vitborah Pharmaceutical Company Limited',
    'alternateName': 'Vitborah Pharm',
    'legalName': 'Vitborah Pharmaceutical Company Limited',
    'identifier': 'RC 753571',
    'foundingDate': '2008-06-16',
    'url': PRODUCTION_DOMAIN,
    'logo': `${PRODUCTION_DOMAIN}/company_image/vitborah-logo.jpeg`,
    'image': `${PRODUCTION_DOMAIN}/company_image/pharmacy.jpeg`,
    'description': 'Licensed Nigerian pharmaceutical company specializing in the distribution and marketing of prescription therapeutic formulations and New AGE dietary supplements.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'No. 2, Olori Kudrat Elegushi Street, Awoyaya',
      'addressLocality': 'Ibeju Lekki',
      'addressRegion': 'Lagos State',
      'addressCountry': 'NG'
    },
    'contactPoint': [
      {
        '@type': 'ContactPoint',
        'telephone': '+234-806-302-2165',
        'contactType': 'customer support',
        'email': 'info@vitborahpharm.com',
        'areaServed': 'NG',
        'availableLanguage': ['English']
      }
    ]
  };

  if (schema) {
    scriptEl.textContent = JSON.stringify([baseOrganizationSchema, schema], null, 2);
  } else {
    scriptEl.textContent = JSON.stringify(baseOrganizationSchema, null, 2);
  }
}
