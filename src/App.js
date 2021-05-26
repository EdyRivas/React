import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/layout/Layout.jsx"
import Login from "./pages/login/login"
import Main from "./pages/main/Main.jsx" 
import NewBadge from "./pages/NewBadge/NewBadge"  

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/log" component={Login}></Route>
        </Switch>
      </Layout>      
    </BrowserRouter>
  );
}
export default App;


 