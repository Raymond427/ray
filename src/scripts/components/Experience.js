import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const achievements = this._renderachievements();
    return(
      <div className="Experience">
        <img className="Experience__logo" alt={`${this.props.company}`} src={`${this.props.img}`} />
        <div className="Experience__info">
        <h3 className="Experience__title">{this.props.title}</h3>
        <p className="Experience__company">{this.props.company}</p>
        <p className="Experience__date">{`${this.props.startDate} - ${this.props.endDate}`}</p>
        <ul className="Experience__achievements">
          {achievements}
        </ul>
        </div>
      </div>
    );
  }
  _renderachievements() {
    return this.props.achievements.map((ach) =>
      <li key={ach.id} className="Experience__achievement">{ach}</li>
    );
  }
}

export default Experience;
