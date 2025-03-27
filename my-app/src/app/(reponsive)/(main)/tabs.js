'use client'
import { useState } from "react";

export default function TabReponsive({ data, textColor = null }) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="main-tab flex gap-1 p-4 whitespace-nowrap flex-nowrap ">
                {data.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`w-[1%] px-4 py-2 flex justify-center items-center border border-gray-300
                   rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-md flex-grow text-center
                   ${activeTab === index ? "bg-blue-700 border-blue-700 text-white" :
                                "hover:text-blue-700 hover:bg-gray-100 border-[1px] text-gray-700"}
                   `}
                    >
                        <span className={`text-[70%] text-center ${textColor == null ? "text-black" : "text-"+textColor}`}>{tab}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
