import Image from "next/image";

type Props = {
    title: string;
    img: string;
    imgMobile: string;
};
export default function Banner({ title, img, imgMobile }: Props) {
    return (
        <section className="relative mb-[50px] lg:mb-[80px] overflow-hidden h-[300px] lg:h-[500px]">
            <h1 className=" absolute z-10 text-[30px] lg:text-[46px] text-[#5f6973] font-bold transition-transform duration-700 ease-out  translate-x-0 delay-500 top-1/2 text-center lg:text-left w-full lg:w-1/2 -translate-y-1/2 bg-[linear-gradient(to_right,#fff_0%,transparent_100%)] p-[30px] lg:p-[30px_70px]">{title}</h1>

            <Image
                src={imgMobile}
                alt={title}
                fill
                sizes="(max-width: 1023px) 100vw, 0px"
                priority
                className="object-cover lg:hidden"
            />

            <Image
                src={img}
                alt={title}
                fill
                sizes="(max-width: 1023px) 0px, 100vw"
                priority
                className="object-cover object-center hidden lg:block"
            />
            {/* <picture>
                <source media="(min-width: 1024px)" srcSet={img} />

                <img
                    src={imgMobile}
                    alt={title}
                    className="h-full w-full object-cover"
                    fetchPriority="high"
                />
            </picture> */}
        </section>
    )
}