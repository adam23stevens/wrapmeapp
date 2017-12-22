import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import OutfitBuilder from './containers/OutfitBuilder/OutfitBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <OutfitBuilder/>
        </Layout>
      </div>
    );
  }
}

export default App;
