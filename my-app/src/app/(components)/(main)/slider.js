'use client'
import { useState } from "react";
import { Carousel } from "flowbite-react";


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
        <div className="silder-main h-150">
            <Carousel>
                {images.map((i, index) => (
                    <img
                        src={i}
                        alt={`Slide ${index}`}
                        className="w-full object-cover silder-main-image"
                    />
                ))}
            </Carousel>
        </div>
    );
}