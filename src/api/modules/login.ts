import { LoginParams, LoginData } from '@/api/interface/index'
import request from '@/utils/request'

/**
 * @name 登录模块
 */

// 用户登录接口
export const loginAPI = (params: LoginParams) => {
  return request.get<LoginData>('sys/login', params)
}
