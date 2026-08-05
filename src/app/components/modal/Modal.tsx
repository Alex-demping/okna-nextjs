type Props = {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};
export default function Modal({ title, isOpen, children, onClose }: Props) {
    if (!isOpen) return null;
    return (
        <div onClick={onClose} className={`flex p-[15px] bg-[#000]/30  items-center justify-center fixed top-0 left-0 w-full h-full z-[100]`}>
            <div onClick={(e) => e.stopPropagation()} className="max-w-[600px] w-full">
                <div className="flex items-center justify-between bg-[#ffb15a] p-[15px]">
                    <h3 className="text-[20px] font-semibold">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-xl font-bold cursor-pointer"
                    >
                        ✕
                    </button>
                </div>
                <div className="p-[15px] bg-[#fff] ">
                    {children}
                </div>
            </div>
        </div>
    );
}