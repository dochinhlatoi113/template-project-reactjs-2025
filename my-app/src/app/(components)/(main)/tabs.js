'use client'
import { useState } from "react";

export default function Tabs({ data, bgBtn = null, textColor = null }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="flex justify-between text-center gap-2 p-4">
            {data.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full ${textColor == null ? "text"-{textColor} :"text-white"} py-2 px-4 flex justify-center items-center border border-gray-300
                    rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-md
                    ${activeTab === index ? "bg-blue-700 border-blue-700 text-white" :
                            "hover:text-blue-700 hover:bg-gray-100 border-[1px] text-gray-700"}
                    `}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}
