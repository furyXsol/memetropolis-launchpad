import axios from 'axios'
import { checkJwtTokenExpiration, getJWTToken, setJWTToken } from "@/core/utils/auth";
import { refreshToken } from "@/core/services/auth/refresh-token";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

api.interceptors.request.use(async (config) => {
  if (typeof window !== 'undefined') {
  }

  const walletAddress = config.headers['x-user-wallet-address'];
  if (!walletAddress) return config;

  const status = checkJwtTokenExpiration(walletAddress);

  if (status === 'refresh') {
    const token = getJWTToken(walletAddress)?.token;
    if (token) {
      const { data } = await refreshToken(token);
      setJWTToken({
        address: walletAddress,
        token: data.token,
        expires: data.exp,
      });
      config.headers['Authorization'] = `Bearer ${data.token}`;
    }
  } else if (status === 'valid') {
    const token = getJWTToken(walletAddress)?.token;
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
  }

  return config;
}, (error) => {
  // Handle the error
  return Promise.reject(error);
})

// reset local storage on 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  },
)
