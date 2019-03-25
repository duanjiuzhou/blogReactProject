import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

// antd
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import * as moment from 'moment'
import 'moment/locale/zh-cn'

import '@src/mock'
import 'normalize.css'
import '@styles/global.scss'
moment.locale('zh-cn')

// import registerServiceWorker from './serviceWorker'

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>,
  document.getElementById('root') as HTMLElement
)

// registerServiceWorker()
