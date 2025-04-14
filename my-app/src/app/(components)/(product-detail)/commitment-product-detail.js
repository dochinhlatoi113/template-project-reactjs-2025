import { LifebuoyIcon, TruckIcon, ChatBubbleBottomCenterTextIcon, WalletIcon } from "@heroicons/react/24/outline";

export default function Commitment(params) {
    return (
        <div className="border rounded-sm border-gray-300 bg-white">
            <div className="product-detail-commitment space-y-2 p-2">
                <label className="font-semibold">Chúng tôi cam kết</label>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <TruckIcon className="h-6 w-6 text-blue-500" />
                        <div>Giao hàng nhanh chóng</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-black" />
                        <div>Hổ trợ 24/7</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <LifebuoyIcon className="h-6 w-6 text-blue-500" />
                        <div>1 đổi 1 trong 30 ngày</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <WalletIcon className="h-6 w-6 text-gray-500" />
                        <div>Giá cạnh tranh</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
