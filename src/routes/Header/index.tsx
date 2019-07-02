import * as React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'
import { NavLink } from 'react-router-dom'

// rc
import posed from 'react-pose'

// type
import { HOME } from '@src/constants/path'

// utils
import * as classNames from 'classnames'

// assets
import logo_url_dark from '@assets/img/polar-logo-dark.png'
import logo_url_light from '@assets/img/polar-logo-light.png'

// css
import * as styles from './Header.module.scss'
import MyIcon from '@src/components/MyIcon'

interface IProps extends RouteComponentProps {
  routeConfig: Array<{ path: string; name: string }>
}

const ContentWrapper = posed.div({
  visible: { opaticy: 1, height: '100%' },
  hidden: { opaticy: 0, height: 0 },
})

class Header extends React.Component<IProps> {
  state = {
    isNavbarToggle: false,
  }

  setNavbarToggle = () => {
    this.setState({ isNavbarToggle: !this.state.isNavbarToggle })
  }

  UNSAFE_componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({ isNavbarToggle: false })
    }
  }

  render() {
    const pathname = this.props.location.pathname
    const { routeConfig } = this.props
    const { isNavbarToggle } = this.state

    return (
      <div
        className={classNames(styles.wrp, {
          [styles.navbarHome]: pathname === HOME,
        })}
      >
        <div
          className={'container'}
          style={{ height: '50px', lineHeight: '50px' }}
        >
          <div className={styles.containerContent}>
            <a className={styles.navbarBrand} href={HOME}>
              <img
                src={pathname === HOME ? logo_url_light : logo_url_dark}
                height={'100%'}
              />
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
          <div className={styles.navbarToggle} onClick={this.setNavbarToggle}>
            <MyIcon
              type={'toggle'}
              className={classNames(styles.navbarToggleIcon, {
                [styles.navbarToggleIconActive]: isNavbarToggle,
              })}
            />
          </div>
        </div>
        <ContentWrapper
          className={styles.contentWrapper}
          pose={isNavbarToggle ? 'visible' : 'hidden'}
        >
          {routeConfig.map((item, i) => (
            <NavLink
              className={styles.toggleLink}
              to={item.path}
              key={'route1' + i}
              activeClassName={styles.active}
            >
              {item.name}
            </NavLink>
          ))}
        </ContentWrapper>
      </div>
    )
  }
}

export default withRouter(Header)
