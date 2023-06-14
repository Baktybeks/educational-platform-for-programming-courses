import React from 'react'
import {useNavigate} from "react-router-dom"
import classes from "./сourse.module.css"
import people from "../../img/people.png"

function Course({course}) {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(`/courses/${course.id}/`)
    }

    return (
        <div className={classes.child}>
            <span className={classes.child_name}>{course.titleCourse}</span>
            <div className={classes.info_child}>
                <span className={classes.time_curs}>{course.time} часа</span>
                <span className={classes.num_people}>
                                <img src={people} alt="people"/>
                                <span className="num">{course.people}</span></span>
            </div>
            <div className={classes.button_child} onClick={clickHandler}>
                <span className={classes.text_btn_child}>Оплатить</span>
            </div>
        </div>
    )
}

export default Course