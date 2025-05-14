import { useSelector, useDispatch } from "react-redux";
//api file
import { API_MEDIA_PICTURE } from "@/api/api-file";
// redux
import { removeZeroPriceItems, removeFromCart } from "../redux-toolkit/cartSlice";
import { useEffect, useState } from "react";
import formatPrice from "../(heper)/format-price";
import useCheckSize from "../(heper)/reponsive-check-size";
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function CartPage() {
  
}
