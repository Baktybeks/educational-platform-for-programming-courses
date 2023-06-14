import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'userSlice',
    initialState: {
        user: {},
        isAuth: false,
    },
    reducers: {
        setUser: (state,action)=> {
            state.user = action.payload
        },
        setIsAuth: (state,action) => {
            state.isAuth = action.payload
        }
    }
})

export const {setUser,setIsAuth} = userSlice.actions

export default userSlice.reducer