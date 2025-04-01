"use client";
import { use, useState } from "react";
import styles from "../../categories/[slug]/pricebar.module.css";

export default function CategoryPage({ params }) {
    const unwrappedParams = use(params);
    const [slug, setSlug] = useState(unwrappedParams.slug);
    const [zIndexLeft,setZIndexLeft] = useState(0);
    const [zIndexRight,setZIndexRight] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [priceBarColor, setPriceBarColor] = useState('100%')
    const handleMinChange = (e) => {
        setZIndexLeft(1);
        setZIndexRight(0)
        const valueMin = Number(e.target.value);
        setPriceBarColor(valueMin)
        if (valueMin < maxValue - 5) {
            setMinValue(valueMin);
        }
    };

    const handleMaxChange = (e) => {
        setZIndexLeft(0);
        setZIndexRight(1)
        const valueMax = Number(e.target.value);
        setPriceBarColor(maxValue)
        if (valueMax > minValue + 5) {
            setMaxValue(valueMax);
        }
    };

    return (
        <div className="container p-4 mx-auto max-w-[1300px]">
            <div className="flex items-end gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                    <path d="M14.916 2.404a.75.75 0 0 1-.32 1.011l-.596.31V17a1 1 0 0 1-1 1h-2.26a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H2V9.957a.75.75 0 0 1-.596-1.372L2 8.275V5.75a.75.75 0 0 1 1.5 0v1.745l10.404-5.41a.75.75 0 0 1 1.012.319ZM15.861 8.57a.75.75 0 0 1 .736-.025l1.999 1.04A.75.75 0 0 1 18 10.957V16.5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75V9.21a.75.75 0 0 1 .361-.64Z" />
                </svg>
                {'>'} {slug}
            </div>

            <div className="grid grid-cols-12 h-screen gap-4 pt-4">
                {/* Sidebar */}
                <div className="col-span-2 bg-white text-black p-4">
                    <div>
                        <div className="mb-2">
                            <label>Khoảng giá</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={minValue}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className="border border-[#82869E] rounded-lg p-2 w-[50%] text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span>-</span>
                            <input
                                type="text"
                                value={maxValue}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="border border-[#82869E] rounded-lg p-2 w-[50%] text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="pt-4 range_container">
                            <div className={styles.sliders_control}>
                                <div className="">
                                    <input
                                        className={`${styles.rangeSlider} `}
                                        style={{
                                            '--bg-color': `${(minValue / 100) * 100}%`, 
                                            '--z-index-left': zIndexLeft,
                                          }}
                                     id={`${styles.fromSlider}`}  type="range" value={minValue} min="0" max="100" onChange={handleMinChange} />
                                </div>
                                <div className="">
                                    <input
                                        className={`${styles.rangeSlider} left-[25px] z-${zIndexRight}`}
                                        style={{
                                            '--bg-color': `${(maxValue / 100) * 100}%`, 
                                            '--z-index': zIndexRight,
                                          }}
                                        id="toSlider" type="range" value={maxValue} min="0" max="100" onChange={handleMaxChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nội dung chính */}
                <div className="col-span-10 bg-green-500 flex items-center justify-center text-white">
                    Column 9
                </div>
            </div>
        </div>
    );
}
