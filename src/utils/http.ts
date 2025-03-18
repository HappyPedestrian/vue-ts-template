import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/',
  timeout: 5000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers!['Authorization'] = ''
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.code === 'ERR_CANCELED') {
      return Promise.reject(error)
    }
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(error)
    }
    return error
  }
)

function request<R = any, P = any>(method: string, url: string, data: P, options?: AxiosRequestConfig) {
  const isGetMethod = method.toLowerCase() === 'get'
  return axiosInstance.request<R>({
    method,
    url,
    data: isGetMethod ? undefined : data,
    params: isGetMethod ? data : undefined,
    ...options
  })
}

function get<R = any, P = any>(url: string, params: P, options?: AxiosRequestConfig) {
  return axiosInstance.get<R>(url, {
    params,
    ...options
  })
}

function post<R = any, P = any>(url: string, data: P, options?: AxiosRequestConfig) {
  return axiosInstance.post<R>(url, data, {
    ...options
  })
}

export default {
  request,
  get,
  post
}
