import React, { Component } from 'react';
import '../../styles/ContactForm.css';

class ContactForm extends Component {
  render() {
    return(
      <form className="ContactForm" onSubmit={this._handleSubmit.bind(this)}>
        <h1 className="ContactForm__heading">Contact Me</h1>
        <p className="ContactForm__subheading">Reach out to me for anything! I'll get back to you as soon as I can!</p>
        <div className="ContactForm__input">
          <label htmlFor="first-name" type="text" name="ContactForm__first">
            <small className="error-message" id="error__first-name">First Name must be present</small>
            <input id="ContactForm__first-name" type="text" placeholder="First Name" ref={(input) => this._name = input }/>
          </label>
          <label htmlFor="last-name" type="text" name="ContactForm__last">
            <small className="error-message" id="error__last-name">Last Name must be present</small>
            <input id="ContactForm__last-name" type="text" placeholder="Last Name" ref={(input) => this._lastName = input }/>
          </label>
          <label htmlFor="email" type="text" name="ContactForm__email">
            <small className="error-message" id="error__email">Email must be valid</small>
            <input id="ContactForm__email" type="email" placeholder="Email" ref={(input) => this._email = input }/>
          </label>
          <label htmlFor="phone" type="text" name="ContactForm__phone">
            <small className="error-message" id="error__phone">Phone number must be valid <em>XXX XXX-XXXX</em></small>
            <input id="ContactForm__phone" type="phone_number" placeholder="Phone" ref={(input) => this._phone = input }/>
          </label>
        </div>
        <label htmlFor="message" type="text" name="ContactForm__message">
          <small className="error-message" id="error__message">Message must be present</small>
          <textarea form="ContactForm" id="ContactForm__message" placeholder="Message" ref={(input) => this._message = input }/>
        </label>
        <input id="ContactForm__submit-button" type="submit" value="Send"></input>
      </form>
    );
  }

  _handleSubmit(event){
     event.preventDefault();
     //this.props.addEntry(this._name.value, this._email.value, this._phone.value, this._message.value);
  }
}

export default ContactForm;
