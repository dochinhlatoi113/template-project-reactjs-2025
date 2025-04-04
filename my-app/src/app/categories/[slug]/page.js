"use client";
import { use, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

//api
import { API_CATEGORY_PAGE, API_CATEGORY_OPTION } from "@/api/api-file";

//check size
import useCheckSize from "@/app/(heper)/reponsive-check-size";

//component
import ProductCardMain from "@/app/(components)/(main)/product-card-main";


export default function CategoryPage({ params }) {
    const unwrappedParams = use(params);
    const [slug, setSlug] = useState(unwrappedParams.slug);

    const [catId, setCatId] = useState("");
    const [page, setPage] = useState(1)
    const [sortPrice, setSortPrice] = useState('desc')


    //api
    //api category page
    const { data: dataCategoryPage, isLoading, error } = useQuery({
        queryKey: ['slug-category', slug, page, sortPrice],
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
        <div className="">
            <div className="flex gap-2 items-center">
                <label>Sắp xếp theo giá :</label>
                <button className="btn " onClick={() => { mySortPrice('DESC') }}>
                    Giá Tăng
                </button>
                <button className="btn " onClick={() => { mySortPrice('ASC') }}>
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
    );
}
