import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// rc
import Header from '@routes/Header'

// type
import { HOME, BLOG, BASENAME } from '@src/constants/path'

// css
import * as styles from './Home.module.scss'

const BlogPage = React.lazy(() => import('@routes/Home/Blog'))
const HomePage = React.lazy(() => import('@routes/Home/HomePage'))

const routeConfig = [{ path: HOME, name: '首页' }, { path: BLOG, name: '博客' }]

export default function Home() {
  return (
    <div className={styles.wrp}>
      <Header routeConfig={routeConfig} />

      <React.Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Redirect exact from={BASENAME} to={HOME} />
          <Route path={BLOG} component={BlogPage} />
          <Route path={HOME} component={HomePage} />
        </Switch>
      </React.Suspense>
    </div>
  )
}
