import "tailwindcss";
import { Menu, MenuButton, MenuHeading, MenuItem, MenuItems, MenuSection, MenuSeparator } from '@headlessui/react'
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
//api file
import { API_CATEGORY_MENU } from "@/api/api-file";

import CartIcon from "./cartIcon";
import HeaderNavItem from "./headerNavItem";
import ItemLoginAndNotify from "./ItemLoginAndNotify";
export default function Header() {
    //show count items in cart

    //api menu
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
                            <HeaderNavItem></HeaderNavItem>
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
                                                            <MenuItem as={Link} href={`${item.menu_desc.link}-danh-muc`}>
                                                                {item.menu_desc.title}
                                                            </MenuItem>
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
                        <ItemLoginAndNotify></ItemLoginAndNotify>
                        <CartIcon></CartIcon>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
