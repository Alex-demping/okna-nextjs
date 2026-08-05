const GALLERY_IMAGES = [
    "/img/photo/besedki-verandyi-1.webp",
    "/img/photo/besedki-verandyi-2.webp",
    "/img/photo/besedki-verandyi-3.webp",
    "/img/photo/besedki-verandyi-4.webp",
    "/img/photo/besedki-verandyi-5.webp",
    "/img/photo/besedki-verandyi-6.webp",
    "/img/photo/besedki-verandyi-7.webp",
    "/img/photo/besedki-verandyi-8.webp",
    "/img/photo/besedki-verandyi-9.webp",
    "/img/photo/besedki-verandyi-10.webp",
    "/img/photo/besedki-verandyi-11.webp",
    "/img/photo/besedki-verandyi-12.webp",
    "/img/photo/besedki-verandyi-13.webp",
    "/img/photo/besedki-verandyi-14.webp",
    "/img/photo/besedki-verandyi-15.webp",
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
        title: "Монтаж беседки",
        gallery: createGallery("Монтаж беседки"),
    },

    uk: {
        title: "Монтаж альтанки",
        gallery: createGallery("Монтаж альтанки"),
    },
};