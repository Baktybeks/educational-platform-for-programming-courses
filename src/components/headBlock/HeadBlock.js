import React from 'react'
import classes from "./headBlock.module.css"
import header_logo from "../../img/header-logo.jpg"

function HeadBlock() {
    return (
        <div className={classes.block_head}>
            <div className={classes.block_info}>
                <h1 className={classes.logo_head}>Изучи <span className={classes.text_curs}>Java</span></h1>
                <p className={classes.text_info}>
                    Самый быстрый способ попробовать программирование прямо в браузере. Бесплатные курсы с
                    тренажером. Практика после каждого урока
                </p>
                <a href="../pageKurs/index.html" className={classes.button}>
                    <span className={classes.text_btn}>Попробовать</span>
                </a>
            </div>
            <div className={classes.block_img}>
                <img src={header_logo} alt="logo"/>
            </div>
        </div>
    )
}

export default HeadBlock