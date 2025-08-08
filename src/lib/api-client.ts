import Axios from "axios"
import { toast } from "sonner"
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"
import { env } from "@/config/env"

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  config.headers.Accept = "application/json"
  // config.withCredentials = true;
  return config
}

export const api = Axios.create({
  baseURL: env.API_URL,
  // withCredentials: true,
})

api.interceptors.request.use(authRequestInterceptor)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data
  },
  async (error: AxiosError) => {
    console.log(error)
    toast.error(error.message)
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        await api.post("/auth/refresh", {}, { withCredentials: true })

        return api.request(originalRequest)
      } catch (refreshError) {
        console.log(error)
        toast.error(error.message)
        window.location.href = "/login"
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)
