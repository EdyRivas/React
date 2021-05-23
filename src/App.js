import React from 'react';
import Layout from "./pages/layout/Layout.jsx"
import Main from "./pages/main/Main.jsx" 

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Main>title={"Welcome"}</Main>
      </Layout>
    </React.Fragment>
  );
}

export default App;
 