import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Modal extends Component {
  render() {
    return(
      <div className="Modal">
        <button className="Modal__close-button" onClick={() => this._unrenderModal()}>X</button>
        <ContactForm/>
      </div>
    );
  }

  _unrenderModal() {
    this.props.toggleModal();
  }
}

export default Modal;
