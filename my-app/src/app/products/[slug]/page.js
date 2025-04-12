'use client'
//hook
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
//component
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import BannerSaleOff from "@/app/(components)/(main)/banner-sale-off";
import SidebarProductDetail from "@/app/(components)/(product-detail)/sidebar-product-detail";
import ProductCardMain from "@/app/(components)/(main)/product-card-main";
import SilderProductDetail from "@/app/(components)/(product-detail)/slider-product-detail";
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
    const gridClass = IsMobile ? "grid-cols-0" : "grid-cols-12";
    const paddingTop = IsMobile ? 'pt-[30%]' : 'pt-[10%]';
    return (
        <div className={`container mx-auto max-w-[1300px] ${paddingTop} pb-4 grid grid-cols-[60%_30%] gap-[20px]`}>
            <div className="left-product-detail">
                <SilderProductDetail dataDetailAlbum={productDetail?.productDetail.listPrice} ></SilderProductDetail>
            </div>
            <div className="right-sidebar-product-detail">
                <SidebarProductDetail params={productDetail}></SidebarProductDetail>
            </div>
        </div>
    )
} 