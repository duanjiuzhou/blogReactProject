import * as React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { observer } from 'mobx-react'
import MobxDevTools from 'mobx-react-devtools'

import history from '@src/history'
import { LOGIN, BASENAME } from '@constants/path'

// import AuthRoute from '@components/Route'

// Router Component
const Home = React.lazy(() => import('@src/routes/Home'))
const LoginPage = React.lazy(() => import('@routes/Login'))

const ErrorPage = React.lazy(() => import('@public/components/ErrorPage'))

@observer
export default class App extends React.Component {
  render() {
    return (
      <>
        <Router history={history}>
          <React.Suspense fallback={<div>loading...</div>}>
            <Switch>
              <Route path={LOGIN} component={LoginPage} />
              <Route path={BASENAME} component={Home} />
              <Route>
                <ErrorPage homeTitle={process.env.REACT_APP_NAME} />
              </Route>
            </Switch>
          </React.Suspense>
        </Router>
        {process.env.NODE_ENV === 'development' && (
          <MobxDevTools
            position={{
              bottom: 0,
              left: 0,
            }}
          />
        )}
      </>
    )
  }
}
