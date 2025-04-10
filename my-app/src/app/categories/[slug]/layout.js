'use client'
import Link from "next/link";
import { use, useState, useEffect, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'next/navigation';

//api
import { API_CATEGORY_PAGE, API_CATEGORY_OPTION } from "@/api/api-file";

//component
import RangePriceCategory from "@/app/(components)/(category)/range-price";
import SidebarCategory from "@/app/(components)/(category)/sidebar-category";
import CategoryPageProduct from "./page";
import FilterOption from "@/app/(components)/(category)/filter-option";
import useCheckSize from "@/app/(heper)/reponsive-check-size";
//api 


export default function layout({ children, params }) {

    const unwrappedParams = use(params);
    const [slug, setSlug] = useState(unwrappedParams.slug);

    const [catId, setCatId] = useState("");
    const [page, setPage] = useState(0)
    const [catParentName, setCatParentName] = useState()
    const [sortPrice, setSortPrice] = useState('desc')
    const [catParentId, setCatParentId] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    // sort price
    let mySortPrice = (valueSortPrice) => {
        setSortPrice(valueSortPrice)
    }
    //search param
    const searchParamsHook = useSearchParams();
    let searchParams = {};
    if (searchParamsHook.size >= 1) {
        searchParams = [];
    }
    const searchParamsData = useMemo(() => {
        return Object.fromEntries(searchParamsHook.entries());
    }, [searchParamsHook]);
    const { data: cachedData } = useQuery({
        queryKey: ['brand-parent', catParentId],
        queryFn: () => { },
        enabled: false,
    });
    let matchedOptions = [];
    let valueSearchArray = [];
    for (let key of Object.keys(searchParamsData)) {
        const found = cachedData?.options.find((x) => x.slug === key);
        const valueSearch = searchParamsData[key];
        if (found) {
            matchedOptions.push(found);
            valueSearchArray.push(valueSearch)
        }
    }

    valueSearchArray.map((i, index) => {
        matchedOptions[index].propertiesValue.map((v) => {
            if (v.slug === i) {
                searchParams.push({
                    "id": v.id,
                    "properties_id": v.properties_id,
                    "name": v.name,
                    "slug": v.slug,
                    "categoryName": matchedOptions[index].slug,
                    "titleCategoryFilter": matchedOptions[index].title
                })
            }
        })
    });

    //remove search
    const handleRemoveSearchParam = (indexToRemove) => {
         searchParams = searchParams.filter((_, index) => index !== indexToRemove);
    };
    
    //api
    //api category page

    const { data: dataCategoryPage, isLoading, error } = useQuery({
        queryKey: ['slug-category', slug, page, sortPrice, searchParams],
        queryFn: async () => {
            const paramsEncoded = encodeURIComponent(JSON.stringify(searchParams));
            const response = await fetch(API_CATEGORY_PAGE + slug + `&params=${paramsEncoded}&page=${page}&sort=${sortPrice}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
    });
    useEffect(() => {
        if (dataCategoryPage) {
            setCatId(dataCategoryPage.catname?.cat_id)
            setCatParentName(dataCategoryPage.dataListParent?.[1].friendly_url)
            setCatParentId(dataCategoryPage.dataListParent?.[1].cat_id)
        }
    }, [dataCategoryPage]);
    //pagination page 
    const totalItem = dataCategoryPage?.totalProductForFilter
    const itemInpage = 20
    const totalPages = Math.ceil(totalItem / itemInpage);
    let myPagintion = (pageNumber) => {
        setPage(pageNumber)
    };
    //checksize
    let isMobile = useCheckSize()
    const gridClass = isMobile ? "grid-cols-0" : "grid-cols-12";
    const paddingTop = isMobile ? 'pt-[30%]' : 'pt-[8%]';
    return (
        <div className={`container mx-auto max-w-[1300px] ${paddingTop} pb-4 flex flex-col `}>
            <div className="flex items-end gap-x-2 justify-between  title-main-category">
                <div className="flex items-end gap-x-2 ">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path d="M14.916 2.404a.75.75 0 0 1-.32 1.011l-.596.31V17a1 1 0 0 1-1 1h-2.26a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H2V9.957a.75.75 0 0 1-.596-1.372L2 8.275V5.75a.75.75 0 0 1 1.5 0v1.745l10.404-5.41a.75.75 0 0 1 1.012.319ZM15.861 8.57a.75.75 0 0 1 .736-.025l1.999 1.04A.75.75 0 0 1 18 10.957V16.5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75V9.21a.75.75 0 0 1 .361-.64Z" />
                        </svg>
                    </Link>
                    {'>'} {slug}
                </div>
                <div>
                    {dataCategoryPage?.products?.length !== 0 ? (
                        <span className="font-bold">
                            Chúng tôi có hơn{" "}
                            <span className="text-xl italic font-extrabold">
                                {dataCategoryPage?.totalProductForFilter}
                            </span>{" "}
                            sản phẩm
                        </span>
                    ) : (
                        <span className="text-gray-500 italic">Không có sản phẩm nào</span>
                    )}
                </div>
            </div>
            <div className={`grid ${gridClass} h-full gap-4 pt-4 flex-1 main-product-category overflow-hidden`}>
                {/* Sidebar */}
                {/* End Hamburger Button (Mobile only) */}
                <div className="col-span-2 bg-white text-black p-4 side-bar">
                    <SidebarCategory catParentId={catParentId} catParentName={catParentName}></SidebarCategory>
                </div>
                <div className="col-span-10 bg-white p-4 text-black ">
                    <div className="flex gap-2 items-center silder-price">
                        <label>Sắp xếp theo giá :</label>
                        <button className="btn " onClick={() => { mySortPrice('DESC') }}>
                            Giá Tăng
                        </button>
                        <button className="btn " onClick={() => { mySortPrice('ASC') }}>
                            Giá Giảm
                        </button>
                    </div>
                    <div className="pt-4">
                        <span className="font-bold">Lọc theo nhu cầu : </span>
                        <div className="flex gap-2 text-sm pt-4">
                            {searchParams && searchParams.length > 0 &&
                                searchParams.map((dataSearch, index) => (
                                    <button
                                        key={index}
                                        className="flex items-center bg-gray-200 text-gray-800 text-sm italic px-3 py-1 rounded-full mr-2 mb-2 hover:bg-gray-300"
                                    >
                                        <span className="mr-2">
                                            {(dataSearch.titleCategoryFilter + " : " + dataSearch.name).toLowerCase()}
                                        </span>
                                        <span
                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                            onClick={() => handleRemoveSearchParam(index)} 
                                        >
                                            &times;
                                        </span>
                                    </button>
                                ))
                            }

                        </div>
                        <div className="item-box">
                            <FilterOption catParentId={catParentId}></FilterOption>
                        </div>
                    </div>
                    {dataCategoryPage?.products?.length !== 0 ? (
                        <CategoryPageProduct dataCategoryPageList={dataCategoryPage} />
                    ) : (
                        <div className="">Không có sản phẩm nào</div>
                    )}
                    <div className="join pt-4 flex gap-1 overflow-x-auto">
                        {Array.from({ length: totalPages }, (_, i) => i)
                            .filter((pageNum) => {
                                return (
                                    pageNum < 3 ||
                                    pageNum > totalPages - 3 ||
                                    pageNum === page || pageNum === page + 1 || pageNum === page + 2
                                );
                            })
                            .reduce((acc, current, index, array) => {
                                if (index > 0 && current - array[index - 1] > 1) {
                                    acc.push("ellipsis");
                                }
                                acc.push(current);
                                return acc;
                            }, [])
                            .map((item, index) =>
                                item === "ellipsis" ? (
                                    <span key={`ellipsis-${index}`} className="join-item btn btn-disabled">...</span>
                                ) : (
                                    <button
                                        key={item}
                                        className={`join-item btn ${page === item ? "bg-blue-500 text-white" : ""}`}
                                        onClick={() => myPagintion(item)}
                                    >
                                        {item + 1}
                                    </button>
                                )
                            )}
                    </div>

                </div>
            </div>
        </div>
    );
}
