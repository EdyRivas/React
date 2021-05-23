import React, {Component} from "react"
import HeaderBackground from '../images/Badge_header.jpg'
import ProfilePic from '../images/profile.jpg'
import "./Style/Badge.css"

class Badge extends Component{
    render(){
        return (
        <React.Fragment>
            <div className="Badge m-5">
                <div className="Badge__header">
                    <img src={HeaderBackground} alt="header_background"/>
                </div>
                <div className="container mt-5 mb-1 Badge__userInfo">
                    <div className="Badge__userImage">
                        <img src={this.props.picture} alt="Profile_picture" />
                    </div>
                    <h4 className="text-center"> Juan Velazques <i>24</i></h4>
                    <p className="text-center">Texas city</p>
                </div>
                <div className="Badge__info container pt-3">
                    <div className="row">
                        <div className="col">
                            <h4 className="text-center fw bold">77k</h4>
                            <p className="text-center">Followers</p>
                        </div>
                        <div className="col">
                            <h4 className="text-center fw bold">777k</h4>
                            <p className="text-center">Likes</p>
                        </div>
                        <div className="col">
                            <h4 className="text-center fw bold">7.7k</h4>
                            <p className="text-center">Pictures</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }
}
export default Badge;