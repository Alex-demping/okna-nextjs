export type Locale = "ru" | "uk";

export type WindowItem = {
    id: string;
    img: string;
    alt: string;
    width: number;
    height: number;
    sash?: number;
    balconyDoor?: number;
};
export type TableItem = {
    id: string;
    title: string;
    prices: string;
};

export type SeoConfig = {
    title: string;
    description: string;
};

export type GalleryItem = {
    id: string;
    src: string;
    alt: string;
};

export type PageConfig = {
    slug: string;
    path: string;

    title: {
        ru: string;
        uk: string;
    };
    menu?: {
        visible: boolean,
        order: number,
        parent: string | null,
    };

    category?: {
        slug: string;

        title: {
            ru: string;
            uk: string;
        };
    };
    seo: {
        ru: SeoConfig;
        uk: SeoConfig;
    };

    banner?: {
        image: string;
        imageMobile: string;
    };
    options?: {
        showButton?: boolean;
        contentMarginBottom?: boolean;
        showReviews?: boolean;
        showGallery?: boolean;
        showTabs?: boolean;
        pricesWindows?: boolean;
        showTable?: boolean;
    };
};