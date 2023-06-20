import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import courseReducer from './slices/courseSlice'
import reviewReducer from './slices/reviewSlice'



export const store = configureStore({
    reducer: {
        userReducer,
        courseReducer,
        reviewReducer,
    }
})