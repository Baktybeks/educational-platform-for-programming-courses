import React from 'react'
import spark from "../../img/spark.jpg"
import classes from "./spark.module.css"

function Spark() {
    return (
        <section className={`${classes.spark} wrapper container`}>
            <div className={classes.spark_img}>
                <img src={spark} alt="img"/>
            </div>
            <div className={classes.spark_info}>
                <h2 className={classes.spark_head}>Искра перемен в вашей карьере</h2>
                <p className={classes.text_info_spark}>
                    Выпускники <span className={classes.name_comp}>Hack Reactoring Coding Learn</span>, работающие в
                    самых
                    разных компаниях из разных<br/> отраслей, трансформируют технологии изнутри.
                </p>
                <ul className={classes.text_list_info}>
                    <li>Выпускник, готовый к работе, с востребованными техническими навыками</li>
                    <li><span className={classes.prots}>100%</span> онлайн-курсы по программированию с живым обучением
                    </li>
                    <li>Прошлые выпускники работают более чем в <span className={classes.num}>2500</span> компаниях</li>
                    <li>Более <span className={classes.num}>12 000</span> сильных выпускников</li>
                </ul>
            </div>
        </section>
    )
}

export default Spark