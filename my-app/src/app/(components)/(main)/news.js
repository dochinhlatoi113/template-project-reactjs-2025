
import useCheckSize from "@/app/(heper)/reponsive-check-size";
export default function News({ isMobile }) {
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
            <div class="grid grid-cols-2 grid-rows-4 gap-4">
                <div>01</div>
                <div>
                    <div>09</div>
                    <div>09</div>
                </div>
            </div>
        </div>

    )
}