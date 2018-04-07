import React, { Component } from 'react';
import '../../styles/SkillLevel.css';

class SkillLevel extends Component {
  render() {
    return (
      <div className="SkillLevel">
        <p className="SkillLevel__name">{this.props.name}</p>
        <progress className="SkillLevel__bar" value={this.props.skillLevel} max="100">{`${this.props.skillLevel}%`}</progress>
      </div>
    );
  }
}

export default SkillLevel;
