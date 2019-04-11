import React, { Component } from 'react';

import { Navbar as BootstrapNavbar } from 'react-bootstrap';
import react from '../../react.svg';

class Navbar extends Component {
  render() {
    return (
      <BootstrapNavbar className="justify-content-center shadow-sm py-5" bg="light">
        <img src={react} className="App-logo App-logo-spin" alt="react" />
        <span className="App-header">FX Invest</span>
      </BootstrapNavbar>
    );
  }
}

export default Navbar;
