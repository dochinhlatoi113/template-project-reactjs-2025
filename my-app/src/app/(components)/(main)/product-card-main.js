import Link from "next/link";
import useFormatPrice from "@/app/(heper)/format-price";

import { IMAGE_FAILED, API_MEDIA_PICTURE } from "@/api/api-file";
export default function ProductCardMain({
    title_item_product, 
    price_item_product, 
    description_item_product, 
    image_item_product, 
    slug_item_product,
    brand_item_product
}) {
    const formattedPrice = useFormatPrice(price_item_product);
    let imgSrc = IMAGE_FAILED
    if (image_item_product != "") {
        imgSrc = API_MEDIA_PICTURE + image_item_product;
    }
    return (
        <div className="card bg-base-100 w-full h-full object-contain shadow-sm">
            <div>
                <Link href={`products/${slug_item_product}`}>
                    <img className="pt-5 transition-transform duration-300 object-contain hover:scale-105 rounded-lg w-[80%] m-auto image-product-main h-[200px]"
                        src={imgSrc}
                        alt={title_item_product ?? 'no-title'} />
                </Link>
            </div>
            <div className="card-body">
                <h1 className="card-title text-[100%] line-clamp-2">
                    <Link href={`products/${slug_item_product}`}>
                        {title_item_product}
                    </Link>
                </h1>
                <div className="flex items-center justify-between">
                    <div className="badge badge-secondary">NEW</div>
                    <div className="badge badge-primary">{brand_item_product ?? "updating"}</div>
                </div>
                <p className="description-product">{description_item_product ?? "updating..."}</p>
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