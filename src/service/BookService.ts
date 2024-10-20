import axiosInstance from "../axios";

const getAllBooks = () => {
    return axiosInstance.get("/books");
}
export {getAllBooks};