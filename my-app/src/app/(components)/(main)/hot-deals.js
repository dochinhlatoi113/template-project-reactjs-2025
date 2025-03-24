'use client'
import { useState, useEffect } from "react";
import CountdownTimer from "./countdown-hotdeal";
import Tabs from "./tabs";
export default function HotDeal() {
    let [currentFilter, setCurrentFilter] = useState(0);
    let [flagNextFilter, setFlagNextFilter] = useState(true)
    const [flagPrevFilter, setFlagPrevFilter] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    let isDiscounted = true;
    const [discountPrice, setDiscountPrice] = useState(null);

    useEffect(() => {
        setIsMounted(true);
        setDiscountPrice(isDiscounted ? "200.000 $" : null);
    }, []);

    if (!isMounted) return null;

    let imageElements = [
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/4/2018/03/fefeef",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/4/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/6/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/7/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/6/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/6/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/6/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/6/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/6/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",
        "https://phongvu.vn/hoi-dap/wp-content/uploads/sites/6/2018/03/tai-anh-nen-laptop-full-hd-o-dau-thumbnail.jpg",
        "https://lh3.googleusercontent.com/QvkjL4K3rTX5KnVTGXaeELB3QdcIigHBpPkWl4gKn072fU4zJf82mPVrJS5Wm9Wgz9CwrlPLb8Bo7cR8aLo=w230-rw",

    ];


    let itemPerPage = 5;
    const totalItems = imageElements.length;
    const nextFilter = () => {
        setCurrentFilter((prev) => {
            const newFilter = prev + itemPerPage;

            setFlagPrevFilter(true);

            if (newFilter + itemPerPage >= totalItems) {
                setFlagNextFilter(false);
            }

            return newFilter;
        });
    };

    const prevFilter = () => {
        setCurrentFilter((prev) => {
            const newFilter = prev - itemPerPage;

            if (newFilter <= 0) {
                setFlagPrevFilter(false);
                setFlagNextFilter(true);
                return 0;
            }

            return newFilter;
        });
    };

    let imageElementsSlice = imageElements.slice(currentFilter, currentFilter + itemPerPage)
    return (
        <div>
            {/* Countdown Timer */}
            <div>
                <CountdownTimer targetDate="2025-03-24T23:59:59" />
            </div>

            {/* Tabs */}
            <Tabs data={["Laptop", "PC", "Mouse", "Keyboard", "Hot"]} />

            {/* Product Slider */}
            <div className="carousel w-full  gap-2 p-4">
                <div className="carousel-item relative w-full overflow-hidden ">
                    <div className="text-white grid grid-cols-5 gap-2">
                        {imageElementsSlice.map((image, index) => (
                            <div key={index} className="border border-blue-300 card bg-base-100 w-full shadow-sm rounded-lg">
                                <figure className="">
                                    <img
                                        src={image}
                                        className="w-full h-30 transition-transform duration-300 hover:scale-105 rounded-lg"
                                        alt={`Product-${index}`}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">Card Title</h2>
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
                    <div className="absolute left-1 right-1 top-30 flex -translate-y-1/2 transform justify-between">
                        <button
                            className={`btn btn-circle ${flagPrevFilter ? "" : "invisible"}`}
                            onClick={prevFilter}
                        >
                            ❮
                        </button>

                        <button
                            className={`btn btn-circle ${flagNextFilter ? "" : "invisible"}`}
                            onClick={nextFilter}
                        >
                            ❯
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
