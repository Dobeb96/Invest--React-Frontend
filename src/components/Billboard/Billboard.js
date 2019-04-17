import React, { Component } from 'react';

import BillboardChart from "react-billboardjs";
import { Container } from 'react-bootstrap';
import "react-billboardjs/lib/billboard.css";

class Billboard extends Component {
  render() {
    return(
      <Container>
        <div className="row mt-3">
          <Container className="col-xl-6">
            <h1 className="display-6">Overview</h1>
            <BillboardChart data={{
              columns: [
                ['Invested'].concat(this.props.investments.map(investment =>
                  investment.invested
                )),
                ['Earned'].concat(this.props.investments.map(investment =>
                  investment.earned
                ))
              ],
              type: "bar"
            }} />
          </Container>

          <Container className="col-xl-6">
            <h1 className="display-6">Transaction by transaction</h1>
            <BillboardChart data={{
              columns: [
                ['Profit'].concat(this.props.investments.map(investment =>
                  investment.earned - investment.invested
                ))
              ],
              type: "area"
            }} />
          </Container>
        </div>

        <Container className="mt-3">
          <h1 className="display-4">Total earnings</h1>
          <BillboardChart data={{
            columns: [
              ['ROI'].concat(this.props.investments.map(function(_, index, array) {
                return array.slice(0, index+1).reduce(function(sum, investment) {
                  return sum + parseFloat(investment.earned) - parseFloat(investment.invested);
                }, 0)
              }))
            ],
            type: "area"
          }} />
        </Container>
      </Container>
    );
  }
}

export default Billboard;
