// @ts-ignore
import styles from "./OurAdvantages.module.scss";
import React from "react";
import AdvantageItem from "./advantage-item/AdvantageItem"


export default function OurAdvantages () {
    const items = [
        {
            id: 1,
            title: "Anywhere in the world",
            imgPath: "#"
        },
        {
            id: 2,
            title: "Availability 24/7",
            imgPath: "#"
        },
        {
            id: 3,
            title: "Quality service",
            imgPath: "#"
        }
    ]

    return (
        <section className={styles.OurAdvantages__wrapper}>
            <div className={styles.OurAdvantages__items__container}>
                {items.map(({id, title, imgPath}) => <AdvantageItem key={id} title={title} imgPath={imgPath}/>)}
            </div>
        </section>
    )
}