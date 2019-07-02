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
          <div>
            <div className={styles.coverInfoTitle}>孟烦了的独立博客</div>
            <div className={styles.coverInfoDescribe}>自律给我自由</div>
            <div className={styles.footerBoxMe}>
              <a
                href="https://www.jianshu.com/u/2fd3b3a43992"
                target="_blank"
                className={styles.jianIcon}
              >
                <i>简</i>
              </a>
              <a href="https://github.com/duanjiuzhou" target="_blank">
                <i className="iconfont icon-github3" />
              </a>
              <a href="mailto:duanjiuzhou111@163.com">
                <i className="iconfont icon-youxiang" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
