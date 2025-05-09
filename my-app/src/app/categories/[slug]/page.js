"use client";

import { useState } from "react";
//check size
import useCheckSize from "@/app/(heper)/reponsive-check-size";

//component
import ProductCardMain from "@/app/(components)/(main)/product-card-main";


export default function CategoryPageProduct({ dataCategoryPageList }) {
        //check size
    let isMobile = useCheckSize();
    const gridClass = isMobile ? "grid-cols-2" : "grid-cols-4";  
    return (
        <div className="">       
            <div className={`text-black grid ${gridClass} pt-4 gap-2 category-page-main-product`}>
                {dataCategoryPageList && dataCategoryPageList.products?.map((items, index) => (
                    <div key={index} className="h-[100%]">
                        <ProductCardMain
                            title_item_product={items.product_desc.title}
                            price_item_product={items.PriceSAP}
                            image_item_product={items.price_list.map((y) => (y.picture))}
                            slug_item_product={items.product_desc.friendly_url}
                            brand_item_product={items.brand_desc ? items.brand_desc.title : 'Updating...'}
                            description_item_product={items.product_desc.title}
                            category_item_product = {items.price_list.map((y) => (y.cat_id))}
                            id_product = {items.productId}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
}
