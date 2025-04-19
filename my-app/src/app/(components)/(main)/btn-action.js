import { useState, useEffect } from "react";
import { Button, Label, Modal, ModalBody, Select } from "flowbite-react";
import { API_MEDIA_PICTURE, API_CATEGORY_LIST } from "@/api/api-file";
import useFormatPrice from "@/app/(heper)/format-price";
import { useQuery } from "@tanstack/react-query";
import useCheckSize from "@/app/(heper)/reponsive-check-size";
export default function BtnAction({ dataProduct }) {
    const [openModal, setOpenModal] = useState(false);
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
    const formatPrice = useFormatPrice(dataProduct.price)

    //checksize
    const checkSizeMobile = useCheckSize();
    let isMobile = checkSizeMobile ? "" : "grid grid-cols-2"

    // custom theme modal
    const customTheme = {
        modal: {
            content: {
                inner: "relative flex max-h-[150dvh] flex-col rounded-lg bg-white shadow dark:bg-gray-700"
            },
        },
    };
    return (
        <div>
            <div className="grid grid-cols-2 gap-1 product-card-main-hot">
                <div className="card-actions">
                    <button className="btn btn-accent text-white w-full !text-[17px]">mua ngay</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-secondary text-white w-full !text-[17px]">thêm giỏ hàng</button>
                </div>
            </div>
            <div className="card-actions pt-2">
                <button onClick={() => CompareData(true)} className="btn btn-info text-white w-full !text-[17px]">so sánh</button>
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
                                <h2 className="text-center text-red-600 font-bold">{formatPrice}</h2>
                            </div>
                            <div className="flex gap-2 w-full">
                                <div className="w-full h-full">
                                    <div className="mb-2  text-start">
                                        <Label htmlFor="brand ">Chọn thương hiệu</Label>
                                    </div>
                                    <Select id="brand">
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
                                        <Select className="" id="price-range-select"
                                        >
                                            <option className="brand-option" value="1">dưới 1 triệu</option>
                                            <option className="brand-option" value="2">1 triệu đến 5 triệu</option>
                                            <option className="brand-option" value="3">từ 5 triệu đến 7 triệu</option>
                                            <option className="brand-option" value="4">từ 7 triệu đến 10 triệu</option>
                                            <option className="brand-option" value="5">từ 10 triệu đến 15 triệu</option>
                                            <option className="brand-option" value="6">từ 15 triệu đến 20 triệu</option>
                                            <option className="brand-option" value="7">từ 20 triệu đến 50 triệu</option>
                                            <option className="brand-option" value="8">từ 50 triệu trở lên</option>
                                        </Select>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}