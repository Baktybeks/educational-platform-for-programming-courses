import {links} from "./links"
import {Navigate} from "react-router-dom"

import MainPage from "../pages/mainPage/MainPage"
import AdminPage from "../pages/adminPage/AdminPage"
import UserPage from "../pages/UserPage/UserPage"
import TestPage from "../pages/testPage/TestPage"
import Signup from "../components/auth/sighup/Signup"
import Login from "../components/auth/login/Login"
import ResultPage from "../pages/resultPage/ResultPage"
import PayPage from "../pages/payPage/PayPage"
import CoursePage from "../pages/coursePage/CoursePage"

export const authRoutes = [
    {
        path: links.admin,
        element: <AdminPage/>
    },
    {
        path: links.test,
        element: <TestPage/>
    },
    {
        path: links.user,
        element: <UserPage/>
    },
    {
        path: links.result_page,
        element: <ResultPage/>
    },
    {
        path: links.pay,
        element: <PayPage/>
    },
]

export const publicRoutes = [
    {
        path: links.base,
        element: <MainPage/>
    },
    {
        path: links.signup,
        element: <Signup/>
    },
    {
        path: links.login,
        element: <Login/>
    },
    {
        path: links.courses + '/:id/',
        element: <CoursePage/>
    },
    {
        path: '*',
        element: <Navigate to='/'/>
    },
]