import { LoginParams, LoginData } from '@/api/interface/index'
import request from '@/utils/request'

// 模块微服务名称
const portName = '/api-auth'

/**
 * @name 登录模块
 */

// 获取验证码
export const getCodeImgAPI = (deviceId: string) => {
  return request.get<Blob>(portName + '/validate/code/' + deviceId, undefined, {
    responseType: 'blob'
  })
}

// 用户登录接口
export const loginAPI = (params: LoginParams) => {
  return request.post<LoginData>(portName + '/oauth/token', params)
}
