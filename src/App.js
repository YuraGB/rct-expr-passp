import React from 'react';

import Layout from "./hoc/Layout/Layout";
import AuthFormComponent from "./components/Auth/AuthFormComponent";

function App() {
  return (
      <Layout>
          <AuthFormComponent/>
      </Layout>
  );
}

export default App;
