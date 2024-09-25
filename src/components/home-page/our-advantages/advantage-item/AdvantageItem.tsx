// @ts-ignore
import styles from "./AdvantageItem.module.scss"



interface IAdvantageItemProps {
    id?: number
    title: string
    imgPath: string
}

export default function AdvantageItem ({title, imgPath}: IAdvantageItemProps) {

    return (
        <section className={styles.advantage_item}>
            <div className={styles.item__img_bg}>
                <img src={imgPath}/>
            </div>
            <h2>{title}</h2>
        </section>
    )
}