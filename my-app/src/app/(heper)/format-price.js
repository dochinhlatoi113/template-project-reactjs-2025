import { useState, useEffect } from "react";

export default function formatPrice(priceOrigin) {
    const [formattedPrice, setFormattedPrice] = useState("");

    useEffect(() => {
        if (priceOrigin !== undefined && priceOrigin !== null) {
            setFormattedPrice(priceOrigin.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND"
            }));
        }
    }, [priceOrigin]);

    return formattedPrice;
}
