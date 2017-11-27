import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return(
      <div className="NavBar">
        <a className="NavBar__button" id="nav-icon3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </a>
        <nav className="NavBar__links">
          <ul>
            <li className="NavBar__link-container">
              <a className="NavBar__link">home</a>
            </li>
            <li className="NavBar__link-container">
              <a className="NavBar__link">project</a>
            </li>
            <li className="NavBar__link-container">
              <a className="NavBar__link">resume</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
