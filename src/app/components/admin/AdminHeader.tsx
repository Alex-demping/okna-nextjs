"use client";

import { useRouter } from "@/i18n/navigation";
import { useAuth } from "@/hooks/useAuth";
import { useLocale } from "next-intl";



export default function AdminHeader() {
    const { user, logout } = useAuth();

    const router = useRouter();


    function handleLogout() {
        logout();
        router.replace("/");
        router.refresh();

    }


    return (
        <header className="h-16 bg-white border-b px-6 flex items-center justify-between">

            <h1 className="text-xl font-semibold">
                Админ-панель
            </h1>


            <div className="flex items-center gap-4">

                <span className="text-sm text-gray-600">
                    {user?.login}
                </span>


                <button
                    onClick={handleLogout}
                    className="
                    cursor-pointer
                        px-4 py-2
                        rounded-md
                        bg-red-500
                        text-white
                        hover:bg-red-600
                        transition
                    "
                >
                    Выйти
                </button>

            </div>

        </header>
    );
}