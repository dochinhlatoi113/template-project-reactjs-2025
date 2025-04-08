'use client'
import Link from "next/link"
import RangePriceCategory from "./range-price"

//component
import BrandCategory from "./brand"
export default function SidebarCategory({catParentId,catParentName}) {
    return (
        <>
            <div className="col-span-2 bg-white text-black p-4">
                {/** range price */}
                <RangePriceCategory></RangePriceCategory>
                {/** brand */}
                <div>
                    <label>Thương hiệu</label>
                    <BrandCategory catParentId = {catParentId}  catParentName = {catParentName}></BrandCategory>
                </div> 
            </div>
        </>
    )
}