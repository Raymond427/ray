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
        <Hobby className="Entrepreneur" hobby={hobbyData[0]}/>
        <SoftwareEngineer/>
        <Hobby className="Community-volunteer" hobby={hobbyData[1]}/>
        <Scholar/>
      </div>
    );
  }
}

export default Home;
