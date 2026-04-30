import { Helmet } from 'react-helmet-async';
import {
  buildAbsoluteOgImageUrl,
  buildCanonicalUrl,
  getDefaultOgImage,
  getSeoByPath,
  siteSeoConfig
} from '../../utils/seo.js';

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
  const robotsValue = noindex || pageSeo?.noindex ? 'noindex, nofollow' : null;

  // OG image must be an absolute URL for social media crawlers.
  // buildAbsoluteOgImageUrl prepends VITE_SITE_URL to relative Vite-hashed paths.
  const rawImage = ogImage || pageSeo?.image || getDefaultOgImage();
  const absoluteOgImage = buildAbsoluteOgImageUrl(rawImage);

  return (
    <Helmet>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={canonicalUrl} />
      {robotsValue && <meta name="robots" content={robotsValue} />}

      {/* Open Graph */}
      <meta property="og:locale" content={siteSeoConfig.locale} />
      <meta property="og:site_name" content="Dr. Rahul Tengse — Kidney Specialist Parbhani" />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={finalOgType} />
      {absoluteOgImage && <meta property="og:image" content={absoluteOgImage} />}
      {absoluteOgImage && <meta property="og:image:alt" content="Dr. Rahul Tengse — Kidney Specialist Parbhani" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={siteSeoConfig.twitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {absoluteOgImage && <meta name="twitter:image" content={absoluteOgImage} />}
      {absoluteOgImage && <meta name="twitter:image:alt" content="Dr. Rahul Tengse — Kidney Specialist Parbhani" />}

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {children}
    </Helmet>
  );
}
