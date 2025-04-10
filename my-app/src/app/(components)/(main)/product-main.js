'use client'
import ProductCardMain from "./product-card-main";
import Link from "next/link";

export default function MainProduct({ title_category, data_product, data_link = null, data_slug = null }) {
    return (
        <div>
            <div className="p-4 flex justify-between">
                <h1 className="font-semibold text-white">{title_category}</h1>
                <Link href={`/${data_slug}-danh-muc`}>
                    <h1 className="text-white">Xem thêm</h1>
                </Link>
            </div>
            <div className="w-full overflow-x-auto">
                <div className="flex w-max gap-2 p-4">
                    {data_product && data_product.map((item, index) => (
                        <div key={index} className="w-[220px] product-main flex-shrink-0">
                            <ProductCardMain
                                title_item_product={item.product_desc.title} 
                                price_item_product={item.PriceSAP}
                                description_item_product = {item.TenHH}
                                image_item_product={item.price_list.map((i)=>(i.picture))}
                                slug_item_product = {item.product_desc.friendly_url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
