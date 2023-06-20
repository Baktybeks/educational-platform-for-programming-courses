import React, {useEffect} from 'react'
import classes from "./reviews.module.css"
import AddReview from "../AddReview/AddReview"
import {useDispatch, useSelector} from "react-redux"
import {getReviewApi} from "../../axios/reviewApi"

function Reviews() {
    const dispatch = useDispatch()

    const {courses} = useSelector(state => state.courseReducer)

    const {review} = useSelector(state => state.reviewReducer)


    useEffect(() => {
        dispatch(getReviewApi())
    }, [dispatch])

    return (
        <section className={`wrapper container`}>
            <div className={classes.head_reviews}>
                <h2>Отзывы</h2>
            </div>
            <AddReview/>
            <div className={classes.reviews_people}>
                <ul className={classes.container_people}>
                    {
                        review.map(item =>
                            <li>
                                <div className={classes.text_reviews}>
                                    <h2 className={classes.name_reviews}>{item.name}</h2>
                                    <p className={classes.comment_reviews}>{item.description}</p>
                                </div>
                            </li>
                        )
                    }

                </ul>
            </div>
        </section>
    )
}

export default Reviews