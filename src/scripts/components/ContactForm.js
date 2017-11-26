import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return(
      <form className="ContactForm" onSubmit={this._handleSubmit.bind(this)}>
        <input className="ContactForm__name" type="text" placeholder="Name" ref={(input) => this._name = input }></input>
        <input className="ContactForm__email" type="email" placeholder="Email" ref={(input) => this._email = input }></input>
        <input className="ContactForm__phone" type="phone_number" placeholder="Phone" ref={(input) => this._phone = input }></input>
        <textarea form="ContactForm" className="ContactForm__message" placeholder="Message" ref={(input) => this._message = input }></textarea>
        <input type="submit" value="Send"></input>
      </form>
    );
  }

  _handleSubmit(event){
     event.preventDefault();
     this.props.addEntry(this._name.value, this._email.value, this._phone.value, this._message.value);
  }
}

export default ContactForm;
