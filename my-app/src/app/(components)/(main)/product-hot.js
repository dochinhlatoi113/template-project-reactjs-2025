import ProductCardMain from "./product-card-main";
import Tabs from "./tabs";
export default function ProductHotMain() {
    const products = Array.from({ length: 6 });
    return (
        <div>
            <div className="title flex justify-between">
               <Tabs data={["Laptop","Pc"]}></Tabs>
            </div>
            <div className="grid grid-cols-5 gap-2 p-4">
                {products.map((_, index) => (
                    <ProductCardMain key={index} />
                ))}
            </div>
            <div className="text-center">
                <button className="btn btn-primary bg-blue-700">See more</button>
            </div>
        </div>
    )
}