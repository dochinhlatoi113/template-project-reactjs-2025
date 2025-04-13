"use client";

import { useQuery } from "@tanstack/react-query";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function FilterOption({ catParentId }) {
    const { data: cachedData } = useQuery({
        queryKey: ['brand-parent', catParentId],
        queryFn: () => { },
        enabled: false,
    });

    const slugParentCategory = useParams();
    const isMobile = useCheckSize();

    const searchParamsHook = useSearchParams();

    const containerClass = isMobile
        ? "grid grid-cols-2 gap-2 pt-2 overflow-y-auto"
        : `grid grid-cols-5 gap-1 pt-2`;
    // const checklayoutMobile = isMobile ? ""
    return (
        // <div className={containerClass}>
        //     {cachedData && cachedData.options?.map((items, index1) => {
        //             const dialogId = `filter-${index1}`;

        //         // <Menu as="div" key={index} className="relative inline-block text-left">
        //         //     <div>
        //         //         <MenuButton className="btn-item-filter items-center inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
        //         //             {items.title}
        //         //             <ChevronDownIcon aria-hidden="true" className="mr-1 size-5 text-gray-400" />
        //         //         </MenuButton>
        //         //     </div>

        //         //     <MenuItems
        //         //         transition
        //         //         className="relative  right-0 z-10 mt-2 filter-item-selected w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        //         //     >
        //         //         <div className="py-1 max-h-[200px] overflow-y-auto">
        //         //             {items.propertiesValue?.map((item, subIndex) => {
        //         //                 const currentParams = new URLSearchParams(searchParamsHook.toString());
        //         //                 currentParams.set(items.slug, item.slug); 

        //         //                 const href = `/${slugParentCategory.slug}-danh-muc?${currentParams.toString()}`;

        //         //                 return (
        //         //                     <MenuItem key={subIndex}>
        //         //                         <Link
        //         //                             href={href}
        //         //                             className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
        //         //                         >
        //         //                             {item.name}
        //         //                         </Link>
        //         //                     </MenuItem>
        //         //                 );
        //         //             })}
        //         //         </div>
        //         //     </MenuItems>
        //         // </Menu>

        //         <div key={index1}>
        //             <button className="btn w-[100%]" onClick={() => document.getElementById(dialogId).showModal()}>{items.title}</button>
        //             <dialog id={dialogId} className="modal">
        //                 <div className="modal-box w-[90%] h-[90%] rounded-none p-6">
        //                     {items.propertiesValue?.map((item, subIndex) => {
        //                         const currentParams = new URLSearchParams(searchParamsHook.toString());
        //                         currentParams.set(items.slug, item.slug);
        //                         const href = `/${slugParentCategory.slug}-danh-muc?${currentParams.toString()}`;
        //                         <>
        //                             <Link href={href}>
        //                                 aaa
        //                             </Link>
        //                             {/* {item.name} */}

        //                             <div key={subIndex} className="modal-action">
        //                                 <form method="dialog">
        //                                     <button className="btn">Close</button>
        //                                 </form>
        //                             </div>
        //                         </>
        //                     })}
        //                 </div>
        //             </dialog>
        //         </div>
        //     })}
        // </div>
        <div className={containerClass}>
            {cachedData && cachedData.options?.map((items, index1) => {
                const dialogId = `filter-${index1}`;

                return (
                    <div key={index1} className="">
                        <button
                            className="btn w-full"
                            onClick={() => document.getElementById(dialogId)?.showModal()}
                        >
                            {items.title}
                        </button>

                        <dialog id={dialogId} className="modal">
                            <div className="modal-box w-[90%] h-[90%] rounded-none p-6 overflow-y-auto">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-lg">{items.title}</h3>

                                    <form method="dialog">
                                        <button className="btn w-10 h-10 bg-red-500 text-white text-lg rounded-full flex items-center justify-center">
                                            ✕
                                        </button>
                                    </form>
                                </div>
                                {items.propertiesValue?.map((item, subIndex) => {
                                    const currentParams = new URLSearchParams(searchParamsHook.toString());
                                    currentParams.set(items.slug, item.slug);
                                    const href = `/${slugParentCategory.slug}-danh-muc?${currentParams.toString()}`;

                                    return (
                                        <div key={subIndex} className="mb-2">
                                            <Link href={href} className="text-blue-600 hover:underline">
                                                <div className="px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-sm">
                                                    {item.name}
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })}
                                <div className="">
                                    <form method="dialog" className="w-full text-center">
                                        <button className="btn w-full bg-red-500 text-white">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                );
            })}
        </div>

    );
}
