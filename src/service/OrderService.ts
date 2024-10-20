import {OrderRequest} from "../api-client";
import axiosInstance from "../axios";

const createOrder = (request: OrderRequest) => {
    return axiosInstance.post("/orders", request)
}

export {createOrder};