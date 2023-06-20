import React from 'react'
import HeadBlock from "../../components/headBlock/HeadBlock"
import Courses from "../coursesPage/Courses"
import Spark from "../../components/spark/Spark"
import Reviews from "../../components/reviews/Reviews"
import Answers from "../../components/answers/Answers"
import PayPage from "../payPage/PayPage"

function MainPage() {

    return (
        <div>
            <HeadBlock/>
            <Courses/>
            <Spark/>
            <Reviews/>
            <Answers/>
        </div>
    )
}

export default MainPage