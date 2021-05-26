import React from "react"
import "./sign_up.css"

class Sign_up extends React.Component{
    render(){
        return(
            <React.Fragment> 
            <div className="Back">
                 <div className="sign_M">  
                     <div className="sign_f m-5">
                         <img src="https://image.flaticon.com/icons/png/512/4710/4710741.png" alt="logito" />
                         <form onSubmit={this.props.onSubmit}>
                             <div className="form-group mb-2">
                                 <label className="mb-1">
                                     Name
                                 </label>
                                 <input 
                                 type ="text"
                                 className="form-control"
                                 />
                             </div>

                             <div className="form-group mb-2">
                                 <label className="mb-1">
                                     Age
                                 </label>
                                 <input 
                                 type ="text"
                                 className="form-control"
                                 />
                             </div>
                             <div className="form-group mb-2">
                                 <label className="mb-1">
                                     City
                                 </label>
                                 <input 
                                 type ="text"
                                 className="form-control"
                                 />
                             </div>
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
                             </div>
                             <div className="form-group mb-2">
                                 <label className="mb-1">
                                     Rewrite password 
                                 </label>
                                 <input 
                                 type ="text"
                                 className="form-control"
                                 />
                                 <button type="submit" className="Submit__button">
                                     City
                                 </button>
                                 <a href="">Have a accounnt?</a>
                             </div>

                         </form>
                     </div>
                 </div>
             </div>
             

         </React.Fragment>  
        );
    }
}

export default Sign_up;