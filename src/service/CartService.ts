import axiosInstance from "../axios";
import {AddBookToCartRequest} from "../api-client";

const getCartItems = () => {
    return axiosInstance.get("/cart");
}

const addToCart = (request: AddBookToCartRequest) => {
    return axiosInstance.post("/cart", request);
}

const removeFromCart = (bookId: number) => {
    return axiosInstance.delete(`/cart/book/${bookId}`)
}

const changeQuantityInCart = (bookId: number, quantity: number) => {
    return axiosInstance.patch(`/cart/book/${bookId}`, {}, {
        params: {
            quantity
        }
    });
}

export { getCartItems, addToCart, removeFromCart, changeQuantityInCart };