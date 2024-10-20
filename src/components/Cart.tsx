import React, { useState } from 'react';
import {CartItemDTO} from "../api-client";

interface CartProps {
    cartItems: CartItemDTO[];
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
}

const Cart = ({ cartItems, updateQuantity, removeItem }: CartProps) => {
    const [address, setAddress] = useState<string>('');

    const handleOrder = () => {
        console.log('Order placed:', { cartItems, address });
        // Handle the order submission logic
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
            <div className="mt-6 space-y-4">
                {cartItems.length === 0 && (
                    <p className="text-gray-600">Your cart is empty</p>
                )}
                {cartItems.map((item: CartItemDTO) => (
                    <div
                        key={item.book?.id}
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
                ))}
            </div>
            {cartItems.length > 0 && (
                <div className="mt-6 space-y-4">
                    <div>
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Shipping Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full px-4 py-2 mt-1 text-sm border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Your Address"
                        />
                    </div>
                    <button
                        onClick={handleOrder}
                        className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none"
                    >
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
