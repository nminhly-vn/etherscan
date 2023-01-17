import { MODULE_NAME as MODULE_EXPLORE } from './explorer/models'
import { MODULE_NAME as MODULE_WATCHLIST } from './watchList/models'

import reducerExplore from './explorer/reducers'
import reducerWatchlist from './watchList/reducers'

export const moduleReducers = {
  [MODULE_EXPLORE]: reducerExplore,
  [MODULE_WATCHLIST]: reducerWatchlist
}
