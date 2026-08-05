import Advantages from "@/app/components/advantages/Advantages";

const ASSORTMENT_IMAGES = {
    windows: "/img/assortment/1.webp",
    balconyGlazing: "/img/assortment/2.webp",
    balconyFinishing: "/img/assortment/3.webp",
    doors: "/img/assortment/4.webp",
    gazebos: "/img/assortment/5.webp",
    frenchBalcony: "/img/assortment/6.webp",
    doubleGlazed: "/img/assortment/7.webp",
    slidingSystems: "/img/assortment/8.webp",
}
const PRICES_IMAGES = {
    olimpia: "/img/prices/wind1.webp",
    winbau: "/img/prices/wind2.webp",
    wds: "/img/prices/wind3.webp",
    rehau: "/img/prices/wind4.webp",
    aluplast: "/img/prices/wind1.webp",
    veka: "/img/prices/wind2.webp",
    salamander: "/img/prices/wind3.webp",
};
const ADVANTAGES_IMAGES = {
    quality: "/img/advantages/quality.svg",
    timeliness: "/img/advantages/delivery.svg",
    work: "/img/advantages/work.svg",
    responsibility: "/img/advantages/open.svg",
    saving: "/img/advantages/economy.svg",
    shopping: "/img/advantages/shopping.svg",
}
export const PAGE_DATA = {
    ru: {
        assortment: {
            title: "Наш ассортимент",
            description:
                "Продукция «Харьков окна» не только качественная, но и разнообразная. Чтобы заменить старые металлопластиковые конструкции или установить новые современные окна, вам необходимо обратиться в нашу компанию.",
            items: [
                {
                    id: "windows",
                    title: "Пластиковые окна",
                    image: ASSORTMENT_IMAGES.windows,
                    href: "/okna",
                },
                {
                    id: "balcony-glazing",
                    title: "Остекление балконов",
                    image: ASSORTMENT_IMAGES.balconyGlazing,
                    href: "/balcony",
                },
                {
                    id: "balcony-finishing",
                    title: "Отделка балконов",
                    image: ASSORTMENT_IMAGES.balconyFinishing,
                    href: "/balcony-finishing",
                },
                {
                    id: "doors",
                    title: "Пластиковые двери",
                    image: ASSORTMENT_IMAGES.doors,
                    href: "/doors",
                },
                {
                    id: "french-balcony",
                    title: "Французский балкон",
                    image: ASSORTMENT_IMAGES.frenchBalcony,
                    href: "/french-balcony",
                },
                {
                    id: "gazebos",
                    title: "Беседки Веранды",
                    image: ASSORTMENT_IMAGES.gazebos,
                    href: "/gazebos",
                },
                {
                    id: "double-glazed",
                    title: "Стеклопакеты",
                    image: ASSORTMENT_IMAGES.doubleGlazed,
                    href: "/double-glazed",
                },
                {
                    id: "sliding-systems",
                    title: "Раздвижные системы",
                    image: ASSORTMENT_IMAGES.slidingSystems,
                    href: "/sliding-systems",
                },
            ],
        },
        prices: {
            title: "Цены на окна",
            items: [
                {
                    id: "olimpia",
                    title: "Окна Olimpia",
                    image: PRICES_IMAGES.olimpia,
                    href: "/prices#olimpia",
                },
                {
                    id: "winbau",
                    title: "Окна Winbau",
                    image: PRICES_IMAGES.winbau,
                    href: "/prices#winbau",
                },
                {
                    id: "wds",
                    title: "Окна WDS",
                    image: PRICES_IMAGES.wds,
                    href: "/prices#wds",
                },
                {
                    id: "rehau",
                    title: "Окна Rehau",
                    image: PRICES_IMAGES.rehau,
                    href: "/prices#rehau",
                },
                {
                    id: "aluplast",
                    title: "Окна Aluplast",
                    image: PRICES_IMAGES.aluplast,
                    href: "/prices#aluplast",
                },
                {
                    id: "veka",
                    title: "Окна Veka",
                    image: PRICES_IMAGES.veka,
                    href: "/prices#veka",
                },
                {
                    id: "salamander",
                    title: "Окна Salamander",
                    image: PRICES_IMAGES.salamander,
                    href: "/prices#salamander",
                },
            ],
        },
        advantages: {
            title: "Преимущества",
            description: "Сотрудничество с «Харьков окна» будет осуществляться на взаимовыгодных условиях, ведь наша компания обладает многочисленными преимуществами, к которым относятся:",
            titleBlockNumber: 93,
            titleBlock: "клиентов",
            descriptionBlock: "рекомендуют нас своим знакомым 16 лет опыта монтажа окон",
            items: [
                {
                    id: "quality",
                    image: ADVANTAGES_IMAGES.quality,
                    title: "Качество",
                    description: "Контроль качества на всех производственных этапах и во время установки, использование лучшего оконного профиля, бригады с опытными монтажниками.",
                },
                {
                    id: "timeliness",
                    image: ADVANTAGES_IMAGES.timeliness,
                    title: "Доставка",
                    description: "Доставка оконных блоков заказчику осуществляется в строго оговоренное время, а монтаж занимает всего лишь несколько часов.",
                },
                {
                    id: "work",
                    image: ADVANTAGES_IMAGES.work,
                    title: "Выполнение работ «под ключ»",
                    description: "Нет необходимости искать исполнителей для отдельных видов работ. Мы занимаемся изготовлением, доставкой, монтажными работами и сервисным обслуживанием любых оконных блоков.",
                },
                {
                    id: "responsibility",
                    image: ADVANTAGES_IMAGES.responsibility,
                    title: "Ответственность",
                    description: "Компания-производитель пластиковых окон несет ответственность за производимую продукцию, поэтому заказав необходимую конструкцию у нас можете быть уверены в ее высоком качестве. Наша фирма предлагает купить окна в Харькове по демократичным ценам от изготовителя, что позволит сэкономить денежные средства и получить прекрасный сервис.",
                },
                {
                    id: "saving",
                    image: ADVANTAGES_IMAGES.saving,
                    title: "Экономия",
                    description: "Клиент может сэкономить время не приезжая в офис, оформив заказ на месте с замерщиком.",
                },
                {
                    id: "shopping",
                    image: ADVANTAGES_IMAGES.shopping,
                    title: "Большой ассортимент продукции",
                    description: "У нас вы можете заказать все необходимое и получить профессиональную консультацию.",
                },
            ],
        },


    },
    uk: {
        assortment: {
            title: "Наш асортимент",
            description:
                "Продукція «Харків Вікна» не тільки якісна, а й різноманітна. Щоб замінити старі металопластикові конструкції або встановити нові сучасні вікна, вам необхідно звернутися до нашої компанії.",
            items: [
                {
                    id: "windows",
                    title: "Пластикові вікна",
                    image: ASSORTMENT_IMAGES.windows,
                    href: "/okna",
                },
                {
                    id: "balcony-glazing",
                    title: "Скління балконів",
                    image: ASSORTMENT_IMAGES.balconyGlazing,
                    href: "/balcony",
                },
                {
                    id: "balcony-finishing",
                    title: "Оздоблення балконів",
                    image: ASSORTMENT_IMAGES.balconyFinishing,
                    href: "/balcony-finishing",
                },
                {
                    id: "doors",
                    title: "Пластикові двері",
                    image: ASSORTMENT_IMAGES.doors,
                    href: "/doors",
                },
                {
                    id: "french-balcony",
                    title: "Французький балкон",
                    image: ASSORTMENT_IMAGES.frenchBalcony,
                    href: "/french-balcony",
                },
                {
                    id: "gazebos",
                    title: "Альтанки та веранди",
                    image: ASSORTMENT_IMAGES.gazebos,
                    href: "/gazebos",
                },
                {
                    id: "double-glazed",
                    title: "Склопакети",
                    image: ASSORTMENT_IMAGES.doubleGlazed,
                    href: "/double-glazed",
                },
                {
                    id: "sliding-systems",
                    title: "Розсувні системи",
                    image: ASSORTMENT_IMAGES.slidingSystems,
                    href: "/sliding-systems",
                },
            ],
        },
        prices: {
            title: "Ціни на вікна",
            items: [
                {
                    id: "olimpia",
                    title: "Вікна Olimpia",
                    image: PRICES_IMAGES.olimpia,
                    href: "/prices#olimpia",
                },
                {
                    id: "winbau",
                    title: "Вікна Winbau",
                    image: PRICES_IMAGES.winbau,
                    href: "/prices#winbau",
                },
                {
                    id: "wds",
                    title: "Вікна WDS",
                    image: PRICES_IMAGES.wds,
                    href: "/prices#wds",
                },
                {
                    id: "rehau",
                    title: "Вікна Rehau",
                    image: PRICES_IMAGES.rehau,
                    href: "/prices#rehau",
                },
                {
                    id: "aluplast",
                    title: "Вікна Aluplast",
                    image: PRICES_IMAGES.aluplast,
                    href: "/prices#aluplast",
                },
                {
                    id: "veka",
                    title: "Вікна Veka",
                    image: PRICES_IMAGES.veka,
                    href: "/prices#veka",
                },
                {
                    id: "salamander",
                    title: "Вікна Salamander",
                    image: PRICES_IMAGES.salamander,
                    href: "/prices#salamander",
                },
            ],
        },
        advantages: {
            title: "Переваги",
            description: "Співпраця з «Харків Вікна» здійснюється на взаємовигідних умовах, адже наша компанія має численні переваги, серед яких:",
            titleBlockNumber: 93,
            titleBlock: "клієнтів",
            descriptionBlock: "рекомендують нас своїм знайомим. 16 років досвіду монтажу вікон",
            items: [
                {
                    id: "quality",
                    image: ADVANTAGES_IMAGES.quality,
                    title: "Якість",
                    description: "Контроль якості на всіх виробничих етапах і під час встановлення, використання найкращого віконного профілю, бригади з досвідченими монтажниками.",
                },
                {
                    id: "timeliness",
                    image: ADVANTAGES_IMAGES.timeliness,
                    title: "Доставка",
                    description: "Доставка віконних конструкцій замовнику здійснюється у суворо погоджений час, а монтаж займає лише кілька годин.",
                },
                {
                    id: "work",
                    image: ADVANTAGES_IMAGES.work,
                    title: "Виконання робіт «під ключ»",
                    description: "Немає необхідності шукати виконавців для окремих видів робіт. Ми займаємося виготовленням, доставкою, монтажем і сервісним обслуговуванням будь-яких віконних конструкцій.",
                },
                {
                    id: "responsibility",
                    image: ADVANTAGES_IMAGES.responsibility,
                    title: "Відповідальність",
                    description: "Компанія-виробник пластикових вікон несе відповідальність за свою продукцію, тому замовляючи необхідну конструкцію у нас, ви можете бути впевнені в її високій якості. Наша компанія пропонує купити вікна в Харкові за доступними цінами від виробника, що дозволить заощадити кошти та отримати відмінний сервіс.",
                },
                {
                    id: "saving",
                    image: ADVANTAGES_IMAGES.saving,
                    title: "Економія",
                    description: "Клієнт може заощадити час, не приїжджаючи до офісу, оформивши замовлення на місці разом із замірником.",
                },
                {
                    id: "shopping",
                    image: ADVANTAGES_IMAGES.shopping,
                    title: "Великий асортимент продукції",
                    description: "У нас ви можете замовити все необхідне та отримати професійну консультацію.",
                },
            ]
        }
    }

};