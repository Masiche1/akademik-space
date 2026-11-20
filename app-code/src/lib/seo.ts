import { useEffect } from "react";
import { BRAND } from "@/lib/brand.ts";

/** Public site address, used for canonical links, sitemap and structured data. */
export const SITE_URL = "https://akademik.space";

export const LOGO_URL = `${SITE_URL}/brand/logo-512.png`;

/** Default home page description: names the three pathways so search results show them. */
export const DEFAULT_DESCRIPTION =
  "Curriculum-aligned practice with examiner markschemes. Pathways: US Grades 7-12, IB MYP and Diploma, Pearson Edexcel and Cambridge International.";

type PageMeta = {
  /** Page-specific title; the brand name is appended. Omit for the home page. */
  title?: string;
  description?: string;
  /** Path for the canonical link, e.g. "/curricula/ib". */
  path: string;
  /** Private pages (progress, account) ask search engines not to index them. */
  noindex?: boolean;
};

function setMeta(selector: string, attr: "content" | "href", value: string, create: () => HTMLElement) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const metaTag = (key: "name" | "property", value: string) => () => {
  const el = document.createElement("meta");
  el.setAttribute(key, value);
  return el;
};

/** Keeps the document title, description, canonical link and Open Graph tags in sync with the page. */
export function usePageMeta({ title, description = DEFAULT_DESCRIPTION, path, noindex = false }: PageMeta) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BRAND.name}` : `${BRAND.name} | ${BRAND.slogan}`;
    const url = `${SITE_URL}${path}`;
    document.title = fullTitle;
    setMeta('meta[name="robots"]', "content", noindex ? "noindex, follow" : "index, follow, max-image-preview:large", metaTag("name", "robots"));
    setMeta('meta[name="description"]', "content", description, metaTag("name", "description"));
    setMeta('meta[property="og:title"]', "content", fullTitle, metaTag("property", "og:title"));
    setMeta('meta[property="og:description"]', "content", description, metaTag("property", "og:description"));
    setMeta('meta[property="og:url"]', "content", url, metaTag("property", "og:url"));
    setMeta('link[rel="canonical"]', "href", url, () => {
      const el = document.createElement("link");
      el.setAttribute("rel", "canonical");
      return el;
    });
  }, [title, description, path, noindex]);
}

/** Trim text to a search-friendly description length on a word boundary. */
export function clampDescription(text: string, max = 158): string {
  const plain = text.replace(/\$[^$]*\$/g, "").replace(/\s+/g, " ").trim();
  if (plain.length <= max) return plain;
  return `${plain.slice(0, plain.lastIndexOf(" ", max - 1))}...`;
}
