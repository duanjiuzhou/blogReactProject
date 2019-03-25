import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// 默认请求时间
axios.defaults.timeout = 10000

export interface ICfg<Res> {
  handleReq?: (config: AxiosRequestConfig) => void
  handleFailRes?: (res: AxiosResponse<Res>) => any
  handleSuccessRes?: <D>(res: AxiosResponse<Res>) => D
  catchErrors?: (err: Error) => void
}

export default function Request<Res>(cfg: ICfg<Res>) {
  const {
    handleReq: _handleReq,
    handleFailRes: _handleFailRes,
    handleSuccessRes: _handleSuccessRes,
    catchErrors: _catchErrors,
  } = cfg

  // 请求拦截器
  axios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if (config.method === 'post') {
        config.headers['Content-Type'] =
          'application/x-www-form-urlencoded;charset=UTF-8'
      } else {
        config.params = config.params ? config.params : {}
        _handleReq && _handleReq(config)
      }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  const errorUrl = (res: AxiosResponse) => {
    return process.env.NODE_ENV === 'development' ? res.config.url : ''
  }

  // 响应处理函数
  function handleRes<D>(res: AxiosResponse<Res>): D {
    if (res.status !== 200) {
      _handleFailRes && _handleFailRes(res)
      throw new Error(errorUrl(res) + '请求失败')
    }

    // @ts-ignore
    return _handleSuccessRes ? _handleSuccessRes(res) : res.data
  }

  // 异常处理
  const catchErrors = (error: Error) => {
    _catchErrors && _catchErrors(error)
    console.log(error.message)
  }

  function get<D>(url: string, config?: AxiosRequestConfig) {
    return axios
      .get<Res>(url, config)
      .then(res => handleRes<D>(res))
      .catch(catchErrors)
  }

  function post<D>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios
      .post<Res>(url, data, config)
      .then(res => handleRes<D>(res))
      .catch(catchErrors)
  }

  function put<D>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios
      .put<Res>(url, data, config)
      .then(res => handleRes<D>(res))
      .catch(catchErrors)
  }

  return {
    axios,
    get,
    post,
    put,
  }
}
