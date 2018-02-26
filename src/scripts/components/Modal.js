import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { closeModal } from '../actions/modalActions';
import '../../styles/Modal.css';

class Modal extends Component {
  render() {
    return(
      <div className="Modal">
        <button className="Modal__close-button" onClick={this.props.closeModal}>X</button>
        <ContactForm/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { showModal: state.modalReducer.modalOpen }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal)
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal))
