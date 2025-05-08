'use client'
import { API_COMPARE_PRODUCT } from "@/api/api-file";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from 'next/navigation';

export default function TblCompareData() {
  const searchParams = useSearchParams();
  const param1 = searchParams.get('key1');
  const param2 = searchParams.get('key2');

  const {
    data: compareDataProduct,
    isLoading,
    error
  } = useQuery({
    queryKey: ["compare-data-result", param1, param2],
    queryFn: async () => {
      const response = await fetch(`${API_COMPARE_PRODUCT}key1=${param1}&key2=${param2}`);
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
    enabled: !!(param1 && param2),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Đã xảy ra lỗi.</div>;

  const allCatNames = Array.from(
    new Set(
      compareDataProduct?.data.flatMap(product =>
        product.dataTechnology.map(tech => tech.catName)
      )
    )
  );

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm text-left">
        <thead>
          <tr>
            <th className="border px-4 py-2 font-semibold bg-gray-100">Thuộc tính</th>
            {compareDataProduct?.data.map((_, index) => (
              <th key={index} className="border px-4 py-2 bg-gray-100">Sản phẩm {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 font-semibold">Tên sản phẩm</td>
            {compareDataProduct?.data.map((item, index) => (
              <td key={index} className="border px-4 py-2">{item.productName}</td>
            ))}
          </tr>

          <tr>
            <td className="border px-4 py-2 font-semibold">Giá</td>
            {compareDataProduct?.data.map((item, index) => (
              <td key={index} className="border px-4 py-2">{item.price}</td>
            ))}
          </tr>
          {allCatNames.map((catName, i) => (
            <tr key={i}>
              <td className="border px-4 py-2 font-semibold">{catName}</td>
              {compareDataProduct?.data.map((product, j) => {
                const match = product.dataTechnology.find(tech => tech.catName === catName);
                return (
                  <td key={j} className="border px-4 py-2">
                    {match?.catOption || "-"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
