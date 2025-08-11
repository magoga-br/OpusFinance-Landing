import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}

const ensureMeta = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const ensureLinkCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
};

const ensureJsonLd = (data: Record<string, any>) => {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

export const Seo = ({ title, description, canonical, jsonLd }: SeoProps) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) ensureMeta("description", description);
    if (canonical) ensureLinkCanonical(canonical);
    if (jsonLd) ensureJsonLd(jsonLd);
  }, [title, description, canonical, jsonLd]);

  return null;
};

export default Seo;