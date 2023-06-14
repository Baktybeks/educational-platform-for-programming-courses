import {$api} from "./index"
import jwtDecode from "jwt-decode";

export const registrationApi = async (email, password) => {
    const {data} = await $api.post('api/user/registration',{email, password,role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const loginApi = async (email, password) => {
    const {data} = await $api.post('api/user/login',{email, password})
    localStorage.setItem('token', data.token)

    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $api.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}