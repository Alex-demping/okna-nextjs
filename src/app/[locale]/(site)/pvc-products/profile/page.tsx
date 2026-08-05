import ProductPage from "@/app/components/pageTemplates/CategoryPage";
import { PAGE } from "@/content/pages/pvc-products/profile/page";
import { PAGE_DATA } from "@/content/pages/pvc-products/profile/data";
import { Metadata } from "next";
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

export default async function Page(props: {
    params: Promise<{ locale: "ru" | "uk" }>;
}) {
    const { locale } = await props.params;

    return (
        <ProductPage
            locale={locale}
            slug={PAGE.path}
            title={PAGE.title[locale]}
            banner={PAGE.banner}
            items={PAGE_DATA[locale].products}
        />
    );
}