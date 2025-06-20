//redux
import { useSelector } from "react-redux";
import Link from "next/link";
export default function CartIcon({colorVar = "silver"}) {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <li className="relative flex items-center space-x-2 hover:text-gray-300">
            <Link href="/cart" className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={colorVar} className="w-5 h-5">
                    <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                </svg>
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                </span>
            </Link>
        </li>
    )
}