import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/layout/Layout.jsx"
import Sing_up from './pages/Sign_up/sign_up';
import Login from "./pages/login/login"
import Main from "./pages/main/Main.jsx" 
import NewBadge from "./pages/NewBadge/NewBadge"  
import Error_4 from './pages/Error.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/log" component={Login}></Route>
          <Route exact path="/sign" component={Sing_up}></Route>
          <Route exact path="/nani" component={Error_4}></Route>
        </Switch>
      </Layout>      
    </BrowserRouter>
  );
}
export default App;


 