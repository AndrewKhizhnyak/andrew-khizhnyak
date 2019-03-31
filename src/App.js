import React, { Component } from 'react';
import './App.sass';
import LinksToSN from './components/LinksToSN';
import AK from './components/AK';
import Particl from './components/Particles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <AK />
          <Particl />
          <LinksToSN />
        </header>
      </div>
    );
  }
}

export default App;