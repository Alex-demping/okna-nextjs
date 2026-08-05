import Banner from "@/app/components/banner/Banner";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import PageRenderer from "@/app/components/pageText/PageText";
import Prices from "@/app/components/prices/Prices";
import { getPageContent } from "@/content/getPageContent";
import { PAGE_DATA } from "@/content/pages/prices/data";
import { PAGE } from "@/content/pages/prices/page";
import { generatePageMetadata } from "@/lib/generateMetadata";
import { Metadata } from "next";


export async function generateMetadata(props: {
    params: Promise<{ locale: "ru" | "uk" }>;
}): Promise<Metadata> {

    const { locale } = await props.params;

    return generatePageMetadata(
        PAGE,
        locale
    );
}


export default async function PricesPage({
    params,
}: {
    params: Promise<{
        locale: "ru" | "uk";
    }>;
}) {

    const { locale } = await params;
    const html = await getPageContent("prices", locale);
    return (
        <>
            {PAGE.banner && (
                <Banner
                    title={PAGE.title[locale]}
                    img={PAGE.banner.image}
                    imgMobile={PAGE.banner.imageMobile}
                />
            )}
            <Breadcrumbs
                locale={locale}
                pathname={PAGE.path}

            />
            <Prices items={PAGE_DATA[locale].prices.items} title={PAGE_DATA[locale].prices.title} />
            <PageRenderer html={html} />
        </>
    );
}