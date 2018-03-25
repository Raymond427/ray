import React, { Component } from 'react';
import { openModal } from '../actions/modalActions'
import { openMenu, closeMenu } from '../actions/menuActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import '../../styles/Menu.css';

class Menu extends Component {
  render() {
    return(
      <header className="Menu">
        <button
          aria-label="Toggle Menu"
          className={this.determineClassName()}
          id="Menu__open"
          onClick={this.props.menuOpen ? this.props.closeMenu : this.props.openMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className="Menu__nav">
          <ul className="Menu__links">
            <li className="Menu__link-container">
              <Link to='/' onClick={this.props.closeMenu}>Home</Link>
            </li>
            <li className="Menu__link-container">
              <Link to='/projects' onClick={this.props.closeMenu}>Projects</Link>
            </li>
            <li className="Menu__link-container">
              <Link to='/resume' onClick={this.props.closeMenu}>Resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

  determineClassName() {
    return this.props.menuOpen ? "Menu__button open" : "Menu__button"
  }
}

const mapStateToProps = state => {
  return { showModal: state.modalReducer.modalOpen, menuOpen: state.menuReducer.menuOpen }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(openModal),
    openMenu: () => dispatch(openMenu),
    closeMenu: () => dispatch(closeMenu)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu))
