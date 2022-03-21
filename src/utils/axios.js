import Vue from "vue";
import axios from 'axios';

axios.interceptors.request.use(config => {
    let data = document.cookie.split('; ').reduce((obj, value) => ({
        ...obj,
        [value.split("=")[0]]: value.split("=")[1]
    }), {})
    config.headers.token = data.token ? data.token : "";
    config.baseURL = '/api'

    return config
}, err => {
    return Promise.reject(err)
})
// axios.interceptors.response.use(res=>{
//     console.log(res)
//     return res.data
// },err=>{
//     return Promise.reject(err)
// })
Vue.prototype.$axios = axios;
export default axios;