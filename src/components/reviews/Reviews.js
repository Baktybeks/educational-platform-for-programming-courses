import React from 'react'
import classes from "./reviews.module.css"
import one_person from "../../img/one-person.png"
import two_person from "../../img/two-person.png"
import three_person from "../../img/three-person.png"

function Reviews() {
    return (
        <section className={`wrapper container`}>
            <div className={classes.head_reviews}>
                <h2>Отзывы</h2>
            </div>
            <form className={classes.form} action="#">
                <div className={classes.container_form}>
                    <label htmlFor="name">
                        <span className={classes.form_name}>Напишите свое ФИО</span>
                    </label>
                    <input className={classes.name_inp} type="text" id="name" placeholder="name"/>
                    <div className={classes.arrow_curs}>Курсы
                        <ul className={classes.curs_comment}>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>C#</li>
                        </ul>
                    </div>
                    <input type="file" name="photo" multiple accept="../img"/>
                    <div>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                    <div className={classes.container_comment}>
                        <textarea className={classes.comment} rows="5" cols="55" name="text"></textarea>
                        <input type="submit" className={classes.btn} value="Отправить"/>
                    </div>
                </div>
            </form>
            <div className={classes.reviews_people}>
                <ul className={classes.container_people}>
                    <li>
                        <div className={classes.img_reviews}>
                            <img src={one_person} alt="person"/>
                        </div>
                        <div className={classes.text_reviews}>
                            <h2 className={classes.name_reviews}>Александр Авдошкин</h2>
                            <div className={classes.curs_reviews}>Курс HTML</div>
                            <p className={classes.comment_reviews}>
                                "Если бы не коронавирус, выполнил бы всё в заход (в смысле каждый день по несколько
                                пунктов в теме). Изучаю с нуля, ваш портал очень ориентирован на новичков. Спасибо
                                вам большое!"
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={classes.text_reviews}>
                            <h2 className={classes.name_reviews}>Сергей Тюркин</h2>
                            <span className={classes.curs_reviews}>Курс JavaScript</span>
                            <p className={classes.comment_reviews}>
                                "Очень всё доступно даже для полного профана вроде меня. Эта вводная по JS вошла в
                                мой туговатый ум, складно как недостающий пазл. Всем кидаю линк на эту страничку."
                            </p>
                        </div>
                        <div className={classes.img_reviews}>
                            <img src={two_person} alt="person"/>
                        </div>
                    </li>
                    <li>
                        <div className={classes.img_reviews}>
                            <img src={three_person} alt="person"/>
                        </div>
                        <div className={classes.text_reviews}>
                            <h2 className={classes.name_reviews}>Элиях Клейман</h2>
                            <span className={classes.curs_reviews}>Курс JavaScript</span>
                            <p className={classes.coment_reviwes}>
                                "Для меня это первый курс для новичка. Понравилось тем, что вся информация
                                структурирована и дана по мере изучения материала в иерархичном порядке, что
                                значительно повышает и желание к обучению"
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Reviews