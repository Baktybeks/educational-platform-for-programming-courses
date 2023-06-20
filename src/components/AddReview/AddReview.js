import React, {useState} from 'react'
import classes from "./AddReview.module.css"
import {useDispatch} from "react-redux"
import {addReviewApi} from "../../axios/reviewApi"

function AddReview() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const isFormValid = () => name && description

    const submitHandler = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('description', description)
        dispatch(addReviewApi(formData))
    }

    return (
        <div className={classes.container_content}>
            <section className={classes.container_form_internships}>
                <div className={classes.head_form}>
                    <h2>
                        Добавление отзыва
                    </h2>
                </div>
                <form
                    onSubmit={submitHandler}
                    className={classes.one_block}>
                    <div className={classes.one_block_inputs}>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Автор"/>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="отзыв"/>
                    </div>
                    <button
                        className={classes.btn_send}
                        type="submit">
                        <span>Отправить</span>
                    </button>
                </form>
            </section>
        </div>
    )
}

export default AddReview