import axios, { AxiosRequestConfig } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import login from './login'

export interface IMockItem {
  url: string
  isMock: boolean
  method: 'post' | 'get' | 'put'
  reply: any
}

if (process.env.REACT_APP_MOCK === 'true') {
  const mockArr = [...login]

  const mockAdapter = new MockAdapter(axios, { delayResponse: 500 })
  mockArr.forEach(item => {
    const method = 'on' + item.method[0].toUpperCase() + item.method.slice(1)
    mockAdapter[method](item.url).reply((config: AxiosRequestConfig) => {
      // 支持reply结果 or 处理函数
      const data =
        typeof item.reply === 'function' ? item.reply(config) : item.reply
      return [
        200,
        {
          ret: 0,
          data,
        },
      ]
    })
  })

  mockAdapter.onAny().passThrough()
}
