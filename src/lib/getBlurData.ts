import { getPlaiceholder } from "plaiceholder";
import { unstable_cache } from "next/cache";
import fs from "fs/promises";
import path from "path";

async function createBlurData(src: string) {
    const filePath = path.join(
        process.cwd(),
        "public",
        src
    );

    const buffer = await fs.readFile(filePath);

    const { base64 } = await getPlaiceholder(buffer);

    return base64;
}

export async function getBlurData(src: string) {
    const cached = unstable_cache(
        () => createBlurData(src),
        ["blur-data", src],
        {
            revalidate: 60 * 60 * 24 * 30,
        }
    );

    return cached();
}