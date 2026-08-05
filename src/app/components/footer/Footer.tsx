
"use client";
import { getMenu } from "@/lib/getMenu";
import { useLocale, useTranslations } from 'next-intl';
import { Link } from "@/i18n/navigation";
import { TOP_NAV } from "@/data/topNav";
import { useModal } from "@/context/ModalContext";
import Image from "next/image";

export default function Footer() {
    const locale = useLocale();
    const menu = getMenu(locale as "ru" | "uk");
    const t = useTranslations("time");



    const { openModal } = useModal();


    const firstColumns = menu.slice(0, 2);
    const thirdColumn = menu[2];
    const restItems = menu.slice(3);
    return (
        <>
            <footer className="bg-[#292929] text-[#fff] py-[30px] lg:py-[50px]">
                <div className="container mx-auto grid lg:grid-cols-4 gap-8 px-[15px]">
                    <div>
                        <Link href="/" className="mb-[20px] inline-block"><img className="w-[100px] h-[auto]" src="/img/logo.png" alt="logo" /></Link>
                        <ul>
                            {TOP_NAV.map((item) => (
                                <li key={item.id}><Link className="hover:underline" href={item.href}>{item.title}</Link></li>
                            ))}
                        </ul>
                        <p>{t("weekdays")}</p>
                        <p>{t("saturday")}</p>
                    </div>

                    {firstColumns.map((item) => (
                        <div key={item.id}>
                            <h3 className="mb-[10px] text-[20px] font-bold">
                                <Link className="hover:underline" href={item.href}>
                                    {item.title}
                                </Link>
                            </h3>

                            {item.children && (
                                <ul>
                                    {item.children.map((child) => (
                                        <li key={child.id}>
                                            <Link className="hover:underline" href={child.href}>
                                                {child.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}

                    {thirdColumn && (
                        <div>
                            <h3 className="mb-[10px] text-[20px] font-bold">
                                <Link className="hover:underline" href={thirdColumn.href}>
                                    {thirdColumn.title}
                                </Link>
                            </h3>

                            <ul>
                                {thirdColumn.children?.map((child) => (
                                    <li key={child.id}>
                                        <Link className="hover:underline" href={child.href}>
                                            {child.title}
                                        </Link>
                                    </li>
                                ))}

                                {restItems.map((item) => (
                                    <li key={item.id}>
                                        <Link className="hover:underline" href={item.href}>
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div>© {new Date().getFullYear()} okna.kharkiv.ua</div>
                </div>
            </footer>
            <button
                onClick={() => openModal("callback")}
                className=" z-1 fixed cursor-pointer bottom-[50px] right-[50px] bg-[#ff8b00] text-[#fff] p-[15px] rounded-full"
            >
                <div className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  absolute w-[100px] rounded-full opacity-5 h-[100px] border-[2px] border-[#ffb15a] animate-[circle-anim_3s_ease-in-out_infinite] transition-all duration-500"></div>
                <div className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  absolute w-[100px] rounded-full opacity-5 h-[100px] bg-[#ffb15a] animate-[circle-fill-anim_2.4s_ease-in-out_infinite] transition-all duration-500"></div>
                <Image className="animate-tossing invert " src="/img/icon/phone.svg" alt="phone" width={20} height={20} />
            </button>
        </>

    )
}