import Request from '@public/api'

// http工具若需前端统一，需要后端统一普通交互格式
export enum Ret {
  正常 = 0,
  用户名不存在或者密码错误 = 99,
  登录失效 = 100,
  参数错误 = 400,
  无权限 = 401,
  系统内部错误 = 1000,
  数据过期 = 4001,
}

// 自定义响应结构体
interface ICommonResponse {
  ret: number
  data: any
  message?: string
}

export default Request<ICommonResponse>({
  // 请求拦截器内处理函数
  handleReq: config => {
    config.baseURL = process.env.API_URL
  },
  // 请求失败处理函数
  handleFailRes: res => {
    const { ret, message } = res.data
    console.log(Ret[ret], message)
  },
  // 请求成功处理函数
  handleSuccessRes: res => {
    return res.data.data
  },
})
