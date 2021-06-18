import React from "react"
import Hero from "../../compounents/Hero"
import Footer from "../../compounents/Footer"
import Button from "../../compounents/Main_butt"
import "./Main.css"

const Main = props => {
    return(
        <React.Fragment>
            <div className="Main">
                <div className="Main__content">
                    <h1 className="Main__title">{props.title || "Welcome"}</h1>
                    <Button contentText={"Login"} theme={"Button"} Link={"/new"}></Button>
                </div>
                <Hero h={"85vh"}></Hero>
            </div>
            <Footer s={{bottom:0}}> </Footer>
        </React.Fragment>
    );
}

export default Main 