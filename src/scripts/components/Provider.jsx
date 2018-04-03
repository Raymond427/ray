import React, { Component } from 'react';

export const Context = React.createContext();

class Provider extends Component {
  state = { menuOpen: false };
  render() {
    return(
      <Context.Provider value={{
        state: this.state,
        openMenu: () => this.setState({ menuOpen: true }),
        closeMenu: () => this.setState({ menuOpen: false })
      }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
