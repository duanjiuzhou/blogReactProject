import * as React from 'react'

// assets
import coverUrl from '@assets/img/bg-cover/bg9.jpeg'

// css
import * as styles from './HomePage.module.scss'

export default class HomePage extends React.Component {
  render() {
    return (
      <div className={styles.wrp}>
        <div
          className={styles.coverInfo}
          style={{ backgroundImage: `url(${coverUrl})` }}
        >
          孟烦了的独立博客
        </div>
      </div>
    )
  }
}
