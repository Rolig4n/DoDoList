import axios from 'axios'

axios.defaults.withCredentials = true

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  withXSRFToken: true,
})

// Não implementado
// axiosClient.interceptors.request.use(
//     (config) => {
//         config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
//     });

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       router.push({ name: 'Login' })
//     }
//     throw error
//   },
// )

export default axiosClient
