import "server-only";
import fs from "fs/promises";
import path from "path";

export type Locale = "ru" | "uk";

export async function getPageContent(
    fullPath: string,
    locale: Locale
) {
    const filePath = path.join(
        process.cwd(),
        `src/content/pages/${fullPath}/${locale}.html`
    );

    return await fs.readFile(filePath, "utf-8");
}