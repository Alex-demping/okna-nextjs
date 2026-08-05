import type { CalculatorWindow } from "@/types/calculator";
export const calculatorWindows: {
    window: CalculatorWindow[];
    balconyDoor: CalculatorWindow[];
    balcony: CalculatorWindow[];
} = {
    window: [
        {
            id: "window-1",
            image: "/img/lay1-thumb.webp",
            width: 800,
            height: 1400,
            leaves: 1,
        },
        {
            id: "window-2",
            image: "/img/lay2-thumb.webp",
            width: 1500,
            height: 1500,
            leaves: 2,
        },
        {
            id: "window-3",
            image: "/img/lay1-3.webp",
            width: 2100,
            height: 1500,
            leaves: 3,
        },
        {
            id: "window-4",
            image: "/img/lay1-4.webp",
            width: 1500,
            height: 1800,
            leaves: 2,
        },
    ],

    balconyDoor: [
        {
            id: "balcony-door-1",
            image: "/img/layd-thumb.webp",
            width: 700,
            height: 2100,
            leaves: 0,
        },
        {
            id: "balcony-door-2",
            image: "/img/lay1d-thumb.webp",
            width: 1400,
            height: 1400,
            secondPart: {
                width: 700,
                height: 2100,
            },
            leaves: 1,
        },
        {
            id: "balcony-door-3",
            image: "/img/lay2-3.webp",
            width: 1400,
            height: 1400,
            secondPart: {
                width: 700,
                height: 2100,
            },
            leaves: 2,
        },
    ],

    balcony: [
        {
            id: "balcony-1",
            image: "/img/lay1-3.webp",
            width: 2750,
            height: 1400,
            leaves: 3,
        },
        {
            id: "balcony-2",
            image: "/img/lay1-5.webp",
            width: 3500,
            height: 1400,
            leaves: 4,
        },
        {
            id: "balcony-3",
            image: "/img/lay1-6.webp",
            width: 3500,
            height: 1400,
            leaves: 4,
        },
    ],
};