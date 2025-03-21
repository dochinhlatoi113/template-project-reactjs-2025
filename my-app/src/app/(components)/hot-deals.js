'use client'
import { useState, useEffect } from "react";
import CountdownTimer from "./countdown-hotdeal";
import Filter from "./testtest"

export default function HotDeal() {
    const [activeTab, setActiveTab] = useState(0);
    const [currentFilter, setCurrentFilter] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const tabs = ["Laptop", "Pc", "Mouse", "Keyboard", "hot"];
    
    let isDiscounted = true;
    const [discountPrice, setDiscountPrice] = useState(null);

    useEffect(() => {
        setIsMounted(true);
        setDiscountPrice(isDiscounted ? "200.000 $" : null);
    }, []);

    if (!isMounted) return null; // Tránh lỗi hydration bằng cách chỉ render sau khi client mount

    let imageElements = [
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/4/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/4/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/6/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/7/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/4/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/4/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
    ];

    // Xử lý lọc dữ liệu
    let imageSliceArray = imageElements.slice(2);
    const offSet = 3;

    const nextFilter = () => {
        setCurrentFilter((prev) => (prev + 1) % tabs.length);
    };

    const prevFilter = () => {
        setCurrentFilter((prev) => (prev - 1 + tabs.length) % tabs.length);
    };

    return (
        <div>
            {/* Countdown Timer */}
            <div>
                <CountdownTimer targetDate="2025-12-31T23:59:59" />
            </div>

            {/* Tabs */}
            <div className="flex justify-between text-center gap-2 p-4">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`w-full py-2 px-4 flex justify-center items-center border border-gray-300 rounded-md transition-all duration-200 
                            ${activeTab === index ? "bg-blue-700 text-white border-blue-700" : "text-gray-500 hover:text-blue-500 hover:bg-gray-200 border-[0.5px]"}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Product Slider */}
            <div className="carousel w-full">
                <div className="carousel-item relative w-full overflow-hidden">
                    <div className="text-white flex gap-4 p-4 overflow-x-auto scroll-smooth no-scrollbar">
                        {imageSliceArray.map((image, index) => (
                            <div key={index} className="card bg-base-100 w-full shadow-sm">
                                <figure>
                                    <img
                                        src={image}
                                        className="w-full object-cover transition-transform duration-300 hover:scale-105"
                                        alt={`Product-${index}`}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">Card Title - {tabs[currentFilter]}</h2>
                                    <h3 className={`text-blue-500 ${isDiscounted ? "line-through" : ""}`}>
                                        1.900.000 $
                                    </h3>
                                    {discountPrice && <h3 className="text-red-500">{discountPrice}</h3>}
                                    <p className="text-black">A card component has a figure...</p>
                                    <div className="grid grid-cols-2 gap-1">
                                        <div className="card-actions">
                                            <button className="btn btn-accent text-white w-full text-xs">Buy Now</button>
                                        </div>
                                        <div className="card-actions">
                                            <button className="btn btn-secondary text-white w-full text-xs">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Navigation Buttons */}
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <button className="btn btn-circle" onClick={prevFilter}>❮</button>
                        <button className="btn btn-circle" onClick={nextFilter}>❯</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
