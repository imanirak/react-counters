
import './App.css';
import React, { Component } from "react";
import Header from "./Header";
import CounterList from './CounterList';


class App extends Component {
  constructor(){
    super();

    this.state = {
    counters:0
    };

  }
  
  increaseCount = () => {
    let upCount = this.state.counters + 1;

    this.setState({
        counters: upCount
    })
}

decreaseCount = () => {
    let downCount = this.state.counters - 1;
    this.setState({
        counters: downCount
    })
}

  render() {
    return(
      <div className="App">
        <Header increaseCounter={this.increaseCount} decreaseCounter={this.decreaseCount}/>
        <CounterList counter={this.state.counters} />
      </div>
    )
  }
}


export default App;
