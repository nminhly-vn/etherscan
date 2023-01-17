import { handleActions } from 'redux-actions'

import * as actions from './actions'

const defaultState = {
}

const handlers = {
  [actions.clearAll]: (state, action) => ({ ...defaultState })
}

export default handleActions(handlers, defaultState)
