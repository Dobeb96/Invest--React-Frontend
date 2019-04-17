import React, { Component } from 'react';
import Billboard from '../Billboard/Billboard';
import Footer from '../Footer/Footer';
import Investments from '../Investments/Investments';
import Navbar from '../Navbar/Navbar';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      investments: []
    }

    this.fetchInvestments = this.fetchInvestments.bind(this);
    this.fetchInvestments();
  }

  fetchInvestments() {
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
      <div className="App">
        <Navbar />
        <Billboard investments={this.state.investments} />
        <Investments investments={this.state.investments} fetchInvestments={this.fetchInvestments.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
