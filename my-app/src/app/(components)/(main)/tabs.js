'use client'
import { useState } from "react";

export default function Tabs({ data, bgBtn = null, textColor = null, onTabChange }) {
    const [activeTab, setActiveTab] = useState(0);
    const tabArray = Object.values(data) || [];

    const handleTabClick = (index) => {
        setActiveTab(index);
        onTabChange(index);
    };

    return (
        <div className="main-tab flex flex-wrap justify-start gap-2 p-4 px-4">
            {tabArray.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => handleTabClick(tab.id_category)}
                    className={`
                        px-6 py-3 font-medium text-lg rounded-xl transition-all duration-300
                        ${textColor ? `text-${textColor}` : "text-gray-700"}
                        ${activeTab === tab.id_category ? "bg-blue-700 text-white shadow-lg" :
                        "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100 hover:border-blue-500 hover:text-blue-700"}
                    `}
                >
                    {tab.title_category}
                </button>
            ))}
        </div>
    );
}
