/**
 * The App
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

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
