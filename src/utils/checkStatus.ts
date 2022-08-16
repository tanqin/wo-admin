import { ElMessage } from 'element-plus'

export const checkStatus = (status: number, msg?: string): void => {
  switch (status) {
    case 400:
      ElMessage.error(msg ?? '请求失败，请您稍后重试！')
      break
    case 401:
      ElMessage.error(msg ?? '登录失败，请您重新登录！')
      break
    case 403:
      ElMessage.error(msg ?? '当前账号无访问权限！')
      break
    case 404:
      ElMessage.error(msg ?? '您访问的资源不存在！')
      break
    case 405:
      ElMessage.error(msg ?? '请求方式错误，请您稍后重试！')
      break
    case 408:
      ElMessage.error(msg ?? '请求超时，请您稍后重试！')
      break
    case 500:
      ElMessage.error(msg ?? '服务器异常！')
      break
    case 502:
      ElMessage.error(msg ?? '网关错误！')
      break
    case 503:
      ElMessage.error(msg ?? '当前服务不可用！')
      break
    case 504:
      ElMessage.error(msg ?? '网关超时！')
      break
    default:
      ElMessage.error(msg ?? '')
  }
}
