import { notFound } from "next/navigation";
import ArticlePage from "@/app/components/pageTemplates/ArticlePage";
import type { Metadata } from "next";
import type { Locale } from "@/types/page";
import { generatePageMetadata } from "@/lib/generateMetadata";

const profilePages = {
    wds: {
        page: () => import("@/content/pages/pvc-products/profile/wds/page"),
        data: () => import("@/content/pages/pvc-products/profile/wds/data"),
    },

    olimpia: {
        page: () => import("@/content/pages/pvc-products/profile/olimpia/page"),
        data: () => import("@/content/pages/pvc-products/profile/olimpia/data"),
    },
    aluplast: {
        page: () => import("@/content/pages/pvc-products/profile/aluplast/page"),
        data: () => import("@/content/pages/pvc-products/profile/aluplast/data"),
    },
    veka: {
        page: () => import("@/content/pages/pvc-products/profile/veka/page"),
        data: () => import("@/content/pages/pvc-products/profile/veka/data"),
    },
    winbau: {
        page: () => import("@/content/pages/pvc-products/profile/winbau/page"),
        data: () => import("@/content/pages/pvc-products/profile/winbau/data"),
    },
    rehau: {
        page: () => import("@/content/pages/pvc-products/profile/rehau/page"),
        data: () => import("@/content/pages/pvc-products/profile/rehau/data"),
    },
    salamander: {
        page: () => import("@/content/pages/pvc-products/profile/salamander/page"),
        data: () => import("@/content/pages/pvc-products/profile/salamander/data"),
    },
} as const;

export async function generateMetadata({
    params,
}: {
    params: Promise<{
        locale: Locale;
        slug: string;
    }>;
}): Promise<Metadata> {

    const { locale, slug } = await params;

    const loader =
        profilePages[
        slug as keyof typeof profilePages
        ];

    if (!loader) {
        return {};
    }

    const { PAGE } = await loader.page();

    return generatePageMetadata(
        PAGE,
        locale
    );
}


export default async function Page({
    params,
}: {
    params: Promise<{
        locale: "ru" | "uk";
        slug: string;
    }>;
}) {
    const { locale, slug } = await params;

    const loader =
        profilePages[slug as keyof typeof profilePages];


    if (!loader) {
        notFound();
    }


    const [{ PAGE }, { PAGE_DATA }] = await Promise.all([
        loader.page(),
        loader.data(),
    ]);


    return (
        <ArticlePage
            locale={locale}
            page={PAGE}
            tabs={PAGE_DATA[locale].tabsItem}
        />
    );
}