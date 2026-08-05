"use client";
import { useEffect, useState } from "react";
import WindowSize from "./WindowSize";
import { calculatorPrices } from "@/data/calculatorPrices";
import CalculatorSelect from "./CalculatorSelect";
import { calculatorWindows } from "@/data/calculatorWindows";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
export default function Calculator() {
    const t = useTranslations("calculator");
    const options = t.raw("columns1.options") as {
        value: string;
        label: string;
    }[];
    const [typeWindow, setTypeWindow] = useState("window-1");
    const [typProfile, setTypProfile] = useState("olimpia");
    const profilePrice =
        calculatorPrices.profiles.find(
            (profile) => profile.id === typProfile
        )?.price ?? 0;
    const [typWindowsill, setTypWindowsill] = useState(0);
    const [typDripCap, setTypDripCap] = useState(0);
    const [width, setWidth] = useState(1500);
    const [height, setHeight] = useState(1400);
    const [width2, setWidth2] = useState(700);
    const [height2, setHeight2] = useState(2100);
    const [leaves, setLeaves] = useState([false, false]);
    const [type, setType] = useState("window");

    const getArea = () => {
        switch (type) {
            case "balcony-door":
                if (typeWindow !== "balcony-door-1") {
                    return (
                        (width / 1000) * (height / 1000) + (width2 / 1000) * (height2 / 1000)
                    );
                }

                return (width / 1000) * (height / 1000);


            default:
                return (width / 1000) * (height / 1000);
        }
    };



    const sash = calculatorPrices.sash;
    const sash_dors = calculatorPrices.balconyDoor;
    const bild = calculatorPrices.installation;
    const surcharge = calculatorPrices.surcharge;


    const selectedLeaves = leaves.filter(Boolean).length;
    const sash_price = sash * selectedLeaves;


    const km = getArea();

    const km_price = km * profilePrice;
    const windowsillPrice = typWindowsill * (width / 1000);
    const drip_cap = typDripCap * (width / 1000);
    const bild_price = bild * km;
    const summ = km_price + sash_price + bild_price + windowsillPrice + drip_cap + (type === "balcony-door" ? sash_dors : 0);

    const total = (summ + (summ * surcharge) / 100).toFixed(2);

    const toggleLeaf = (index: number) => {
        setLeaves(prev =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };

    const currentWindows =
        type === "window"
            ? calculatorWindows.window
            : type === "balcony-door"
                ? calculatorWindows.balconyDoor
                : calculatorWindows.balcony;
    const currentWindow = currentWindows.find(
        item => item.id === typeWindow
    );
    const searchParams = useSearchParams();
    useEffect(() => {
        if (!currentWindow) return;

        setLeaves(Array(currentWindow.leaves).fill(false));

        setWidth(currentWindow.width);
        setHeight(currentWindow.height);

        setWidth2(currentWindow.secondPart?.width ?? 700);
        setHeight2(currentWindow.secondPart?.height ?? 2100);

    }, [currentWindow]);

    useEffect(() => {
        const profile = searchParams.get("profile");

        if (profile) {
            setTypProfile(profile);
        }
    }, [searchParams]);

    return (
        <div className="container mx-auto max-w-[1200px] p-[0_15px] mb-[50px] lg:mb-[80px]">
            <h2 className="text-center mb-[30px] text-4xl font-bold">{t("title")}</h2>
            <div className="flex gap-5 flex-wrap flex-col lg:flex-row">
                <div className="flex-1 bg-[#eeece4] pb-[20px]">
                    <h3 className="bg-[#ffb15a] flex items-stretch text-[20px] mb-[20px]"><span className="w-[55px] p-[5px_15px] bg-[#676b6e] text-[20px] text-[#ffff] relative"> <span className="absolute top-0 left-[99%] h-full w-[25px] bg-[#676b6e] [clip-path:polygon(100%_0%,50%_50%,0%_100%,0%_0%)]"></span>1</span><span className="pl-[25px] self-center">{t("columns1.title")}</span></h3>
                    <div className="px-[30px]">
                        <CalculatorSelect
                            value={type}
                            onChange={(e) => {
                                const value = e.target.value;

                                setType(value);

                                switch (value) {
                                    case "window":
                                        setTypeWindow("window-1");
                                        break;
                                    case "balcony-door":
                                        setTypeWindow("balcony-door-1");
                                        break;
                                    case "balcony":
                                        setTypeWindow("balcony-1");
                                        break;
                                }
                            }}
                        >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}

                        </CalculatorSelect>
                        <p className="font-bold mb-[10px]">{t("columns1.variantLabel")}</p>

                        {type === "window" && (
                            <div id="window" className="flex flex-wrap gap-3">
                                {calculatorWindows.window.map((item) => (
                                    <label key={item.id} className={`cursor-pointer transition-all duration-300 ${typeWindow === item.id
                                        ? "-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.15),0_2px_8px_rgba(255,177,90,0.25)]"
                                        : "hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),0_2px_8px_rgba(255,177,90,0.25)]"
                                        }`}>
                                        <img src={item.image} alt="window" />
                                        <input
                                            className="hidden"
                                            type="radio"
                                            value={item.id}
                                            checked={typeWindow === item.id}
                                            onChange={(e) => setTypeWindow(e.target.value)}
                                        />
                                    </label>
                                ))}
                            </div>
                        )}
                        {type === "balcony-door" && (
                            <div id="balcony-door" className="flex flex-wrap gap-3">

                                {calculatorWindows.balconyDoor.map((item) => (
                                    <label key={item.id} className={`cursor-pointer transition-all duration-300 ${typeWindow === item.id
                                        ? "-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.15),0_2px_8px_rgba(255,177,90,0.25)]"
                                        : "hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),0_2px_8px_rgba(255,177,90,0.25)]"
                                        }`}>
                                        <img src={item.image} alt="window" />
                                        <input
                                            className="hidden"
                                            type="radio"
                                            value={item.id}
                                            checked={typeWindow === item.id}
                                            onChange={(e) => setTypeWindow(e.target.value)}
                                        />
                                    </label>
                                ))}
                            </div>
                        )}
                        {type === "balcony" && (
                            <div id="balcony" className="flex flex-wrap gap-3">
                                {calculatorWindows.balcony.map((item) => (
                                    <label key={item.id} className={`cursor-pointer transition-all duration-300 ${typeWindow === item.id
                                        ? "-translate-y-1 shadow-[0_8px_20px_rgba(0,0,0,0.15),0_2px_8px_rgba(255,177,90,0.25)]"
                                        : "hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.15),0_2px_8px_rgba(255,177,90,0.25)]"
                                        }`}>
                                        <img src={item.image} alt="window" />
                                        <input
                                            className="hidden"
                                            type="radio"
                                            value={item.id}
                                            checked={typeWindow === item.id}
                                            onChange={(e) => setTypeWindow(e.target.value)}
                                        />
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
                <div className="flex-1 bg-[#eeece4]">
                    <h3 className="bg-[#ffb15a] flex items-stretch text-[20px] mb-[20px]"><span className="w-[55px] p-[5px_15px] bg-[#676b6e] text-[20px] text-[#ffff] relative"> <span className="absolute top-0 left-[99%] h-full w-[25px] bg-[#676b6e] [clip-path:polygon(100%_0%,50%_50%,0%_100%,0%_0%)]"></span>2</span><span className="pl-[25px] self-center">{t("columns2.title")}</span></h3>
                    <div className="px-[30px]">
                        <p className="font-bold mb-[10px] block">{t("columns2.profileLabel")}</p>
                        <CalculatorSelect
                            value={typProfile}
                            onChange={(e) => setTypProfile(e.target.value)}
                        >
                            {calculatorPrices.profiles.map((profile) => (
                                <option key={profile.id} value={profile.id}>
                                    {profile.name}
                                </option>
                            ))}
                        </CalculatorSelect>
                        <p className="font-bold mb-[10px] block">{t("columns2.windowsillLabel")}</p>

                        <CalculatorSelect value={typWindowsill}
                            onChange={(e) => setTypWindowsill(Number(e.target.value))}
                        >

                            <option value={0}>{t("columns2.select")}</option>
                            {calculatorPrices.windowsills.map((windowsill) => (
                                <option key={windowsill.width} value={windowsill.price}>{windowsill.width}</option>
                            ))}
                        </CalculatorSelect>

                        <p className="font-bold mb-[10px] block">{t("columns2.dripCapLabel")}</p>
                        <CalculatorSelect value={typDripCap}
                            onChange={(e) => setTypDripCap(Number(e.target.value))}
                        >
                            <option value={0}>{t("columns2.select")}</option>
                            {calculatorPrices.dripCaps.map((dripCap) => (
                                <option key={dripCap.width} value={dripCap.price}>{dripCap.width}</option>
                            ))}

                        </CalculatorSelect>
                    </div>
                </div>
                <div className="w-full bg-[#eeece4] pb-[20px]">
                    <h3 className="bg-[#ffb15a] flex items-stretch text-[20px] mb-[20px]"><span className="w-[55px] p-[5px_15px] bg-[#676b6e] text-[20px] text-[#ffff] relative"> <span className="absolute top-0 left-[99%] h-full w-[25px] bg-[#676b6e] [clip-path:polygon(100%_0%,50%_50%,0%_100%,0%_0%)]"></span>3</span><span className="pl-[25px] self-center">{t("columns3.title")}</span></h3>
                    <div className="px-[30px]">
                        <p>{t("columns3.changeSash")}</p>
                        <p className="mb-[20px]">{t("columns3.resize")}</p>
                        {type === "window" && (
                            <div className="text-center">
                                {typeWindow === "window-1" && (
                                    <div className="inline-flex relative p-[0_70px_60px_0]">
                                        <div onClick={() => toggleLeaf(0)} className={` cursor-pointer h-[200px] w-[100px]  bg-cover bg-center  ${leaves[0] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <WindowSize width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                    </div>
                                )}
                                {typeWindow === "window-2" && (
                                    <div className="inline-flex relative p-[0_70px_60px_0]">
                                        <div onClick={() => toggleLeaf(0)} className={` cursor-pointer h-[160px] w-[80px] md:h-[200px] md:w-[100px]  bg-cover bg-center  ${leaves[0] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(1)} className={` cursor-pointer h-[160px] w-[80px] md:h-[200px] md:w-[100px]  bg-cover bg-center  ${leaves[1] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <WindowSize width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                    </div>
                                )}
                                {typeWindow === "window-3" && (
                                    <div className="inline-flex relative p-[0_70px_60px_0]">
                                        <div onClick={() => toggleLeaf(0)} className={` cursor-pointer h-[100px] w-[50px] md:h-[200px] md:w-[100px]  bg-cover bg-center ${leaves[0] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(1)} className={` cursor-pointer h-[100px] w-[50px] md:h-[200px] md:w-[100px]  bg-cover bg-center ${leaves[1] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(2)} className={` cursor-pointer h-[100px] w-[50px] md:h-[200px] md:w-[100px]  bg-cover bg-center ${leaves[2] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <WindowSize width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                    </div>
                                )}
                                {typeWindow === "window-4" && (
                                    <div className="inline-flex relative p-[0_70px_60px_0] flex-wrap  box-content w-[160px] md:w-[200px]">
                                        <div className=" cursor-pointer h-[40px] w-[160px] md:h-[50px] md:w-[200px]  bg-cover bg-center bg-[url('/img/fram.webp')]" />
                                        <div onClick={() => toggleLeaf(0)} className={` cursor-pointer h-[160px] w-[80px] md:h-[200px] md:w-[100px]  bg-cover bg-center  ${leaves[0] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(1)} className={` cursor-pointer h-[160px] w-[80px] md:h-[200px] md:w-[100px]  bg-cover bg-center  ${leaves[1] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <WindowSize width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                    </div>
                                )}

                            </div>
                        )}
                        {type === "balcony-door" && (
                            <div className="text-center">
                                {typeWindow === "balcony-door-1" && (
                                    <div className="inline-flex relative p-[0_70px_60px_0]">
                                        <div className="h-[300px] w-[100px]  bg-cover bg-center  bg-[url('/img/door-lu.webp')]" />
                                        <WindowSize width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                    </div>

                                )}
                                {typeWindow === "balcony-door-2" && (
                                    <div className="inline-flex items-start">
                                        <div className="inline-flex relative p-[0_0_60px_70px]">
                                            <div onClick={() => toggleLeaf(0)} className={` cursor-pointer h-[100px] w-[90px] md:h-[200px] md:w-[100px]  bg-size-[100%_100%] md:bg-cover bg-center  ${leaves[0] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                            <WindowSize left width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                        </div>
                                        <div className="inline-flex relative p-[0_70px_60px_0]">
                                            <div className="h-[150px] w-[50px] md:h-[300px] md:w-[100px]  bg-cover bg-center  bg-[url('/img/door-lu.webp')]" />
                                            <WindowSize width={width2} height={height2} setWidth={setWidth2} setHeight={setHeight2} />
                                        </div>
                                    </div>
                                )}
                                {typeWindow === "balcony-door-3" && (
                                    <div className="inline-flex items-start">
                                        <div className="inline-flex relative p-[0_0_60px_70px]">
                                            <div onClick={() => toggleLeaf(0)} className={`cursor-pointer h-[100px] w-[50px] md:h-[200px]  md:w-[100px]  bg-cover bg-center  ${leaves[0] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                            <div onClick={() => toggleLeaf(1)} className={`cursor-pointer h-[100px] w-[50px] md:h-[200px]  md:w-[100px]  bg-cover bg-center  ${leaves[1] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                            <WindowSize left width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                        </div>
                                        <div className="inline-flex relative p-[0_70px_60px_0]">
                                            <div className="h-[150px] w-[50px] md:h-[300px] md:w-[100px]  bg-cover bg-center  bg-[url('/img/door-lu.webp')]" />
                                            <WindowSize width={width2} height={height2} setWidth={setWidth2} setHeight={setHeight2} />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                        {type === "balcony" && (
                            <div className="text-center">
                                {typeWindow === "balcony-1" && (
                                    <div className="inline-flex relative p-[0_70px_60px_0]">
                                        <div onClick={() => toggleLeaf(0)} className={` cursor-pointer h-[120px] w-[60px] md:h-[200px] md:w-[100px]  bg-cover bg-center ${leaves[0] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(1)} className={` cursor-pointer h-[120px] w-[60px] md:h-[200px] md:w-[100px]  bg-cover bg-center ${leaves[1] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(2)} className={` cursor-pointer h-[120px] w-[60px] md:h-[200px] md:w-[100px]  bg-cover bg-center ${leaves[2] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <WindowSize width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                    </div>
                                )}
                                {typeWindow === "balcony-2" && (
                                    <div className="inline-flex relative p-[0_70px_60px_0]">
                                        <div onClick={() => toggleLeaf(0)} className={`cursor-pointer h-[100px] w-[50px] md:h-[200px]  md:w-[100px]  bg-cover bg-center ${leaves[0] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(1)} className={`cursor-pointer h-[100px] w-[50px] md:h-[200px]  md:w-[100px]  bg-cover bg-center ${leaves[1] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(2)} className={`cursor-pointer h-[100px] w-[50px] md:h-[200px]  md:w-[100px]  bg-cover bg-center ${leaves[2] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div onClick={() => toggleLeaf(3)} className={`cursor-pointer h-[100px] w-[50px] md:h-[200px]  md:w-[100px]  bg-cover bg-center ${leaves[3] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <WindowSize width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                    </div>
                                )}
                                {typeWindow === "balcony-3" && (
                                    <div className="inline-flex relative p-[0_70px_60px_0]">
                                        <div onClick={() => toggleLeaf(0)} className={` cursor-pointer h-[125px] w-[62px] md:h-[250px] md:w-[125px]  bg-cover bg-center ${leaves[0] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <div className="flex flex-wrap w-[100px] md:w-[200px]">
                                            <div className=" cursor-pointer h-[25px] w-[100px] md:h-[50px] md:w-[200px]   bg-cover bg-center bg-[url('/img/fram.webp')]" />
                                            <div onClick={() => toggleLeaf(1)} className={` cursor-pointer h-[100px] w-[50px] md:h-[200px]  md:w-[100px]  bg-cover bg-center  ${leaves[1] ? "bg-[url('/img/leaf-ru.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                            <div onClick={() => toggleLeaf(2)} className={` cursor-pointer h-[100px] w-[50px] md:h-[200px]  md:w-[100px]  bg-cover bg-center  ${leaves[2] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        </div>
                                        <div onClick={() => toggleLeaf(3)} className={` cursor-pointer h-[125px] w-[62px] md:h-[250px] md:w-[125px]  bg-cover bg-center ${leaves[3] ? "bg-[url('/img/leaf-lu.webp')]" : "bg-[url('/img/leaf-x.webp')]"}`} />
                                        <WindowSize width={width} height={height} setWidth={setWidth} setHeight={setHeight} />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full bg-[#eeece4] text-center">
                    {/* <div>km {km}</div>
                    <div>km_price {km_price} vkh {typProfile}</div>
                    <div>km_windowsill {windowsillPrice} dsfg {typWindowsill}</div>
                    <div>typDripCap {drip_cap} vkh {typDripCap}</div>
                    <div>sash {sash_price}  sdf {selectedLeaves}</div>
                    <div>bild_price {bild_price}</div>
                    <div>   summ {summ}</div> */}
                    <div className="border-b border-[#999] p-[30px] text-[30px] text-[#e35814] font-bold">{total} грн.</div>
                    <div className="prose  m-auto max-w-[600px] p-[30px] ">
                        <p>{t("columns4.disclaimer")}</p>
                        <p className="font-bold text-[#ff0004] mt-0 mb-0">{t("columns4.includedTitle")}</p>
                        <ul className="text-left max-w-[260px] m-auto !mt-0">
                            {(t.raw("columns4.list") as string[]).map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    );
}