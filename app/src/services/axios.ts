import axios from 'axios'
import { getToken } from './localstorage'

export const api = axios.create({
  baseURL: 'http://localhost:4001/api',
})

api.interceptors.request.use((reqConfig) => {
  const token = getToken()

  if (token !== null) {
    reqConfig.headers ??= {}

    reqConfig.headers['authorization'] = token
  }

  return reqConfig
})
