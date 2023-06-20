import React from 'react'
import classes from "./headBlock.module.css"
import header_logo from "../../img/header-logo.jpg"
import {Link} from "react-router-dom"
import {links} from "../../links/links"

function HeadBlock() {
    return (
        <div className={classes.block_head}>
            <div className={classes.block_info}>
                <h1 className={classes.logo_head}>Изучи <span className={classes.text_curs}>Java</span></h1>
                <p className={classes.text_info}>
                    Самый быстрый способ попробовать программирование прямо в браузере. Бесплатные курсы с
                    тренажером. Практика после каждого урока
                </p>
                <li className={classes.button}>
                    <Link to={links.test}>Попробовать</Link>
                </li>
            </div>
            <div className={classes.block_img}>
                <img src={header_logo} alt="logo"/>
            </div>
        </div>
    )
}

export default HeadBlock