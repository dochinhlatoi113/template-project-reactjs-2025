'use client'
import TblCompareData from "@/app/compare-data-product/page"
import useCheckSize from "../(heper)/reponsive-check-size";
export default function layout({ children, params }) {
    let isMobile = useCheckSize()
    const paddingTop = isMobile ? 'pt-[120px]' : 'pt-[130px]';
    return (
        <div className={`container mx-auto max-w-[1300px] ${paddingTop} pb-4 flex flex-col `}>
            <TblCompareData>{children}</TblCompareData>
        </div>
    );
}
