import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type Item = {
    id: string;
    title: string;
    image: string;
    href: string;
};

type Props = {
    title?: string;
    description?: string;
    items: Item[];
    variant?: "horizontal" | "vertical";
};

export default async function GridPost({
    title,
    description,
    items,
    variant,
}: Props) {
    const t = await getTranslations("gridPost");
    const moreText = t("more");
    return (
        <div className="container max-w-[960px] mx-auto p-[0_15px] mb-[50px] lg:mb-[80px]">
            {title &&
                <h2 className="text-center mb-[20px] text-4xl font-bold">
                    {title}
                </h2>
            }


            {
                description && (
                    <p className="mb-[20px]">{description}</p>
                )
            }

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {items.map((item) => (
                    <div key={item.id} className="group  ">
                        <Link
                            href={item.href}
                            className={`shadow-[0px_0px_5px_#ccc] relative block overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[rgba(0,0,0,.5)] after:opacity-0 lg:group-hover:after:opacity-100 after:transition
                              ${variant === "horizontal" ? "aspect-[16/9]" : "aspect-[4/3]"}
                                 
                                `}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                className={`transform-gpu lg:group-hover:scale-110 transition duration-500 m-auto 
                                     ${variant === "horizontal" ? "object-cover" : "object-contain"}
                                    `}
                                sizes="(max-width: 768px) 100vw,(max-width: 1024px) 50vw,33vw"
                                fill
                                loading="lazy"
                            />

                            <span className="z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%]  text-[#ffb15a] text-center  lg:group-hover:opacity-100 opacity-0 text-shadow-[1px_1px_3px_#000] font-bold transition duration-300">
                                {moreText}
                            </span>
                        </Link>

                        <h3 className="bg-[#eeece4] relative">
                            <Link
                                href={item.href}
                                className="block font-semibold text-xl text-center p-[5px_10px] text-[#ffb15a] transition duration-300 lg:group-hover:text-[#ff8600] text-shadow-[1px_1px_3px_#000]" >
                                {item.title}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div >
    );
}