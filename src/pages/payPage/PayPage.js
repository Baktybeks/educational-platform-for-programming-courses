import React from 'react'
import classes from "./PayPage.module.css"
import {links} from "../../links/links"
import close from "../../img/x.png"
import {Link} from "react-router-dom"

function PayPage() {
    return (
        <div className={classes.container_modal}>
            <div className={classes.block_head}>
                <h2 className={classes.head_modal}>Оплата</h2>
                <Link to={links.base}><img src={close} alt="close"/></Link>
            </div>
            <input type="text" placeholder="+996 (___) ___-__-__ *"/>
            <input type="text" placeholder="Card number"/>
            <input type="text" placeholder="Sum"/>
            <div className={classes.check}>
                <lable className={classes.sqare} htmlFor="sq">
                    <input type="checkbox" id="sq"/>
                </lable>
                <span
                    className={classes.sqare_text}>Нажимая на кнопку, я даю согласие на обработку персональных данных</span>
            </div>
            <div className={classes.modal_btn}>
                <Link className={classes.btn} to={links.user}> <span>Подтвердить</span> </Link>
            </div>
        </div>
    )
}

export default PayPage