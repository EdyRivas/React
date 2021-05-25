import React from "react"
import "./NewBadge.css"
import Hero from "../../compounents/Hero"
import Badge from "../../compounents/Badge"

class NewBadge extends React.Component{
    state={
        loading : false,
        errors: null,
        form:{
            Header_p: "",
            picture: "",
            name: "Tyra Orlson",
            age: "25",
            city: "Bergen Norway",
            followers: "777k",
            likes: "77k",
            post: "7k"
        }
    }
    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge
                            Header_p = {this.state.form.Header_p || "https://fondosmil.com/fondo/50457.jpg"}
                            picture = {this.state.form.picture || "https://pm1.narvii.com/7678/43da254e801715662b2379bd2ed14b61d7429051r1-736-732v2_00.jpg"}

                        ></Badge>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default NewBadge;