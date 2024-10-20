import axiosInstance from "../axios";

interface LoginArgs {
    username: string;
    password: string;
}
const login = ({username, password}: LoginArgs) => {
    const basicAuthHeader = 'Basic ' + btoa(`${username}:${password}`)
    return axiosInstance.post("/login", {}, {
        headers: {
            Authorization: basicAuthHeader
        }
    })
}

export {login};