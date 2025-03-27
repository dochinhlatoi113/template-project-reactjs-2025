'use client'
import { useState, useEffect } from "react";
import CountdownTimer from "./countdown-hotdeal";
import Tabs from "./tabs";
import ProductCardMain from "./product-card-main";


export default function HotDeal({ isMobile, productList }) {
    let [currentFilter, setCurrentFilter] = useState(0);
    let [flagNextFilter, setFlagNextFilter] = useState(true)
    const [flagPrevFilter, setFlagPrevFilter] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [discountPrice, setDiscountPrice] = useState(null);
    const [dataCategory, setDataCategory] = useState([]);
    const [activeTabChangeData, setActiveTabChangeData] = useState(0);

    let isDiscounted = true;
    useEffect(() => {
        setIsMounted(true);
        setDiscountPrice(isDiscounted ? "200.000 $" : null);
    }, []);

    if (!isMounted) return null;
    let imageElements = [];

    let dataCategoryList = [];
    productList.map((items) => {
        dataCategoryList.push({
            "title_category": items.title_category,
            "id_category": items.id_category
        })
        if (items.list_product.length > 0 && items.id_category == activeTabChangeData) {
            items.list_product.map((item) => {
                imageElements.push(item);
            })
        }
    })
    let itemPerPage = 5
    isMobile == true ? itemPerPage = 2 : itemPerPage
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
    console.log(imageElementsSlice)
    return (
        <div>
            {/* Countdown Timer */}
            <div>
                <CountdownTimer targetDate="2025-03-24T23:59:59" />
            </div>
            {/* Tabs */}
            <div className="overflow-x-auto title text-center flex justify-between">
                <Tabs data={dataCategoryList} onTabChange={setActiveTabChangeData} textColor="black" />
            </div>
            {/* Product Slider */}
            <div className="carousel w-full gap-2 p-4 hot-deal-main">
                <div className="carousel-item relative w-full overflow-hidden ">
                    <div className="text-white grid grid-cols-5 gap-2 hot-deal-main-box">
                        {imageElementsSlice.map((items, index) => (
                            items.total_product != 0 && (
                                <div key={index}>
                                    <div className="bg-[#ffffff]" >
                                        <div className="mt-6 main-product-hot">
                                            <div className="mt-6 main-product-hot">
                                                <ProductCardMain
                                                    title_item_product={items.title_product}
                                                    price_item_product={items.price}
                                                    image_item_product={items.image}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
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
