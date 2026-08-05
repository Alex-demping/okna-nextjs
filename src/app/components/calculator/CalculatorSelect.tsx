import React from "react";

interface CalculatorSelectProps {
    children: React.ReactNode;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function CalculatorSelect({ children, value, onChange, }: CalculatorSelectProps) {
    return (
        <div className="relative mb-[20px]">
            <select
                className="
                                cursor-pointer
                                w-full
            appearance-none
            rounded-lg
            border-2
            border-[#ffb15a]
            bg-white
            px-4
            py-3
            pr-12
            font-medium
            text-[#333]
            shadow-md
            transition-all
            duration-200
            hover:shadow-lg
            focus:outline-none
            
            "

                value={value}
                onChange={onChange}
            >
                {children}

            </select>
            <svg
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </div>
    );
}