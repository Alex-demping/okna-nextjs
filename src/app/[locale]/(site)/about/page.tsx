
import Advantages from "@/app/components/advantages/Advantages";
import Banner from "@/app/components/banner/Banner";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import PageRenderer from "@/app/components/pageText/PageText";
import { getPageContent } from "@/content/getPageContent";
import { PAGE_DATA } from "@/content/pages/about/data";
import { PAGE } from "@/content/pages/about/page";
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

export default async function AboutPage({
    params,
}: {
    params: Promise<{
        locale: "ru" | "uk";
    }>;
}) {

    const { locale } = await params;
    const html = await getPageContent("about", locale);
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
            <Advantages
                titleBlockImage={PAGE_DATA[locale].advantages.titleBlockImage}
                descriptionBlock={PAGE_DATA[locale].advantages.descriptionBlock}
                items={PAGE_DATA[locale].advantages.items}
                mbNone
            />
            <PageRenderer html={html} />



        </>
    );
}