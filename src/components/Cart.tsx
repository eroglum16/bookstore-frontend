import React, { useState } from 'react';
import {CartItemDTO, OrderDTO} from "../api-client";
import {createOrder} from "../service/OrderService";
import CartItem from "./CartItem";
import OrderItem from "./OrderItem";

interface CartProps {
    cartItems: CartItemDTO[];
    updateQuantity: (id: number, quantity: number) => void;
    removeItem: (id: number) => void;
    fetchItems: () => void;
}

const Cart = ({ cartItems, updateQuantity, removeItem, fetchItems }: CartProps) => {
    const [address, setAddress] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [createdOrder, setCreatedOrder] = useState<OrderDTO | undefined>(undefined);

    const handleOrder = () => {
        if (!address){
            setErrorMessage("Please specify an address.")
            return;
        }
        setErrorMessage("");
        createOrder({address}).then((res) => {
            if (res.status === 201) {
                setAddress("");
                fetchItems();
                setSuccessMessage("You order has successfully been placed!");
                setCreatedOrder(res.data);
                console.log(res.data)
            }
        });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
            <div className="mt-6 space-y-4">
                {cartItems.length === 0 && (
                    <p className="text-gray-600">Your cart is empty</p>
                )}
                {cartItems.map((item: CartItemDTO) => (
                    <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
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
            {errorMessage && <p className="text-sm text-red-500 mt-4">{errorMessage}</p>}
            {successMessage && <p className="text-sm text-green-600 mt-4">{successMessage}</p>}
            {createdOrder ? (
                <div className="flex flex-col gap-4 mt-4">
                    <h3 className="font-semibold ">Summary of order:</h3>
                    <div className="flex flex-col gap-4">
                        {createdOrder.orderItems ? createdOrder.orderItems.map((item: CartItemDTO) => (
                            <OrderItem key={item.id} item={item}/>
                        )) : ""}
                    </div>
                    {createdOrder.totalPrice ? (
                        <p className="text-sm">Total price: <span
                            className="font-semibold">{createdOrder.totalPrice.toFixed(2)}</span></p>
                    ) : ""}
                </div>
            ) : ""}
        </div>
    );
};

export default Cart;
