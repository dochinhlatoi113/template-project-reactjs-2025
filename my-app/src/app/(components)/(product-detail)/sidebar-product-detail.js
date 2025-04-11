import BannerSaleOff from "../(main)/banner-sale-off"

export default function SidebarProductDetail(params) {
    console.log(params)
    return (
        <div className="border-[20px] border-white rounded-lg">
            <div className="banner-product-detail">
                <BannerSaleOff dataBanner="../banner/banner-mobile-product-left.png"></BannerSaleOff>
            </div>
            <div className="infomation-product-detail">
                    <label>aA</label>
            </div>
        </div>
    )
}