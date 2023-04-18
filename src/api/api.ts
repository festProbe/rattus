import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

const BASE_URL = 'https://localhost:8080'
const DELAY = 5000

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: DELAY
  })

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error
      // Обработка ошибок
      return Promise.reject(error)
    }
  )
  return api
}
