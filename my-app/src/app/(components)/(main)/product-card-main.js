import Link from "next/link";
import { useEffect,useState } from "react";
import useFormatPrice from "@/app/(heper)/format-price";

import { IMAGE_FAILED,API_MEDIA_PICTURE } from "@/api/api-file";
export default function ProductCardMain({ title_item_product, price_item_product, image_item_product }) {
    const formattedPrice = useFormatPrice(price_item_product); 
    const [img,setImg] = useState()
    return (
        <div className="card bg-base-100 w-[100%] shadow-sm">
            <figure>
                <Link href="/(product)/hello-world">
                    <img className="transition-transform duration-300 hover:scale-105 rounded-lg"
                        src={API_MEDIA_PICTURE+image_item_product ?? IMAGE_FAILED}
                        alt={title_item_product ?? 'no-title'} />
                </Link>
            </figure>
            <div className="card-body">
                <h1 className="card-title text-[100%] line-clamp-2">
                    {title_item_product}
                </h1>
                <div className="badge badge-secondary">NEW</div>
                <p className="description-product">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div>
                       {formattedPrice}
                </div>
                <div className="grid grid-cols-2 gap-1 product-card-main-hot">
                    <div className="card-actions">
                        <button className="btn btn-accent text-white w-full text-xs">Buy Now</button>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-secondary text-white w-full">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}