import axios from 'axios'

const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $authApi = axios.create({
    // withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL
})

$authApi.interceptors.response.use((config) => {
        return config
    },
    async error => {
        const originalRequest = error.config
        if (Number(error.response._status) === 401 && error.config && !originalRequest._isRetry) {
            originalRequest._isRetry = true
            try {
                const refresh = {refresh: localStorage.getItem('REFRESH_TOKEN')}
                const {data} = await $api.post('/token/refresh/', refresh)
                sessionStorage.setItem('ACCESS_TOKEN', data.access)
                return $authApi.request(originalRequest)
            } catch (e) {
                console.log("Не авторизован")
            }
        }
        throw error
    }
)


const authInterceptor = config => {
    const accessToken = sessionStorage.getItem('ACCESS_TOKEN')
    config.headers.authorization = `Bearer ${accessToken}`
    return config
}

$authApi.interceptors.request.use(authInterceptor)

export {$api, $authApi}