"use client";
import ReviewForm from "@/app/components/reviewForm/ReviewForm";
import Image from "next/image";
import { PAGE_DATA } from "@/content/pages/reviews/data";
import { useState } from "react";

export default function ReviewsList() {
    const [reviews, setReviews] = useState(PAGE_DATA.reviews);
    function addReview(review: any) {
        setReviews((prev) => [
            ...prev,
            review
        ]);
    }
    return (
        <div className="bg-[#eeece4] py-[30px] lg:py-[50px] ">
            <div className="container mx-auto max-w-[1200px] p-[0_15px] ">
                {reviews.map((item) => (
                    <div key={item.id} className="bg-[#fff] rounded-lg border p-[20px_15px] lg:flex gap-[20px] items-center mb-[30px]">
                        <div className="basis-[100px] w-[100px] h-[100px] m-auto mb-[20px] lg:m-0  shrink-0 grow-0 rounded-full overflow-hidden relative bg-[#eeece4]">
                            {item.photo ? (
                                <Image
                                    src={item.photo}
                                    alt={item.name}
                                    fill
                                    sizes="100px"
                                    className="object-cover"
                                />
                            ) : (
                                <Image
                                    src="/img/icon/user.svg"
                                    alt={item.name}
                                    fill
                                    sizes="100px"
                                    className="object-cover"
                                />
                            )}
                        </div>
                        <div>

                            <p className="mb-[10px]">{item.text}</p>
                            <h3 className="mb-[5px] text-[20px] font-bold">{item.name}</h3>
                            <span>{item.date}</span>
                        </div>
                    </div>
                ))

                }
                <ReviewForm addReview={addReview} />
            </div>
        </div>

    )
}