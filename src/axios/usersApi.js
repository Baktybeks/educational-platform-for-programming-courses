import {$api} from "./index"
import jwtDecode from "jwt-decode"
import {setIsAuth, setUser} from "../store/slices/userSlice"

export const registrationApi = async (email, password) => {
    const {data} = await $api.post('api/user/registration', {email, password, role: 'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const register = (email, password, name) => {
    return async (dispatch) => {
        try {
            const response = await $api.post('api/user/registration', {email, password, name})
            if (response.status === 200) {
                alert('Вы успешно зарегистрированы')
            }
        } catch (e) {
            console.log('error', e.response.data.message)
            alert(e.response.data.message)
        }
    }
}


export const loginApi = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await $api.post('api/user/login/', {email, password})
            if (response.status === 200) {
                alert('Вы успешно авторизованы')
                localStorage.setItem('token', response.data.token)
                dispatch(setIsAuth(true))
                dispatch(getUserApi(jwtDecode(response.data.token).id))
            }

        } catch (e) {
            console.log('error', e)
            alert(e.response.data.message)
        }
    }
}

export const getUserApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/user/${id}`)
            dispatch(setUser(data))
        } catch (e) {
            console.log('error', e)
            alert(e.message)
        }
    }
}


export const check = async () => {
    const {data} = await $api.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}