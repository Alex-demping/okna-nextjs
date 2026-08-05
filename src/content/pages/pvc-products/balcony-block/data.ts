const GALLERY_IMAGES = [
    "/img/photo/balkonnyiy-blok-1.webp",
    "/img/photo/balkonnyiy-blok-2.webp",
    "/img/photo/balkonnyiy-blok-3.webp",
    "/img/photo/balkonnyiy-blok-4.webp",
    "/img/photo/balkonnyiy-blok-5.webp",
    "/img/photo/balkonnyiy-blok-6.webp",
    "/img/photo/balkonnyiy-blok-7.webp",
    "/img/photo/balkonnyiy-blok-8.webp",
    "/img/photo/balkonnyiy-blok-9.webp",
    "/img/photo/balkonnyiy-blok-10.webp",
    "/img/photo/balkonnyiy-blok-11.webp",
    "/img/photo/balkonnyiy-blok-12.webp",
    "/img/photo/balkonnyiy-blok-13.webp",
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
        title: "Монтаж балконного блока",
        gallery: createGallery("Монтаж балконного блока"),
    },

    uk: {
        title: "Монтаж балконного блоку",
        gallery: createGallery("Монтаж балконного блоку"),
    },
};