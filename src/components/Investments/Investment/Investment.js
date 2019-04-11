import React, { Component } from 'react';

import { Button, Col, Form, Jumbotron } from 'react-bootstrap';

class Investment extends Component {
  render() {
    return (
      <Jumbotron id="Investment">
        <Form.Group controlId="newInvestmentForm">
          <Form.Row>
            <Col>
              <Form.Label>Invested</Form.Label>
              <Form.Control type="number" placeholder="1000.0" />
            </Col>
            <Col>
              <Form.Label>Earned</Form.Label>
              <Form.Control type="number" placeholder="1000.0" />
            </Col>
            <Col xs="8">
              <Form.Label>Notes</Form.Label>
              <Form.Control type="text" placeholder="Notes" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Button className="mt-1" variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Jumbotron>
    );
  }
}

export default Investment;
