import { Metadata } from "next";
import { SITE_CONFIG } from "./config";
import { loadConfigForServerSync, type SiteConfig } from "@/lib/server-config";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL is not defined");
}

export function generateMetadata(config?: SiteConfig): Metadata {
  const siteConfig = config || loadConfigForServerSync();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteConfig.name} | ${siteConfig.siteName}`,
      template: `%s`,
    },
    description: siteConfig.description,
    keywords: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Blog",
      "Portfolio",
    ],
    authors: [
      {
        name: siteConfig.name,
        url: siteUrl,
      },
    ],
    creator: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Export static metadata for backwards compatibility
export const defaultMetadata: Metadata = generateMetadata(SITE_CONFIG);
