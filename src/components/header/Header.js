import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getCoursesApi} from "../../axios/coursesApi"
import {setIsAuth} from "../../store/slices/userSlice"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {courses} = useSelector(state => state.courseReducer)
    const {isAuth, user} = useSelector(state => state.userReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
    }
    const admin = () => {
        navigate(links.admin)
    }

    useEffect(() => {
        dispatch(getCoursesApi())
    }, [dispatch])

    return (
        <header className={classes.head}>
            <nav className={classes.menu}>
                <Link to={links.base}><h1>Главная</h1></Link>
                <ul className={classes.menu_link}>
                    <li className={classes.arrow}>Курсы
                        <ul className={classes.list_courses}>
                            {
                                courses.map(course =>
                                    <li className={classes.curs_arrow} key={course.id}>
                                        <Link to={links.courses + "/" + course.id}>{course.titleCourse}</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </li>
                    {/*<li className={classes.arrow}>Категории*/}
                    {/*    <ul className={classes.list_categories}>*/}
                    {/*        <li className={classes.curs_arrow}>Верстка</li>*/}
                    {/*        <li className={classes.curs_arrow}>Coding</li>*/}
                    {/*    </ul>*/}
                    {/*</li>*/}
                    <li className={classes.arrow}>О Code Learn
                        <ul className={classes.list_code}>
                            <li className={classes.curs_arrow}>Отзывы</li>
                            <li className={classes.curs_arrow}>Контакты</li>
                            <li className={classes.curs_arrow}>Вопросы</li>
                        </ul>
                    </li>
                </ul>
                {isAuth ?
                    <div className={classes.registr}>
                        {user.name}
                        <button onClick={logOut}>Выход</button>
                        {user.role === "ADMIN"
                            ?
                            <button onClick={admin}>Admin</button>
                            :
                            ''
                        }
                    </div>
                    :
                    <ul className={classes.registr}>
                        <li className={`${classes.regis_link} ${classes.sing_in}`}>
                            <Link to={links.login}>Вход</Link>
                        </li>
                        <li className={classes.regis_link}>
                            <Link to={links.signup}>Регистрация</Link>
                        </li>
                    </ul>
                }

            </nav>
        </header>
    )
}

export default Header