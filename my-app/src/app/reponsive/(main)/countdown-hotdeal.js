'use client'
import { useState, useEffect } from "react";

const CountdownTimerReponsive = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex gap-2 justify-between items-center text-white bg-blue-700 p-4 rounded-lg text-xl font-bold">
            <div className="">
                <img className="relative bottom-0 left-0 w-25" alt="" src="./flashsale/flash-sale-banner.png"></img>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                    <span>{timeLeft.days}</span>
                    <span className="text-sm">Days</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                    <span>{timeLeft.hours}</span>
                    <span className="text-sm">Hours</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                    <span>{timeLeft.minutes}</span>
                    <span className="text-sm">Minutes</span>
                </div>
                <span>:</span>
                <div className="flex flex-col items-center">
                    <span>{timeLeft.seconds}</span>
                    <span className="text-sm">Seconds</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimerReponsive;
