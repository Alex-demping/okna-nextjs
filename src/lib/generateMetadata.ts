import type { Metadata } from "next";
import type { PageConfig, Locale } from "@/types/page";

const DEFAULT_OG_IMAGE = "/img/img1.webp";
export function generatePageMetadata(
    PAGE: PageConfig,
    locale: Locale
): Metadata {

    const seo = PAGE.seo[locale];

    const image = PAGE.banner?.image ?? DEFAULT_OG_IMAGE;


    return {
        title: seo.title,
        description: seo.description,

        openGraph: {
            title: seo.title,
            description: seo.description,
            type: "website",
            locale: locale === "uk"
                ? "uk_UA"
                : "ru_RU",

            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: seo.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: seo.title,
            description: seo.description,
            images: [image],
        },

        alternates: {
            canonical: `/${locale}${PAGE.path}`,
        },
    };
}