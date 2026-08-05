type Review = {
    id: number;
    photo?: string;
    name: string;
    text: string;
    date: string;
};
export const PAGE_DATA: { reviews: Review[] } = {
    reviews: [
        {
            id: 1,
            photo: "/img/reviews/photo.jpg",
            name: "Виктория",
            text: "Приезжал мастер Валера очень понравилась его работа быстро и качественно установили балконный блок )и умеренная цена !отличная работа рекомендую всем !!!",
            date: "2018-03"
        },
        {
            id: 2,
            name: "Аня",
            text: "Заказывала балконную раму и блок. Ставил Валерий с напарником. Все сделали за указаный срок, качественно. Все понравилось. Спасибо !",
            date: "2018-06"
        },
        {
            id: 3,
            name: "max",
            text: "Они мне нравятся)",
            date: "2023-03"
        },

    ],
};