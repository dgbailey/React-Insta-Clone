import React, { Component } from 'react';
import logo from './logo.svg';

import Searchbar from './Components/Searchbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar/>
      </div>
    );
  }
}

export default App;
