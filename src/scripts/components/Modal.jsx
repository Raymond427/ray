import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { Context } from './Provider';
import '../../styles/Modal.css';

class Modal extends Component {
  render() {
    return(
      <div className="Modal">
        <Context.Consumer>
          {(context) => (
            <button className="Modal__close-button" onClick={this.props.closeModal}>X</button>
          )}
        </Context.Consumer>
        <ContactForm/>
      </div>
    );
  }
}

export default Modal;
