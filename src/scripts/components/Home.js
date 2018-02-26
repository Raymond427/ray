import React, { Component } from 'react';
import Intro from './homepage/Intro';
import SoftwareEngineer from './homepage/SoftwareEngineer';
import Hobby from './homepage/Hobby';
import Scholar from './homepage/Scholar';
import hobbyData from '../../data/hobbies.json';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <Intro/>
        <SoftwareEngineer/>
        <Hobby className="Entrepreneur" hobby={hobbyData[0]}/>
        <Scholar/>
        <Hobby className="Community-volunteer" hobby={hobbyData[1]}/>
      </div>
    );
  }
}

export default Home;
