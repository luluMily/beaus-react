import React, { Component } from 'react';
import logo from './logo.svg';
import BeerContainer from './components/beer-container';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BeerContainer />
      </div>
    );
  }
}

export default App;
