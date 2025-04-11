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
    const formattedPrice = useFormatPrice(price_item_product)
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
                        alt={title_item_product ?? 'no-image'} />
                </Link>
            </div>
            <div className="card-body">
                <h1 className="card-title text-[100%] line-clamp-2">
                    <Link href={`products/${slug_item_product}`}>
                        {title_item_product ?? "no"}
                    </Link>
                </h1>
                <div className="flex items-center justify-between">
                    {price_item_product == 0 && (
                        <div className="badge badge-secondary">
                            NEW
                        </div>
                    )}
                    <div className="badge badge-primary">{brand_item_product ?? "updating"}</div>
                </div>
                <div className="relative group">
                    <p className="description-product">
                        {description_item_product && description_item_product.trim() !== ""
                            ? description_item_product
                            : "updating..."}
                    </p>

                    {description_item_product && description_item_product.trim() !== "" && (
                        <div className="absolute left-0 -translate-x-full top-1/2 -translate-y-1/2 z-10 hidden group-hover:block">
                            <div className="bg-white text-black rounded border border-blue-100 px-3 py-2 break-words shadow-md max-w-[200px]">
                                {description_item_product}
                            </div>
                        </div>
                    )}
                </div>
                {price_item_product != 0 &&
                    <div>{formattedPrice}</div>
                }
                {price_item_product != 0 && (
                    <div className="grid grid-cols-2 gap-1 product-card-main-hot">
                        <div className="card-actions">
                            <button className="btn btn-accent text-white w-full text-xs">Buy Now</button>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-secondary text-white w-full">Add To Cart</button>
                        </div>
                    </div>
                )}

                {price_item_product == 0 && (
                    <div className="card-actions">
                        <button className="btn btn-warning text-white w-full text-xs">Liên hệ</button>
                    </div>
                )}
            </div>
        </div>
    )
}
