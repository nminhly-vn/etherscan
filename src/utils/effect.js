import axios from 'axios'
const TIMEOUT = 30000

export function request ({ url, headers, ...options }) {
  return axios({
    timeout: TIMEOUT,
    url,
    headers: {
      ...headers
    },
    ...options
  }).catch(error => {
    console.debug('[REQUEST] error', error)
    throw error
  })
}

export function wait (TIME = 1100, response) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response || true)
    }, TIME)
  })
}
