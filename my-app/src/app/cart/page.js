'use client'

import { useSelector, useDispatch } from "react-redux";
import { API_MEDIA_PICTURE } from "@/api/api-file";
import { removeFromCart } from "../redux-toolkit/cartSlice";
import { XMarkIcon } from '@heroicons/react/24/solid';
import useCheckSize from "../(heper)/reponsive-check-size";
import { useState, useEffect } from "react";
import { Checkbox, Label } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Page() {
    const [inputValue, setInputValue] = useState({});
    const [inputValuePromotionCode, setValuePromotionCode] = useState(0);
    const [selectedStatus, setSelectedStatus] = useState({}); 

    const [checkAll, setCheckAll] = useState(false);
    const [totalCheckAll, setTotalCheckAll] = useState(0);
    //remove item
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => {
        return Array.isArray(state.cart?.items) ? state.cart.items : [];
    });

    const handleDelete = (item, inputValue, index) => {
        dispatch(removeFromCart(item));
        const dataQuantity = (inputValue[index]) ?? item.quantity;
        let minusPrice;
        minusPrice = totalCheckAll - (item.price * dataQuantity);
        if (minusPrice < 0) {
            setTotalCheckAll(0);
        } else {
            setTotalCheckAll(minusPrice);
        }
        setCheckAll(checkAll);
    };

    //check selected all
    const handleSelectAllItem = () => {
        let totalItems = 0;
        const newCheckAll = !checkAll;
        setCheckAll(newCheckAll);

        const updatedSelections = {};
        cartItems.forEach((item, index) => {
            if (newCheckAll === true) {
                const quantity = parseFloat(inputValue[index]) || item.quantity;
                totalItems += quantity * item.price;
            }
            updatedSelections[index] = newCheckAll;
        });
        setSelectedStatus(updatedSelections); 
        setTotalCheckAll(totalItems);
    };

    const handleSelectItem = (index, inputValue, item) => {
        const updated = {
            ...selectedStatus, 
            [index]: !selectedStatus[index],
        };

        const allChecked = cartItems.length > 0 && cartItems.every((_, i) => updated[i]);
        setSelectedStatus(updated); 
        setCheckAll(allChecked);
        recalculateTotal(inputValue, updated);
    };

    const recalculateTotal = (newInputValue = inputValue, newSelectedStatus = selectedStatus) => { 
        let total = 0;
        cartItems.forEach((item, index) => {
            if (newSelectedStatus[index]) {
                const quantity = parseFloat(newInputValue[index]) || item.quantity;
                total += quantity * item.price;
            }
        });
        setTotalCheckAll(total);
    };

    //check size 
    const isMobile = useCheckSize();

    const gridClass = isMobile ? "" : "grid grid-cols-2 gap-4";

    return (
        <div className={`${gridClass} p-6 bg-white rounded-lg shadow-md`}>
            {cartItems.length > 0 ? (
                <>
                    <div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-semibold mb-4">🛒 Giỏ hàng của bạn</h3>
                            <div className="flex items-center gap-2">
                                <Checkbox id="all" checked={checkAll} onChange={handleSelectAllItem} />
                                <Label htmlFor="all">Chọn tất cả</Label>
                            </div>
                        </div>
                        <div className="space-y-6">
                            {cartItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="p-2 border border-gray-200 flex gap-4 items-start relative">
                                        <div className="flex items-center gap-2">
                                            <Checkbox
                                                id={`item-${index}`}
                                                checked={!!selectedStatus[index]} 
                                                onChange={() => handleSelectItem(index, inputValue, item)}
                                            />
                                        </div>
                                        <img
                                            className="w-[100px] h-[100px] object-cover title-cart-item-mobile"
                                            src={item?.image !== "" ? API_MEDIA_PICTURE + item?.image : "/no-image-src.png"}
                                            alt={item.title}
                                        />
                                        <div className="flex-1">
                                            <label className="text-base font-semibold text-gray-800 title-cart-item-mobile">{item.title}</label>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(item, inputValue, index)}
                                            className="text-gray-400 hover:text-red-500 transition"
                                        >
                                            <XMarkIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="flex justify-between gap-6 mt-6 items-center">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-gray-500 text-sm font-medium">Số lượng</span>
                                            <div className="flex items-center rounded-full border border-gray-300 px-2 py-1 w-fit bg-white shadow-sm">
                                                <button
                                                    className="w-6 h-6 rounded-full hover:bg-gray-200 flex items-center justify-center"
                                                    onClick={() => {
                                                        const value = parseInt(inputValue[index] || item.quantity);
                                                        const updated = { ...inputValue, [index]: Math.max(1, value - 1) };
                                                        setInputValue(updated);
                                                        recalculateTotal(updated);
                                                    }}
                                                >
                                                    <svg
                                                        className="w-[10px] h-[10px] text-gray-700"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                    </svg>
                                                </button>

                                                <input
                                                    type="text"
                                                    className="w-10 text-center border-0 focus:ring-0 text-sm mx-1"
                                                    value={inputValue[index] || item.quantity}
                                                    onChange={(e) => setInputValue({ ...inputValue, [index]: e.target.value })}
                                                />

                                                <button
                                                    className="w-6 h-6 rounded-full hover:bg-gray-200 flex items-center justify-center"
                                                    onClick={() => {
                                                        const value = parseInt(inputValue[index] || item.quantity);
                                                        const updated = { ...inputValue, [index]: Math.max(1, value + 1) };
                                                        setInputValue(updated);
                                                        recalculateTotal(updated);
                                                    }}
                                                >
                                                    <svg
                                                        className="w-[10px] h-[10px] text-gray-700"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 4.5v15m7.5-7.5h-15"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1 title-cart-page">
                                            <span className="text-gray-500 text-sm font-medium ">Đơn giá</span>
                                            <span className="text-base font-semibold text-gray-800">
                                                {item.price.toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1 ">
                                            <span className="text-gray-500 text-sm font-medium">Thành tiền</span>
                                            <span className="text-base font-semibold text-red-500">
                                                {(item.price * (parseFloat(inputValue[index]) || item.quantity)).toLocaleString("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-xl text-sm shadow-md space-y-4">
                        <div className="text-yellow-800 font-medium">
                            🎁 <strong>Khuyến mãi:</strong> Nhập mã <code className="font-mono bg-white border rounded px-2 py-1">SALE10</code> để giảm 10%!
                        </div>

                        <input
                            type="text"
                            value={inputValuePromotionCode}
                            onChange={(e) => setValuePromotionCode(e.target.value)}
                            placeholder="Nhập mã khuyến mãi..."
                            className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                        />

                        <div className="pt-2 text-base font-semibold text-gray-700 space-y-2">
                            <h2 className="text-lg font-bold text-gray-800">🧾 Thông tin thanh toán</h2>
                            <div className="flex justify-between items-center border-b pb-1">
                                <span>Tổng tạm tính</span>
                                <span className="text-blue-700">
                                    {totalCheckAll.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                            </div>

                            <div className="flex justify-between items-center border-b pb-1">
                                <span>Khuyến mãi (nếu có)</span>
                                <span className="text-green-600">
                                    {inputValuePromotionCode.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                            </div>

                            <div className="flex justify-between items-center text-lg font-bold text-red-600">
                                <span>Tổng thanh toán</span>
                                <span>
                                    {(totalCheckAll - inputValuePromotionCode).toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <Button color="blue" className="px-6 py-2 text-base font-medium rounded-md">
                                Mua hàng
                            </Button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="text-center text-gray-500 text-lg py-12">🛒 Giỏ hàng trống</div>
            )}
        </div>
    );
}
