export const search2Params = (search = window.location.search) => {
  /*去除？*/
  const info = search.length > 0 ? search.split('?')[1] : ''

  if (!info) {
    return null
  }

  /*以&分割字符串*/
  const result1 = info.split('&')

  /*存储key和value的数组*/
  const data = {}
  for (const v of result1) {
    /*以=分割字符串*/
    const [key, value] = v.split('=')
    data[key] = decodeURI(value)
  }

  return data
}

export const params2query = (params: object = {}) => {
  return Object.keys(params)
    .map(key => {
      const value = params[key]

      if (value != null) {
        return `${key}=${value}`
      }

      return null
    })
    .filter(query => query != null)
    .join('&')
}

// 获取地址栏URL上的参数
export const getUrlParms = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=(.*)(&[^&=]+=)')
  const regLast = new RegExp('(^|&)' + name + '=(.*)($)')
  const r =
    window.location.search.substr(1).match(reg) ||
    window.location.search.substr(1).match(regLast)
  if (r != null) {
    const l = r[2].match(/&[^&=]+=/)
    if (l) {
      return decodeURIComponent(r[2].split(l[0])[0])
    } else {
      return decodeURIComponent(r[2])
    }
  }
  return null
}

// 存入cookie
export const setcookie = (name: string, value: string, time?: number) => {
  // 设置名称为name,值为value的Cookie
  const expdate = new Date()
  let times: any
  if (time !== undefined) {
    expdate.setTime(expdate.getTime() + time) // 时间单位毫秒
    times = 'expires=' + expdate.toUTCString() + ';'
  } else {
    times = ''
  }

  document.cookie = name + '=' + value + ';' + times + 'path=/'
}

//  读取cookie
export const getCookie = (name: string) => {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}
