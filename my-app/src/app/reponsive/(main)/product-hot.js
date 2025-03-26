import ProductCardReponsiveMain from "./product-card-main";
import TabReponsive from "./tabs";

export default function ProductHotReponsiveMain() {
    const products = Array.from({ length: 6 });
    return (
        <div>
            <div className=" card-title text-white">
                <img src="./banner/top-product-banner.png"></img>
            </div>
            <div className="title text-center  flex justify-between">
               <TabReponsive data={["Laptop","Pc","Smartphone"]}  textColor="white"></TabReponsive>
            </div>
            <div className="grid grid-cols-2 gap-2 p-4">
                {products.map((_, index) => (
                    <ProductCardReponsiveMain key={index} />
                ))}
            </div>
            <div className="text-center pb-2">
                <button className="btn btn-primary bg-blue-700">See more</button>
            </div>
        </div>
    )
}