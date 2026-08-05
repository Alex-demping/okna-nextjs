import Banner from "@/app/components/banner/Banner";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import Gallery from "@/app/components/gallery/Gallery";
import PageRenderer from "@/app/components/pageText/PageText";
import { getPageContent } from "@/content/getPageContent";
import SliderReviews from "../sliderReviews/SliderReviews";

import type { GalleryItem, Locale, PageConfig, TableItem, WindowItem } from "@/types/page";
import Tabs, { TabItem } from "../tabs/Tabs";
import PricesWindows from "../pricesWindows/PricesWindows";
import Table from "../table/Table";

type ArticlePageProps = {
    locale: Locale;
    page: PageConfig;
    gallery?: GalleryItem[];
    tabs?: TabItem[];
    windows?: WindowItem[];
    table?: TableItem[];
};

export default async function ArticlePage({
    locale,
    page,
    gallery,
    tabs,
    windows,
    table,
}: ArticlePageProps) {
    const html = await getPageContent(page.path, locale);

    return (
        <>
            {page.banner && (
                <Banner
                    title={page.title[locale]}
                    img={page.banner.image}
                    imgMobile={page.banner.imageMobile}
                />
            )}

            <Breadcrumbs
                locale={locale}
                pathname={page.path}
                mbNone
            />
            {page.options?.pricesWindows && windows && (
                <PricesWindows windows={windows} />
            )}
            <PageRenderer
                html={html}
                btn={page.options?.showButton}
                mb={page.options?.contentMarginBottom}
            />

            {page.options?.showGallery && gallery && (
                <Gallery
                    images={gallery}
                    title={page.title[locale]}
                />
            )}
            {page.options?.showTabs && tabs && (
                <Tabs
                    items={tabs}
                />
            )}
            {page.options?.showTable && table && table.length > 0 && (
                <Table table={table} />
            )}

            {page.options?.showReviews && (
                <SliderReviews />
            )}

        </>
    );
}