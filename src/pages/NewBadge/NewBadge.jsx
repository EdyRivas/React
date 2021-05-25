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
            name: "",
            age: "",
            city: "",
            followers: "",
            likes: "",
            post: ""
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
                            name ={this.state.form.name || "Tyra Orlson"}
                            age= {this.state.form.age || "25"}
                            city ={this.state.form.city || "Bergen Norway"}
                            followers ={this.state.form.followers || "0"}
                            likes ={this.state.form.likes || "0"}
                            post ={this.state.form.post || "0"}


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