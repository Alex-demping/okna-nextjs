"use client";

import Image from "next/image";
import { useState } from "react";

export type TabItem = {
    id: string;
    label: string;
    image?: string;
    content: string[];
};

type Props = {
    items: TabItem[];
    defaultTab?: string;
};

export default function Tabs({
    items,
    defaultTab,
}: Props) {
    const [activeTab, setActiveTab] = useState(
        defaultTab ?? items[0]?.id
    );

    const activeItem = items.find(
        (tab) => tab.id === activeTab
    );

    if (!activeItem) return null;

    return (
        <div className="bg-[#eeece4] py-[30px] lg:py-[50px]  mb-[80px] lg:mb-[80px]">
            <div className="flex flex-wrap border-b border-[#000] justify-center">
                {items.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-6 cursor-pointer py-3 border-b-2 transition-colors ${activeTab === tab.id
                            ? "border-[#ff6b00] text-[#ff6b00]"
                            : "border-transparent hover:text-[#ff6b00]"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-[30px] pt-[30px] items-center lg:flex-row container mx-auto max-w-[960] px-[15px]">
                {activeItem.image && (
                    <div className="rounded-full overflow-hidden w-[300px] h-[300px]  relative">
                        <Image
                            src={activeItem.image}
                            alt={activeItem.label}
                            fill
                            className="object-cover"
                            sizes="300px"
                        />
                    </div>

                )}

                <div className="prose">
                    <ul className="space-y-3 list-disc pl-5">
                        {activeItem.content.map((item) => (
                            <li key={item}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}