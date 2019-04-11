import React, { Component } from 'react';
import react from '../../react.svg';
import rails from '../../rails.png';
import './App.css';

import { Container, Navbar, Row } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="justify-content-center shadow-sm py-5" bg="light">
          <img src={react} className="App-logo App-logo-spin" alt="react" />
          <span className="App-header">FX Invest</span>
        </Navbar>
        <Container className="bg-light py-3" fluid="true">
          <Row className="justify-content-center">
            <img src={rails} className="App-logo-footer" alt="rails" />
            <img src={react} className="App-logo-footer" alt="react" />
          </Row>
        </Container>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
