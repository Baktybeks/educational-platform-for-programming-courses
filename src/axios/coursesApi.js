import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {setCourse, setCourses} from "../store/slices/courseSlice"

export const getCoursesApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/courses/`)
            console.log("data.count",data.count)

            dispatch(setCourses(data.rows))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getCourseApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/courses/${id}`)
            console.log("getCourseApi",data)
            dispatch(setCourse(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addCourse = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/courses/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили курс')
            }
        } catch (e) {
            alert(e)
        }
    }
}

