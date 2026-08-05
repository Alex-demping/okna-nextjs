"use client";

import { Link, usePathname } from "@/i18n/navigation";

const MENU = [
    {
        title: "Dashboard",
        href: "/admin",
    },
    {
        title: "Страницы",
        href: "/admin/pages",
    },
    {
        title: "Отзывы",
        href: "/admin/reviews",
    },
    {
        title: "Галерея",
        href: "/admin/gallery",
    },
    {
        title: "Калькулятор",
        href: "/admin/calculator",
    },
    {
        title: "Настройки",
        href: "/admin/settings",
    },
];

export default function AdminSidebar() {
    const pathname = usePathname();


    return (
        <aside className="w-64 bg-white border-r min-h-[calc(100vh-64px)]">
            <nav className="p-4">
                <ul className="space-y-2">
                    {MENU.map((item) => {
                        const isActive =
                            item.href === "/admin"
                                ? pathname === item.href
                                : pathname === item.href ||
                                pathname.startsWith(`${item.href}/`);
                        return (


                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`block rounded-md px-4 py-2 transition  
                                        ${isActive
                                            ? "bg-orange-100 text-orange-600"
                                            : "hover:bg-gray-100"
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </aside>
    );
}