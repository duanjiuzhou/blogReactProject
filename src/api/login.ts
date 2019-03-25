import request from './'
import { ILoginParams, ILoginRes } from '@type/login'

export const URL_AUTH_LOGIN = '/auth/login'
export const _Login = (loginParams: ILoginParams) =>
  request.post<ILoginRes>(URL_AUTH_LOGIN, loginParams)
