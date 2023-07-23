import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key:'d9a74a1a084e478e8cf9ffd5b05acc4c'
    }
});