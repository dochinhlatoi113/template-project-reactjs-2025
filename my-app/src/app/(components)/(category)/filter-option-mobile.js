"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import useCheckSize from "@/app/(heper)/reponsive-check-size";

export default function FilterOptionMobile({ catParentId, sortPrice }) {
    const { data: cachedData } = useQuery({
        queryKey: ['brand-parent', catParentId],
        queryFn: () => { },
        enabled: false,
    });

    const slugParentCategory = useParams();
    const searchParamsHook = useSearchParams();
    const router = useRouter();
    const isMobile = useCheckSize();

    const containerClass = isMobile
        ? "grid grid-cols-2 gap-2 pt-2 overflow-y-auto"
        : "grid grid-cols-5 gap-1 pt-2";

    return (
        <div className={containerClass}>
            {cachedData && cachedData.options?.map((items, index1) => {
                const dialogId = `filter-${index1}`;

                return (
                    <div key={index1}>
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
                                            <button
                                                className="w-full text-left px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-200 shadow-sm"
                                                onClick={() => {
                                                    document.getElementById(dialogId)?.close();
                                                    router.push(href); 
                                                }}
                                            >
                                                {item.name}
                                            </button>
                                        </div>
                                    );
                                })}

                                <div>
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
