import {UserDTO} from "../api-client";
import axiosInstance from "../axios";

const register = (request: UserDTO) => {
    return axiosInstance.post('/register', request);
}

export {register};