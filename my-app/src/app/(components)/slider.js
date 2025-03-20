'use client'
import { useState } from "react";
//component

import Banner from "./banner";


const images = [
    "https://lh3.googleusercontent.com/XzEGUfZGwNS9A4Yymq0Gf-fgbZylEv3lw_GJoV4t-fVnL6_aRLFsdUfHNn12YLBH48n-iUX0wFOQY6adZnCGzsIQVv8aTgc=w1920-rw",
    "https://lh3.googleusercontent.com/8kdEKKXbIctsjJLrLFsKH-F_7AH6t63nDiNUDjyFJlZSobGnuOwgsy9eglZ0AizUpXfk1gzi0gZAVp6B4yXHslJDjAj-Wgw=w1920-rw"
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full h-150">
            <div className="overflow-hidden shadow-lg">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-150 object-cover"
                />
            </div>

            {/* Nút Previous */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                &#9664;
            </button>

            {/* Nút Next */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
            >
                &#9654;
            </button>

            {/* Dots
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    ></div>
                ))}
            </div> */}
        </div>
    );
}