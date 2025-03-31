import ProductCardMain from "./product-card-main";
import Tabs from "./tabs";
export default function ProductHotMain() {
    const products = Array.from({ length: 6 });
    return (
        <div>
            <div className=" card-title text-white">
                <img className="w-[100%]"src="./banner/top-product-banner.png"></img>
            </div>
            <div className="grid grid-cols-5 gap-2 p-4 product-card">
                {products.map((_, index) => (
                    <ProductCardMain key={index} />
                ))}
            </div>
            <div className="text-center pb-2">
                <button className="btn btn-primary bg-blue-700">See more</button>
            </div>
        </div>
    )
}