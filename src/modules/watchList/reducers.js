import { handleActions } from 'redux-actions'

import * as actions from './actions'

const defaultState = {
  watchlist: {
  }
}

const handlers = {
  [actions.clearAll]: (state, action) => ({ ...defaultState }),
  [actions.addWatchlist]: (state, action) => {
    const address = action.payload.address
    return {
      ...state,
      watchlist: {
        ...state.watchlist,
        [address]: action.payload.data
      }
    }
  }
}

export default handleActions(handlers, defaultState)
