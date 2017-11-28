import React, { Component } from 'react';
import Tool from '../Tool';
import toolData from '../../../data/tools.json';
import { Link } from 'react-router-dom';

class SoftwareEngineer extends Component {
  render() {
    const tools = this._renderTools();
    return(
      <div className="SoftwareEngineer">
        <div className="SoftwareEngineer__shade">
          <div className="SoftwareEngineer__container">
            <h2>Software Engineer</h2>
            <p>I'm a full stack software engineer that has worked for
            Hewlett Packard in Oregon and Carbon Five in San Francisco.</p>
            <Link to='/projects'><button className="SoftwareEngineer__project-button">check out my projects</button></Link>
            {tools}
          </div>
        </div>
      </div>
    );
  }

  _renderTools() {
    return toolData.map((tool) =>
            <Tool key={tool.id} img={tool.img} name={tool.name}/>
          );
  }
}

export default SoftwareEngineer;
