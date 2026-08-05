
import Breadcrumbs from "@/app/components/breadcrumbs/Breadcrumbs";
import ContactForm from "@/app/components/contactForm/ContactForm";
import GoogleMap from "@/app/components/map/GoogleMap";
import { PAGE_DATA } from "@/content/pages/contacts/data";
import { PAGE } from "@/content/pages/contacts/page";
import { TOP_NAV } from "@/data/topNav";
import { generatePageMetadata } from "@/lib/generateMetadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Link from "next/link";


export async function generateMetadata(props: {
    params: Promise<{ locale: "ru" | "uk" }>;
}): Promise<Metadata> {

    const { locale } = await props.params;

    return generatePageMetadata(
        PAGE,
        locale
    );
}

export default async function ContactsPage({
    params,
}: {
    params: Promise<{
        locale: "ru" | "uk";
    }>;
}) {

    const { locale } = await params;
    const t = await getTranslations("time");
    return (
        <>
            <GoogleMap />
            <Breadcrumbs
                locale={locale}
                pathname={PAGE.path}
                mbNone

            />
            <div className="bg-[#eeece4] py-[30px] lg:py-[50px] ">
                <div className=" container mx-auto max-w-[1200px] p-[0_15px]">
                    <h1>{PAGE_DATA[locale].title}</h1>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ContactForm />
                        <div>
                            <p >{PAGE_DATA[locale].contacts.address}</p>
                            <ul className="mb-[10px]">
                                {TOP_NAV.map((item) => (
                                    <li key={item.id}>
                                        <Link className="flex gap-2 items-center hover:underline" href={item.href}>
                                            {item.icon && (
                                                <img src={item.icon} alt={item.title} className="invert-0 w-[15px] h-auto" />
                                            )}
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <p>{t("weekdays")}</p>
                            <p>{t("saturday")}</p>
                        </div>

                    </div>
                    <div className="prose max-w-none" dangerouslySetInnerHTML={{
                        __html: PAGE_DATA[locale].content,
                    }}
                    />
                </div>
            </div >

        </>
    );
}