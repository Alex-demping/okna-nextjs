import { PAGES } from "@/content/pages";
import { MENU_IMAGES } from "@/data/menuImages";

export function getMenu(locale: "ru" | "uk") {

    const pages = PAGES;

    const root = pages
        .filter(page =>
            page.menu?.visible &&
            page.menu.parent === null
        )
        .sort((a, b) =>
            a.menu.order - b.menu.order
        );


    return root.map(page => {

        const children = pages
            .filter(child =>
                child.menu?.parent === page.slug &&
                child.menu.visible
            )
            .sort((a, b) =>
                a.menu.order - b.menu.order
            )
            .map(child => ({
                id: child.slug,
                title: child.title[locale],
                href: "/" + child.path
            }));


        return {
            id: page.slug,
            title: page.title[locale],
            href: "/" + page.path,

            image: MENU_IMAGES[page.slug]?.image,
            width: MENU_IMAGES[page.slug]?.width,
            height: MENU_IMAGES[page.slug]?.height,

            ...(children.length > 0 && {
                children
            })
        };
    });
}