export type JwtToken = {
  address: string
  token: string
  expires: number
}

const JWT_LOCAL_STORAGE_KEY = 'memetropolis.token.'

export const setJWTToken = (token: JwtToken) => {
  localStorage.setItem(
    `${JWT_LOCAL_STORAGE_KEY}${token.address}`,
    JSON.stringify(token),
  )
}

export const getJWTToken = (address: string): JwtToken | null => {
  const token = localStorage.getItem(`${JWT_LOCAL_STORAGE_KEY}${address}`)
  return token ? JSON.parse(token) : null
}

export const removeJWTToken = (address: string) => {
  localStorage.removeItem(`${JWT_LOCAL_STORAGE_KEY}${address}`)
}

export const checkJwtTokenExpiration = (
  address: string,
): 'valid' | 'expired' | 'refresh' => {
  const token = getJWTToken(address)

  if (!token) return 'expired'

  const expiresInSeconds = (token.expires * 1000 - Date.now()) / 1000

  if (expiresInSeconds < 0) return 'expired'

  if (expiresInSeconds < 60 * 5) return 'refresh'

  return 'valid'
}
