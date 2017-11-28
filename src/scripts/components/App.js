import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Modal from './Modal';
import Footer from './Footer';
import '../../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { showModal: false };
  }

  render() {
    let modal = null;

    if (this.state.showModal) {
      modal = <Modal toggleModal={this._toggleModal.bind(this)} />;
    }

    return (
      <div className="App">
        <Header toggleModal={this._toggleModal.bind(this)} />
        {modal}
        <Main toggleModal={this._toggleModal.bind(this)} />
        <Footer/>
      </div>
    );
  }

  _toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
}

export default App;
