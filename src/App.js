import React, { Component } from 'react';
import './App.sass';
import AK from './components/AK';
import Particl from './components/Particles';
import Refs from './components/Refs';

class App extends Component {
  render() {
    return (
      <div className="App">         
          <Particl />
          <AK />
          <Refs />
      </div>
    );
  }
}

export default App;