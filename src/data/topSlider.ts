interface TopSliderItem {
    id: number;
    titleKey: string;
    titleBtnKey: string;
    imgDesc?: string;
    imgDescWidth?: number;
    imgDescHeight?: number;
    logos?: Logo[];
    href: string;
    img: string;
    imgMobile: string;
}
interface Logo {
    src: string;
    width: number;
    height: number;
}
export const TOP_SLIDER: TopSliderItem[] = [
    {
        id: 1,
        titleKey: "calculate_price",
        titleBtnKey: "window_calculator",
        imgDesc: "/img/unnamed.webp",
        imgDescWidth: 300,
        imgDescHeight: 300,
        href: "/calculator",
        img: "/img/img1.webp",
        imgMobile: "/img/img1-mob.webp",
    },
    {
        id: 2,
        titleKey: "call_measurer",
        titleBtnKey: "more_details",
        imgDesc: "/img/zamer.webp",
        imgDescWidth: 300,
        imgDescHeight: 300,
        href: "/",
        img: "/img/img2.webp",
        imgMobile: "/img/img2-mob.webp",
    },
    {
        id: 3,
        titleKey: "compare_windows",
        titleBtnKey: "choose_best",
        logos: [
            {
                src: "/img/olimpia.webp",
                width: 218,
                height: 64,
            },
            {
                src: "/img/wds.webp",
                width: 160,
                height: 50,
            },
            {
                src: "/img/veka.webp",
                width: 83,
                height: 92,
            },
            {
                src: "/img/rehau.webp",
                width: 161,
                height: 53,
            },
            {
                src: "/img/salamander.webp",
                width: 169,
                height: 36,
            },
        ],
        href: "/prices",
        img: "/img/okonnyj-profil.webp",
        imgMobile: "/img/okonnyj-profil-mob.webp",
    },
    {
        id: 4,
        titleKey: "callback_title",
        titleBtnKey: "callback_btn",
        imgDesc: "/img/phone.webp",
        imgDescWidth: 348,
        imgDescHeight: 348,
        href: "/",
        img: "/img/remont-plastikovyh-okon.webp",
        imgMobile: "/img/remont-plastikovyh-okon-mob.webp",
    },
];