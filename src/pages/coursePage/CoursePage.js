import React, {useEffect} from 'react'
import {Link, useParams} from "react-router-dom"
import classes from "./coursePage.module.css"
import {links} from "../../links/links"
import spark from "../../img/spark.jpg"
import {useDispatch, useSelector} from "react-redux"
import {getCourseApi} from "../../axios/coursesApi"

function CoursePage() {

    const dispatch = useDispatch()

    const {id} = useParams()

    const {course} = useSelector(state => state.courseReducer)

    console.log("setCourse",course)

    useEffect(() => {
        dispatch(getCourseApi(id))
    }, [dispatch, id])

    return (
        <section className={`${classes.kurs} container`}>
            <div className={classes.block_head}>
                <div className={classes.block_info}>
                    <h1 className={classes.logo_head}>Изучи <span className={classes.text_curs}>{course.titleCourse}</span></h1>
                    <p className={classes.text_info}>
                        {course.description}
                    </p>
                </div>
                <div className={classes.block_img}>
                    <img src={process.env.REACT_APP_API_URL + course.img} alt="logo"/>
                </div>
            </div>
            <div className={classes.spark}>
                <div className={classes.spark_img}>
                    <img src={spark} alt="img"/>
                </div>
                <div className={classes.spark_info}>
                    <h2 className={classes.spark_head}>Начало</h2>
                    <p className={classes.text_info_spark}>
                        {course.description2}
                    </p>
                    <Link className={classes.button} to={links.test}>
                        <span className={classes.text_btn}>Далее</span>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default CoursePage