import React from 'react'
import classes from "./сourses.module.css"
import {useSelector} from "react-redux"
import Course from "../../components/course/Course"

function Courses() {

    const {courses} = useSelector(state => state.courseReducer)

    return (
        <section className={`${classes.courses} wrapper container`}>
            <header className={classes.head_curs}>
                <h2 className={classes.head_name}>Курсы</h2>
            </header>
            <div className={classes.library_courses}>
                <ul className={classes.library_courses}>
                    {
                        courses.map(course => <Course key={course.id} course={course}/>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default Courses