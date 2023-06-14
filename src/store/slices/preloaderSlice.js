import {createSlice} from "@reduxjs/toolkit"

const preloaderSlice = createSlice({
    name: 'preloaderSlice',
    initialState: {
        preloader: false,
        preloaderCard: false,
        preloaderFilter: false
    },
    reducers: {
        preloader: (state, action) => {
            state.preloader = action.payload
        },
        setPreloaderFilter: (state, action) => {
            state.preloaderFilter = action.payload
        },
        setPreloaderCard: (state, action) => {
            state.preloaderCard = action.payload
        }
    }
})

export const {preloader, setPreloaderFilter,setPreloaderCard} = preloaderSlice.actions

export default preloaderSlice.reducer