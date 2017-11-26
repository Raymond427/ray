import React, { Component } from 'react';
import ContactForm from './ContactForm';

class Modal extends Component {
  render() {
    return(
      <div className="Modal">
        <ContactForm/>
      </div>
    );
  }
}

export default Modal;
