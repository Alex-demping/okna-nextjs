import ProductPage from "@/app/components/pageTemplates/CategoryPage";
import { PAGE_DATA } from "@/content/pages/services/data";
import { PAGE } from "@/content/pages/services/page";
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
export default async function Page(props: {
    params: Promise<{ locale: "ru" | "uk" }>;
}) {
    const { locale } = await props.params;

    return (
        <ProductPage
            locale={locale}
            slug={PAGE.slug}
            title={PAGE.title[locale]}
            banner={PAGE.banner}
            items={PAGE_DATA[locale].services}
        />
    );
}