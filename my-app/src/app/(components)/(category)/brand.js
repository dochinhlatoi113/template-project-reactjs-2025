import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { API_CATEGORY_OPTION } from "@/api/api-file";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//api file
import { API_MEDIA_PICTURE } from "@/api/api-file"
export default function BrandCategory({ catParentId, catParentName }) {

    const { data: listData, isLoadingFilter, errorFilter } = useQuery({
        queryKey: ['brand-parent', catParentId],
        queryFn: async () => {
            const response = await fetch(API_CATEGORY_OPTION + catParentId);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        },
    });
    // selected brand
    const router = useRouter();
    const params = useParams();
    const slugCategory = params.slug;
    const [selectedIndex, setSelectedIndex] = useState(slugCategory); 

    function selectedIndexBrand(paramSlug) {
        setSelectedIndex(paramSlug); 
      }
    

    const handleReset = () => {
        router.push(`/${catParentName}-danh-muc`);
    };
    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
                {listData && listData.list?.map((items, index) => (
                    items.brand_desc && (
                        <div key={index}
                            onClick={() => selectedIndexBrand(items.brand_desc.friendly_url)}
                            className={`bg-white shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border-2 ${selectedIndex == "laptop-"+items.brand_desc.friendly_url ? 'border-red-500' : 'border-transparent'
                                }`}>
                            <Link
                                href={
                                    `${catParentName}-${items.brand_desc.friendly_url}-danh-muc`
                                }
                            >
                                <img
                                    className="w-full h-full aspect-[4/3] object-contain transition-transform duration-300 ease-in-out hover:scale-105"
                                    src={`${API_MEDIA_PICTURE}${items.picture}`}
                                    alt={items.brand_desc.friendly_title}
                                />
                            </Link>
                        </div>
                    )
                ))}
            </div>
            {selectedIndex != null &&
                <div className="mt-2">
                    <button
                        onClick={handleReset}
                        className="text-blue-600 hover:underline text-sm"
                    >
                        Bỏ chọn hãng
                    </button>
                </div>
            }
        </>
    )
}