import React from "react"
import "./Style/Footer.css"

const Footer = (props) =>{
    return(
        <React.Fragment>
            <div className="Footer" style={props.s}>
                <p> Example made reactjs @TIDBIS51M</p>
            </div>
        </React.Fragment>
    );
}
export default Footer;