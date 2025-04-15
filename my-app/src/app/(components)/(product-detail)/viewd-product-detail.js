'use client'
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";

export default function ViewProductDetail(defaultRating = 0) {
    const [rating, setRating] = useState(defaultRating);
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleVote = (value) => {
        setRating(value);

        const params = new URLSearchParams(searchParams.toString());
        params.set("vote", value.toString());
        router.push(`?${params.toString()}`);

    };
    //number
    const starItems = [1, 2, 3, 4, 5];
    return (
        <div className="border-[20px] border-white bg-white rounded-lg">
            <div className="flex  justify-center gap-4 ">
                <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <StarIcon
                            key={star}
                            className={`h-8 w-8 cursor-pointer transition-all ${star <= rating ? "text-yellow-400" : "text-gray-300"
                                }`}
                            onClick={() => handleVote(star)}
                        />
                    ))}
                </div>
                <div className="text-sm">
                    0 vote
                </div>
            </div>
            <div className="pt-2">
                <ul className="space-y-2">
                    {starItems.map((item, index) => (
                        <div className="flex gap-2" key={index}>
                            <div>{item}</div>
                            <li className="flex w-full rounded-full bg-blue-100 px-4 py-2 text-blue-800">
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}