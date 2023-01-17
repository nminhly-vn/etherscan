
import Config from 'react-native-config'

import { request } from '../../utils/effect'
import { getTokenInfo } from '../watchList/handlers'
import { clearAll } from './actions'

export const getTokenList = async ({ module, term }) => {
  const url = `${Config.API_BASE_URL}?key=${Config.API_KEY}`
  try {
    const { data } = await request({
      url,
      params: {
        module,
        term: term
      }
    })
    return data
  } catch (e) {
    console.debug('[GET TOKEN] error', e)
  }
}

export default (dispatch, props) => ({
  clearAll: async () => {
    dispatch(clearAll())
  },
  getTokenInfo: async ({ address, type }) => {
    const response = await getTokenInfo({
      module: 'result',
      address: address,
      type
    })
    if (response && response.result && response.result.address) {
      return response.result
    } else {
      return {
        message: response.message
      }
    }
  },
  getTokenList: async ({ term }) => {
    return getTokenList({
      module: 'search',
      term
    })
  }
})
