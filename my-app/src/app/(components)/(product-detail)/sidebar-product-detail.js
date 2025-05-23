import BannerSaleOff from "../(main)/banner-sale-off"
import Commitment from "./commitment-product-detail"
import PriceProductDetail from "./price-product-detail"
import BtnAction from "../(main)/btn-action"
import formatPrice from "@/app/(heper)/format-price"
export default function SidebarProductDetail(params) {
    let formatPrices = formatPrice(params.params.productDetail.priceSAP)
    return (
        <div className="border-[20px] border-white rounded-lg">
            <div className="banner-product-detail">
                <BannerSaleOff dataBanner="../banner/banner-mobile-product-left.png"></BannerSaleOff>
            </div>
            <div className="bg-[#f75b00]">
                <div className="p-2">
                    <PriceProductDetail></PriceProductDetail>
                </div>
                <div className="p-2">
                    <div className="border rounded-sm border-gray-300 bg-white">
                        <div className="product-detail-promotion space-y-2 p-2">
                            <label className="font-semibold">Thông tin khuyến mãi</label>

                            <p className="flex items-start gap-2">
                                <span className="bg-[#44a1fa] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold shrink-0">
                                    1
                                </span>
                                Phiếu mua hàng trị giá 1,000,000đ mua tablet (trừ Ipad) có giá niêm yết từ 10,000,000đ
                            </p>

                            <p className="flex items-start gap-2">
                                <span className="bg-[#44a1fa] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold shrink-0">
                                    2
                                </span>
                                Phiếu mua hàng máy lọc nước trị giá 300.000đ
                            </p>

                            <p className="flex items-start gap-2">
                                <span className="bg-[#44a1fa] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold shrink-0">
                                    3
                                </span>
                                Phiếu mua hàng mua Đồng hồ thông minh, Tai nghe, Loa di động, Loa vi tính có giá niêm yết từ 2.000.000đ trở lên (trừ Apple) trị giá 200.000đ
                            </p>
                            <p className="text-sm text-red-500"> (*) Gọi đặt mua 093.093 0933 (8:00 - 21:30)</p>
                            <hr className="border-gray-300"></hr>
                            <div className="">
                                <BtnAction dataProduct={
                                    {
                                        title: params.params.productDetail.productName,
                                        price: formatPrices,
                                        image: params.params.productDetail.pictureForDetailProduct,
                                        slug: params.params.productDetail.friendlyUrl,
                                        categoryId: params.params.productDetail.cat_id,
                                        idProduct : params.params.productDetail.productId
                                    }
                                }>
                                </BtnAction>
                            </div>
                        </div>
                        <div className="infomation-product-detail">
                            <label></label>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <Commitment></Commitment>
                </div>
            </div>
        </div >
    )
}