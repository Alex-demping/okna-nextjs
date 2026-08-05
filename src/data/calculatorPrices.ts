import type { CalculatorPrices } from "@/types/calculator";

export const calculatorPrices: CalculatorPrices = {
    profiles: [
        { id: "olimpia", name: "Olimpia", price: 2300 },
        { id: "wds", name: "WDS", price: 2400 },
        { id: "aluplast", name: "Aluplast", price: 2450 },
        { id: "veka", name: "Veka", price: 3200 },
        { id: "winbau", name: "Winbau", price: 3300 },
        { id: "rehau", name: "Rehau", price: 3400 },
        { id: "salamander", name: "Salamander", price: 3500 },
    ],

    windowsills: [
        { width: 100, price: 150 },
        { width: 150, price: 180 },
        { width: 200, price: 200 },
        { width: 250, price: 220 },
        { width: 300, price: 270 },
        { width: 350, price: 300 },
        { width: 400, price: 350 },
        { width: 450, price: 400 },
        { width: 500, price: 450 },
        { width: 550, price: 480 },
        { width: 600, price: 550 },
    ],

    dripCaps: [
        { width: 50, price: 100 },
        { width: 100, price: 120 },
        { width: 150, price: 180 },
        { width: 200, price: 220 },
        { width: 250, price: 280 },
        { width: 300, price: 350 },
        { width: 350, price: 380 },
        { width: 400, price: 450 },
        { width: 450, price: 450 },
    ],

    sash: 2000,
    balconyDoor: 2400,
    installation: 550,
    surcharge: 10,
};