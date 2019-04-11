import React, { Component } from 'react';
import NewInvestment from './NewInvestment/NewInvestment';

import { Container } from 'react-bootstrap';

class Investments extends Component {
  render() {
    return (
      <Container className="py-3">
        <NewInvestment />
      </Container>
    );
  }
}

export default Investments;
