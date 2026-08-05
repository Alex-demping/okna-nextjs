const GALLERY_IMAGES = [
    "/img/photo/okna-metalloplastikovye-1.webp",
    "/img/photo/okna-metalloplastikovye-2.webp",
    "/img/photo/okna-metalloplastikovye-3.webp",
    "/img/photo/okna-metalloplastikovye-4.webp",
    "/img/photo/okna-metalloplastikovye-5.webp",
    "/img/photo/okna-metalloplastikovye-6.webp",
    "/img/photo/okna-metalloplastikovye-7.webp",
    "/img/photo/okna-metalloplastikovye-8.webp",
    "/img/photo/okna-metalloplastikovye-9.webp",
    "/img/photo/okna-metalloplastikovye-10.webp",
    "/img/photo/okna-metalloplastikovye-11.webp",
    "/img/photo/okna-metalloplastikovye-12.webp",
    "/img/photo/okna-metalloplastikovye-13.webp",
    "/img/photo/okna-metalloplastikovye-14.webp",
    "/img/photo/okna-metalloplastikovye-15.webp",
    "/img/photo/okna-metalloplastikovye-16.webp",
    "/img/photo/okna-metalloplastikovye-17.webp",
    "/img/photo/okna-metalloplastikovye-18.webp",
    "/img/photo/okna-metalloplastikovye-19.webp",
    "/img/photo/okna-metalloplastikovye-20.webp",
    "/img/photo/okna-metalloplastikovye-21.webp",
    "/img/photo/okna-metalloplastikovye-22.webp",
    "/img/photo/okna-metalloplastikovye-23.webp",
    "/img/photo/okna-metalloplastikovye-24.webp",
    "/img/photo/okna-metalloplastikovye-25.webp",
    "/img/photo/okna-metalloplastikovye-26.webp",
    "/img/photo/okna-metalloplastikovye-27.webp",
    "/img/photo/okna-metalloplastikovye-28.webp",
    "/img/photo/okna-metalloplastikovye-29.webp",
    "/img/photo/okna-metalloplastikovye-30.webp",
    "/img/photo/okna-metalloplastikovye-31.webp",
    "/img/photo/okna-metalloplastikovye-32.webp",
    "/img/photo/okna-metalloplastikovye-33.webp",
    "/img/photo/okna-metalloplastikovye-34.webp",
    "/img/photo/okna-metalloplastikovye-35.webp",
    "/img/photo/okna-metalloplastikovye-36.webp",
    "/img/photo/okna-metalloplastikovye-37.webp",
    "/img/photo/okna-metalloplastikovye-38.webp",
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
        title: "Монтаж окон",
        gallery: createGallery("Монтаж окон"),
    },

    uk: {
        title: "Монтаж вікон",
        gallery: createGallery("Монтаж вікон"),
    },
};