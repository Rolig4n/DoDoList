import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

// Não implementado
// axiosClient.interceptors.request.use(
//     (config) => {
//         config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
//     });

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      router.push({ name: 'Login' })
    }
    throw error
  },
)

export default axiosClient
