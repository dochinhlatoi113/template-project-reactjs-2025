import { API_CATEGORIES } from "@/api/api-file";
export default function CategoryPage({ params }) {
    return (
        <div>
            <h1>Danh mục: {params.slug}</h1>
            <p>Hiển thị sản phẩm của danh mục {params.slug}</p>
        </div>
    );
}