"use client";

import { useMemo, useState } from "react";
import SubmitButton from "../button/SubmitButton";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

type Props = {
    addReview: (review: {
        id: number;
        name: string;
        text: string;
        date: string;
        photo?: string;
    }) => void;
};

export default function ReviewForm({ addReview }: Props) {
    const t = useTranslations("reviewsForm");

    const [photo, setPhoto] = useState<File | null>(null);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);


    const schema = useMemo(
        () =>
            z.object({
                name: z.string().min(2, t("errorName")),
                message: z.string().min(5, t("errorMessage")),
            }),
        [t]
    );

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
            message: "",
        },
    });


    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);
            setSuccess(false);


            // пока просто проверяем данные
            console.log(data);

            addReview({
                id: Date.now(),
                name: data.name,
                text: data.message,
                photo: photo
                    ? URL.createObjectURL(photo)
                    : undefined,
                date: new Date().toISOString().slice(0, 7),
            });


            // здесь позже будет отправка на сервер
            // await fetch("/api/contact", {
            //     method: "POST",
            //     body: JSON.stringify(data),
            // });


            reset();
            setPhoto(null);
            setSuccess(true);


        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }
    };
    return (

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-[960px] mx-auto space-y-4 my-[50px] lg:my-[80px]">
            <div>
                <input
                    {...register("name")}
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
                <textarea
                    {...register("message")}
                    placeholder={t("message")}
                    rows={5}
                    className={`w-full bg-[#fff] rounded-lg border p-3 ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                    <p className="text-sm text-red-500">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <label
                className="
        flex items-center gap-3
        w-full
        px-5 py-3
        bg-white
        rounded-lg
        border
        cursor-pointer
        hover:shadow-md
        transition
    "
            >
                <svg
                    className="w-6 h-6 text-[#ffb15a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                    />
                </svg>

                <span>
                    {photo ? photo.name : t("photo")}
                </span>

                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                        if (e.target.files?.[0]) {
                            setPhoto(e.target.files[0]);
                        }
                    }}
                />
            </label>
            <SubmitButton>{loading ? "..." : t("btn")}</SubmitButton>
            {success && (
                <p className="text-green-600 font-medium">
                    {t("success")}
                </p>
            )}

        </form>

    );
}