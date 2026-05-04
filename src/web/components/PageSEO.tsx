import { useEffect } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  type?: "article" | "website";
  schemas?: object[];
  datePublished?: string;
  dateModified?: string;
  hreflang?: { lang: string; href: string }[];
}

const BASE_URL = "https://schoolagecalculator.online";
const DEFAULT_OG = `${BASE_URL}/og-image.png`;
const DEFAULT_TITLE = "School Age Calculator — Find Your Child's Grade (USA, UK, Australia, Canada)";
const DEFAULT_DESC = "Free School Age Calculator: instantly find what grade your child is in, when they start school, and their graduation year. Covers all 50 US states, UK year groups, Australian states, and Canadian provinces.";

function getMeta(name: string, attr: "name" | "property" = "name"): HTMLMetaElement | null {
  return document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = getMeta(name, attr);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const hreflang = extra?.hreflang;
  const selector = hreflang
    ? `link[rel="alternate"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function PageSEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG,
  type = "article",
  schemas = [],
  datePublished,
  dateModified,
  hreflang = [],
}: PageSEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Primary meta
    setMeta("description", description);
    setMeta("robots", "index, follow, max-image-preview:large, max-snippet:-1");

    // Canonical
    setLink("canonical", canonical);

    // Open Graph
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonical, "property");
    setMeta("og:type", type, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");

    // Twitter
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:url", canonical);
    setMeta("twitter:image", ogImage);

    // Article dates
    if (datePublished) setMeta("article:published_time", datePublished, "property");
    if (dateModified) setMeta("article:modified_time", dateModified, "property");

    // hreflang
    hreflang.forEach(({ lang, href }) => setLink("alternate", href, { hreflang: lang }));

    // JSON-LD schemas
    const schemaId = `schema-page-${canonical.replace(/[^a-z0-9]/gi, "-")}`;
    schemas.forEach((schema, i) => {
      const id = `${schemaId}-${i}`;
      document.getElementById(id)?.remove();
      const script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Restore site defaults
      document.title = DEFAULT_TITLE;
      setMeta("description", DEFAULT_DESC);
      setMeta("og:title", "School Age Calculator — Free Tool for USA, UK, Australia & Canada", "property");
      setMeta("og:description", DEFAULT_DESC, "property");
      setMeta("og:url", `${BASE_URL}/`, "property");
      setMeta("og:type", "website", "property");
      setLink("canonical", `${BASE_URL}/`);

      // Remove injected schemas
      schemas.forEach((_, i) => {
        document.getElementById(`${schemaId}-${i}`)?.remove();
      });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canonical, title, description]);

  return null;
}
