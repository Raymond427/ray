import React, { Component } from 'react';
import Project from './Project';
import projectData from '../../data/projects.json';

class Projects extends Component {
  render() {
    const projects = this._renderProjects();
    return(
      <div className="Projects">
        <h1>Projects</h1>
        <p>From apps to published research</p>
        <div className="project__wrapper">
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
