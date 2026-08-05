import Image from "next/image";
import Button from "../button/Button";
import { getTranslations } from "next-intl/server";
import { calculatorPrices } from "@/data/calculatorPrices";
type items = {
    id: string;
    title: string;
    href: string;
    content: string[];
    image: string;
}
type Props = {
    title: string;
    items: items[];
};
export default async function Prices(props: Props) {
    const t = await getTranslations("btn");
    const sashPrice = calculatorPrices.sash;
    const installation = calculatorPrices.installation;
    const surcharge = calculatorPrices.surcharge;
    const area = 2.25;

    return (
        <>

            <div className=" container mx-auto max-w-[960px] p-[0_15px] mb-[50px] lg:mb-[80px]">
                <h2 className="text-center mb-[30px] text-4xl font-bold">{props.title}</h2>
                {props.items.map((item) => {
                    const price = calculatorPrices.profiles.find(
                        (profile) => profile.id === item.id
                    )?.price ?? 0;
                    const subtotal = price * area + installation * area + sashPrice;
                    const total = (subtotal + (subtotal * surcharge / 100)).toFixed(0);
                    return (
                        <div id={item.id} key={item.id} className="scroll-mt-[70px] lg:scroll-mt-[120px] flex flex-col md:flex-row gap-5 border-b border-[#eeece4] mb-[30px] py-[30px]">
                            <div>
                                <Image src={item.image} alt={item.title} width={259} height={354} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-[15px]">{item.title} {total} грн.</h3>
                                <div className="prose max-w-none">
                                    <ul>
                                        {item.content.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-5 flex-wrap">
                                        <Button href={`/calculator?profile=${item.id}`}>{t("window_calculator")}</Button>
                                        <Button href={item.href}>{t("window_profile")}</Button>
                                        <Button href="/pvc-products/okna">{t("window_types")}</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}