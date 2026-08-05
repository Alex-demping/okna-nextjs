const GALLERY_IMAGES = [
    "/img/photo/dveri-1.webp",
    "/img/photo/dveri-3.webp",
    "/img/photo/dveri-4.webp",
    "/img/photo/dveri-6.webp",
    "/img/photo/dveri-5.webp",
    "/img/photo/dveri-7.webp",
    "/img/photo/dveri-8.webp",
    "/img/photo/dveri-13.webp",
    "/img/photo/dveri-14.webp",
    "/img/photo/dveri-15.webp",
    "/img/photo/dveri-18.webp",
    "/img/photo/besedki-verandyi-2.webp",
    "/img/photo/balkon-17.webp",
    "/img/photo/balkon-16.webp",
    "/img/photo/balkon-19.webp",
    "/img/photo/balkon-18.webp",
    "/img/photo/balkon-15.webp",
    "/img/photo/balkon-10.webp",
    "/img/photo/balkon-9.webp",
    "/img/photo/balkon-4.webp",
    "/img/photo/balkon-4.webp",
    "/img/photo/balkonnyiy-blok-10.webp",
    "/img/photo/balkonnyiy-blok-9.webp",
    "/img/photo/balkonnyiy-blok-5.webp",
    "/img/photo/balkonnyiy-blok-6.webp",
    "/img/photo/balkonnyiy-blok-8.webp",
    "/img/photo/balkonnyiy-blok-7.webp",
    "/img/photo/balkonnyiy-blok-4.webp",
    "/img/photo/okna-metalloplastikovye-36.webp",
    "/img/photo/okna-metalloplastikovye-35.webp",
    "/img/photo/okna-metalloplastikovye-34.webp",
    "/img/photo/okna-metalloplastikovye-32.webp",
    "/img/photo/okna-metalloplastikovye-30.webp",
    "/img/photo/okna-metalloplastikovye-28.webp",
    "/img/photo/okna-metalloplastikovye-29.webp",
    "/img/photo/okna-metalloplastikovye-31.webp",
    "/img/photo/okna-metalloplastikovye-25.webp",
    "/img/photo/okna-metalloplastikovye-24.webp",
    "/img/photo/okna-metalloplastikovye-23.webp",
    "/img/photo/okna-metalloplastikovye-18.webp",
    "/img/photo/okna-metalloplastikovye-16.webp",
    "/img/photo/okna-metalloplastikovye-19.webp",
    "/img/photo/okna-metalloplastikovye-11.webp",
    "/img/photo/okna-metalloplastikovye-12.webp",
    "/img/photo/okna-metalloplastikovye-7.webp",
    "/img/photo/okna-metalloplastikovye-8.webp",
    "/img/photo/okna-metalloplastikovye-9.webp",
    "/img/photo/okna-metalloplastikovye-4.webp",
    "/img/photo/okna-metalloplastikovye-1.webp",
    "/img/photo/okna-metalloplastikovye-2.webp",
    "/img/photo/okna-metalloplastikovye-3.webp",
    "/img/photo/okna-metalloplastikovye-5.webp",
    "/img/photo/okna-metalloplastikovye-6.webp",

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
        title: "Наши выполненные работы",
        gallery: createGallery("Монтаж пластиковых конструкций"),
    },

    uk: {
        title: "Наші виконані роботи",
        gallery: createGallery("Монтаж пластикових конструкцій"),
    },
};