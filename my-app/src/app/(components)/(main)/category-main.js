import { useQuery } from "@tanstack/react-query";
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
        colItem = 2;
    } else {
        colItem = 4;
    }
    console.log("isMobile:", isMobile, "colItem:", colItem);

    return (
        <div className="p-4">
            <h1 className="font-semibold text-white">Danh mục sản phẩm</h1>
            <div className={`grid grid-cols-${colItem} gap-4 text-white`}>
                {productCategoryMain.data && productCategoryMain.data
                    .map((category) => (
                        <div key={category.category_desc.cat_id}>{category.category_desc.cat_name}</div>
                    ))}
            </div>
        </div>
    );
}
