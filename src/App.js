import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import OutfitBuilder from './containers/OutfitBuilder/OutfitBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <OutfitBuilder></OutfitBuilder>
        </Layout>
      </div>
    );
  }
}

export default App;
