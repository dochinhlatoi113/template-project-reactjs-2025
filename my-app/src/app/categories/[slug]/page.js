"use client";
import { use, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import styles from "../../categories/[slug]/pricebar.module.css";
import { API_CATEGORY_PAGE, API_CATEGORY_OPTION } from "@/api/api-file";
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import Link from "next/link";
import ProductCardMain from "@/app/(components)/(main)/product-card-main";
export default function CategoryPage({ params }) {
    const unwrappedParams = use(params);
    const [slug, setSlug] = useState(unwrappedParams.slug);
    const [zIndexLeft, setZIndexLeft] = useState(0);
    const [zIndexRight, setZIndexRight] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    const [priceBarColor, setPriceBarColor] = useState('100%')
    const [catId, setCatId] = useState("");
    const [page, setPage] = useState(1)
    const [sortPrice, setSortPrice] = useState('desc')

    const handleMinChange = (e) => {
        setZIndexLeft(1);
        setZIndexRight(0)
        const valueMin = Number(e.target.value);
        setPriceBarColor(valueMin)
        if (valueMin < maxValue - 5) {
            setMinValue(valueMin);
        }
    };

    const handleMaxChange = (e) => {
        setZIndexLeft(0);
        setZIndexRight(1)
        const valueMax = Number(e.target.value);
        setPriceBarColor(maxValue)
        if (valueMax > minValue + 5) {
            setMaxValue(valueMax);
        }
    };
    //api
    //api category page
    const { data: dataCategoryPage, isLoading, error } = useQuery({
        queryKey: ['slug-category', slug, page,sortPrice],
        queryFn: async () => {
            const response = await fetch(API_CATEGORY_PAGE + slug + `&params={}&page=${page}&sort=${sortPrice}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
    });
    useEffect(() => {
        if (dataCategoryPage) {
            setCatId(dataCategoryPage.catname.cat_id)
        }
    }, [dataCategoryPage]);
    //api category filter option
    console.log(dataCategoryPage)

    const { data: dataCategoryPageFilter, isLoadingFilter, errorFilter } = useQuery({
        queryKey: ['slug-category-filter', catId],
        queryFn: async () => {
            const response = await fetch(API_CATEGORY_OPTION + catId);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
    });
    //check size
    let isMobile = useCheckSize();
    const gridClass = isMobile ? "grid-cols-2" : "grid-cols-5";
    //pagination page 
    const totalItem = dataCategoryPage?.totalProductForFilter
    const itemInpage = 20
    const totalPages = Math.ceil(totalItem / itemInpage);

    let myPagintion = (pageNumber) => {
        setPage(pageNumber)
    };

    // sort price
    let mySortPrice = (valueSortPrice) => {
        setSortPrice(valueSortPrice)
    }


    return (
        <div className="container mx-auto max-w-[1300px] pt-[7%]  flex flex-col">
            <div className="flex items-end gap-x-2 justify-between">
                <div className="flex items-end gap-x-2">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path d="M14.916 2.404a.75.75 0 0 1-.32 1.011l-.596.31V17a1 1 0 0 1-1 1h-2.26a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H2V9.957a.75.75 0 0 1-.596-1.372L2 8.275V5.75a.75.75 0 0 1 1.5 0v1.745l10.404-5.41a.75.75 0 0 1 1.012.319ZM15.861 8.57a.75.75 0 0 1 .736-.025l1.999 1.04A.75.75 0 0 1 18 10.957V16.5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75V9.21a.75.75 0 0 1 .361-.64Z" />
                        </svg>
                    </Link>
                    {'>'} {slug}
                </div>
                <div>
                    <span className="font-bold">
                        Chúng tôi có hơn{" "}
                        <span className="text-xl italic font-extrabold">
                            {dataCategoryPage?.totalProductForFilter}
                        </span>{" "}
                        sản phẩm để phục vụ bạn
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-12 h-full gap-4 pt-4 flex-1">
                {/* Sidebar */}
                <div className="col-span-2 bg-white text-black p-4">
                    <div>
                        <div className="mb-2">
                            <label>Khoảng giá</label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={minValue}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className="border border-[#82869E] rounded-lg p-2 w-[50%] text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span>-</span>
                            <input
                                type="text"
                                value={maxValue}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="border border-[#82869E] rounded-lg p-2 w-[50%] text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="pt-4 range_container">
                            <div className={styles.sliders_control}>
                                <div className="">
                                    <input
                                        className={`${styles.rangeSlider} `}
                                        style={{
                                            '--bg-color': `${(minValue / 100) * 100}%`,
                                            '--z-index-left': zIndexLeft,
                                        }}
                                        id={`${styles.fromSlider}`} type="range" value={minValue} min="0" max="100" onChange={handleMinChange} />
                                </div>
                                <div className="">
                                    <input
                                        className={`${styles.rangeSlider} left-[25px] z-${zIndexRight}`}
                                        style={{
                                            '--bg-color': `${(maxValue / 100) * 100}%`,
                                            '--z-index': zIndexRight,
                                        }}
                                        id="toSlider" type="range" value={maxValue} min="0" max="100" onChange={handleMaxChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nội dung chính */}
                <div className="col-span-10 bg-white p-4 text-black">
                    <div className="flex gap-2 items-center">
                        <label>Sắp xếp theo giá :</label>
                        <button className="btn " onClick={()=>{mySortPrice('DESC')}}>
                            Giá Tăng
                        </button>
                        <button className="btn " onClick={()=>{mySortPrice('ASC')}}>
                            Giá Giảm
                        </button>
                    </div>
                    <div className={`text-black grid ${gridClass} pt-2 gap-2 category-page-main-product`}>
                        {dataCategoryPage && dataCategoryPage.products.map((items, index) => (
                            <div key={index} className="h-[100%]">
                                <ProductCardMain
                                    title_item_product={items.productName}
                                    price_item_product={items.PriceSAP}
                                    image_item_product={items.price_list.map((y) => (y.picture))}
                                    slug_item_product={items.product_desc.friendly_url}
                                    brand_item_product={items.brand_desc ? items.brand_desc.title : 'No Brand'}
                                    description_item_product={items.product_desc.title}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="join pt-4 grid grid-cols-30 gap-1">
                        {Array.from({ length: totalPages }, (_, itemPaginate) => (
                            <button key={itemPaginate} className={`${page == itemPaginate ? "bg-blue-500 text-white" : ""} join-item btn`} onClick={() => myPagintion(itemPaginate + 1)} >
                                {itemPaginate + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
