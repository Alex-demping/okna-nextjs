
import Accordion from "@/app/components/accordion/Accordion";
import Banner from "@/app/components/banner/Banner";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import PageRenderer from "@/app/components/pageText/PageText";
import { getPageContent } from "@/content/getPageContent";
import { PAGE_DATA } from "@/content/pages/about/faq/data";
import { PAGE } from "@/content/pages/about/faq/page";
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

export default async function faqPage({
    params,
}: {
    params: Promise<{
        locale: "ru" | "uk";
    }>;
}) {

    const { locale } = await params;
    const html = await getPageContent("/about/faq", locale);
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
                mbNone
            />
            <PageRenderer html={html} mb />

            <Accordion questions={PAGE_DATA[locale].questions} />

        </>
    );
}