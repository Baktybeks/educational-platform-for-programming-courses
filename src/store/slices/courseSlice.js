import {createSlice} from "@reduxjs/toolkit"

const courseSlice = createSlice({
    name: 'courseSlice',
    initialState: {
        courses: [],
        course: {},
    },
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload
        },
        setCourse: (state, action) => {
            state.course = action.payload
        }
    }
})

export const {
    setCourses,
    setCourse

} = courseSlice.actions

export default courseSlice.reducer