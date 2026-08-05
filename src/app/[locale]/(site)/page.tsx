import TopSlider from "@/app/components/slider/TopSlider";
import { getPageContent } from "@/content/getPageContent";
import PageRenderer from "@/app/components/pageText/PageText";
import GridPost from "../../components/gridPost/GridPost";
import Advantages from "../../components/advantages/Advantages";
import SliderReviews from "../../components/sliderReviews/SliderReviews";
import { Metadata } from "next";
import { PAGE } from "@/content/pages/home/page";
import { PAGE_DATA } from "@/content/pages/home/data";
import { generatePageMetadata } from "@/lib/generateMetadata";


export async function generateMetadata(props: {
    params: Promise<{ locale: "ru" | "uk" }>;
}): Promise<Metadata> {

    const { locale } = await props.params;

    return generatePageMetadata(
        PAGE,
        locale
    );
}
export default async function Home(props: {
    params: Promise<{ locale: "ru" | "uk" }>
}) {
    const { locale } = await props.params;

    const html = await getPageContent("home", locale);

    return (
        <>
            <TopSlider />
            <PageRenderer html={html} btn={true} mb />
            <GridPost
                title={PAGE_DATA[locale].prices.title}
                items={PAGE_DATA[locale].prices.items}
                variant="vertical"
            />
            <GridPost variant="horizontal" title={PAGE_DATA[locale].assortment.title} description={PAGE_DATA[locale].assortment.description} items={PAGE_DATA[locale].assortment.items} />


            <Advantages
                title={PAGE_DATA[locale].advantages.title}
                description={PAGE_DATA[locale].advantages.description}
                titleBlockNumber={PAGE_DATA[locale].advantages.titleBlockNumber}
                titleBlock={PAGE_DATA[locale].advantages.titleBlock}
                descriptionBlock={PAGE_DATA[locale].advantages.descriptionBlock}
                items={PAGE_DATA[locale].advantages.items}
            />

            <SliderReviews />

        </>
    );
}