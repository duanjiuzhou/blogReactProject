// import * as Mock from 'mockjs';
import * as Login from '@api/login'
import { AxiosRequestConfig } from 'axios'
import { IMockItem } from '.'

const getSignIn = (config: AxiosRequestConfig) => {
  const { username, password } = JSON.parse(config.data)
  if (username === 'admin' && password === 'chunfen2019') {
    return { token: escape('SEFS244秘343钥9654'), nick: '登录成功' }
  } else {
    return { token: '', nick: '账号或者密码错误' }
  }
}
export default [
  {
    url: Login.URL_AUTH_LOGIN,
    isMock: false,
    method: 'post',
    reply: getSignIn,
  },
] as IMockItem[]
