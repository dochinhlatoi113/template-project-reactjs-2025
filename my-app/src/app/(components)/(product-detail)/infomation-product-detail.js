import { QueryClient, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import FormatHtml from "@/app/(heper)/formatHtml";
//api
import { API_PRODUCT_DESCRIPTION } from "@/api/api-file";

export default function InfoProductDetail({ slugProductdDetail }) {
    //expanded
    const [isExpanded, setIsExpanded] = useState(false);

    //api
    const { data: dataDescription, isError, isLoading } = useQuery({
        queryKey: ['slugProductDetail', slugProductdDetail],
        queryFn: async () => {
            const response = await fetch(API_PRODUCT_DESCRIPTION + slugProductdDetail);
            return response.json();
        }
    });

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    //retrive html
    return (
        <div className="border-[20px] border-white bg-white rounded-lg">
            <div className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4">
                <label className=" text-base font-semibold text-gray-700">
                    Mô tả chi tiết
                </label>
            </div>
            <div style={{
                maxHeight: isExpanded ? "none" : "calc(25px * 10)",
                overflowY: "hidden",
            }}
            className="content"
            >
            <FormatHtml data={dataDescription?.productDescription}></FormatHtml>
            </div>
            {!isExpanded && (
                <button
                    className="text-blue-500 mt-2 px-4 py-2 border border-blue-500 rounded-md text-sm font-semibold hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
                    onClick={handleToggle}
                >
                    <div className="animate-bounce text-[12px] "> xem thêm ⬇️</div>
                </button>
            )}
        </div>
    );
}
