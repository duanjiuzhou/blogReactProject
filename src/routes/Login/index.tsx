import * as React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
// rc
import { Form, Icon, Input, Button, message } from 'antd'

// types
import { WrappedFormUtils } from 'antd/lib/form/Form'
import { RouteComponentProps } from 'react-router'
import { HOME } from '@constants/path'
import LoginInfo from '@stores/login'

// utils
import history from '@src/history'

// css
import * as styles from './Login.module.scss'
import { getCookie } from '@src/public-lib/utils'

@observer
class Login extends React.Component<
  {
    form: WrappedFormUtils
  } & RouteComponentProps
> {
  @observable userName = ''
  @observable password = ''

  @action
  handleUserNameChange(value: string) {
    this.userName = value
  }

  @action
  handlePasswordChange(value: string) {
    this.password = value
  }

  componentDidMount() {
    if (getCookie('CHENFEN_TOKEN')) {
      history.push(HOME)
    }
  }

  handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const res = await LoginInfo.fetchLogin({
          username: values.username,
          password: values.password,
        })
        if (res.token) {
          message.success(res.nick)
          history.push(HOME)
        } else {
          message.warning(res.nick)
        }
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.loginWrp}>
        <div className={styles.header}>{'春分Demo产品'}</div>
        <div className={styles.formBox}>
          <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名' }],
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  placeholder="username"
                  onChange={e => this.handleUserNameChange(e.target.value)}
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="password"
                  onChange={e => this.handlePasswordChange(e.target.value)}
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                loading={LoginInfo.loading}
                type="primary"
                htmlType="submit"
                className={styles.loginFormButton}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
const WrappedNormalLoginForm = Form.create()(Login)
export default WrappedNormalLoginForm
