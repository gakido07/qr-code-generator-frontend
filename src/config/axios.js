import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://qr-code-generator-1.herokuapp.com/',
    responseType: 'arraybuffer'
});

export default axiosInstance;