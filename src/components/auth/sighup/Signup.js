import React, {useState} from 'react'
import classes from "./signup.module.css"
import close from "../../../img/x.png"
import {links} from "../../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {register} from "../../../axios/usersApi"

const passwordRegExp = /^.{5,40}$/
const userRegExp = /^.{3,50}$/

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const submitRegHandler = async (e) => {
        e.preventDefault()
        if (!userRegExp.test(username)) {
            return alert("Ваш Username должен содержать не менее 3 символов")
        }
        if (!userRegExp.test(email)) {
            return alert("Ваш Nickname должен содержать не менее 3 символов")
        }
        if (!passwordRegExp.test(password)) {
            return alert("Ваш пароль должен содержать не менее 5 символов")
        }

        dispatch(register(email, password, username))
        navigate(links.base)
        setUsername('')
        setPassword('')
        setEmail('')
    }


    return (
        <div className={classes.content}>
            <div className={classes.block_inputs}>
                <header className={classes.head_close}>
                    <Link to={links.base}><img src={close} alt="close"/></Link>
                </header>
            </div>
            <form
                className={classes.inputs}
                onSubmit={submitRegHandler}
            >
                <input
                    className={classes.text}
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    className={classes.text}
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    className={classes.text}
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Signup
