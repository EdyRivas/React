import React from "react"
import {Link} from "react-router-dom"
import "./Style/Header.css"

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="Header">
                    <Link to="/">
                        <img src="https://proyecta.utch.edu.mx/public/images/utch-b.png" alt="Logo" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
} 
export default Header;