// @ts-ignore
import styles from "./pro-assist-list.module.scss";
import { IProAssistItemProps, ProAssistItem } from "./pro-assist-item/ProAssistItem";

export interface IProAssistListProps {
    items: Array<IProAssistItemProps>
}

export default function ProAssistList ({items}: IProAssistListProps) {
    
    return (
        <ul>
           {items.map(({imgPath, title, body}) => 
                <li>
                    <ProAssistItem key={title} imgPath={imgPath} title={title} body={body} />
                </li>
            )}
        </ul>
    )
}