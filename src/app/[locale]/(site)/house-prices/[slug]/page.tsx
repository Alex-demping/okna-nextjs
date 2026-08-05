import { notFound } from "next/navigation";
import ArticlePage from "@/app/components/pageTemplates/ArticlePage";
import type { Metadata } from "next";
import type { Locale } from "@/types/page";
import { generatePageMetadata } from "@/lib/generateMetadata";


const articlePages = {
    polka: {
        page: () => import("@/content/pages/house-prices/polka/page"),
        data: () => import("@/content/pages/house-prices/polka/data"),
    },
    cheshka: {
        page: () => import("@/content/pages/house-prices/cheshka/page"),
        data: () => import("@/content/pages/house-prices/cheshka/data"),
    },
    "improved-layout": {
        page: () => import("@/content/pages/house-prices/improved-layout/page"),
        data: () => import("@/content/pages/house-prices/improved-layout/data"),
    },
    "five-story-brick": {
        page: () => import("@/content/pages/house-prices/five-story-brick/page"),
        data: () => import("@/content/pages/house-prices/five-story-brick/data"),
    },
    "5-etazhka-panelnaya": {
        page: () => import("@/content/pages/house-prices/5-etazhka-panelnaya/page"),
        data: () => import("@/content/pages/house-prices/5-etazhka-panelnaya/data"),
    },
    "14-etazhka": {
        page: () => import("@/content/pages/house-prices/14-etazhka/page"),
        data: () => import("@/content/pages/house-prices/14-etazhka/data"),
    },
    "16-etazhka": {
        page: () => import("@/content/pages/house-prices/16-etazhka/page"),
        data: () => import("@/content/pages/house-prices/16-etazhka/data"),
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

            windows={dataModule?.PAGE_DATA.windows}


        />

    );

}