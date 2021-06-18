import React from "react"
import Badge from "./Badge"
import Hero from "./Hero"
import Footer from "./Footer"

const BadgeDetailsUI = props =>{
    const badge = props.badge
    return(
        <React.Fragment>
            <Hero h={"10vh"}></Hero>
            <div className="cotainer">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            Header_P = {badge.Header_P}
                            picture = {badge.picture}
                            name = {badge.name}
                            age = {badge.age}
                            city = {badge.city}
                            followers = {badge.followers}
                            likes= {badge.likes}
                            post= {badge.post}
                        ></Badge>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default BadgeDetailsUI