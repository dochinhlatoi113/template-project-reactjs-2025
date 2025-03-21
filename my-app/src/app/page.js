import Image from "next/image";
import Header from "./(components)/header";
import Slider from "./(components)/slider";
import HotDeal from "./(components)/hot-deals";
import Banner from "./(components)/banner";
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
      <div className="container mx-auto max-w-[1200px]">
        <div className="main-hot-deal bg-[#ffffff]">
          <HotDeal></HotDeal>
        </div>
      </div>
    </div>
  );
}
