import Banner from "@/app/components/banner/Banner";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import Gallery from "@/app/components/gallery/Gallery";
import PageRenderer from "@/app/components/pageText/PageText";
import { getPageContent } from "@/content/getPageContent";
import { PAGE_DATA } from "@/content/pages/gallery/data";
import { PAGE } from "@/content/pages/gallery/page";
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

export default async function GalleryPage({
    params,
}: {
    params: Promise<{
        locale: "ru" | "uk";
    }>;
}) {

    const { locale } = await params;
    const html = await getPageContent("gallery", locale);
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
            <Gallery
                images={PAGE_DATA[locale].gallery}
                title={PAGE_DATA[locale].title}
            />
            <PageRenderer html={html} />
        </>
    );
}