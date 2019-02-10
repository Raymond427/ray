import React, { Component } from 'react';
import { Context } from './Provider';
import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

class Menu extends Component {
  render() {
    return(
      <header className="Menu">
        <Context.Consumer>
          {(context) => (
            <React.Fragment>
              <button
                aria-label="Toggle Menu"
                className={context.state.menuOpen ? "Menu__button open" : "Menu__button"}
                onClick={context.state.menuOpen ? context.closeMenu : context.openMenu}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <nav className="Menu__nav">
                <ul className="Menu__links">
                  <li className="Menu__link-container">
                    <Link to='/' tabIndex={context.state.menuOpen ? '0' : '-1'} onClick={context.closeMenu}>Home</Link>
                  </li>
                  <li className="Menu__link-container">
                    <Link to='/projects' tabIndex={context.state.menuOpen ? '0' : '-1'} onClick={context.closeMenu}>Projects</Link>
                  </li>
                  <li className="Menu__link-container">
                    <Link to='/resume' tabIndex={context.state.menuOpen ? '0' : '-1'} onClick={context.closeMenu}>Resume</Link>
                  </li>
                </ul>
              </nav>
            </React.Fragment>
          )}
        </Context.Consumer>
      </header>
    );
  }
}

export default Menu;
