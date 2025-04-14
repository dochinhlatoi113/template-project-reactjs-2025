export default function PriceProductDetail(params) {

    return (
        <div className="border rounded-sm border-gray-300 bg-white">
            <div className="product-detail-commitment space-y-2 p-2">
                <label className="font-semibold">Thông tin giá và quà tặng kèm theo </label>
                <div className="">
                    <h1 className="text-red-500 text-sm font-bold">12.000.000</h1>
                    <h3 className="text-xs italic text-gray-600">(*)sản phẩm không có quà tặng kèm</h3>
                </div>
            </div>
        </div>
    )
}