import { calculatorPrices } from "@/data/calculatorPrices";
import type { WindowItem } from "@/types/page";
import { useTranslations } from "next-intl";
import Image from "next/image";
type Props = {
    windows: WindowItem[];
};

export default function PricesWindows({ windows }: Props) {
    const price = calculatorPrices.profiles.find((item) => item.id === "olimpia")?.price ?? 0;
    const installation = calculatorPrices.installation;
    const surcharge = calculatorPrices.surcharge;
    const t = useTranslations("pricesWindows");
    return (
        <div className="bg-[#eeece4] py-[30px] lg:py-[50px] ">
            <div className="container mx-auto max-w-[1200px] p-[0_15px] grid grid-cols-1 lg:grid-cols-3  gap-10">
                {windows.map((item) => {
                    const sashPrice = (item.sash ?? 0) * calculatorPrices.sash + (item.balconyDoor ?? 0) * calculatorPrices.balconyDoor;
                    const area = (item.width / 1000) * (item.height / 1000);
                    const subtotal = price * area + installation * area + sashPrice;
                    const total = (subtotal + (subtotal * surcharge / 100)).toFixed(2);


                    // const total = (price * area) + (item.sash ?? 0) * calculatorPrices.sash + (item.balconyDoor ?? 0) * calculatorPrices.balconyDoor;

                    const sash = (item.sash ?? 0) + (item.balconyDoor ?? 0);
                    return (
                        <div key={item.id}>
                            <figure className="relative pt-[56.25%]">
                                <Image src={item.img} alt={item.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
                            </figure>


                            <div className="flex justify-between mt-[15px] border-b border-[#999] pb-[5px] mb-[5px]">
                                <span>{t("size")}: </span> <span className="font-bold">{item.width} x {item.height}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#999] pb-[5px] mb-[5px]">
                                <span>{t("sash")}: </span> <span className="font-bold">{sash}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#999] pb-[5px] mb-[5px]">
                                <span>{t("price")}: </span><span className="font-bold">{total} грн</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}