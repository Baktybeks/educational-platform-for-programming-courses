import {$api, } from "./index"
import {setError} from "../store/slices/errorSlice"
import {setReview} from "../store/slices/reviewSlice"

export const getReviewApi = () => {
    return async (dispatch) => {
        try {
            const {data} = await $api.get(`api/review/`)
            dispatch(setReview(data))
        } catch (e) {
            dispatch(setError(e.message))
        }
    }
}

export const addReviewApi = (formData) => {
    return async (dispatch) => {
        try {
            const data = await $api.post('api/review/', formData)
            if (data.status === 200) {
                alert('Вы успешно добавили отзыв')
            }
        } catch (e) {
            alert(e)
        }
    }
}

