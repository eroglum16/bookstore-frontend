import {CartItemDTO} from "../api-client";
import React from "react";

interface CartItemProps {
    item: CartItemDTO;
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
}

const CartItem = ({ item, updateQuantity, removeItem }: CartItemProps) => {
    return (
        <div
            className="flex items-center justify-between p-4 bg-white shadow-md rounded-md"
        >
            <div>
                <h3 className="text-lg font-semibold">{item.book?.title}</h3>
                <p className="text-gray-600">By {item.book?.authorName}</p>
                <p className="text-gray-800 font-bold">${item.book?.price?.toFixed(2)}</p>
            </div>
            <div className="flex items-center space-x-2">
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.book?.id!, Number(e.target.value))}
                    className="w-16 p-1 border rounded-md"
                />
                <button
                    onClick={() => removeItem(item.book?.id!)}
                    className="px-2 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
                >
                    Remove
                </button>
            </div>
        </div>
    )
}
export default CartItem;