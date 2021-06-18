import React from "react"
import {Link} from"react-router-dom"
import "./Style/skeletonitem.css"

class BadgesListItem extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="BadgesListItem mt-5">
                    <div className="col-5">
                        <div className="item__profilePic">
                            <img src={this.props.badge.picture} alt="Profile_picture" />
                        </div>
                        <div className="Item__background">
                            <img src={this.props.badge.Header_p} alt="profile_headere" />
                        </div>
                    </div>
                    <div className="col-7 my-5">
                        <div className="row">
                            <h4 className="text-center mt-3">
                                {this.props.badge.name} <i>{this.props.badge.age}</i>
                            </h4>
                            <p className="text-center">{this.props.badge.city}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class BadgesList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container List mb-5">
                    <div className="list-unstyled">
                        {this.props.badges.map((badge) => {
                            return(
                                <div key={badge._id}>
                                    <Link>
                                        <BadgesListItem badge={badge}></BadgesListItem>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgesList;