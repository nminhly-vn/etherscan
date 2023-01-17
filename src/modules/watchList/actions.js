import { createAction } from 'redux-actions'
import { MODULE_NAME } from './models'

export const clearAll = createAction(`${MODULE_NAME}/CLEAR_ALL`)
export const addWatchlist = createAction(`${MODULE_NAME}/ADD_WATCH_LIST`)
