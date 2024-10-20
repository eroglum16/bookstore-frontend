import React, {useEffect, useState} from 'react';
import {BookDTO, CartItemDTO} from "../api-client";
import BookList from "../components/BookList";
import Cart from "../components/Cart";
import {addToCart, changeQuantityInCart, getCartItems, removeFromCart} from "../service/CartService";

const Home = () => {
    const [cartItems, setCartItems] = useState<CartItemDTO[]>([]);
    const fetchItems = () => {
        getCartItems().then((res) => {
            setCartItems(res.data);
        });
    }
    useEffect(() => {
        fetchItems();
    }, []);

    const addToBasket = (book: BookDTO) => {
        if(book.id){
            addToCart({
                bookId: book.id,
                quantity: 1
            }).then((res) => {
                if (res.status === 200){
                    fetchItems();
                }
            })
        }
    };

    const updateQuantity = (id: number, quantity: number) => {
        changeQuantityInCart(id, quantity).then((res) => {
            if (res.status === 200){
                fetchItems();
            }
        })
    };

    const removeItem = (id: number) => {
        removeFromCart(id).then((res) => {
            if (res.status === 200){
                fetchItems();
            }
        });
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="w-2/3 p-6">
                <BookList addToBasket={addToBasket} />
            </div>
            <div className="w-1/3 p-6 bg-white shadow-md">
                <Cart
                    cartItems={cartItems}
                    updateQuantity={updateQuantity}
                    removeItem={removeItem}
                    fetchItems={fetchItems}
                />
            </div>
        </div>
    );
};

export default Home;
