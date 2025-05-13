import { useSelector, useDispatch } from "react-redux";
//api file
import { API_MEDIA_PICTURE } from "@/api/api-file";
// redux
import { removeZeroPriceItems } from "../redux-toolkit/cartSlice";
import { useEffect } from "react"
import formatPrice from "../(heper)/format-price";
import useCheckSize from "../(heper)/reponsive-check-size";
export default function CartPage() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    useEffect(() => {
        if (cartItems?.some(item => Number(item.price) === 0)) {
            dispatch(removeZeroPriceItems());
        }
    }, [cartItems, dispatch]);
    //checksize
    const isMobile = useCheckSize()
    const gridClass = isMobile ? "" : "grid grid-cols-2 gap-4"
    const flexClass = isMobile ? "" : "flex items-center justify-between"
    const gridClass2item = isMobile ? "grid grid-cols-2 gap-4" : ""
    const gridClass3item = isMobile ? "grid grid-cols-3 gap-4" : ""

    return (
        <div className={`${gridClass} p-4 bg-white`}>
            <div>
                <h3>Giỏ hàng của bạn</h3>
                <div className="space-y-4 mt-4">
                    {cartItems?.length > 0 && cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className="">
                                <div className="flex items-start gap-4">
                                    <img
                                        className="w-[100px] h-[100px] object-cover rounded"
                                        src={item?.image !== "" ? API_MEDIA_PICTURE + item?.image : "/no-image-src.png"}
                                        alt={item.title}
                                    />
                                    <label className="text-lg ">{item.title}</label>
                                </div>

                                <div className="grid grid-cols-3 justify-between gap-4 text-center pt-4">
                                    <div>
                                        <h4 className="text-sm text-gray-500 font-semibold">Số lượng</h4>
                                        <h2 className="text-base font-medium font-semibold">{item.quantity}</h2>
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500 font-semibold">Đơn giá</h4>
                                        <h2 className="text-base font-medium font-semibold" >{formatPrice(item.price)}</h2>
                                    </div>
                                    <div>
                                        <h4 className="text-sm text-gray-500 font-semibold">Thành tiền</h4>
                                        <h2 className="text-base font-medium font-semibold">{formatPrice(item.price * item.quantity)}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>Khuyến mãi</div>
        </div>
    )
}