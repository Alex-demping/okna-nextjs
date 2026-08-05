import { getTranslations } from "next-intl/server";
import Button from "./components/button/Button";
import Image from "next/image";

export default async function NotFound() {

    const t = await getTranslations("notFound");
    return (
        <div className="relative container mx-auto px-[15px] py-[80px] text-center flex flex-col items-center justify-center h-[100vh]">
            <Image className="absolute top-0 left-0 w-full h-full object-cover" src="/img/404.webp" alt="404" fill sizes="100%" />
            <div className="relative">
                <h1 className="text-8xl font-bold">
                    {t("title")}
                </h1>

                <p className="my-5 text-2xl font-semibold text-[#ffb15a] text-shadow-[1px_1px_3px_#000]">
                    {t("description")}
                </p>
                <Button href="/">{t("button")}</Button>
            </div>

        </div>
    );
}