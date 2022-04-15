import axios from "axios";

const ClientApiUrl = 'http://localhost:3005/api';
const api = axios.create({
    baseURL: ClientApiUrl

});
export default api;