import React, {useState} from 'react'
import classes from "./login.module.css"
import {Link} from "react-router-dom"
import {links} from "../../../links/links"
import close from "../../../img/x.png"
import {useDispatch} from "react-redux"
import {loginApi} from "../../../axios/usersApi"

function Login() {

    const dispatch = useDispatch()

    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')


    const isLoginFormValid = () => loginUsername && loginPassword

    const submitLoginHandler = (e) => {
        e.preventDefault()
        if (isLoginFormValid()) {
            dispatch(loginApi(loginUsername, loginPassword))
        } else {
            alert('Введите все данные')
        }
    }

    return (
        <div className={classes.content}>
            <div className={classes.block_inputs}>
                <header className={classes.head_close}>
                    <Link to={links.base}><img src={close} alt="close"/></Link>
                </header>
            </div>

            <form onSubmit={submitLoginHandler} className={classes.inputs}>
                    <h1 className={classes.go}>Вход</h1>
                    <input
                        type="text"
                        name="email"
                        value={loginUsername}
                        onChange={e => setLoginUsername(e.target.value)}
                        placeholder="email"/>
                    <input type="text"
                           name="password"
                           value={loginPassword}
                           onChange={e => setLoginPassword(e.target.value)}
                           placeholder="password"/>
                    <Link to={links.base}>войти</Link>
            </form>

        </div>
    )
}

export default Login