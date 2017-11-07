import React, { Component } from 'react';
import Home from './homepage/Home';
import Entrepreneur from './homepage/Entrepreneur';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Entrepreneur/>
      </div>
    );
  }
}

export default App;
