'use client';

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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border border-gray-200 shadow rounded-md">
        <thead className="bg-gray-100 text-gray-800 font-semibold">
          <tr>
            <th className="w-[200px] px-4 py-2 border">Thuộc tính</th>
            {compareDataProduct?.data.map((_, index) => (
              <th key={index} className="px-4 py-2 border text-center">Sản phẩm {index + 1}</th>
            ))}
          </tr>
        </thead>

        <tbody className="text-gray-700">
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 font-medium border">Tên sản phẩm</td>
            {compareDataProduct?.data.map((item, index) => (
              <td key={index} className="px-4 py-2 text-center border">{item.productName}</td>
            ))}
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="px-4 py-2 font-medium border">Giá</td>
            {compareDataProduct?.data.map((item, index) => (
              <td key={index} className="px-4 py-2 text-center border">
                {item.price > 0 ? `${item.price.toLocaleString()} ₫` : "liên hệ"}
              </td>
            ))}
          </tr>

          {Array.from(
            new Set(
              compareDataProduct?.data.flatMap(item =>
                item.dataTechnology.map(tech => tech.catOption)
              )
            )
          ).map((catOption, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-4 py-2 font-medium border">{catOption}</td>
              {compareDataProduct?.data.map((product, index) => {
                const found = product.dataTechnology.find(t => t.catOption === catOption);
                const rawValue = found?.nameCatOption || "-";
                const cleanText = rawValue.replace(/<[^>]+>/g, "").trim();
                return (
                  <td key={index} className="px-4 py-2 text-center border">
                    {cleanText || "-"}
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
