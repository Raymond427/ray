import React, { Component } from 'react';
import HomeWrapper from './HomeWrapper';
import NavBar from './NavBar';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <HomeWrapper/>
      </div>
    );
  }
}

export default App;
