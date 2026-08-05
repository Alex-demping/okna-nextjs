"use client";

import { useState } from "react";

type QuestionsItem = {
    id: number;
    title: string;
    answer: string;
};

type Props = {
    questions: QuestionsItem[];
};

export default function Accordion({ questions }: Props) {
    const [activeId, setActiveId] = useState<number | null>(null);

    const toggleAccordion = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (

        <div className="space-y-4 container mx-auto max-w-[960px] mb-[50px] lg:mb-[80px] px-[15px]">
            {questions.map((item) => (
                <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                >
                    <button
                        type="button"
                        onClick={() => toggleAccordion(item.id)}
                        className={`${activeId === item.id ? "bg-[#eeece4]" : "bg-white"} cursor-pointer w-full flex justify-between items-center p-4 text-left font-semibold  hover:bg-[#eeece4] transition`}
                    >
                        <span>{item.title}</span>

                        <span
                            className={`text-2xl transition-transform duration-300 ${activeId === item.id ? "rotate-45" : ""
                                }`}
                        >
                            +
                        </span>
                    </button>

                    <div
                        className={`grid transition-all duration-300 ${activeId === item.id
                            ? "grid-rows-[1fr]"
                            : "grid-rows-[0fr]"
                            }`}
                    >
                        <div className="overflow-hidden">
                            <div className="p-4 pt-[15px] text-gray-600 leading-relaxed">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}