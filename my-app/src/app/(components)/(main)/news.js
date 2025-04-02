
import useCheckSize from "@/app/(heper)/reponsive-check-size";
import { useQuery } from '@tanstack/react-query';
//api file
import { API_NEWS_MAIN, API_MEDIA_PICTURE } from "@/api/api-file";
export default function News({ isMobile }) {
    //api
    const { data: dataNews, error: errorDataNews, isLoading: isLoadingDataNews } = useQuery({
        queryKey: ["data-news"],
        queryFn: async () => {
            const response = await fetch(API_NEWS_MAIN);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
    });

    if (isLoadingDataNews) return <p>Loading...</p>;
    if (errorDataNews) return <p>Error: {errorDataNews.message}</p>;

    //check reponsive
    let colItem = "";

    if (isMobile == true) {
        colItem = 2;
    } else {
        colItem = 4;
    }

    return (
        <div>
            <div
                className="bg-red-500 w-full  text-center my-[15px] uppercase "
                style={{
                    textShadow: '2px 2px red',
                    fontSize: '30px',
                    color: 'white'
                }}
            >
                <span className="title-news">Báo chí nói gì về chúng tôi</span>
            </div>
            <div className={`p-4 grid grid-cols-${colItem} grid-rows-4 gap-4`}>
                {dataNews.news && dataNews.news.map((x, index) => (
                    <div key={index} className="border border-[#c0c0c8] grid place-items-center">
                        <img className="max-w-[90%] max-h-full" src={API_MEDIA_PICTURE + x.picture} />
                    </div>
                ))}
            </div>
        </div>

    )
}