import { createAction } from 'redux-actions'
import { MODULE_NAME } from './models'

export const clearAll = createAction(`${MODULE_NAME}/CLEAR_ALL`)
export const addWatchlist = createAction(`${MODULE_NAME}/ADD_WATCH_LIST`)
export const removeWatchlist = createAction(`${MODULE_NAME}/ADD_WATCH_LIST`)
export const getWatchlist = createAction(`${MODULE_NAME}/ADD_WATCH_LIST`)
