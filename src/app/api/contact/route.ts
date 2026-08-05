import { NextResponse } from "next/server";
import { sendTelegram } from "@/lib/telegram.service";
import { ContactFormData } from "@/types/contact";

export async function POST(req: Request) {
    try {
        const data: ContactFormData = await req.json();

        await sendTelegram(data);

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            {
                success: false,
            },
            {
                status: 500,
            }
        );
    }
}