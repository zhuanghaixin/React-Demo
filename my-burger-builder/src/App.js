import React from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
function App() {
  return (
    <div>
    <Layout>
      <p>Test</p>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
    </div>
  );
}

export default App;
