"use client";

import { useQuery } from "@tanstack/react-query";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function FilterOptionDesktop({ catParentId , sortPrice}) {
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
    return (
        <div className={containerClass}>
            {cachedData && cachedData.options?.map((items, index) => (
                <Menu as="div" key={index} className="relative inline-block text-left">
                    <div>
                        <MenuButton className="btn-item-filter items-center inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                            {items.title}
                            <ChevronDownIcon aria-hidden="true" className="mr-1 size-5 text-gray-400" />
                        </MenuButton>
                    </div>

                    <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 filter-item-selected w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-none data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <div className="py-1 max-h-[200px] overflow-y-auto">
                            {items.propertiesValue?.map((item, subIndex) => {
                                const currentParams = new URLSearchParams(searchParamsHook.toString());
                                currentParams.set(items.slug, item.slug);
                                const href = `/${slugParentCategory.slug}-danh-muc?${currentParams.toString()}`;
                                return (
                                    <MenuItem key={subIndex}>
                                        <Link
                                            href={href}
                                            className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 focus:outline-none"
                                        >
                                            {item.name}
                                        </Link>
                                    </MenuItem>
                                );
                            })}
                        </div>
                    </MenuItems>
                </Menu>
            ))}
        </div>
    );
}
