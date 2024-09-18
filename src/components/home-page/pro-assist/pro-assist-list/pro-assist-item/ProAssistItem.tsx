// @ts-ignore
import styles from "./pro-assist-item.module.scss";

export interface IProAssistItemProps {
    imgPath: string
    title: string
    body: string
}

export function ProAssistItem ({imgPath, title, body}: IProAssistItemProps) {

    return (
        <div className={styles.ProAssistItem__wrapper}>
                <div className={styles.ProAssistItem__img_bg}>
                    <img src={imgPath}/>
                </div>
                <div className={styles.ProAssistItem__text_container}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
        </div>
    )
}

