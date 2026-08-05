import { getPage } from "@/content/getPage";

export async function buildBreadcrumbs(
    pathname: string,
    locale: "ru" | "uk",
) {
    const segments = pathname.split("/").filter(Boolean);

    const withoutLocale =
        segments[0] === locale ? segments.slice(1) : segments;

    const breadcrumbs = [
        {
            href: `/${locale}`,
            label: locale === "ru" ? "Главная" : "Головна",
        },
    ];

    let path = "";

    for (const segment of withoutLocale) {
        path = path ? `${path}/${segment}` : segment;

        const meta = await getPage(path);

        breadcrumbs.push({
            href: `/${locale}/${path}`,
            label: meta?.title?.[locale] ?? segment,
        });
    }

    return breadcrumbs;
}