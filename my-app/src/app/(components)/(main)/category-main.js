import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
export default function CategoryMain(isMobile) {
    const { data: productCategoryMain, error, isLoading } = useQuery({
        queryKey: ["product-category-main-page"],
        queryFn: async () => {
            const response = await fetch(API_CATEGORY_PRODUCT_MAIN_PAGE);
            if (!response.ok) throw new Error("Failed to fetch product categories");
            return response.json();
        },

        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <p>Loading categories...</p>;
    if (error) return <p>Error loading categories.</p>;
    //checksize
    let colItem = "";

    if (isMobile == true) {
        colItem = 3;
    } else {
        colItem = 6;
    }
    //data icon
    let dataIcom = [
        // Laptop
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="#1D4ED8" d="M128 32C92.7 32 64 60.7 64 96v256h64V96h384v256h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2c0 42.4 34.4 76.8 76.8 76.8h486.4c42.4 0 76.8-34.4 76.8-76.8 0-10.6-8.6-19.2-19.2-19.2H19.2z" />
        </svg>,

        // PC
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="#2D3748" d="M384 96v224H64V96h320zM64 32c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h117.3l-10.7 32H96c-17.7 0-32 14.3-32 32s14.3 32 32 32h256c17.7 0 32-14.3 32-32s-14.3-32-32-32h-74.7l-10.7-32H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
        </svg>,

        // Máy in / Máy Scan
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="#F59E0B" d="M192 32h256v96H192V32zm320 160h64c35.3 0 64 28.7 64 64v192H0V256c0-35.3 28.7-64 64-64h64v-64h384v64z" />
        </svg>,

        // Linh kiện PC
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#6366F1" d="M256 32C114.6 32 0 146.6 0 288s114.6 256 256 256 256-114.6 256-256S397.4 32 256 32z" />
        </svg>,

        // Phụ kiện
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#10B981" d="M160 0h192v64H160V0zm0 96h192v64H160V96zm0 96h192v64H160v-64zm0 96h192v64H160v-64zm0 96h192v64H160v-64z" />
        </svg>,

        // Phần mềm
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#EF4444" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM224 448c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
        </svg>,

        // Smart Home
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="#34D399" d="M288 0L0 288h64v192c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V288h64L288 0z" />
        </svg>,

        // Thiết bị mạng
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="#2563EB" d="M640 320h-64V128H64v192H0v64h256v-64H128v-64h384v64H384v64h256v-64z" />
        </svg>,

        // Thiết bị văn phòng
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="#FBBF24" d="M464 96H48C21.5 96 0 117.5 0 144v224c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48z" />
        </svg>,

        // Mực in chính hãng
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="#B197FC" d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448L64 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z" /></svg>,

        // Màn hình máy tính
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="#60A5FA" d="M0 96C0 60.7 28.7 32 64 32h512c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H384v64h80c17.7 0 32 14.3 32 32s-14.3 32-32 32H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h80v-64H64c-35.3 0-64-28.7-64-64V96z" />
        </svg>,
    ];

    console.log(productCategoryMain);

    return (
        <div className="p-4">
            <h1 className="font-semibold text-red-500 text-lg mb-4">Danh mục sản phẩm</h1>
            <div className={`grid grid-cols-${colItem}  gap-4`}>
                {productCategoryMain.data &&
                    productCategoryMain.data.map((category, index) => (
                        <div
                            key={category.category_desc.cat_id}
                            className="flex items-center justify-center gap-3 p-4 bg-[#f8f8fc] rounded-lg shadow-md transition-all hover:shadow-lg hover:bg-[#ececf8]"
                        >
                            <div className="text-2xl text-blue-700">{dataIcom[index]}</div>
                            <span className="text-gray-800 font-medium">
                                <Link href={"category/"+category.category_desc.friendly_url}>
                                    <h1 className="">{category.category_desc.cat_name} </h1>
                                </Link>
                            </span>
                        </div>
                    ))}
            </div>
        </div >
    );
}
