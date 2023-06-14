import React from 'react'
import classes from "./userPage.module.css"
import logo from "../../img/header-logo.jpg"
import people from "../../img/people.png"
import {Link} from "react-router-dom"
import {links} from "../../links/links"

function UserPage() {
    return (
        <div className="wrapper container">
            <div className={classes.block_head}>
                <div className={classes.block_info}>
                    <h1 className={classes.logo_head}>Изучи <span className={classes.text_curs}>Java</span></h1>
                    <p className={classes.text_info}>
                        Самый быстрый способ попробовать программирование прямо в браузере. Бесплатные курсы с
                        тренажером. Практика после каждого урока
                    </p>
                </div>
                <div className={classes.block_img}>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            <section className={classes.curses}>
                <header className={classes.head_curs}>
                    <h2 className={classes.head_name}>Ваши Курсы</h2>
                </header>
                <div className={classes.libraei_curses}>
                    <ul className={classes.libraei_curses}>
                        <li className={classes.child}>
                            <span className={classes.child_name}>JavaScript</span>
                            <div className={classes.info_child}>
                                <span className={classes.time_curs}>23 часа</span>
                                <span className={classes.num_people}>
                                    <img src={people} alt="people"/> 1</span>
                            </div>

                            <div>
                                <Link className={classes.button_child} to={links.test}>
                                    <span className={classes.text_btn_child}>Перейти</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default UserPage