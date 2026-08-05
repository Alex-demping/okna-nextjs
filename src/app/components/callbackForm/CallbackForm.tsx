"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import SubmitButton from "../button/SubmitButton";


export default function ContactForm() {
    const t = useTranslations("contactForm");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);


    const schema = useMemo(
        () =>
            z.object({
                name: z
                    .string()
                    .trim()
                    .min(2, t("errorName")),

                phone: z
                    .string()
                    .trim()
                    .min(10, t("errorPhone"))
                    .regex(
                        /^[+]?[0-9\s()-]{10,20}$/,
                        t("errorPhoneFormat")
                    ),


            }),
        [t]
    );
    const sendContact = async (data: FormData) => {
        return fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };

    type FormData = z.infer<typeof schema>;


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),

        defaultValues: {
            name: "",
            phone: "",
        },
    });


    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);
            setSuccess(false);
            setError("");



            const res = await sendContact(data);

            const result = await res.json();

            if (!result.success) {
                throw new Error("Contact request failed");
            }



            reset();
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 5000);

        } catch (error) {
            console.error(error);
            setSuccess(false);
            setError(t("serverError"));
        } finally {
            setLoading(false);
        }
    };



    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl space-y-4 mb-[20px]"
        >

            <div>
                <input
                    {...register("name")}
                    autoComplete="name"
                    maxLength={50}
                    disabled={loading}
                    type="text"
                    placeholder={t("name")}
                    className={`w-full bg-[#fff] rounded-lg border p-3 ${errors.name ? "border-red-500" : ""}`}
                />

                {errors.name && (
                    <p className="text-sm text-red-500">
                        {errors.name.message}
                    </p>
                )}
            </div>


            <div>
                <input
                    {...register("phone")}
                    autoComplete="tel"
                    maxLength={20}
                    disabled={loading}
                    type="tel"
                    placeholder={t("phone")}
                    className={`w-full bg-[#fff] rounded-lg border p-3 ${errors.phone ? "border-red-500" : ""}`}
                />

                {errors.phone && (
                    <p className="text-sm text-red-500">
                        {errors.phone.message}
                    </p>
                )}
            </div>

            <SubmitButton disabled={loading}>
                {loading ? t("loading") : t("btn")}
            </SubmitButton>


            {success && (
                <p className="text-green-600 font-medium">
                    {t("success")}
                </p>
            )}
            {error && (
                <p className="text-red-600 font-medium">
                    {error}
                </p>
            )}

        </form>
    );
}