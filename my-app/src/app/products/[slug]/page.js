'use client'
//hook
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
//component
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import BannerSaleOff from "@/app/(components)/(main)/banner-sale-off";
import SidebarProductDetail from "@/app/(components)/(product-detail)/sidebar-product-detail";
import SilderProductDetail from "@/app/(components)/(product-detail)/slider-product-detail";
import ViewProductDetail from "@/app/(components)/(product-detail)/viewd-product-detail";
import InfoProductDetail from "@/app/(components)/(product-detail)/infomation-product-detail";
import ProductRelated from "@/app/(components)/(product-detail)/product-related";
//api
import { API_PRODUCT_DETAIL } from "@/api/api-file";
export default function DetailProduct() {
    //api product detail
    const IsMobile = useCheckSize();
    const slugUrl = useParams()
    const slugProductDetail = slugUrl.slug

    const { data: productDetail, error: errorProductDetail, isLoading: isLoadingProductDetail } = useQuery({
        queryKey: ["product-detail", slugProductDetail],
        queryFn: async () => {
            const response = await fetch(API_PRODUCT_DETAIL + slugProductDetail);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
    });
    if (errorProductDetail) return "error"
    if (isLoadingProductDetail) return "loading..."
    //checksize mobile
    const paddingTop = IsMobile ? 'pt-[30%]' : 'pt-[8%]';
    return (
        <div className={` container mx-auto max-w-[1300px] ${paddingTop} pb-4`}>
            <div className="pb-2">
                <label className="text-[18px] font-bold">
                    {productDetail?.productDetail.productName}
                </label>
            </div>
            <div className={` grid grid-cols-2 gap-[20px]`}>
                <div className="left-product-detail">
                    <div className="">
                        <SilderProductDetail dataDetailAlbum={productDetail?.productDetail.listPrice} ></SilderProductDetail>
                    </div>
                    <div className="pt-2">
                        <InfoProductDetail slugProductdDetail={slugProductDetail}></InfoProductDetail>
                    </div>
                    <div className="pt-2">
                        <ProductRelated params={slugProductDetail}></ProductRelated>
                    </div>
                    <div className="pt-2">
                        <ViewProductDetail></ViewProductDetail>
                    </div>
                </div>
                <div className="right-sidebar-product-detail">
                    <SidebarProductDetail params={productDetail}></SidebarProductDetail>
                </div>
            </div>
        </div>
    )
} 