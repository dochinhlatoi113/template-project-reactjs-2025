import { useState, useEffect } from "react";
import { Button, Label, Modal, ModalBody, Select } from "flowbite-react";
import formatPrice from "@/app/(heper)/format-price";
import { useQuery } from "@tanstack/react-query";
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import Link from "next/link";
//API
import { API_COMPARE_PRODUCT, API_COMPARE_PRODUCT_SEARCH, API_MEDIA_PICTURE, API_CATEGORY_LIST } from "@/api/api-file";

export default function BtnAction({ dataProduct }) {
    const [openModal, setOpenModal] = useState(false);
    const [flag, setFlag] = useState(false);
    const [brand, setBrand] = useState(null);
    const [priceCompare, setPriceCompare] = useState(null);
    const [selectItem, setSelectItem] = useState(null);
    let catId = dataProduct?.categoryId
    const {
        data: categoryList,
        error: errorCategoryList,
        isLoading: isLoadingCategoryList,
        refetch
    } = useQuery({
        queryKey: ["category-list", catId?.[0]],
        queryFn: async () => {
            const response = await fetch(`${API_CATEGORY_LIST}/${catId?.[0]}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
        enabled: false,
    });
    const CompareData = async (param) => {
        setOpenModal(param);
        const { data } = await refetch();
    };
    //format price
    const formatPrices = formatPrice(dataProduct.price)

    //checksize
    const checkSizeMobile = useCheckSize();
    let isMobile = checkSizeMobile ? "" : "grid grid-cols-2"
    let isHeight = checkSizeMobile ? "max-h-[100px]" : "max-h-[300px]"
    // custom theme modal
    const customTheme = {
        modal: {
            content: {
                inner: "relative flex max-h-[150dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
            },
        },
    };

    //api compare product
    const brandCompareFnc = (value) => {
        setBrand(value)
    }

    const priceCompareFnc = (value) => {
        setPriceCompare(value)
    };

    useEffect(() => {
        if (priceCompare && brand) {
            setFlag(true);
        }
    }, [priceCompare, brand]);

    const {
        data: compareDataResult,
        error: errorCompareResult,
        isLoading: isLoadingCompareResult,
    } = useQuery({
        queryKey: ["compare-data-list", priceCompare, brand],
        queryFn: async () => {
            if (priceCompare && brand) {
                const response = await fetch(`${API_COMPARE_PRODUCT_SEARCH}${catId?.[0]}&brand=${brand}&${priceCompare}`);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            } else {
                return null;
            }
        },
        enabled: !!(priceCompare && brand),
    });
    // set selected item compare
    const selectedItemProduct = (value) => {
        setSelectItem(value)
        console.log(value)
    }
    return (
        <div>
            <div className="grid grid-cols-2 gap-1 product-card-main-hot">
                <div className="card-actions">
                    <button className="btn btn-accent text-white w-full !text-[100%]">mua ngay</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-secondary text-white w-full !text-[80%]">thêm giỏ hàng</button>
                </div>
            </div>
            <div className="card-actions pt-2">
                <button onClick={() => CompareData(true)} className="btn btn-info text-white w-full !text-[100%]">so sánh</button>
            </div>
            <div className="">
                <Modal theme={customTheme.modal} dismissible show={openModal} onClose={() => CompareData(false)}
                >
                    <ModalBody>
                        <button onClick={() => CompareData(false)} className="text-red-500">
                            <span className="text-xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </span>
                        </button>
                        <div className={`${isMobile} text-center`}>
                            <div>
                                <img className="pt-5 transition-transform duration-300 object-contain hover:scale-105 rounded-lg w-[80%] m-auto image-product-main h-[200px]"
                                    src={API_MEDIA_PICTURE + dataProduct.image}
                                    alt={dataProduct.title ?? 'no-image'} />
                                <Label className="">{dataProduct.title}</Label>
                                <h2 className="text-center text-red-600 font-bold">{formatPrices}</h2>
                            </div>
                            <div>
                                <div className="flex gap-2 w-full">
                                    <div className="w-full h-full">
                                        <div className="mb-2  text-start">
                                            <Label htmlFor="brand ">Chọn thương hiệu</Label>
                                        </div>
                                        <Select
                                            onChange={(e) => brandCompareFnc(e.target.value)}
                                        >
                                            <option value="">chọn thương hiệu</option>
                                            {categoryList?.[0]?.listBrand?.map((brand, index) => (
                                                <option key={index} value={brand.id}>
                                                    {brand.title}
                                                </option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className=" w-full">
                                        <div className="mb-2 text-start">
                                            <Label htmlFor="price-range-select ">Chon  mức giá </Label>
                                        </div>
                                        <Select className="" id="price-range-select" onChange={(e) => priceCompareFnc(e.target.value)}
                                        >
                                            <option value="" >chọn giá</option>
                                            <option className="brand-option" value="price=10&price_old=999999">dưới 1 triệu</option>
                                            <option className="brand-option" value="price=1000000&price_old=5000000">1 triệu đến 5 triệu</option>
                                            <option className="brand-option" value="price=5000000&price_old=7000000">từ 5 triệu đến 7 triệu</option>
                                            <option className="brand-option" value="price=7000000&price_old=10000000">từ 7 triệu đến 10 triệu</option>
                                            <option className="brand-option" value="price=10000000&price_old=15000000">từ 10 triệu đến 15 triệu</option>
                                            <option className="brand-option" value="price=15000000&price_old=20000000">từ 15 triệu đến 20 triệu</option>
                                            <option className="brand-option" value="price=20000000&price_old=50000000">từ 20 triệu đến 50 triệu</option>
                                            <option className="brand-option" value="price=50000000&price_old=9999999999">từ 50 triệu trở lên</option>
                                        </Select>
                                    </div>
                                </div>
                                {flag === true && (
                                    <div className="pt-2">
                                        {compareDataResult && (
                                            <>
                                                <div>Có {compareDataResult.length} sản phẩm phù hợp</div>
                                                <div className={`w-full p-2 ${isHeight} overflow-y-auto space-y-4`}>
                                                    {compareDataResult?.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            onClick={() => selectedItemProduct(item.productId)}
                                                            className={`border p-4 rounded-sm shadow-lg transition-all hover:shadow-xl hover:scale-105 ${selectItem === item.productId ? "border-red-500" : "border-gray-200"
                                                                }`}
                                                        >
                                                            <div className="mb-3">
                                                                <Link href={item.friendlyUrl}>
                                                                    <Label className="text-sm font-semibold text-gray-800 hover:text-blue-500 break-words max-w-full">
                                                                        {item.productName}
                                                                    </Label>
                                                                </Link>
                                                            </div>
                                                            <div className="mb-3">
                                                                <h3 className="text-xl text-red-600 font-bold">
                                                                    {new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.price)}
                                                                </h3>
                                                            </div>
                                                            <div className="flex justify-center">
                                                                <Link href={item.friendlyUrl}>
                                                                    <img
                                                                        className="img-compare rounded-md w-[120px] h-[120px] object-cover transition-transform duration-300 hover:scale-105"
                                                                        src={item.pictureForDetailProduct ? API_MEDIA_PICTURE + item.pictureForDetailProduct : "/no-image-src.png"}
                                                                        alt={item.productName}
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="pt-3">
                            {flag === true && (
                                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors !text-[15px]">
                                    So sánh
                                </Button>
                            )}
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}