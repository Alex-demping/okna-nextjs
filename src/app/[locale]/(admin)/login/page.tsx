"use client";

import { useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useAuth } from "@/hooks/useAuth";
import SubmitButton from "@/app/components/button/SubmitButton";
import { useTranslations } from "next-intl";


export default function LoginPage() {
    const t = useTranslations("loginForm");

    const { login } = useAuth();

    const router = useRouter();


    const [loginValue, setLoginValue] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");



    function handleSubmit(e: React.FormEvent) {

        e.preventDefault();


        const success = login(
            loginValue,
            password
        );


        if (!success) {

            setError(t("error"));

            return;
        }


        router.push("/admin");
    }



    return (
        <div className="min-h-screen flex items-center justify-center">

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-sm p-6 shadow rounded-lg"
            >

                <h1 className="text-2xl mb-5">{t("title")}</h1>


                {error && (
                    <p className="text-red-500 mb-3">
                        {error}
                    </p>
                )}


                <input
                    type="text"
                    placeholder={t("loginPlaceholder")}
                    value={loginValue}
                    onChange={(e) =>
                        setLoginValue(e.target.value)
                    }
                    className="border p-3 w-full mb-3 rounded"
                />


                <input
                    type="password"
                    placeholder={t("passwordPlaceholder")}
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="border p-3 w-full mb-4 rounded"
                />

                <SubmitButton widthFull="w-full" type="submit">{t("btn")}</SubmitButton>


            </form>

        </div>
    );
}