'use client'
import Link from "next/link"
import RangePriceCategory from "./range-price"

//component
import BrandCategory from "./brand"
export default function SidebarCategory({ catParentId, catParentName }) {
    return (
        <div className="">
            {/** range price */}
            <div className="range-price-sizebar">
                <RangePriceCategory></RangePriceCategory>
            </div>
            {/** brand */}
            <div>
                <label>Thương hiệu</label>
                <div className="main-brand-sidebar">
                    <BrandCategory catParentId={catParentId} catParentName={catParentName}></BrandCategory>
                </div>
            </div>
        </div>
    )
}