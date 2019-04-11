import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Investments from '../Investments/Investments';
import Navbar from '../Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Investments />
        <Footer />
      </div>
    );
  }
}

export default App;
