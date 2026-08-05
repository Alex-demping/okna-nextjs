type Props = {
    width: number;
    height: number;
    left?: boolean;
    setWidth: (v: number) => void;
    setHeight: (v: number) => void;
}

export default function WindowSize({ width, height, setWidth, setHeight, left }: Props) {
    return (
        <>
            <div className={`absolute bottom-0 left-0 text-center w-[calc(100%-70px)] ${left ? "left-[70px]" : "left-0"}`}>
                <input
                    className="w-full"
                    type="range"
                    min={500}
                    max={4000}
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                />
                <div className="flex items-center m-auto gap-1 border-b border-[#999] w-[70px]">
                    <input
                        className="
                                                         w-full                       
                                            appearance-none 
                                            [&::-webkit-inner-spin-button]:appearance-none 
                                            [&::-webkit-outer-spin-button]:appearance-none"
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}

                    />
                    <span>mm</span>
                </div>

            </div>
            <div className={`absolute w-[70px] h-[calc(100%_-_10px)] overflow-hidden top-0 ${left ? "-left-[10px]" : "-right-[10px]"}  flex flex-col items-center gap-2`}>
                <div className=" flex items-center h-[calc(100%-83px)]">
                    <input
                        className=" w-full h-full [writing-mode:vertical-lr] [direction:rtl] "
                        type="range"
                        min={500}
                        max={4000}
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                    />
                </div>
                <div className="flex items-center gap-1 border-b border-[#999] w-[70px]">
                    <input
                        className="
                                                w-full
                                            appearance-none 
                                            [&::-webkit-inner-spin-button]:appearance-none 
                                            [&::-webkit-outer-spin-button]:appearance-none"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                    />
                    <span>mm</span>
                </div>
            </div>
        </>
    )
}