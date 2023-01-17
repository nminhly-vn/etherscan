import Config from 'react-native-config'
import { request } from '../../utils/effect'
import { clearAll, addWatchlist } from './actions'

export const getTokenInfo = async ({ module, address, type = 3 }) => {
  const url = `${Config.API_BASE_URL}?key=${Config.API_KEY}`
  try {
    const { data } = await request({
      url,
      params: {
        module,
        value: address,
        type
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
  addWatchlist: async (
    address
  ) => {
    const response = await getTokenInfo({
      module: 'result',
      address,
      type: 3
    })
    if (response && response.result && response.result.address) {
      dispatch(addWatchlist({
        address: response.result.address,
        data: response.result
      }))
      return {
        result: true
      }
    } else {
      return {
        result: null,
        message: response.message
      }
    }
  }
})
