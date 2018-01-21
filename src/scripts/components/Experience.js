import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const achievements = this._renderachievements();
    return(
      <div className="Experience">
        <img className="Experience__logo" alt={`${this.props.company}`} src={require(`../../images/${this.props.logo}`)} />
        <div className="Experience__info">
          <h3 className="Experience__title">{this.props.title}</h3>
          <h4 className="Experience__company">{this.props.company}</h4>
          <h4 className="Experience__date">{`${this.props.startDate} - ${this.props.endDate}`}</h4>
          <ul className="Experience__achievements">
            {achievements}
          </ul>
        </div>
      </div>
    );
  }
  _renderachievements() {
    return this.props.achievements.map((ach) =>
      <li key={ach.id} className="Experience__achievement">{ach.description}</li>
    );
  }
}

export default Experience;
