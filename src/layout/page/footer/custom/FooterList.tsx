import { FunctionComponent } from "react";
import "./FooterList.scss";

interface IFooterList {
    items: string;
}

export const FooterList: FunctionComponent<IFooterList> = (props) => {
    return (
        <div className="footer-list-item">
            {props.items}
        </div>
    )
}