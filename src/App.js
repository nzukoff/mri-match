import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/Game'
import data from './data.json'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Game data={data}/>
      </div>
    );
  }
}


export default App;
