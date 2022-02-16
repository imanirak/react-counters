
import './App.css';
import React, { Component } from "react";
import Header from "./Header";
import Counter from "./Counter";
import CounterList from './CounterList';

class App extends Component {
  constructor(){
    super();

    this.state = {
    counters:5
    };

  }
  render() {
    return(
      <div className="App">
        <Header />
       <CounterList counter  />
    
      </div>
    )
  }
}


export default App;
