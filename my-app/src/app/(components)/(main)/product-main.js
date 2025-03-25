'use client'
import ProductCardMain from "./product-card-main";
import { useRouter } from "next/navigation";

export default function MainProduct({ title_category, data_product, data_link, data_slug }) {
    const router = useRouter();
    return (
        <div>
            <div className="p-4 flex justify-between">
                <h1 className="font-semibold">{title_category}</h1>
                <button
                    onClick={() => router.push(`/${data_slug}`)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                    Xem thêm
                </button>
            </div>
            <div className="grid grid-cols-5 gap-2 p-4">
                {data_product.map((item, index) => (
                    <div key={index}>
                        <ProductCardMain title_item_product={item.title_product}
                            price_item_product={item.price} image_item_product={item.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
