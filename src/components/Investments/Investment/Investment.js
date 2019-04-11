import React, { Component } from 'react';

import { Button, Col, Form, Jumbotron } from 'react-bootstrap';

class Investment extends Component {
  createInvestment(event) {
    event.preventDefault();
    const dataForm = new FormData(event.target);

    let data = {}
    for (var [key, value] of dataForm.entries()) {
      data[key] = value
    }

    fetch('http://localhost:3000/investments', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
  }

  render() {
    return (
      <Jumbotron id="Investment">
        <form onSubmit={this.createInvestment}>
          <Form.Row>
            <Col>
              <Form.Label>Invested</Form.Label>
              <Form.Control name="invested" type="number" placeholder="1000.0" />
            </Col>
            <Col>
              <Form.Label>Earned</Form.Label>
              <Form.Control name="earned" type="number" placeholder="1000.0" />
            </Col>
            <Col xs="8">
              <Form.Label>Notes</Form.Label>
              <Form.Control name="notes" type="text" placeholder="Notes" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <Button className="mt-1" variant="primary" type="submit">
                Add
              </Button>
            </Col>
          </Form.Row>
        </form>
      </Jumbotron>
    );
  }
}

export default Investment;
