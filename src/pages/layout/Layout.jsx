 import React from "react" 
 import Header from "../../compounents/Header"
 import Footer from "../../compounents/Footer"
 import "./Layout.css"

 function Layout(props){
     return(
        <React.Fragment>
            <div className="Layout">
                <Header></Header>
                {props.children}
                <Footer></Footer>
            </div>
        </React.Fragment>
     );
 }

 export default Layout;