import { useState, useEffect } from "react";
import { Button, Label, Modal, ModalBody, Select } from "flowbite-react";
import { API_MEDIA_PICTURE, API_CATEGORY_LIST } from "@/api/api-file";
import useFormatPrice from "@/app/(heper)/format-price";
import { useQuery } from "@tanstack/react-query";
import { DataInteractive } from "@headlessui/react";
export default function BtnAction({ dataProduct }) {
    const [openModal, setOpenModal] = useState(false);

    let catId = dataProduct.categoryId
    
    const {
        data: categoryList,
        error: errorCategoryList,
        isLoading: isLoadingCategoryList,
        refetch
    } = useQuery({
        queryKey: ["category-list", catId[0]],
        queryFn: async () => {
            const response = await fetch(`${API_CATEGORY_LIST}/${catId[0]}`);
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
        console.log(data[0])
    };
    //format price
    const formatPrice = useFormatPrice(dataProduct.price)
    return (
        <div>
            <div className="grid grid-cols-2 gap-1 product-card-main-hot">
                <div className="card-actions">
                    <button className="btn btn-accent text-white w-full text-xs">mua ngay</button>
                </div>
                <div className="card-actions">
                    <button className="btn btn-secondary text-white w-full">thêm giỏ hàng</button>
                </div>
            </div>
            <div className="card-actions pt-2">
                <button onClick={() => CompareData(true)} className="btn btn-info text-white w-full">so sánh</button>
            </div>
            <Modal dismissible show={openModal} onClose={() => CompareData(false)}>
                <ModalBody>
                    <div className="grid grid-cols-2 text-center">
                        <div>
                            <img className="pt-5 transition-transform duration-300 object-contain hover:scale-105 rounded-lg w-[80%] m-auto image-product-main h-[200px]"
                                src={API_MEDIA_PICTURE + dataProduct.image}
                                alt={dataProduct.title ?? 'no-image'} />
                            <Label className="">{dataProduct.title}</Label>
                            <h2 className="text-center text-red-600 font-bold">{formatPrice}</h2>
                        </div>
                        <div className="flex gap-2 ">
                            <div className="w-full">
                                <div className="mb-2  text-start">
                                    <Label htmlFor="countries ">Chọn thương hiệu</Label>
                                </div>
                                <Select id="countries">
                                    {categoryList?.[0]?.listBrand?.map((brand, index) => (
                                        <option key={index} value={brand.id}>
                                            {brand.title}
                                        </option>
                                        
                                    ))}

                                </Select>
                            </div>
                            <div className=" w-full ">
                                <div className="mb-2 text-start">
                                    <Label htmlFor="countries ">Chon mức giá</Label>
                                </div>
                                <Select id="countries" >
                                    <option>United States</option>
                                </Select>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    )
}