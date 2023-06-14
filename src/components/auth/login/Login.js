import React, {useState} from 'react'
import classes from "./login.module.css"
import {Link, useNavigate} from "react-router-dom"
import {links} from "../../../links/links"
import close from "../../../img/x.png"
import {useDispatch} from "react-redux"
import {loginApi} from "../../../axios/usersApi"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')


    const isLoginFormValid = () => loginEmail && loginPassword

    const submitLoginHandler = (e) => {
        e.preventDefault()
        if (isLoginFormValid()) {
            dispatch(loginApi(loginEmail, loginPassword))
            navigate(links.base)
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
                    type="email"
                    name="email"
                    value={loginEmail}
                    placeholder="email"
                    onChange={e => setLoginEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={loginPassword}
                    placeholder="password"
                    onChange={e => setLoginPassword(e.target.value)}
                />
                <button type="submit">войти</button>
            </form>

        </div>
    )
}

export default Login