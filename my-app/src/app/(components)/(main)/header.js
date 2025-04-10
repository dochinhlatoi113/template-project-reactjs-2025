import "tailwindcss";
import { Menu, MenuButton, MenuHeading, MenuItem, MenuItems, MenuSection, MenuSeparator } from '@headlessui/react'
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
//api file
import { API_CATEGORY_MENU } from "@/api/api-file";

export default function Header() {
    const { isPending, isError, data: dataMenu, error } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await fetch(API_CATEGORY_MENU)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json();
        },
    })
    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }
    return (
        <div>
            <div className="bg-[#1435c3] text-white py-1 shadow-md ">
                {/* Logo */}
                <div className="container mx-auto flex justify-center items-center">
                    {/*menu behind*/}
                    <nav>
                        <ul className="flex space-x-14 ">
                            <li className="flex items-center space-x-2 hover:text-gray-300 header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff" className="w-5 h-5">
                                    <path d="M14.916 2.404a.75.75 0 0 1-.32 1.011l-.596.31V17a1 1 0 0 1-1 1h-2.26a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H2V9.957a.75.75 0 0 1-.596-1.372L2 8.275V5.75a.75.75 0 0 1 1.5 0v1.745l10.404-5.41a.75.75 0 0 1 1.012.319Z" />
                                </svg>
                                <a href="#">Show Room</a>
                            </li>
                            <li className="flex items-center space-x-2 hover:text-gray-300 header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                                <a href="#">Hotline</a>
                            </li>
                            <li className="flex items-center space-x-2 hover:text-gray-300 header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff" className="w-5 h-5">
                                    <path d="M10 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM16.25 5.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2Z" />
                                </svg>
                                <a href="#">Contact</a>
                            </li>
                            <li className="flex items-center space-x-2 hover:text-gray-300 header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffffff" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3.597 7.348a3 3 0 0 0 0 5.304 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75 3 3 0 0 0 0-5.305 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75Zm9.933.182a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm.47 5.22a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM7.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" clipRule="evenodd" />
                                </svg>
                                <a href="#">Discount</a>
                            </li>
                            <li className="flex items-center space-x-2 hover:text-gray-300 header-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="size-6">
                                    <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
                                </svg>
                                <a href="#">Build Computer</a>
                            </li>
                            <li className="flex items-center space-x-2 hover:text-gray-300 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="size-6">
                                    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
                                    <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                                </svg>
                                <a href="#">News</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="bg-[#ffffff] pt-4 pb-4  mx-auto flex justify-center items-center">
                {/* Menu */}
                <nav>
                    <ul className="flex space-x-5">
                        <li className="flex items-center space-x-2 hover:text-gray-300">
                            <Link href="/">
                                <img src="/logo.png" alt="Logo" className="w-12 h-12 bg-[#1435c3] cursor-pointer" />
                            </Link>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-gray-300">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <MenuButton className=" inline-flex 
                                    items-center w-full justify-center gap-x-1.5 rounded-md bg-white
                                     px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                        <span className="text-[#82869E]">Menu</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#82869E]">
                                            <path fillRule="evenodd" d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z" clipRule="evenodd" />
                                        </svg>
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute m-1px right-0 z-10 mt-4 w-56 origin-top-right  bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                >
                                    <div className="py-4">
                                        {dataMenu && dataMenu.data.map((item, index) => (
                                            <div key={index}>
                                                <MenuItem key={index}>
                                                    <div className=" group flex items-center">
                                                        <div className="bg-white px-4 py-2 text-sm text-gray-700 cursor-pointer font-semibold">
                                                            <Link href={`${item.menu_desc.link}-danh-muc`}>
                                                                {item.menu_desc.title}
                                                            </Link>
                                                        </div>
                                                        <div className="absolute p-4 left-full top-0  h-[100%] bg-white  flex  w-[60vw] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                                                            {item.parenty?.map((r) => (
                                                                <div
                                                                    className="px-4 py-2 text-sm text-gray-700 cursor-pointer text-black  transition-all duration-200"
                                                                    key={r.menu_id}
                                                                >
                                                                    <Link href={`${r.menu_desc.link}-danh-muc`}>
                                                                        <span className=" hover:text-red-500 font-bold ">{r.menu_desc.title} </span>
                                                                    </Link>
                                                                    <div className="pt-2">
                                                                        {r.parentx.map((x, i) => (
                                                                            <div key={i} className="pt-2">
                                                                                <Link href={`${x.menu_desc.link}-danh-muc`}>
                                                                                    <span className=" hover:text-blue-500">{x.menu_desc.title}</span>
                                                                                </Link>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </MenuItem>
                                            </div>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-gray-300">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5 text-gray-400"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8.5 3a5.5 5.5 0 1 0 3.793 9.536l3.085 3.086a1 1 0 0 0 1.415-1.414l-3.086-3.086A5.5 5.5 0 0 0 8.5 3Zm-4 5.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <input
                                    id="search"
                                    name="keyword"
                                    type="text"
                                    placeholder="Search..."
                                    className="w-100 block min-w-0 grow py-2 pr-3 pl-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
                                />
                            </div>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto text-[#82869E]">
                                <path fillRule="evenodd" d="M3.597 7.348a3 3 0 0 0 0 5.304 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75 3 3 0 0 0 0-5.305 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75Zm9.933.182a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 1 0 1.06 1.06l6-6Zm.47 5.22a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM7.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" clipRule="evenodd" />
                            </svg>
                            <div className="flex flex-col">
                                <a href="#" className="text-[#82869E]">Login</a>
                                <a href="#" className="text-[#82869E]">Register</a>
                            </div>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto text-[#82869E]">
                                <path d="M4.214 3.227a.75.75 0 0 0-1.156-.955 8.97 8.97 0 0 0-1.856 3.825.75.75 0 0 0 1.466.316 7.47 7.47 0 0 1 1.546-3.186ZM16.942 2.272a.75.75 0 0 0-1.157.955 7.47 7.47 0 0 1 1.547 3.186.75.75 0 0 0 1.466-.316 8.971 8.971 0 0 0-1.856-3.825Z" />
                                <path fillRule="evenodd" d="M10 2a6 6 0 0 0-6 6c0 1.887-.454 3.665-1.257 5.234a.75.75 0 0 0 .515 1.076 32.91 32.91 0 0 0 3.256.508 3.5 3.5 0 0 0 6.972 0 32.903 32.903 0 0 0 3.256-.508.75.75 0 0 0 .515-1.076A11.448 11.448 0 0 1 16 8a6 6 0 0 0-6-6Zm0 14.5a2 2 0 0 1-1.95-1.557 33.54 33.54 0 0 0 3.9 0A2 2 0 0 1 10 16.5Z" clipRule="evenodd" />
                            </svg>
                        </li>
                        <li className="flex items-center space-x-2 hover:text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#82869E]">
                                <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                            </svg>
                            <a href="#" className="text-[#82869E]">Cart</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
