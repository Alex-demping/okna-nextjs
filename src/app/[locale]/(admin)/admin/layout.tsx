"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { useAuth } from "@/hooks/useAuth";
import AdminLayout from "@/app/components/admin/AdminLayout";


export default function Layout({
    children
}: {
    children: ReactNode;
}) {

    const { user, loading, loggingOut } = useAuth();

    const router = useRouter();


    useEffect(() => {

        if (!loading && !loggingOut && !user) {
            router.push("/login");
        }

    }, [
        loading,
        loggingOut,
        user,
        router
    ]);



    if (loading) {
        return null;
    }


    if (!user) {
        return null;
    }


    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    );
}