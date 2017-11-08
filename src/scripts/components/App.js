import React, { Component } from 'react';
import Home from './homepage/Home';
import Entrepreneur from './homepage/Entrepreneur';
import SoftwareEngineer from './homepage/SoftwareEngineer';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Entrepreneur/>
        <SoftwareEngineer/>
      </div>
    );
  }
}

export default App;
