import React from "react"
import HeroImage from "../images/Hero_img.jpg"
import "./Style/Hero.css"

const Hero = props =>{
    return (
        <React.Fragment>
            <div className="Hero">
                <div className="Hero__color" style={{height: props.h}}></div>
                <div className="Hero__img" style={{height: props.h}}>
                    <img src={HeroImage} alt="hero_image" />
                </div>
            </div>

        </React.Fragment>
    )
}
export default Hero
