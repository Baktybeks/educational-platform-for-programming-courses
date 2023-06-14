import React, {useState} from 'react'
import classes from "./addingCourses.module.css"
import {addCourse} from "../../axios/coursesApi"
import {useDispatch} from "react-redux"

const textRegExp = /^.{2,500}$/
const timeRegExp = /^.{1,500}$/

function AddingCourses() {
    const dispatch = useDispatch()

    const [image, setImage] = useState('')
    const [titleCourse, setTitleCourse] = useState('')
    const [description, setDescription] = useState('')
    const [description2, setDescription2] = useState('')
    const [time, setTime] = useState('')
    const [people, setPeople] = useState('')

    const reset = () => {
        setImage('')
        setTitleCourse('')
        setDescription('')
        setDescription2('')
        setTime('')
        setPeople('')
    }


    const submitAddCourses = async (e) => {
        e.preventDefault()
        if (!textRegExp.test(titleCourse)) {
            return alert("Название курса должен содержать не менее 2 символов")
        }
        if (!textRegExp.test(description)) {
            return alert("Описание курса должен содержать не менее 2 символов")
        }
        if (!textRegExp.test(description2)) {
            return alert("Ваш описание должен содержать не менее 2 символов")
        }
        if (!timeRegExp.test(time)) {
            return alert("Время прохождения курса должен содержать не менее 1 часа")
        }
        if (!timeRegExp.test(people)) {
            return alert("Количество людей курса должен содержать не менее 1")
        }
        if (!image) {
            return alert("добавьте фотографию")
        }
        const formData = new FormData()
        formData.append('titleCourse', titleCourse)
        formData.append('description', description)
        formData.append('description2', description2)
        formData.append('time', time)
        formData.append('people', people)
        formData.append('img', image)
        dispatch(addCourse(formData))
    }

    return (
        <section className={classes.adding_courses}>
            <div>
                <form className={classes.cont_dob_curs} onSubmit={submitAddCourses}>
                    <label htmlFor="dob-cr" className={classes.lab}>Добавление курсов</label>
                    <input
                        id="dob-cr"
                        className={classes.text}
                        type="text"
                        name="addCourse"
                        placeholder="Название курса"
                        value={titleCourse}
                        onChange={e => setTitleCourse(e.target.value)}
                    />
                    <label htmlFor="dob-des" className={classes.lab}>Добавление описания 1</label>
                    <input
                        id="dob-des"
                        className={classes.text}
                        type="text"
                        name="addDescription"
                        placeholder="Описание курса"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <label htmlFor="dob-des2" className={classes.lab}>Добавление описания 2</label>
                    <input
                        id="dob-des2"
                        className={classes.text}
                        type="text"
                        name="addDescription2"
                        placeholder="Описание курса2"
                        value={description2}
                        onChange={e => setDescription2(e.target.value)}
                    />
                    <label htmlFor="dob-time" className={classes.lab}>Добавление времи прохождения</label>
                    <input
                        id="dob-time"
                        className={classes.text}
                        type="number"
                        name="time"
                        placeholder="Время курса"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
                    <label htmlFor="people" className={classes.lab}>Добавление времи прохождения</label>
                    <input
                        id="people"
                        className={classes.text}
                        type="number"
                        name="people"
                        placeholder="Количесество людей"
                        value={people}
                        onChange={e => setPeople(e.target.value)}
                    />
                    <label htmlFor="img">{!image ? "Добавить фото" : "Фото добавлено"}</label>
                    <input
                        type="file"
                        name="photo"
                        id="img"
                        accept="/image/*, .png, .jpg, .gif, .web"
                        onChange={e => setImage(e.target.files[0])}
                    />
                    <div className={classes.btns}>
                        <button className={classes.btn_dob_curs}
                                onClick={reset}
                        >
                            Сбросить
                        </button>
                        <button className={classes.btn_dob_curs}
                                type="submit"
                        >
                            Загрузить
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default AddingCourses