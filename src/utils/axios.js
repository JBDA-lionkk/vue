// import { getToken } from "@/utils/auth"
import data from '@/views/pdf/content'
import axios from 'axios'
import qs from 'qs'

//全局配置
const myAxios = axios.create({
    baseURL: 'http://81.69.24.232:8001/', //网络请求地址
    timeout: 5000
})

// //响应接收前的拦截
myAxios.interceptors.response.use(function (response) {
    let { data } = response
    response.data = data.data
    response.status = data.status
    response.statusText = data.message

    //统一异常处理
    if (data.status !== 200) {
        return Promise.reject(data.message);
    }
    return response
}, function (error) {
    return Promise.reject(error)
})

/**
 * get
 */
export function get(url, params) {
    return myAxios({
        method: 'get',
        url,
        params,
        timeout: 10000,
        hearders: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}

/**
 * post 查询字符串
 */
export function post(url, data) {
    return myAxios({
        method: "post",
        url,
        data: qs.stringify(data),
        timeout: 10000,
        hearders: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

/** 
 * 提交post
*/
export function post_obj_array(url, data) {
    return myAxios({
        method: "post",
        url,
        data: qs.stringify(data, { allowDots: true }),
        timeout: 10000,
        hearders: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

export function post_array(url, data) {
    return myAxios({
        method: "post",
        url,
        data: qs.stringify(data, { arrayFormat: "repeat" }),
        timeout: 10000,
        hearders: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

export function post_json(url, data) {
    return myAxios({
        method: "post",
        url,
        timeout: 10000,
        data
    })
}

