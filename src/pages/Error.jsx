import React from "react"
import "./Error.css"
import Hero from "../compounents/Hero"
class Error_4 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="E_i">
                    <img className="mt-5" src="https://image.flaticon.com/icons/png/512/564/564772.png" alt="error" />
                </div>
            </React.Fragment>
        )
    }
}
export default Error_4;