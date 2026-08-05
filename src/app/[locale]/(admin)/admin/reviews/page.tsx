import { PAGE_DATA } from "@/content/pages/reviews/data";


export default function AdminReviewsPage() {

    const reviews = PAGE_DATA.reviews;


    return (
        <div className="container mx-auto max-w-[1200px] p-[15px]">

            <h1 className="text-3xl font-bold mb-8">
                Отзывы
            </h1>


            <div className="space-y-5">

                {reviews.map((item) => (
                    <div
                        key={item.id}
                        className="
                            bg-white
                            rounded-xl
                            shadow
                            p-5
                        "
                    >

                        <div className="flex justify-between">

                            <div>
                                <h3 className="font-bold text-xl">
                                    {item.name}
                                </h3>

                                <p className="mt-3">
                                    {item.text}
                                </p>

                                <span className="text-sm text-gray-500">
                                    {item.date}
                                </span>

                            </div>


                            <div className="flex gap-3">

                                <button
                                    className="
                                        px-4 py-2
                                        bg-green-500
                                        text-white
                                        rounded-lg
                                    "
                                >
                                    Одобрить
                                </button>


                                <button
                                    className="
                                        px-4 py-2
                                        bg-red-500
                                        text-white
                                        rounded-lg
                                    "
                                >
                                    Удалить
                                </button>

                            </div>

                        </div>

                    </div>
                ))}


            </div>

        </div>
    );
}