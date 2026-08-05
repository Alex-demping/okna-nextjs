import { ContactFormData } from "@/types/contact";

export async function sendTelegram({
    name,
    phone,
    message,
}: ContactFormData) {
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        throw new Error("Telegram configuration missing");
    }
    const text = `
📞 Новая заявка с сайта

👤 Имя: ${name}
📱 Телефон: ${phone}
💬 Сообщение: ${message || "нет"}
`.trim();

    const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatId,
                text,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Telegram error");
    }
}