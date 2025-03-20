'use client'
import { useState } from "react";

export default function HotDeal() {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ["Laptop", "Pc", "Mouse", "Keyboard", "hot"];

    let imageElements = [];
    let images = "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/4/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg";
    for (let index = 0; index < 4; index++) {
        imageElements.push(
            <div key={index} className="card bg-base-100 w-full shadow-sm">
                <figure>
                    <img
                        src={images}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-black">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="">
            {/* Tabs */}
            <div className="flex justify-between text-center gap-2">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`w-full py-2 px-4 flex justify-center items-center border border-gray-300 rounded-md transition-all duration-200 ${activeTab === index
                                ? "bg-blue-700 text-white border-blue-700"
                                : "text-gray-500 hover:text-blue-500 hover:bg-gray-200 border-[0.5px]"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Content tabs */}
            <div className="text-white grid grid-cols-5 gap-4 p-4">
                <div className="card bg-base-100 w-full shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                {imageElements}
            </div>
        </div>
    );
}
