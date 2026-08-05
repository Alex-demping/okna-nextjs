export interface ProfilePrice {
    id: string;
    name: string;
    price: number;
}

export interface WindowsillPrice {
    width: number;
    price: number;
}

export interface DripCapPrice {
    width: number;
    price: number;
}

export interface CalculatorPrices {
    profiles: ProfilePrice[];
    windowsills: WindowsillPrice[];
    dripCaps: DripCapPrice[];
    sash: number;
    balconyDoor: number;
    installation: number;
    surcharge: number;
}

export interface CalculatorWindow {
    id: string;
    image: string;
    width: number;
    height: number;
    secondPart?: {
        width: number;
        height: number;
    };
    leaves: number;
}