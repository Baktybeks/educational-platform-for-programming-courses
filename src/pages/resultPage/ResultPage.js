import React from 'react'
import classes from "./resultPage.module.css"
import {Link} from "react-router-dom"
import {links} from "../../links/links"

function ResultPage() {
    return (
        <div className={classes.form}>
            <div className={classes.container_form}>
                <div className={classes.header_form}>Результат</div>
                <div className={classes.result}>
                    <div className={classes.counter}><span className={classes.count}>100</span>%</div>
                    <div className={classes.progress}>
                    </div>
                </div>
                <Link className={classes.button} to={links.base}>
                    <span className={classes.text_btn}>Далее</span>
                </Link>
            </div>
        </div>
    )
}

export default ResultPage