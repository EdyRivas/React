import React from 'react';
import Layout from "./pages/layout/Layout.jsx"
import Main from "./pages/main/Main.jsx" 
import Badge from "./compounents/Badge"

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Main title={"Welcome"}></Main>
      </Layout>
      <Badge 
        Header_p={"https://fondosmil.com/fondo/50457.jpg"}
        picture={"https://pm1.narvii.com/7678/43da254e801715662b2379bd2ed14b61d7429051r1-736-732v2_00.jpg"}
        name={"Tyra Orlson"}
        age={"25"}
        city={"Bergen Norway"}
        followers={"777k"}
        likes={"77k"}
        post={"7k"}
      ></Badge>
    </React.Fragment>
  );
}

export default App;
 