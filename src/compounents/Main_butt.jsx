import React from "react"
import { Link } from 'react-router-dom';
import "./Style/Main_butt.css"

const Button = props =>{
    return(
        <React.Fragment>
            <Link className={props.theme} to={props.Link}>
                <p>{props.contentText}</p>
            </Link>
        </React.Fragment>
    )
}
export default Button