import React, { Component } from 'react';
import Home from './homepage/Home';
import Hobby from './homepage/Hobby';
import hobbyData from '../../data/hobbies.json';
import SoftwareEngineer from './homepage/SoftwareEngineer';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Hobby hobby={hobbyData[0]}/>
        <SoftwareEngineer/>
        <Hobby hobby={hobbyData[1]}/>
      </div>
    );
  }
}

export default App;
