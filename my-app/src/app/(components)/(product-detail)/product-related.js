import { useQuery } from "@tanstack/react-query";
import { API_RELATED_PRODUCT_DETAIL } from "@/api/api-file";
//component
import ProductCardMain from "../(main)/product-card-main";
export default function ProductRelated({ params }) {
    console.log(API_RELATED_PRODUCT_DETAIL + params)

    const { data: dataProductRelated, isError, isLoading } = useQuery({
        queryKey: ['slugProductRelated', params],
        queryFn: async () => {
            const response = await fetch(API_RELATED_PRODUCT_DETAIL + params);
            return response.json();
        }
    });
    console.log(dataProductRelated)
    return (
        <div className="border-[20px] border-white bg-white rounded-lg">
            <div className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 mb-4">
                <label className=" text-base font-semibold text-gray-700">
                    Sản phẩm liên quan
                </label>
            </div>
            <div className="overflow-x-auto pb-2 pt-2">
                <div className="flex gap-4 w-[250px]">
                    <div className="flex overflow-x-auto">
                        {dataProductRelated?.relatedProduct && dataProductRelated.relatedProduct.length > 0 ? (
                            dataProductRelated.relatedProduct.map((item, index) => (
                                <div key={index} className="min-w-[220px]">
                                    <ProductCardMain
                                        title_item_product={item.productName}
                                        price_item_product={item.price}
                                        description_item_product={""}
                                        image_item_product={item.picture}
                                        slug_item_product={item.friendlyUrl}
                                        brand_item_product={item.brandName}
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 italic">Không có sản phẩm liên quan.</p>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}