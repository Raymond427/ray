import React, { Component } from 'react';
import Menu from './Menu';
import Provider from './Provider';
import Main from './Main';
import Modal from './Modal';
import Footer from './Footer';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Menu/>
          {this.props.showModal && <Modal/>}
          <Main/>
          <Footer/>
        </Provider>
      </div>
    );
  }
}

export default App;
