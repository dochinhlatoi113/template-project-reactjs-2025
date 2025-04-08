'use client'
import Link from "next/link"
import { useQueryClient  } from "@tanstack/react-query"
import RangePriceCategory from "./range-price"

export default function SidebarCategory() {
    const queryClient = useQueryClient()
    const cachedData = queryClient.getQueryData(['slug-category-filter',1])
    console.log("aa",cachedData)
    return (
        <>
            <div className="col-span-2 bg-white text-black p-4">
                {/** range price */}
                <RangePriceCategory></RangePriceCategory>
                {/** brand */}
                {/* <div>
                    <label>Thương hiệu</label>
                    <BrandCategory dataBrand={dataCategoryPageFilter?.list} dataCategorySlug={slug}></BrandCategory>
                </div> */}
            </div>
        </>
    )
}