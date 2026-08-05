import Button from "../button/Button";
import { getTranslations } from "next-intl/server";



type Props = {
    html: string;
    btn?: boolean;
    mb?: boolean;
};

export default async function PageRenderer({ html, btn, mb }: Props) {
    const t = await getTranslations("btn");
    return (
        <div className={`bg-[#eeece4] py-[30px] lg:py-[50px] ${mb && "mb-[50px] lg:mb-[80px]"}`}>
            <div className=" container  max-w-[960px] mx-auto p-[0_15px] ">
                <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                {btn &&
                    <div className="flex justify-center mt-[30px]">
                        <Button href="/calculator"> {t("btnCallculator")}</Button>
                    </div>
                }

            </div>
        </div>


    );
}