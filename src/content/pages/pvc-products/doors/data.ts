const GALLERY_IMAGES = [
    "/img/photo/dveri-1.webp",
    "/img/photo/dveri-2.webp",
    "/img/photo/dveri-3.webp",
    "/img/photo/dveri-4.webp",
    "/img/photo/dveri-6.webp",
    "/img/photo/dveri-7.webp",
    "/img/photo/dveri-8.webp",
    "/img/photo/dveri-9.webp",
    "/img/photo/dveri-10.webp",
    "/img/photo/dveri-11.webp",
    "/img/photo/dveri-12.webp",
    "/img/photo/dveri-13.webp",
    "/img/photo/dveri-14.webp",
    "/img/photo/dveri-15.webp",
    "/img/photo/dveri-16.webp",
    "/img/photo/dveri-17.webp",
    "/img/photo/dveri-18.webp",
    "/img/photo/dveri-19.webp",
    "/img/photo/dveri-20.webp",
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
        title: "Монтаж пластиковых дверей",
        gallery: createGallery("Монтаж пластиковых дверей"),
    },

    uk: {
        title: "Монтаж пластикових дверей",
        gallery: createGallery("Монтаж пластикових дверей"),
    },
};