'use client';
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import 'swiper/css';
import Arrow from "../icons/ArrowIcon";

import Image from "next/image";
import { PAGE_DATA } from "@/content/pages/reviews/data";



export default function SliderReviews() {
    const t = useTranslations("reviews");
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const reviews = PAGE_DATA.reviews;
    return (
        <div className="relative container mx-auto max-w-[960px] p-[0_15px]  lg:p-[0_100px] mb-[50px] lg:mb-[80px]">
            <h2 className="text-center mb-[20px] text-4xl font-bold">
                {t("reviewsTitle")}
            </h2>

            <Swiper
                modules={[Navigation]}
                loop

                navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                }}
            >
                {reviews.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="lg:flex gap-[20px] items-center">
                            <div className="basis-[100px] w-[100px] h-[100px] m-auto mb-[20px] lg:m-0  shrink-0 grow-0 rounded-full overflow-hidden relative bg-[#eeece4]">
                                {item.photo ? (
                                    <Image
                                        src={item.photo}
                                        alt={item.name}
                                        fill
                                        sizes="100px"
                                        className="object-cover"
                                    />
                                ) : (
                                    <Image
                                        src="/img/icon/user.svg"
                                        alt={item.name}
                                        fill
                                        sizes="100px"
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div>

                                <p className="mb-[10px]">{item.text}</p>
                                <h3 className="mb-[5px] text-[20px] font-bold">{item.name}</h3>
                                <span>{item.date}</span>
                            </div>
                        </div>



                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                ref={prevRef}
                className="custom-prev cursor-pointer hidden lg:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 bg-black/40 w-[60px] h-[60px] rounded-full items-center justify-center"
            >
                <Arrow className="rotate-90 size-[30px] mr-[5px] text-[#ffb15a]" />
            </button>

            <button
                ref={nextRef}
                className="custom-next cursor-pointer hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 z-10 bg-black/40 w-[60px] h-[60px] rounded-full items-center justify-center"
            >
                <Arrow className="-rotate-90 size-[30px] -mr-[5px] text-[#ffb15a]" />
            </button>
        </div>
    );
}