type Props = {
    children: React.ReactNode;
    type?: "button" | "submit";
    widthFull?: string;
    disabled?: boolean;
};

export default function SubmitButton({
    children,
    type = "submit",
    widthFull,
    disabled,
}: Props) {
    return (
        <button
            disabled={disabled}
            type={type}
            className={`
                ${widthFull ? "w-full" : ""}
                bg-[#ffb15a]
                rounded-[8px]
                shadow-[0px_3px_9px_0px_rgba(0,0,5,.5)]
                p-[10px_20px]
                text-black
                font-bold
                transition
                duration-300
                hover:bg-[#573107]
                hover:text-white
                cursor-pointer
            `}
        >
            {children}
        </button>
    );
}