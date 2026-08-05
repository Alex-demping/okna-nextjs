import { notFound } from "next/navigation";
import ArticlePage from "@/app/components/pageTemplates/ArticlePage";
import type { Metadata } from "next";
import type { Locale } from "@/types/page";
import { generatePageMetadata } from "@/lib/generateMetadata";


const articlePages = {
    balcony: {
        page: () => import("@/content/pages/pvc-products/balcony/page"),
        data: () => import("@/content/pages/pvc-products/balcony/data"),
    },

    okna: {
        page: () => import("@/content/pages/pvc-products/okna/page"),
        data: () => import("@/content/pages/pvc-products/okna/data"),
    },

    doors: {
        page: () => import("@/content/pages/pvc-products/doors/page"),
        data: () => import("@/content/pages/pvc-products/doors/data"),
    },

    "balcony-block": {
        page: () =>
            import("@/content/pages/pvc-products/balcony-block/page"),
        data: () =>
            import("@/content/pages/pvc-products/balcony-block/data"),
    },

    "french-balcony": {
        page: () =>
            import("@/content/pages/pvc-products/french-balcony/page"),
        data: null,
    },

    "moskitnye-setki": {
        page: () =>
            import("@/content/pages/pvc-products/moskitnye-setki/page"),
        data: null,
    },

    zhalyuzi: {
        page: () =>
            import("@/content/pages/pvc-products/zhalyuzi/page"),
        data: null,
    },

    "gazebos-verandas": {
        page: () =>
            import("@/content/pages/pvc-products/gazebos-verandas/page"),
        data: () =>
            import("@/content/pages/pvc-products/gazebos-verandas/data"),
    },

    "sliding-systems": {
        page: () =>
            import("@/content/pages/pvc-products/sliding-systems/page"),
        data: null,
    },

    windowsills: {
        page: () =>
            import("@/content/pages/pvc-products/windowsills/page"),
        data: null,
    },

    "drip-caps": {
        page: () =>
            import("@/content/pages/pvc-products/drip-caps/page"),
        data: null,
    },

    "double-glazed-windows": {
        page: () =>
            import("@/content/pages/pvc-products/double-glazed-windows/page"),
        data: null,
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
        articlePages[
        slug as keyof typeof articlePages
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



/**
 * Page render
 */
export default async function Page({
    params,
}: {
    params: Promise<{
        locale: Locale;
        slug: string;
    }>;
}) {


    const { locale, slug } = await params;


    const loader =
        articlePages[
        slug as keyof typeof articlePages
        ];



    if (!loader) {

        notFound();

    }



    const [
        { PAGE },
        dataModule

    ] = await Promise.all([

        loader.page(),

        loader.data
            ? loader.data()
            : Promise.resolve(null),

    ]);




    return (

        <ArticlePage

            locale={locale}

            page={PAGE}


            gallery={
                dataModule
                    ?.PAGE_DATA
                    ?.[locale]
                    ?.gallery
            }

        />

    );

}