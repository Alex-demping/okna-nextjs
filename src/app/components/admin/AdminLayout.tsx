"use client";

import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

type Props = {
    children: ReactNode;
};

export default function AdminLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-gray-100">
            <AdminHeader />

            <div className="flex">
                <AdminSidebar />

                <main className="flex-1 p-6 ">
                    {children}
                </main>
            </div>
        </div>
    );
}