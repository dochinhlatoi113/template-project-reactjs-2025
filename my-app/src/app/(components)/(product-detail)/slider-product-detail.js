"use client";
import { useState } from "react";
import { API_MEDIA_PICTURE } from "@/api/api-file";

export default function SilderProductDetail({ dataDetailAlbum }) {
    const [selectedImage, setSelectedImage] = useState(API_MEDIA_PICTURE + dataDetailAlbum[0]?.picture);
    return (
        <div className="border-[20px] border-white rounded-lg bg-white">
            {/* Main image */}
            <div className="relative w-full overflow-hidden rounded-lg">
                <img
                    src={selectedImage}
                    alt={dataDetailAlbum[0]?.picture}
                    className="w-full h-64 object-containt rounded-lg transition duration-300 ease-in-out"
                />
            </div>

            {/* Thumbnails */}
            <div className=" flex justify-center mt-4 gap-2">
                {dataDetailAlbum?.map((img, index) => (
                    <img
                        key={index}
                        src={API_MEDIA_PICTURE + img.picture}
                        alt={`Thumb ${index}`}
                        onClick={() => setSelectedImage(img)}
                        className={`w-20 h-14 object-containt rounded cursor-pointer transition-all duration-200
                        ${selectedImage === img ? "ring-2 ring-blue-500" : "hover:ring-2 hover:ring-blue-300"}`}
                    />
                ))}
            </div>
        </div>
    )
}