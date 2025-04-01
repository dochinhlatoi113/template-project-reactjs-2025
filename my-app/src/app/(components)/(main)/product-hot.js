import ProductCardMain from "./product-card-main";
import Tabs from "./tabs";
import { useQueryClient } from "@tanstack/react-query";
import useCheckSize from "@/app/(heper)/reponsive-check-size";
export default function ProductHotMain(isMobile) {
    const queryClient = useQueryClient();
    const cachedDataProductHot = queryClient.getQueryData(["product-hot"]);
    const productHotList = cachedDataProductHot?.productHot || [];
    let cols = isMobile == true ? 5 : 2
    return (
        <div>
            <div className=" card-title text-white">
                <img className="w-[100%]" src="./banner/top-product-banner.png"></img>
            </div>
            <div className={`grid grid-cols-${cols} gap-2 p-4 product-card`}>
                {productHotList.map((items, index) => (
                    <ProductCardMain key={index}
                        title_item_product={items.productName}
                        price_item_product={items.PriceSAP}
                        image_item_product={items.price_list.map((y)=>(y.picture))} />

                ))}
            </div>
            <div className="text-center pb-2">
                <button className="btn btn-primary bg-blue-700">See more</button>
            </div>
        </div>
    )
}