'use client'
import ProductCardMain from "./product-card-main";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MainProduct({ title_category, data_product, data_link = null, data_slug = null }) {

    const router = useRouter();
    return (
        <div>
            <div className="p-4 flex justify-between">
                <h1 className="font-semibold">{title_category}</h1>
                <Link href={`/${data_slug}`}>
                    <h1 className="text-blue-600">Xem thêm</h1>
                </Link>
            </div>
            <div className="w-full overflow-x-auto">
                <div className="flex w-max gap-2 p-4">
                    {data_product.map((item, index) => (
                        <div key={index} className="w-[220px] product-main flex-shrink-0">
                            <ProductCardMain
                                title_item_product={item.title_product}
                                price_item_product={item.price}
                                image_item_product={item.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
