import { GlobalStore } from '@/store'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import { checkStatus } from './checkStatus'

interface Result {
  code: string
  msg: string
}

interface ResultData<T = any> extends Result {
  data: T
}

const globalStore = GlobalStore()
const router = useRouter()

const config: AxiosRequestConfig = {
  // 请求 URL 的公共部分
  baseURL: import.meta.env.VITE_API_URL as string,
  // 超时时间
  timeout: 10000,
  // 跨域时允许携带凭证
  withCredentials: true
}

class RequestHttp {
  // # 表示私有
  #service: AxiosInstance
  public constructor(public config: AxiosRequestConfig) {
    // 实例化 axios
    this.#service = axios.create(config)

    /**
     * @description 请求拦截器
     */
    this.#service.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const token: string = globalStore.token
        config.headers!['access-token'] = token
        return config
      },
      (error: AxiosError) => {
        Promise.reject(error)
      }
    )

    /**
     * @description 响应拦截器
     */
    this.#service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        if (data.code === 200) {
          return data
        } else {
          ElMessage.error(data.msg)
          return Promise.reject(response)
        }
      },
      (error: AxiosError) => {
        const { response } = error
        if (response) {
          checkStatus(response.status)
        } else {
          ElMessage.error('请求超时！')
          // 无网络时
          if (!window.navigator.onLine) {
            router.push({
              path: '/500'
            })
            return false
          }

          return Promise.reject(error)
        }
      }
    )
  }
  // 常用请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.#service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.#service.post(url, { params, ..._object })
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.#service.put(url, { params, ..._object })
  }
  delete<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.#service.delete(url, { params, ..._object })
  }
}

export default new RequestHttp(config)
