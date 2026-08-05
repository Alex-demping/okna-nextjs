
import Banner from "@/app/components/banner/Banner";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import Calculator from "@/app/components/calculator/Calculator";
import PageRenderer from "@/app/components/pageText/PageText";
import { getPageContent } from "@/content/getPageContent";
import { PAGE } from "@/content/pages/calculator/page";
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

export default async function CalculatorPage({
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
            <Calculator />
            <PageRenderer html={html} />
        </>
    );
}