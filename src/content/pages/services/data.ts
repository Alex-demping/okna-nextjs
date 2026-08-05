const SERVICES_IMAGES = {
    calculator: "/img/assortment/calculator__16x9__a.webp",
    repair: "/img/assortment/remont-plastikovyh-okon.webp",
    glazing: "/img/assortment/balkon_otliv.webp",
    finishing: "/img/assortment/kartinka_400.webp",
    insulation: "/img/assortment/uteplenie-balkona-penoplastom-iznutri.webp",
    slopes: "/img/assortment/image-02-11-16-18-11-4.webp",
    installation: "/img/assortment/ustanovka-plastikovyh-okon.webp",
    measurer: "/img/assortment/zamershchik.webp",
};

export const PAGE_DATA = {
    ru: {
        services: [
            {
                id: "calculator",
                title: "КАЛЬКУЛЯТОР ОКОН",
                image: SERVICES_IMAGES.calculator,
                href: "/calculator",
            },
            {
                id: "repair",
                title: "РЕМОНТ ОКОН",
                image: SERVICES_IMAGES.repair,
                href: "/services/window-repair",
            },
            {
                id: "balcony-glazing",
                title: "ОСТЕКЛЕНИЕ БАЛКОНОВ",
                image: SERVICES_IMAGES.glazing,
                href: "/services/balcony-glazing",
            },
            {
                id: "balcony-finishing",
                title: "ОТДЕЛКА БАЛКОНОВ",
                image: SERVICES_IMAGES.finishing,
                href: "/services/balcony-finishing",
            },
            {
                id: "balcony-insulation",
                title: "УТЕПЛЕНИЕ БАЛКОНОВ",
                image: SERVICES_IMAGES.insulation,
                href: "/services/balcony-insulation",
            },
            {
                id: "slopes",
                title: "ОТКОСЫ",
                image: SERVICES_IMAGES.slopes,
                href: "/services/window-slopes",
            },
            {
                id: "installation",
                title: "УСТАНОВКА ОКОН",
                image: SERVICES_IMAGES.installation,
                href: "/services/window-installation",
            },
            {
                id: "measurer",
                title: "ВЫЗОВ ЗАМЕРЩИКА",
                image: SERVICES_IMAGES.measurer,
                href: "/services/window-measurement",
            },
        ],
    },

    uk: {
        services: [
            {
                id: "calculator",
                title: "КАЛЬКУЛЯТОР ВІКОН",
                image: SERVICES_IMAGES.calculator,
                href: "/calculator",
            },
            {
                id: "repair",
                title: "РЕМОНТ ВІКОН",
                image: SERVICES_IMAGES.repair,
                href: "/services/window-repair",
            },
            {
                id: "balcony-glazing",
                title: "СКЛІННЯ БАЛКОНІВ",
                image: SERVICES_IMAGES.glazing,
                href: "/services/balcony-glazing",
            },
            {
                id: "balcony-finishing",
                title: "ОЗДОБЛЕННЯ БАЛКОНІВ",
                image: SERVICES_IMAGES.finishing,
                href: "/services/balcony-finishing",
            },
            {
                id: "balcony-insulation",
                title: "УТЕПЛЕННЯ БАЛКОНІВ",
                image: SERVICES_IMAGES.insulation,
                href: "/services/balcony-insulation",
            },
            {
                id: "slopes",
                title: "УКОСИ",
                image: SERVICES_IMAGES.slopes,
                href: "/services/window-slopes",
            },
            {
                id: "installation",
                title: "ВСТАНОВЛЕННЯ ВІКОН",
                image: SERVICES_IMAGES.installation,
                href: "/services/window-installation",
            },
            {
                id: "measurer",
                title: "ВИКЛИК ЗАМІРНИКА",
                image: SERVICES_IMAGES.measurer,
                href: "/services/window-measurement",
            },
        ],
    },
};