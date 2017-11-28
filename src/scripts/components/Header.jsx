import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <header className="Header">
        <button className="Header__button" id="nav-icon3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="Header__links">
          <ul>
            <li className="Header__link-container">
              <Link to='/'>Home</Link>
            </li>
            <li className="Header__link-container">
              <Link to='/projects'>Projects</Link>
            </li>
            <li className="Header__link-container">
              <Link to='/resume'>Resume</Link>
            </li>
            <li className="Header__link-container">
              <div onClick={() => {this._renderModal()}}>Contact Me</div>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  _renderModal() {
    this.props.toggleModal();
  }
}

export default Header;
