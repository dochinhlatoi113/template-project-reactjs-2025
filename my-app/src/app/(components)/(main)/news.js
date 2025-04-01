
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import { useQuery } from '@tanstack/react-query';
//api file
import { API_NEWS_MAIN } from "@/api/api-file";
export default function News({ isMobile }) {
    //api
    const { data: dataNews, error: errorDataNews, isLoading: isLoadingDataNews } = useQuery({
        queryKey: ["data-news"],
        queryFn: async () => {
            const response = await fetch(API_NEWS_MAIN);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return  response.json();
        },
    });

    if (isLoadingDataNews) return <p>Loading...</p>;
    if (errorDataNews ) return <p>Error: {errorDataNews.message}</p>;
   
    //check reponsive
    let colItem = "";

    if (isMobile == true) {
        colItem = 2;
    } else {
        colItem = 5;
    }

    return (
        <div>
            <div
                className="bg-red-500 w-full text-center my-[15px] uppercase "
                style={{
                    textShadow: '2px 2px #FF0000',
                    fontSize: '48px',
                    color: 'white'
                }}
            >
                Thông tin hữu ích - Mua sắm thông minh
            </div>
            <div className="p-4 grid grid-cols-3 grid-rows-4 gap-4">
                {/* {newsList && newsList.map((x) => (
                    <div>
                        <img src=""></img>
                    </div>
                ))} */}
            </div>
        </div>

    )
}