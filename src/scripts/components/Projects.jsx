import React, { Component } from 'react';
import Project from './Project';
import projectData from '../../data/projects.json';
import '../../styles/Home.css';
import '../../styles/Projects.css';

class Projects extends Component {
  render() {
    const projects = this._renderProjects();
    return(
      <div className="Projects Home-section">
        <h1 className="Projects__heading">Projects</h1>
        <p className="Projects__subheading">From apps to published research</p>
        <div className="Project__wrapper">
          {projects}
        </div>
      </div>
    );
  }

  _renderProjects() {
    return projectData.map((project) =>
      <Project
        key={project.id}
        name={project.name}
        type={project.type}
        description={project.description}
        img={project.img}
        codeURL={project.codeURL}
        siteURL={project.siteURL}
        color={project.color} />
    );
  }
}

export default Projects;
