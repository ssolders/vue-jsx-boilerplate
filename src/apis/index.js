import Axios from 'axios'

const request = (method, url, data) => {
  return Axios.request({ method, url, data })
}

const get = (url, data) => {
  return request('GET', url)
}

// post request + adds the token saved in store as url-param
const post = (url, payload) => {
  return request('POST', url, payload)
}


// __API__ is defined inside webpack.base.config and depends on current node_env (development or production)
export const onlineBankApi = {
  buildUrl (path) {
    return `${__API__}/${path}`
  },
  getInitialContext (token) {
    return get(this.buildUrl('context'));
  }
}
