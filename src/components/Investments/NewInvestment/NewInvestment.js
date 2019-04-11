import React, { Component } from 'react';
import Investment from '../Investment/Investment';

import { Jumbotron } from 'react-bootstrap';

class NewInvestment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewForm: false
    };
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    this.setState(state => ({
      showNewForm: true
    }));
  }

  newInvestment() {
    if (this.state.showNewForm) {
      return <Investment />
    } else {
      return (
        <Jumbotron id="NewInvestment" onClick={this.showForm}>
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
