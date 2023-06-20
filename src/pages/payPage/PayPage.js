import React, {useState} from 'react'
import classes from "./PayPage.module.css"
import {links} from "../../links/links"
import close from "../../img/x.png"
import {Link, useNavigate, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {addPayApi} from "../../axios/payApi"

function PayPage() {

    const {id} = useParams()
    console.log(id)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [phone, setPhone] = useState('')
    const [personalAccount, setPersonalAccount] = useState('')
    const [price, setPrice] = useState('')
    const {user} = useSelector(state => state.userReducer)
    console.log(user)

    const isFormValid = () => phone && personalAccount && price

    const submitHandler = (e) => {
        e.preventDefault()
        if (!isFormValid()) {
            return alert("Введите все данные")
        }
        const formData = new FormData()
        formData.append('phone', phone)
        formData.append('personal_account', personalAccount)
        formData.append('price', price)
        formData.append('userId', user.id)
        formData.append('courseId', id)
        dispatch(addPayApi(formData))
        navigate(`/courses/${id}/`)
    }


    return (
        <div className={classes.container_modal}>
            <div className={classes.block_head}>
                <h2 className={classes.head_modal}>Оплата</h2>
                <Link to={links.base}><img src={close} alt="close"/></Link>

            </div>
            <form
                onSubmit={submitHandler}
                className={classes.one_block}>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+996 (___) ___-__-__ *"/>
                <input
                    type="number"
                    name="personalAccount"
                    value={personalAccount}
                    onChange={e => setPersonalAccount(e.target.value)}
                    placeholder="Лицевой счет"/>
                <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={e => setPrice(e.target.value)}
                    placeholder="Sum"/>
                <button
                    className={classes.modal_btn}
                    type="submit">
                    <span>Подтвердить</span>
                </button>
            </form>

        </div>
    )
}

export default PayPage