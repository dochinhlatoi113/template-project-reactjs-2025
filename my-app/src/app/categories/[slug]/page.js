"use client";

import { useState } from "react";
//check size
import useCheckSize from "@/app/(heper)/reponsive-check-size";

//component
import ProductCardMain from "@/app/(components)/(main)/product-card-main";


export default function CategoryPageProduct({ dataCategoryPage  }) {
    
   
    //check size
    let isMobile = useCheckSize();
    const gridClass = isMobile ? "grid-cols-2" : "grid-cols-5";

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
       
        </div>
    );
}
