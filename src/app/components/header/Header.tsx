"use client";
import { getMenu } from "@/lib/getMenu";
import { TOP_NAV } from '@/data/topNav';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ArrowIcon from '../icons/ArrowIcon';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from "@/i18n/navigation";
import UserIcon from '../icons/UserIcon';

import { useAuth } from "@/hooks/useAuth";
export default function Header() {
    const { user } = useAuth();
    const locale = useLocale();
    const menu = getMenu(locale as "ru" | "uk");
    const pathname = usePathname();
    const isActivePath = (href: string) => {
        return pathname === href || pathname.startsWith(`${href}/`);
    };
    const t = useTranslations("menu");
    const [openNav, setOpenNav] = useState(false);
    const [openNavMobile, setOpenNavMobile] = useState<string | null>(null);
    const [openLanguage, setOpenLanguage] = useState(false);
    const closeMenu = () => {
        setOpenNav(false);
        setOpenNavMobile(null);
        setOpenLanguage(false);
    };
    const ref = useRef<HTMLDivElement | null>(null);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpenLanguage(false);
            }
        };


        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className="bg-[#292929] fixed top-0 left-0 right-0 z-50">
            <div className='p-[10px_15px] flex items-center justify-between lg:hidden'>
                <Link href="/"><Image src="/img/logo.png" alt="logo" width={60} height={38} /></Link>
                <Link href={user ? "/admin" : "/login"} className='ml-auto mr-[10px] group flex  lg:hidden bg-[#fff] rounded-full w-[30px] h-[30px] items-center justify-center'>

                    <UserIcon className={` w-[20px] h-[20px] transition-all duration-200 ${user ? "text-green-500" : "text-[#000]"} `} />
                </Link>
                <button onClick={() => setOpenNav((prev) => !prev)} className={`overflow-hidden relative cursor-pointer flex flex-col justify-between items-center rounded-[5px] p-[7px] border border-solid border-[#ffb15a] w-[35px] h-[30px]`}>
                    <span className={`${openNav ? "absolute  rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""} bg-[#ffb15a] h-[2px] w-[100%] block transition`}></span>
                    <span className={`${openNav ? "hidden" : ""} bg-[#ffb15a] h-[2px] w-[100%] block transition`}></span>
                    <span className={`${openNav ? "absolute  -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" : ""} bg-[#ffb15a] h-[2px] w-[100%] block transition`}></span>
                </button>
            </div>
            <div className={`fixed pb-[100px] lg:pb-0  bottom-0  top-[58px] transition-all duration-400 ${openNav ? "   left-0 w-[100%] bg-[#292929]" : "left-[-100%]"} lg:static`}>
                <div className={`bg-[#292929] lg:bg-[#eeece4] text-white lg:text-[#292929] border-b border-solid border-[#ffb15a] lg:border-0 overflow-hidden transition-all duration-300 ease-in-out 
                ${hidden
                        ? "lg:max-h-0  lg:opacity-0 "
                        : "lg:max-h-[60px] lg:opacity-100 "
                    }`}>
                    <div className="container mx-auto p-[10px_15px] ">
                        <ul className="flex flex-col gap-1 lg:gap-3 lg:items-center  justify-center lg:flex-row">
                            {TOP_NAV.map((item) => (
                                <li key={item.id}>
                                    <Link className="flex gap-2 items-center" href={item.href}>
                                        {item.icon && (
                                            <img src={item.icon} alt={item.title} className=" invert lg:invert-0 w-[15px] h-auto" />
                                        )}
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="container  mx-auto p-[0_15px] lg:flex items-center justify-between">
                    <Link href="/" className='hidden lg:inline-block'>
                        <Image loading="eager" src="/img/logo.png" alt="logo" width={105} height={67} />
                    </Link>
                    <nav className="m-[20px_0_40px] lg:m-0">
                        <ul className=" mb-5 text-[18px] lg:flex gap-3 text-white lg:mb-0">
                            {menu.map((item) => {
                                const isActive = isActivePath(item.href);
                                return (
                                    <li key={item.id} className="group mb-2.5 lg:min-h-[87px] lg:mb-0 flex items-center gap-3 lg:gap-1">
                                        <Link className={` lg:group-hover:text-[#ffb15a] ${isActive ? "text-[#ffb15a]" : "text-[#fff]"} transition-all duration-200`} onClick={closeMenu} href={item.href}>{item.title}</Link>
                                        {item.children && (
                                            <>
                                                <button onClick={() => {
                                                    if (window.innerWidth < 1024) {
                                                        setOpenNavMobile(openNavMobile === item.id ? null : item.id);
                                                    }
                                                }}>
                                                    <ArrowIcon className={`${isActive ? "text-[#ffb15a]" : "text-[#fff]"} size-[15px] lg:size-[7px] cursor-pointer lg:group-hover:text-[#ffb15a] transition-transform duration-200 lg:group-hover:rotate-180`} />
                                                </button>
                                                <div className={` absolute overflow-auto z-10 pb-[100px]  ${item.image ? "lg:min-h-[430px]" : ""}  lg:pb-0 lg:opacity-0 lg:invisible top-0 bottom-0 z-1 lg:bottom-auto   ${hidden ? "lg:top-[87px]" : "lg:top-[131px]"}  lg:left-0 w-full bg-[#eeece4]  lg:shadow-[0px_3px_9px_0px_rgba(0,0,0,.5)] lg:group-hover:opacity-100 lg:group-hover:visible transition-all duration-200 ${openNavMobile === item.id ? "  left-0" : "-left-full"}`}>
                                                    <div className=" lg:hidden p-[10px_15px] border-b border-solid border-[#ffb15a]">
                                                        <button onClick={() => setOpenNavMobile(null)} className="flex gap-3 cursor-pointer items-center" >
                                                            <ArrowIcon className="text-black size-[15px]   rotate-90" />
                                                            <span className="text-black">{item.title}</span>
                                                        </button>

                                                    </div>
                                                    <div className="container mx-auto p-[30px_15px] ">
                                                        <ul className="lg:grid  lg:grid-cols-2 lg:gap-3 lg:w-1/2">
                                                            {item.children.map((child) => {
                                                                const isChildActive = isActivePath(child.href);
                                                                return (
                                                                    <li className="mb-[10px] lg:mb-0" key={child.id} >
                                                                        <Link className={` hover:text-[#ffb15a] transition-all duration-200 ${isChildActive ? "text-[#ffb15a]" : "text-[#000]"}`} onClick={closeMenu} href={child.href}>{child.title}</Link>
                                                                    </li>
                                                                )

                                                            })}
                                                        </ul>
                                                    </div>
                                                    {item.image && (
                                                        <div className="w-1/2 absolute top-0 right-0 h-full hidden lg:flex items-end justify-end ">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                width={item.width}
                                                                height={item.height}
                                                                className="max-w-full h-auto"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </li>
                                )

                            })}
                        </ul>
                    </nav>

                    <div ref={ref} className="flex items-center gap-[5px]">
                        <Link href={user ? "/admin" : "/login"} className='group hidden lg:flex bg-[#fff] rounded-full w-[30px] h-[30px] items-center justify-center'>
                            <UserIcon className={` w-[20px] h-[20px] transition-all duration-200 ${user ? "text-green-500" : "text-[#000] group-hover:text-[#ffb15a]"} `} />
                        </Link>
                        <div className='relative'>


                            <div
                                onClick={() => setOpenLanguage((prev) => !prev)}
                                className={`cursor-pointer hidden lg:block relative p-[5px_18px_5px_8px]  ${openLanguage ? " text-[#ffb15a]" : "text-white"}`}>
                                <ArrowIcon className={`absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-200 ${openLanguage ? " rotate-180 " : ""}`} />
                                {locale.toUpperCase()}
                            </div>

                            <ul
                                className={`flex text-[18px] p-0 gap-10 lg:block absolute text-white top-full left-0 w-full z-1 lg:text-[#000] lg:bg-[#eeece4] lg:shadow-[0_5px_5px_0px_#ccc] text-black lg:p-2 ${openLanguage ? "lg:block" : "lg:hidden"} `}
                            >
                                <li>
                                    <Link onClick={() => setOpenLanguage(false)} href={pathname} locale="uk" className="hover:text-[#ffb15a] transition-all duration-200">UA</Link>
                                </li>
                                <li>
                                    <Link onClick={() => setOpenLanguage(false)} href={pathname} locale="ru" className="hover:text-[#ffb15a] transition-all duration-200">RU</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

