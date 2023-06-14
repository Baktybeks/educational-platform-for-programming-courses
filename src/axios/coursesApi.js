import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {setCourse, setCourses} from "../store/slices/courseSlice"

export const getCoursesApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/courses/`)
            dispatch(setCourses(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const getCourseApi = (id) => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/courses/${id}`)
            console.log("datalog",data)
            dispatch(setCourse(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

