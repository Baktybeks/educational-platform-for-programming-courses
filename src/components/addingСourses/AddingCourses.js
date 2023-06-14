import React from 'react'
import classes from "./addingCourses.module.css"

function AddingCourses() {
    return (
        <section className={classes.adding_courses}>
            <ul className={classes.adding}>
                <li>
                    <lable className={classes.lab} htmlFor="cat">Категории</lable>
                    <input id="cat" type="text"/>
                    <button>Добавить</button>
                </li>
                <li>
                    <lable className={classes.lab} htmlFor="cod">О Code Learn</lable>
                    <input id="cod" type="text"/>
                    <button>Добавить</button>
                </li>
                <li>
                    <lable className={classes.lab} htmlFor="lan">Язык</lable>
                    <input id="lan" type="text"/>
                    <button>Добавить</button>
                </li>
            </ul>
            <div>
                <div className={classes.cont_dob_curs}>
                    <ul>
                        <li>
                            <label htmlFor="dob-cr">Добовление курсов</label>
                            <input id="dob-cr" type="text"/>
                        </li>
                        <li>
                            <label htmlFor="dob-time">Добовление времи прохождения</label>
                            <input id="dob-time" type="number"/>
                        </li>
                        <li>
                            <label htmlFor="dob-photo">Добавить фото</label>
                            <input id="dob-photo" type="file" name="photo" multiple accept="img/*"/>
                        </li>
                    </ul>
                    <button className={classes.btn_dob_curs}>Загрузить</button>
                </div>
            </div>
        </section>
    )
}

export default AddingCourses