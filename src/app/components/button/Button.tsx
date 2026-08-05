import Link from "next/link";

type Props = {
    children: React.ReactNode;
    href: string;
};

export default function Button({ children, href }: Props) {
    return (
        <Link className="bg-[#ffb15a] inline-block rounded-[8px] !no-underline shadow-[0px_3px_9px_0px_rgba(0,0,0,.5)] p-[10px_20px]  text-black font-bold transition duration-300 hover:bg-[#573107] hover:text-white" href={href}>{children}</Link>
    );
}