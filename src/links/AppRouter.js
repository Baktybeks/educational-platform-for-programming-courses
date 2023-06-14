import {Routes, Route} from "react-router-dom"
import React from 'react'
import {authRoutes, publicRoutes} from "./routes"
import {useSelector} from "react-redux"

function AppRouter() {
    const {isAuth} = useSelector(state => state.userReducer)
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
        </Routes>
    )
}

export default AppRouter