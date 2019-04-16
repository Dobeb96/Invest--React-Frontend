import NewInvestment from './NewInvestment/NewInvestment';
import React, { Component } from 'react';

import axios from 'axios';
import { Container } from 'react-bootstrap';

class Investments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investments: []
    }

    this.getInvestments = this.getInvestments.bind(this);
    this.getInvestments();
  }

  getInvestments() {
    axios.get('http://localhost:3000/investments')
    .then((response) => {
      this.setState({
        investments: response.data
      });
      // console.log(this.state.investments)
    });
  }

  render() {
    return (
      <Container className="py-3">
        <NewInvestment onCreate={this.getInvestments} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Created at</th>
              <th scope="col">Invested</th>
              <th scope="col">Earned</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.investments.map(investment =>
              <tr key={investment.id}>
                <th scope="row">{investment.id}</th>
                <td>{investment.created_at}</td>
                <td>{investment.invested}</td>
                <td>{investment.earned}</td>
                <td>{investment.notes}</td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
    );
  }
}

export default Investments;
