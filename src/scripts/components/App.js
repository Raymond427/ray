import React, { Component } from 'react';
import Menu from './Menu';
import Main from './Main';
import Modal from './Modal';
import Footer from './Footer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        {this.props.showModal && <Modal/>}
        <Main/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { showModal: state.modalReducer.modalOpen }
}

export default withRouter(connect(
  mapStateToProps
)(App))
