export const HOME = '/'
export const LOGIN = '/login'
export const BLOG = '/blog'
export const DETAILS = (id: number) => `/details/${id}`
export const ADMIN = '/admin'
export const LABEL = '/label'
export const ESSAY = '/essay'
export const BOARD = '/board'
export const JUNIORS = '/juniors'

export const ANALYSIS_COMPETITIVE_CHART = (type = ':type') => `/chart/${type}`

export const ANALYSIS_COMPETITIVE_DETAIL = (type = ':type') => `/detail/${type}`
