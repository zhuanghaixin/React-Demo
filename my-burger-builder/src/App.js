import React from 'react';
import Layout from './components/Layout/Layout'
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
