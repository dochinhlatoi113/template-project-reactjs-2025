
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { API_CATEGORY_MENU } from "@/api/api-file"
export default function HeaderReponsive() {
    const { data: cachedDataMenu } = useQuery({
        queryKey: ['menu'],
        queryFn: () => { },
        enabled: false,
    });

    return (
        <div className="p-1 bg-[#1435c3] ">
            <div className=" flex items-center justify-between">
                <img src="./logo.png" className="w-20 h-15" ></img>
                <div className="flex items-center text-white">
                    <div className="pr-4">
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
                                    {cachedDataMenu && cachedDataMenu.data.map((item, index) => (
                                        <div key={index}>
                                            <Menu as="div" className="relative inline-block text-left">
                                                <div>
                                                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                                                        Options
                                                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                                                    </MenuButton>
                                                </div>

                                                <MenuItems
                                                    transition
                                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                                                >
                                                    <div className="py-1">
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                            >
                                                                Account settings
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                            >
                                                                Support
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem>
                                                            <a
                                                                href="#"
                                                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                            >
                                                                License
                                                            </a>
                                                        </MenuItem>
                                                        <form action="#" method="POST">
                                                            <MenuItem>
                                                                <button
                                                                    type="submit"
                                                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                                                                >
                                                                    Sign out
                                                                </button>
                                                            </MenuItem>
                                                        </form>
                                                    </div>
                                                </MenuItems>
                                            </Menu>
                                        </div>
                                    ))}
                                </div>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </div>
            <div className="flex text-center items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
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
        </div>
    )
}

// {item.parenty?.map((r) => (
//     <div className="pt-2">
//         {r.parentx.map((x, i) => (
//             <div key={i} className="pt-2">
//                 <Link href={`${x.menu_desc.link}-danh-muc`}>
//                     <span className=" hover:text-blue-500">{x.menu_desc.title}</span>
//                 </Link>
//             </div>
//         ))}
//     </div>
// ))}