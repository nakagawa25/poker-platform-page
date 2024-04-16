import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem("token")
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
