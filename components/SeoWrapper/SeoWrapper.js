import {
  siteSEO,
  pageSEO,
  industrialServices,
  financialServices,
} from "@/utils/seoConfig.js";

export default function SeoWrapper({ pageKey, category, slug, children }) {
  // Get SEO data based on page type
  let seoData = pageSEO[pageKey] || pageSEO.home;

  if (category && slug) {
    seoData =
      category === "industrial"
        ? industrialServices[slug]
        : financialServices[slug] || pageSEO.financial;
  }

  const title =
    seoData.title || `${siteSEO.defaultTitle} | ${siteSEO.siteName}`;
  const description = seoData.description || siteSEO.defaultDescription;

  // 🔥 INDUSTRIAL CONSULTANT JSON-LD (LocalBusiness + Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${siteSEO.baseUrl}/#localbusiness`,
        name: siteSEO.siteName,
        alternateName: [
          "FI-ACC",
          "Bhumi Industrial Consultant",
          "Milind Rajhans Consultant",
        ],
        url: `${siteSEO.baseUrl}${category ? `/${category}/${slug}` : ""}`,
        telephone: siteSEO.phone,
        email: siteSEO.email,
        image: `${siteSEO.baseUrl}${siteSEO.defaultImage}`,
        logo: `${siteSEO.baseUrl}/logo.png`,

        address: {
          "@type": "PostalAddress",
          streetAddress: "Office no 301/302, 3rd floor, Tulips Apartment",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: "422005",
          addressCountry: "IN",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 20.0117,
          longitude: 73.7862,
        },

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],

        priceRange: "$$",
        areaServed: [
          "Nashik",
          "Ambad MIDC",
          "Satpur MIDC",
          "Sinnar",
          "Pune",
          "Chakan",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name:
            category === "industrial"
              ? "Industrial Consulting Services"
              : "Financial Consulting Services",
          numberOfItems: category === "industrial" ? 11 : 14,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteSEO.baseUrl}/#organization`,
        name: "FI-ACC Project Finance Consultants",
        legalName: "Bhumi Industrial Consultant",
        foundingDate: "1999",
        founder: {
          "@type": "Person",
          name: "Milind Rajhans",
        },
        knowsAbout: [
          "MIDC approvals",
          "MSME Udyam",
          "Project finance",
          "Industrial consulting",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office no 301/302, Tulips Apartment",
          addressLocality: "Nashik",
          addressRegion: "Maharashtra",
          postalCode: "422005",
        },
      },
    ],
  };

  return (
    <>
      {/* Core SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={seoData.keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="canonical"
        href={`${siteSEO.baseUrl}${seoData.canonical || ""}`}
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${siteSEO.baseUrl}${siteSEO.defaultImage}`}
      />
      <meta
        property="og:url"
        content={`${siteSEO.baseUrl}${seoData.canonical || ""}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteSEO.siteName} />
      <meta property="og:locale" content={siteSEO.locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${siteSEO.baseUrl}${siteSEO.defaultImage}`}
      />

      {/* 🔥 INDUSTRIAL JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="json-ld"
      />

      {/* Page Content */}
      {children}
    </>
  );
}
