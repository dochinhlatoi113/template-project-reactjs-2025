
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { API_PRODUCT_DETAIL_TECHNOLOGY } from "@/api/api-file";
import { useQuery } from "@tanstack/react-query";
import FormatHtml from "@/app/(heper)/formatHtml";

export default function TechnicalProductDetail({ params }) {
  const { data: dataProductDetailTech, isError, isLoading } = useQuery({
    queryKey: ['productDetailTech', params],
    queryFn: async () => {
      const response = await fetch(API_PRODUCT_DETAIL_TECHNOLOGY + params);
      return response.json();
    },
  })

  //retrive html
  // const formatHtml = FormatHtml(dataProductDetailTech?.technology)
  return (
    <div className="border-[20px] border-white bg-white rounded-lg">
      <Accordion>
        <AccordionPanel >
          <AccordionTitle className="h-[10px]">
            <label className=" bg-gray-100 text-base font-semibold text-gray-700">
              Thông số kỹ thuật
            </label>
          </AccordionTitle>
          <AccordionContent>
            {dataProductDetailTech && dataProductDetailTech?.technology.length > 0 && (
              <div className="w-full border border-gray-200 rounded-md overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {dataProductDetailTech.technology.map((item, i) => (
                    <div key={i} className="flex px-4 py-2 text-sm">
                      <div className="w-1/3 font-medium text-gray-600">
                        <FormatHtml data={item.catOption} /> 
                      </div>
                      <div className="w-2/3 text-gray-800 pl-4">
                        <FormatHtml data={item.nameCatOption} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}
