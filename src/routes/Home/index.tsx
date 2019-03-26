import * as React from 'react'

// rc
import Header from '@routes/Header'

// type
import { HOME, BLOG } from '@src/constants/path'

// css
import * as styles from './Home.module.scss'

const routeConfig = [{ path: HOME, name: '首页' }, { path: BLOG, name: '博客' }]

export default function Home() {
  return (
    <div className={styles.wrp}>
      <Header routeConfig={routeConfig} />
    </div>
  )
}
