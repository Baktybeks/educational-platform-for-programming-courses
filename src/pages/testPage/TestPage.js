import React from 'react'
import classes from "./testPage.module.css"
import {links} from "../../links/links"
import {Link} from "react-router-dom"

function TestPage() {
    return (
        <div className="wrapper container">
            <header className={classes.header}>
                <div className={classes.logo}>
                    <h1 className={classes.text_logo}>Подтверждение ваших навыков</h1>
                    <div className={classes.line}></div>
                    <div className={classes.name_test}>
                        <h2>Тесты по JavaScript</h2>
                    </div>
                </div>
            </header>
            <div className={classes.form}>
                <ul className={classes.container_form}>
                    <div className={classes.header_form}>Что такое JavaScript ?</div>
                    <li>
                        <label htmlFor="1q">
                            <input className={classes.radio} type="radio" name="1" id="1q"/>
                            Стандартизированный язык гипертекстовой разметки.
                        </label>
                    </li>
                    <li>
                        <label htmlFor="2q">
                            <input className={classes.radio} type="radio" name="1" id="2q"/>
                            Язык программирования для веб-разработки.
                        </label>
                    </li>
                    <li>
                        <label htmlFor="3q">
                            <input className={classes.radio} type="radio" name="1" id="3q"/>
                            Другое
                        </label>
                    </li>
                </ul>
                <Link className={classes.button} to={links.result_page}>
                    <span className={classes.text_btn}>Далее</span>
                </Link>
            </div>
        </div>
    )
}

export default TestPage