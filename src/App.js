import React, { Component } from 'react';
import Map from "./components/Map";
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello World</p>
        <Map API_KEY={API_KEY}/>
      </div>
    );
  }
}

export default App;
