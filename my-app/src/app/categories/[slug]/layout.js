'use client'
import Link from "next/link";
import { use, useState, useEffect, useMemo, act } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from 'next/navigation';

//api
import { API_CATEGORY_PAGE, API_CATEGORY_OPTION } from "@/api/api-file";

//component
import RangePriceCategory from "@/app/(components)/(category)/range-price";
import SidebarCategory from "@/app/(components)/(category)/sidebar-category";
import CategoryPageProduct from "./page";
import FilterOptionDesktop from "@/app/(components)/(category)/filter-option-desktop";
import FilterOptionMobile from "@/app/(components)/(category)/filter-option-mobile";
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import BrandCategory from "@/app/(components)/(category)/brand";
//api 


export default function layout({ children, params }) {

    const unwrappedParams = use(params);
    const [slug, setSlug] = useState(unwrappedParams.slug);

    const [catId, setCatId] = useState("");
    const [active, setActive] = useState(0)
    const [page, setPage] = useState(0)
    const [catParentName, setCatParentName] = useState()
    const [sortPrice, setSortPrice] = useState('')
    const [catParentId, setCatParentId] = useState("");
    const [searchParams, setSearchParams] = useState([]);
    const searchParamsHook = useSearchParams();

    const searchParamsData = useMemo(() => {
        return Object.fromEntries(searchParamsHook.entries());
    }, [searchParamsHook]);

    const { data: cachedData } = useQuery({
        queryKey: ['brand-parent', catParentId],
        queryFn: () => { },
        enabled: false,
    });

    useEffect(() => {
        if (!cachedData || Object.keys(searchParamsData).length < 1) return;

        const matchedOptions = [];
        const valueSearchArray = [];

        for (let key of Object.keys(searchParamsData)) {
            const found = cachedData?.options.find((x) => x.slug === key);
            const valueSearch = searchParamsData[key];
            if (found) {
                matchedOptions.push(found);
                valueSearchArray.push(valueSearch);
            }
        }

        const newParams = [];

        if(sortPrice != "") {
            newParams.push({
                titleCategoryFilter : "sort",
                name : sortPrice.toLocaleLowerCase(),
                slug: sortPrice.toLocaleLowerCase(),
                categoryName:"sort"
            })
        } 
        valueSearchArray.forEach((i, index) => {
            matchedOptions[index].propertiesValue.forEach((v) => {
                if (v.slug === i) {
                    newParams.push({
                        id: v.id,
                        properties_id: v.properties_id,
                        name: v.name,
                        slug: v.slug,
                        categoryName: matchedOptions[index].slug,
                        titleCategoryFilter: matchedOptions[index].title
                    });
                }
            });
        });

        setSearchParams(newParams);
    }, [searchParamsData, cachedData]);
   
    //remove search
    const router = useRouter()
    const handleRemoveSearchParam = (slugToRemove) => {
        const updated = searchParams.filter(item => item.slug !== slugToRemove);
        const hasSort = updated.some(item => item.slug === 'asc' || item.slug === 'desc');
    
        if (!hasSort) {
            setSortPrice("");
            setActive("");
        }
    
        let newUrl = "";
        for (let index = 0; index < updated.length; index++) {
            const item = updated[index];
            if (item.slug.trim() !== "") {
                newUrl += `${item.categoryName}=${item.slug}&`;
            }
        }
        if (newUrl.endsWith("&")) {
            newUrl = newUrl.slice(0, -1);
        }
    
        if (updated.length === 0) {
            setSearchParams({});
            setSortPrice("");
            setActive("");
            router.push(`?`);
        } else {
            setSearchParams(updated);
            router.push(`?${newUrl}`);
        }
    };
    

    // sort price
    let mySortPrice = (valueSortPrice, activeId) => {
        setSortPrice(valueSortPrice)
        setActive(activeId)
        const params = new URLSearchParams(searchParamsHook.toString());
        params.set('sort', valueSortPrice);
        setSortPrice(valueSortPrice);
        setActive(activeId);
        router.push(`?${params.toString()}`);
    }

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
    const gridClass = isMobile ? "col-span-12" : "col-span-10";
    const paddingTop = isMobile ? 'pt-[120px]' : 'pt-[130px]';
    const filterOption = isMobile
        ? <FilterOptionMobile catParentId={catParentId} />
        : <FilterOptionDesktop catParentId={catParentId} />;

    //check active btn sort price

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
            <div className={`grid grid-cols-12 h-full gap-4 pt-4 flex-1 main-product-category overflow-hidden`}>
                {/* Sidebar */}
                <div className={`col-span-2 bg-white text-black p-4 side-bar-desktop`}>
                    <SidebarCategory catParentId={catParentId} catParentName={catParentName}></SidebarCategory>
                </div>

                <div className={`${gridClass}  bg-white p-4 text-black reponsive-layout-category`}>
                    <div className="flex gap-2 items-center silder-price">
                        <label>Sắp xếp theo giá :</label>
                        <button
                            className={`btn ${active === 1 ? 'bg-blue-500 text-white ' : 'bg-gray-100 text-gray-700'}`}
                            onClick={() => mySortPrice('DESC', 1)}
                        >
                            Giá Giảm
                        </button>
                        <button 
                            className={`btn ${active === 2 ? 'bg-blue-500 text-white ' : 'bg-gray-100 text-gray-700'}`}
                            onClick={() => { mySortPrice('ASC', 2) }}>
                            Giá Tăng
                        </button>
                    </div>
                    <div className="pt-4">
                        <span className="font-bold">Lọc theo nhu cầu : </span>
                        <div className={`bg-white text-black  side-bar-mobile`}>
                            <BrandCategory catParentId={catParentId} catParentName={catParentName}></BrandCategory>
                        </div>
                        <div className="filter-search flex gap-2 pt-4 overflow-x-auto whitespace-nowrap pb-2">
                            {searchParams && searchParams.length > 0 &&
                                searchParams.map((dataSearch, index) => (
                                    <button
                                        key={index}
                                        className="shrink-0 flex items-center bg-gray-200 text-gray-800 italic px-3 py-1 rounded-full mr-2 hover:bg-gray-300"
                                    >
                                        <span className="mr-2 text-base title-filter-search">
                                            {(dataSearch.titleCategoryFilter + " : " + dataSearch.name).toLowerCase()}
                                        </span>
                                        <span
                                            className="text-red-500 hover:text-red-700 text-xl cursor-pointer"
                                            onClick={() => handleRemoveSearchParam(dataSearch.slug)}
                                        >
                                            &times;
                                        </span>
                                    </button>
                                ))
                            }

                        </div>
                        <div className="item-box">
                            {filterOption}
                        </div>
                    </div>
                    {dataCategoryPage?.products?.length !== 0 ? (
                        <CategoryPageProduct dataCategoryPageList={dataCategoryPage} />
                    ) : (
                        <div className="none-data-product">Không có sản phẩm nào</div>
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
