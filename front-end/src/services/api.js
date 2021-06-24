import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/v1";

export const getProducts = (config) => {
    return axios.get("/posts", config);
};
