import RangePriceCategory from "@/app/(components)/(category)/range-price";
import BrandCategory from "@/app/(components)/(category)/brand";
import Link from "next/link";
export default function layout({ children, dataCategoryPageFilter, dataCategoryPage, slug }) {
    return (
        <div className="container mx-auto max-w-[1300px] pt-[7%]  flex flex-col">
            <div className="flex items-end gap-x-2 justify-between">
                <div className="flex items-end gap-x-2">
                    <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path d="M14.916 2.404a.75.75 0 0 1-.32 1.011l-.596.31V17a1 1 0 0 1-1 1h-2.26a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H2V9.957a.75.75 0 0 1-.596-1.372L2 8.275V5.75a.75.75 0 0 1 1.5 0v1.745l10.404-5.41a.75.75 0 0 1 1.012.319ZM15.861 8.57a.75.75 0 0 1 .736-.025l1.999 1.04A.75.75 0 0 1 18 10.957V16.5h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75V9.21a.75.75 0 0 1 .361-.64Z" />
                        </svg>
                    </Link>
                    {'>'} {slug}
                </div>
                <div>
                    <span className="font-bold">
                        Chúng tôi có hơn{" "}
                        <span className="text-xl italic font-extrabold">
                            {dataCategoryPage?.totalProductForFilter}
                        </span>{" "}
                        sản phẩm 
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-12 h-full gap-4 pt-4 flex-1">
                {/* Sidebar */}
                <div className="col-span-2 bg-white text-black p-4">
                    {/** range price */}
                    <RangePriceCategory></RangePriceCategory>
                    {/** brand */}
                    <div>
                        <label>Thương hiệu</label>
                        <BrandCategory dataBrand={dataCategoryPageFilter?.list} dataCategorySlug={slug}></BrandCategory>
                    </div>
                </div>

                <div className="col-span-10 bg-white p-4 text-black">
                     {children}
                </div>
            </div>
        </div>
    );
}
