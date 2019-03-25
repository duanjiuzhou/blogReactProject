import * as React from 'react'

// rc
import Header from '@routes/Header'

// css
import * as styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrp}>
      <Header />
    </div>
  )
}
