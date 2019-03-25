import * as React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'

import { LOGIN, HOME } from '@constants/path'
import { getCookie } from '@src/public-lib/utils'

export const AuthRoute = ({ component, ...rest }: RouteProps) => {
  const Component = component as React.ComponentClass

  return (
    <Route
      {...rest}
      render={props => {
        const path = props.location.pathname
        if (getCookie('CHENFEN_TOKEN')) {
          if (['/consumer', '/', '/screen'].indexOf(path) !== -1) {
            return <Component {...props} />
          }
          return <Redirect to={HOME} />
        } else {
          return <Redirect to={LOGIN} />
        }
      }}
    />
  )
}

export default AuthRoute
