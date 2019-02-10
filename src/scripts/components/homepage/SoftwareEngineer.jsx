import React, { Component } from 'react';
import Tool from '../Tool';
import toolData from '../../../data/tools.json';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import '../../../styles/SoftwareEngineer.css';
import '../../../styles/Home.css';

class SoftwareEngineer extends Component {
  render() {
    const tools = this._renderTools();
    return(
      <div className="SoftwareEngineer Home-section" style={{backgroundImage: `url(${require(`../../../images/softwareEngineer.jpeg`)})`}}>
        <div className="SoftwareEngineer__shade Home-overlay">
          <div className="SoftwareEngineer__container Home-content">
            <h2>Software Engineer</h2>
            <h4>I'm a full stack software engineer that has worked for
            Hewlett Packard in Oregon and Carbon Five in San Francisco.</h4>
            <Link to='/projects' tabIndex='-1'><button className="SoftwareEngineer__project-button"
            onClick={() => ReactGA.event({
              category: 'Homepage',
              action: `Clicked Software Engineering Projects Button`
            })}
            >check out my projects</button></Link>
            <div className="Tools">
              {tools}
            </div>
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
