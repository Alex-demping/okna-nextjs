import type { PageConfig } from "@/types/page";

export async function getPage(
    fullPath: string
): Promise<PageConfig | null> {
    try {
        const mod = await import(`./pages/${fullPath}/page`);
        return mod.PAGE;
    } catch {
        return null;
    }
}