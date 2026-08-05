'use client';
import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { TOP_SLIDER } from "@/data/topSlider";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "../button/Button";
import { Navigation, Pagination } from "swiper/modules";
import Arrow from "../icons/ArrowIcon";


export default function TopSlider() {
    const t = useTranslations("slider");
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        register();
    }, []);
    useEffect(() => {
        const media = window.matchMedia("(max-width: 1024px)");

        const update = () => setIsMobile(media.matches);

        update();
        media.addEventListener("change", update);

        return () => media.removeEventListener("change", update);
    }, []);
    return (
        <Swiper slidesPerView={1}
            loop
            modules={[Navigation, Pagination]}
            navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
            }}
            pagination={{ clickable: true }}>
            {TOP_SLIDER.map((item) => (
                <SwiperSlide key={item.id}>
                    {({ isActive }) => (
                        <div className="relative overflow-hidden h-[calc(100dvh-58px)] lg:h-[calc(100dvh-131px)]">


                            <Image className="object-cover " fill src={isMobile ? item.imgMobile : item.img} alt={t(item.titleKey)} />


                            <div className={`transition-transform duration-700 ease-out  ${isActive ? "translate-x-0 delay-500" : "-translate-x-full"} absolute top-1/2  lg:w-1/2 text-center -translate-y-1/2 bg-[rgba(255,255,255,0.5)] p-[30px] lg:p-[30px_70px]`}>
                                <p className=" mb-7.5 font-bold text-3xl text-[#ffb15a] text-shadow-[1px_1px_3px_#000] uppercase">{t(item.titleKey)}</p>
                                {item.imgDesc && (
                                    <Image className="mx-auto mb-7.5" src={item.imgDesc} width={300} height={300} alt={t(item.titleKey)} />
                                )}
                                {item.logos && (
                                    <div className="mb-7.5 flex items-center gap-[10px] flex-wrap">
                                        {item.logos?.map((logo) => (

                                            <Image
                                                key={logo.src}
                                                src={logo.src}
                                                alt="logo"
                                                width={logo.width}
                                                height={logo.height}
                                            />


                                        ))}
                                    </div>
                                )}
                                <Button href={item.href}>{t(item.titleBtnKey)}</Button>
                            </div>
                        </div>
                    )}

                </SwiperSlide>
            ))}


            <button className="
            cursor-pointer
                custom-prev
                hidden lg:flex
                absolute left-5 top-1/2 -translate-y-1/2
                z-10
                bg-black/40 text-white
                w-[60px] h-[60px] rounded-full
                items-center justify-center
                hover:bg-black/70
                transition
            ">
                <Arrow className="rotate-90 -ml-[5px] size-[30px] text-[#ffb15a]" />
            </button>

            <button className="
                cursor-pointer
                custom-next
                hidden 
                lg:flex
                absolute
                 right-5
                  top-1/2
                   -translate-y-1/2
                z-10
                bg-black/40 text-white
                w-[60px] h-[60px] rounded-full
                items-center justify-center
                hover:bg-black/70
                transition
            ">
                <Arrow className="-rotate-90 -mr-[5px] size-[30px] text-[#ffb15a]" />
            </button>

        </Swiper >
    );
}