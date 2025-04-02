import { useQuery } from "@tanstack/react-query";

export default function CategoryMain() {
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
    productCategoryMain.data.map((x)=>(
        console.log(x.category_desc)
    ))
    if (isLoading) return <p>Loading categories...</p>;
    if (error) return <p>Error loading categories.</p>;

    return (
        <div className="p-4">
            <h1>Danh mục sản phẩm</h1>
            <ul>
                {productCategoryMain.data && productCategoryMain.data
                    .map((category) => (
                        <li key={category.category_desc.cat_id}>{category.category_desc.cat_name}</li>
                    ))}
            </ul>
        </div>
    );
}
