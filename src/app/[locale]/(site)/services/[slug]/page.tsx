import { notFound } from "next/navigation";
import ArticlePage from "@/app/components/pageTemplates/ArticlePage";
import type { Metadata } from "next";
import type { Locale } from "@/types/page";
import { generatePageMetadata } from "@/lib/generateMetadata";


const articlePages = {
    "window-repair": {
        page: () => import("@/content/pages/services/window-repair/page"),
        data: () => import("@/content/pages/services/window-repair/data"),
    },
    "balcony-glazing": {
        page: () => import("@/content/pages/services/balcony-glazing/page"),
        data: null,
    },
    "balcony-finishing": {
        page: () => import("@/content/pages/services/balcony-finishing/page"),
        data: null,
    },
    "balcony-insulation": {
        page: () => import("@/content/pages/services/balcony-insulation/page"),
        data: null,
    },
    "window-slopes": {
        page: () => import("@/content/pages/services/window-slopes/page"),
        data: null,
    },
    "window-installation": {
        page: () => import("@/content/pages/services/window-installation/page"),
        data: null,
    },
    "window-measurement": {
        page: () => import("@/content/pages/services/window-measurement/page"),
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


            table={dataModule?.PAGE_DATA[locale]?.table}

        />

    );

}