import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { API_CATEGORY_OPTION } from "@/api/api-file";
import { useState } from "react";
import { useRouter } from 'next/router';

//api file
import { API_MEDIA_PICTURE } from "@/api/api-file"
export default function BrandCategory({ catParentId, catParentName }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

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
    function selectedIndexBrand(params) {
        setSelectedIndex(params)
    }
    console.log(selectedIndex)
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
            {listData && listData.list?.map((items, index) => (
                items.brand_desc && (
                    <div key={index}
                        onClick={() => selectedIndexBrand(index)}
                        className={`bg-white shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border-2 ${selectedIndex === index ? 'border-red-500' : 'border-transparent'
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
    )
}