import Link from "next/link";
import { buildBreadcrumbs } from "./buildBreadcrumbs";

type Props = {
    pathname: string;
    locale: "ru" | "uk";
    mbNone?: boolean;
};

export default async function Breadcrumbs({
    pathname,
    locale,
    mbNone,
}: Props) {
    const items = await buildBreadcrumbs(pathname, locale);
    return (
        <div className={`border-b border-b-[#eeece4] py-[15px] lg:py-[30px] -mt-[50px] lg:-mt-[80px] ${!mbNone ? "mb-[50px] lg:mb-[80px]" : ""}`}>
            <nav aria-label="Breadcrumb" className="container mx-auto max-w-[960px] p-[0_15px]">
                <ol className="flex flex-wrap items-center gap-2">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={item.href} className="flex items-center gap-2">
                                {index > 0 && (
                                    <span aria-hidden="true" className="text-[#999]">
                                        /
                                    </span>
                                )}

                                {isLast ? (
                                    <span aria-current="page" className="text-[#999]">
                                        {item.label}
                                    </span>
                                ) : (
                                    <Link href={item.href} className="hover:underline">
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
}