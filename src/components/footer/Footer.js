import React from 'react'
import classes from "./footer.module.css"
import wath from "../../img/wath.svg"
import insta from "../../img/insta.svg"
import fase from "../../img/fase.svg"
import icon_phone from "../../img/icon-phone.svg"

function Footer(props) {
    return (
        <footer className={classes.footer}>
            <div className={classes.container_footer}>
                <div className={classes.adresse}>
                    <address>ООО «Хекслет Рус», 720060, г. Бишкек, пр-т Нариманова, дом 1Г, оф. 23</address>
                    <div className={classes.tel_one}>
                        <img src={icon_phone} alt="phone"/>
                            <a href="tel:88001002247">+(996) 705 85 28 39</a>
                    </div>
                    <div className={classes.tel_two}>
                        <img src={icon_phone} alt="phone"/>
                            <a href="tel:74950852838">+(996) 705 85 28 38</a>
                    </div>
                </div>
                <div className={classes.seti}>
                    <img src="" alt=""/>
                    <a href="/#"><img src={wath} alt="icon"/></a>
                    <a href="/#"><img src={insta} alt="icon"/></a>
                    <a href="/#"><img src={fase} alt="icon"/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer