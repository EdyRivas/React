import React from "react"
import Hero from "../../compounents/Hero"
import "./login.css"

class Login extends React.Component{
    render(){
        return(
            <React.Fragment> 
                <div className="Login_M">  
                    <div className="Login_f m-5">
                        <img src="https://image.flaticon.com/icons/png/512/4710/4710741.png" alt="logito" />
                        <form onSubmit={this.props.onSubmit}>
                            <div className="form-group mb-2">
                                <label className="mb-1">
                                    Email
                                </label>
                                <input 
                                type ="text"
                                className="form-control"
                                />
                            </div>

                            <div className="form-group mb-2">
                                <label className="mb-1">
                                    Password
                                </label>
                                <input 
                                type ="text"
                                className="form-control"
                                />
                                <button type="submit" className="Submit__button">
                                    Login
                                </button>
                                <a href="">Forgot your pass?</a>
                            </div>

                            
                        </form>
                    </div>
                </div>
                

            </React.Fragment>
        );
    }
}

export default Login;