import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

// type
import { HOME } from '@src/constants/path'

// utils
import * as classNames from 'classnames'

// assets
import logo_url from '@assets/img/polar-logo.png'

// css
import * as styles from './Header.module.scss'

interface IProps extends RouteComponentProps {
  routeConfig: Array<{ path: string; name: string }>
}

class Header extends React.Component<IProps> {
  // this.props.location.pathname
  render() {
    const pathname = this.props.location.pathname
    console.log(this.props.location.pathname)
    const { routeConfig } = this.props
    return (
      <div
        className={classNames(styles.wrp, {
          [styles.navbarHome]: pathname === HOME,
        })}
      >
        <div className={styles.container}>
          <div className={styles.containerContent}>
            <a className={styles.navbarBrand} href={HOME}>
              <img src={logo_url} height={'100%'} />
            </a>
            <div className={styles.routeLink}>
              {routeConfig.map((item, i) => (
                <NavLink
                  className={styles.link}
                  to={item.path}
                  key={'route' + i}
                  activeClassName={styles.active}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className={styles.navbarToggle}>图标</div>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
