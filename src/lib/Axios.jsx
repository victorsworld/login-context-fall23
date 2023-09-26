import axios from 'axios'

const Axios = axios.create({
    baseURL: import.meta.env.AXIOS_URL || "http://localhost:4000/api"
})
export default Axios