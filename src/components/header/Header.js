import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "../../links/links"
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {getCoursesApi} from "../../axios/coursesApi"

function Header() {
    const dispatch = useDispatch()

    const {courses} = useSelector(state => state.courseReducer)

    useEffect(() => {
        dispatch(getCoursesApi())
    }, [dispatch])

    return (
                <header className={classes.head}>
                    <nav className={classes.menu}>
                        <a href="/"><h1>Главная</h1></a>
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
                        <ul className={classes.registr}>
                            <li className={`${classes.regis_link} ${classes.sing_in}`}>
                                <Link to={links.login}>Вход</Link>
                            </li>
                            <li className={classes.regis_link}>
                                <Link to={links.signup}>Регистрация</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
    )
}

export default Header