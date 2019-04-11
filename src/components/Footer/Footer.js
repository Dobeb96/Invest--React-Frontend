import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';
import react from '../../react.svg';
import rails from '../../rails.png';

class Footer extends Component {
  render() {
    return (
      <Container className="bg-light py-3" fluid="true">
        <Row className="justify-content-center">
          <img src={rails} className="App-logo-footer" alt="rails" />
          <img src={react} className="App-logo-footer" alt="react" />
        </Row>
      </Container>
    );
  }
}

export default Footer;
