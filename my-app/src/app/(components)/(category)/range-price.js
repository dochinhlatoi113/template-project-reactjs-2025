
'use client'
import { useState } from "react";
import styles from "../../categories/[slug]/pricebar.module.css";

export default function RangePriceCategory(params) {
    const [zIndexLeft, setZIndexLeft] = useState(0);
    const [zIndexRight, setZIndexRight] = useState(0);
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
                            id={`${styles.fromSlider}`} type="range" value={minValue} min="0" max="100" onChange={handleMinChange} />
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
    )
}