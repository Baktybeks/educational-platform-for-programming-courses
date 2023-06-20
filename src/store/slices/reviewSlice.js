import {createSlice} from "@reduxjs/toolkit"

const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState: {
        review: [],
        pay:[]
    },
    reducers: {
        setReview: (state, action) => {
            state.review = action.payload
        },
        setPay: (state, action) => {
            state.pay = action.payload
        },
    }
})

export const {
    setReview,setPay

} = reviewSlice.actions

export default reviewSlice.reducer