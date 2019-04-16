import React, { Component } from 'react';

import { Button, Col, Form, Jumbotron } from 'react-bootstrap';

class NewInvestment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewForm: false
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.createInvestment = this.createInvestment.bind(this);
  }

  toggleForm() {
    this.setState(state => ({
      showNewForm: !this.state.showNewForm
    }));
  }

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
    this.toggleForm();
    this.props.onCreate();
  }

  newInvestment() {
    if (this.state.showNewForm) {
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
                <Button className="mt-1 mr-1" variant="success" type="submit">
                  Add
                </Button>
                <Button className="mt-1" variant="default" onClick={this.toggleForm}>
                  Cancel
                </Button>
              </Col>
            </Form.Row>
          </form>
        </Jumbotron>
      );
    } else {
      return (
        <Jumbotron id="NewInvestment" onClick={this.toggleForm}>
          <span className="NewRecord">+ Add record</span>
        </Jumbotron>
      )
    }
  }

  render() {
    return (
      <span> {this.newInvestment()} </span>
    );
  }
}

export default NewInvestment;
