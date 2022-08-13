const key = 'authorization'

export const setToken = (token: string | null) => {
  if (token === null) {
    localStorage.removeItem(key)
  } else {
    localStorage.setItem(key, token)
  }
}

export const getToken = () => {
  return localStorage.getItem(key)
}
