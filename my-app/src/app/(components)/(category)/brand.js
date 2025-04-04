import Link from "next/link"
import { useQuery } from "@tanstack/react-query"

//api file
import { API_MEDIA_PICTURE } from "@/api/api-file"
export default function BrandCategory({ dataBrand, dataCategorySlug }) {
    
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-4">
            {dataBrand && dataBrand.map((items, index) => (
                items.brand_desc && (
                    <div key={index} className="bg-white shadow-md overflow-hidden hover:shadow-lg transition">
                         <Link
                            href={
                                dataCategorySlug.includes(items.brand_desc.friendly_url)
                                    ? `${dataCategorySlug}-danh-muc`
                                    : `${dataCategorySlug}-${items.brand_desc.friendly_url}-danh-muc`
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