"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type GalleryItem = {
    id: string;
    src: string;
    alt: string;
};

type Props = {
    images: GalleryItem[];
    title?: string;
};

export default function Gallery({ images, title }: Props) {
    const [index, setIndex] = useState(-1);

    return (
        <div className="container mx-auto p-[0_15px] mb-[50px] lg:mb-[80px]">
            {title &&
                <h2 className="text-center mb-[20px] text-4xl font-bold">{title}</h2>
            }

            <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
                {images.map((image, i) => (
                    <button
                        key={image.id}
                        onClick={() => setIndex(i)}
                        className="mb-4 block w-full overflow-hidden cursor-pointer"
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={800}
                            height={600}
                            loading="lazy"
                            className="h-auto w-full transition duration-300 hover:scale-105"
                        />
                    </button>
                ))}
            </div>

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={images}
            />
        </div>
    );
}