import Image from "next/image";
import Header from "./(components)/(main)/header";
import Slider from "./(components)/(main)/slider";
import HotDeal from "./(components)/(main)/hot-deals";
import Banner from "./(components)/(main)/banner";
import BannerSaleOff from "./(components)/(main)/banner-sale-off";
import ProductHotMain from "./(components)/(main)/product-hot";
export default function home() {
  return (
    <div>
      <div className="main-header">
        <Header></Header>
      </div>
      <div className="main-slider">
        <Slider></Slider>
      </div>
      <div className="main-banner">
        <Banner></Banner>
      </div>
      <div className="container mx-auto max-w-[1200px] bg-[#ffffff]">
        <div className="mt-6 main-hot-deal ">
          <HotDeal></HotDeal>
        </div>
        <div>
          <div className="mt-6 main-banner-sale-off">
            <BannerSaleOff></BannerSaleOff>
          </div>
          <div className="mt-6 main-product-hot">
            <ProductHotMain></ProductHotMain>
          </div>
        </div>
      </div>
    </div>
  );
}
