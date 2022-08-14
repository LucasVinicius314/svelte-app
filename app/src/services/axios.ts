import { getToken, setToken } from './localstorage'

import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:4001/api',
})

api.interceptors.request.use((reqConfig) => {
  reqConfig.headers ??= {}

  const token = getToken()

  if (token !== null) {
    reqConfig.headers['authorization'] = token
  }

  return reqConfig
})

api.interceptors.response.use((resConfig) => {
  const token = resConfig.headers['authorization'] as string | null

  if (token !== null) {
    setToken(token)
  }

  return resConfig
})
