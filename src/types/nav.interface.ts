export interface INav {
    id: number;
    title: string;
    href: string;
    icon?: string;
    width?: number;
    height?: number;
    children?: INav[];
}