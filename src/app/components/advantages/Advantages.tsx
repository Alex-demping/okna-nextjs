type Item = {
    id: string;
    title?: string;
    image: string;
    description: string;
};

type Props = {
    title?: string;
    description?: string;
    titleBlockNumber?: number;
    titleBlockImage?: string;
    titleBlock?: string;
    descriptionBlock: string;
    items: Item[];
    mbNone?: boolean;
};
export default function Advantages({ mbNone, title, description, titleBlockNumber, titleBlockImage, titleBlock, descriptionBlock, items }: Props) {
    const rows = ["row-start-1", "row-start-2", "row-start-3"];
    return (
        <div className={`${mbNone ? "" : "mb-[50px] lg:mb-[80px]"} bg-[#eeece4] py-[30px] lg:py-[50px]`}>
            <div className="container mx-auto max-w-[1200px] p-[0_15px] ">
                <div className="max-w-[800px] mx-auto">
                    {title &&
                        <h2 className="text-center mb-[20px] text-4xl font-bold">{title}</h2>
                    }
                    {description &&
                        <h3 className="text-center mb-[30px] text-2xl font-bold">{description}</h3>
                    }
                </div>

                <div className="lg:grid lg:grid-cols-[1fr_1fr_1fr] lg:gap-x-12 lg:gap-y-10">
                    <div className="bg-[#fff] p-[20px_15px] mx-[-15px] mb-[15px] lg:mb-0 text-center  lg:col-start-2 lg:row-start-1 lg:row-span-3 lg:self-center lg:rounded-[80px_0_80px_0] lg:p-[50px]">
                        {titleBlockImage && <img className="w-[100px] h-[auto] m-auto mb-[20px]" src={titleBlockImage} alt={titleBlock} />}
                        {titleBlockNumber &&
                            <strong className="block text-[42px]">{titleBlockNumber}<sup>%</sup><span className="text-[16px] block">{titleBlock}</span></strong>
                        }

                        <p>{descriptionBlock}</p>
                    </div>
                    {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                        <div
                            key={item.id}
                            className={`lg:col-start-1 py-[15px] lg:py-0 ${rows[index]}`}
                        >
                            <h4 className="flex items-center gap-[10px] mb-[5px] text-[24px]">
                                <img
                                    className="w-[70px] h-auto"
                                    src={item.image}
                                    alt={item.title || ""}
                                />
                                {item.title}
                            </h4>

                            <p>{item.description}</p>
                        </div>
                    ))}
                    {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
                        <div
                            key={item.id}
                            className={`lg:col-start-3 py-[15px] lg:py-0 ${rows[index]}`}
                        >
                            <h4 className="flex items-center gap-[10px] mb-[5px] text-[24px]">
                                <img
                                    className="w-[70px] h-auto"
                                    src={item.image}
                                    alt={item.title || ""}
                                />
                                {item.title}
                            </h4>

                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}