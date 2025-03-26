'use client'
import ProductCardReponsiveMain from "./product-card-main";
import { useRouter } from "next/navigation";

export default function MainProductReponsive({ title_category, data_product, data_link, data_slug }) {
    const router = useRouter();
    return (
        <div>
            <div className="p-4 flex justify-between">
                <h1 className="font-semibold">{title_category}</h1>
                <a
                    href={`/${data_slug}`}
                    className="text-blue-600"
                >
                    Xem thêm
                </a>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4">
                {data_product.map((item, index) => (
                    <div key={index}>
                        <ProductCardReponsiveMain title_item_product={item.title_product}
                            price_item_product={item.price} image_item_product={item.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
