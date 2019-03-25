import * as React from 'react'
import { Icon } from 'antd'

const _Icon = Icon.createFromIconfontCN({
  // scriptUrl: window.location.host + '/iconfont.js',
})

export default (props: any) => {
  const newProps = { ...props, type: 'icon-' + props.type }
  return <_Icon {...newProps} />
}
