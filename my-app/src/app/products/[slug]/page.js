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
import TechnicalProductDetail from "@/app/(components)/(product-detail)/technical-product-detail";
import CommentProductDetail from "@/app/(components)/(product-detail)/comment-product-detail";
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
    let calHeightTitle ="" ;
    const paddingTop = IsMobile ? 'pt-[120px]' : 'pt-[130px]';
    const gridClass = IsMobile ? '' : 'grid grid-cols-2';

    return (
        <div className={` container mx-auto max-w-[1300px] ${paddingTop} responsize-product-detail-padding`}>
            <div className="p-2">
                <label className="text-[18px] font-bold">
                    {productDetail?.productDetail.productName}
                </label>
            </div>
            <div className={`  ${gridClass} gap-[20px]`}>
                <div className="left-product-detail  ">
                    <div className="left-product-detail-mobile">
                        <SilderProductDetail dataDetailAlbum={productDetail?.productDetail.listPrice} ></SilderProductDetail>
                    </div>
                    <div className="pt-2 mobile-sidebar-product-detail">
                        <SidebarProductDetail params={productDetail}></SidebarProductDetail>
                    </div>
                    <div className="pt-2">
                        <TechnicalProductDetail params={slugProductDetail}></TechnicalProductDetail>
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
                    <div className="pt-2">
                        <CommentProductDetail></CommentProductDetail>
                    </div>
                </div>
                <div className="right-sidebar-product-detail">
                    <SidebarProductDetail params={productDetail}></SidebarProductDetail>
                </div>
            </div>
        </div>
    )
} 