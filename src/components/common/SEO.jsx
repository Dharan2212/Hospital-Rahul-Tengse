import { Helmet } from 'react-helmet-async';
import { buildCanonicalUrl, getDefaultOgImage, getSeoByPath, siteSeoConfig } from '../../utils/seo.js';

export function SEO({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
  ogType,
  ogImage,
  canonicalPath,
  schema,
  noindex,
  children
}) {
  const pageSeo = path ? getSeoByPath(path) : null;
  const finalTitle = title || pageSeo?.title || siteSeoConfig.defaultTitle;
  const finalDescription = description || pageSeo?.description || siteSeoConfig.defaultDescription;
  const finalCanonicalPath = canonicalPath || pageSeo?.canonicalPath || pageSeo?.path || path || '/';
  const canonicalUrl = buildCanonicalUrl(finalCanonicalPath);
  const finalOgTitle = ogTitle || pageSeo?.ogTitle || finalTitle;
  const finalOgDescription = ogDescription || pageSeo?.ogDescription || finalDescription;
  const finalOgType = ogType || pageSeo?.ogType || 'website';
  const safeImage = ogImage || pageSeo?.image || getDefaultOgImage();
  const robotsValue = noindex || pageSeo?.noindex ? 'noindex, nofollow' : null;

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonicalUrl} />
      {robotsValue && <meta name="robots" content={robotsValue} />}

      <meta property="og:locale" content={siteSeoConfig.locale} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={finalOgType} />
      {safeImage && <meta property="og:image" content={safeImage} />}

      <meta name="twitter:card" content={siteSeoConfig.twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {safeImage && <meta name="twitter:image" content={safeImage} />}

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      {children}
    </Helmet>
  );
}
