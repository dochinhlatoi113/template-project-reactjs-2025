export default function BannerSaleOff({dataBanner}) {

    return (
        <div className="container  flex justify-center items-center">
            <img className="banner-item-img h-[70%] w-[100%]" src={dataBanner} alt="banner"></img>
        </div>
    )
}