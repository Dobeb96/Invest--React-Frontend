import React, { Component } from 'react';
import NewInvestment from './NewInvestment/NewInvestment';

import { Container } from 'react-bootstrap';

class Investments extends Component {
  constructor(props) {
    super(props);

    this.fetchInvestments = this.fetchInvestments.bind(this);
  }

  fetchInvestments() {
    this.props.fetchInvestments();
  }

  render() {
    return (
      <Container className="py-3">
        <NewInvestment onCreate={this.fetchInvestments} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Created at</th>
              <th scope="col">Invested</th>
              <th scope="col">Returned</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {this.props.investments.reverse().map(investment =>
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
