import React from 'react'
import classes from "./signup.module.css"
import close from "../../../img/x.png"
import {links} from "../../../links/links"
import {Link} from "react-router-dom"

function Signup() {
    return (
        <div className={classes.content}>
            <div className={classes.block_inputs}>
                <header className={classes.head_close}>
                    <Link to={links.base}><img src={close} alt="close"/></Link>
                </header>
            </div>
            <div className={classes.inputs}>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="password"/>
                <input type="text" placeholder="Confirm password"/>
                <a href="../../../pages/UserPage/index.html"><span>зарегистрироваться</span></a>
            </div>
        </div>
    )
}

export default Signup
