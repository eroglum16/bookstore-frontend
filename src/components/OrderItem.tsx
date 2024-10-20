import {OrderItemDTO} from "../api-client";
import React from "react";

interface OrderItemProps {
    item: OrderItemDTO;
}

const OrderItem = ({ item }: OrderItemProps) => {
    return (
        <div
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-md"
        >
            <div>
                <h3 className="text-lg font-semibold">{item.book?.title}</h3>
                <p className="text-gray-600">By {item.book?.authorName}</p>
                <p className="text-gray-800 font-bold">${item.book?.price?.toFixed(2)}</p>
            </div>
        </div>
    )
}
export default OrderItem;