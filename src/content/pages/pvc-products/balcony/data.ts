const GALLERY_IMAGES = [
    "/img/photo/balkon-1.webp",
    "/img/photo/balkon-2.webp",
    "/img/photo/balkon-3.webp",
    "/img/photo/balkon-4.webp",
    "/img/photo/balkon-5.webp",
    "/img/photo/balkon-6.webp",
    "/img/photo/balkon-7.webp",
    "/img/photo/balkon-8.webp",
    "/img/photo/balkon-9.webp",
    "/img/photo/balkon-10.webp",
    "/img/photo/balkon-11.webp",
    "/img/photo/balkon-12.webp",
    "/img/photo/balkon-13.webp",
    "/img/photo/balkon-14.webp",
    "/img/photo/balkon-15.webp",
    "/img/photo/balkon-16.webp",
    "/img/photo/balkon-17.webp",
    "/img/photo/balkon-18.webp",
    "/img/photo/balkon-19.webp",
];

export type GalleryItem = {
    id: string;
    src: string;
    alt: string;
};

const createGallery = (alt: string): GalleryItem[] =>
    GALLERY_IMAGES.map((src, index) => ({
        id: `image-${index + 1}`,
        src,
        alt,
    }));

export const PAGE_DATA = {
    ru: {
        title: "Монтаж балкона",
        gallery: createGallery("Монтаж балкона"),
    },

    uk: {
        title: "Монтаж балкону",
        gallery: createGallery("Монтаж балкону"),
    },
};