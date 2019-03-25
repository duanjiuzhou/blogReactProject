import { observable, action } from 'mobx'
import { _Login } from '@src/api/login'
import { ILoginParams, ILoginRes } from '@type/login'
import { setcookie } from '@src/public-lib/utils'

export class LoginInfo {
  @observable loading = false

  @action
  setLoading(data: boolean) {
    this.loading = data
  }

  async fetchLogin(params: ILoginParams) {
    this.setLoading(true)
    const res = (await _Login(params)) as ILoginRes
    if (res.token) {
      // 设置cookie 一天
      setcookie('CHENFEN_TOKEN', res.token, 86400000)
    }
    this.setLoading(false)
    return res
  }
}

export default new LoginInfo()
