// @ts-ignore
import styles from "./pro-assist.module.scss";
import ProAssistList from "./pro-assist-list/ProAssistList";
import { IProAssistItemProps } from "./pro-assist-list/pro-assist-item/ProAssistItem";



export default function ProAssist () {
    const arr: IProAssistItemProps[] = [
        {
            imgPath: "#",
            title: "asdasd",
            body: "asdasdasdasd"
        },
    ]

    return (
        <section className="ProAssist__wrapper">
            <div className="ProAssist__container">
                <h2>ProAssist is</h2>
                <ProAssistList
                    items={arr}
                />
            </div>
        </section>
    )
}