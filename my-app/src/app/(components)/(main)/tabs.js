'use client'
import { useState } from "react";

export default function Tabs({data}) {
const [activeTab, setActiveTab] = useState(0);
    return(
        <div className="flex justify-between text-center gap-2 p-4">
            {data.map((tab, index) => (
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
    )
}