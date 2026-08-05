import Banner from "@/app/components/banner/Banner";
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import GridPost from "@/app/components/gridPost/GridPost";
import PageRenderer from "@/app/components/pageText/PageText";
import { getPageContent } from "@/content/getPageContent";

type Locale = "ru" | "uk";

type ProductPageProps = {
    locale: Locale;

    slug: string;

    title: string;

    banner: {
        image: string;
        imageMobile: string;
    };

    items: any[];
};

export default async function ProductPage({
    locale,
    slug,
    title,
    banner,
    items,
}: ProductPageProps) {
    const html = await getPageContent(slug, locale);

    return (
        <>

            <Banner
                title={title}
                img={banner.image}
                imgMobile={banner.imageMobile}
            />

            <Breadcrumbs
                locale={locale}
                pathname={slug}
            />

            <GridPost
                items={items}
                variant="horizontal"
            />

            <PageRenderer html={html} />
        </>
    );
}