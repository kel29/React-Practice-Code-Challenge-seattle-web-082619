import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    wallet: 100,
    sushiEaten: [] 
  }

  fetchSushi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setState({
        sushiInfo: sushi
      })
    })
  }

  componentDidMount() {
    this.fetchSushi()
  }

  payForSushi = (price) => {
    this.setState(prevState => {
      return {
        wallet: prevState.wallet - price
      }
    })
  }

  stackPlate = (sushi) => {
    this.setState(prevState => {
      return { 
        sushiEaten: [...prevState.sushiEaten, sushi]    
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushiInfo={this.state.sushiInfo} 
          onPayForSushi={this.payForSushi} 
          onStackPlate={this.stackPlate}
          wallet={this.state.wallet}
        />
        <Table 
          emptyPlates={this.state.sushiEaten} 
          sushiInfo={this.state.sushiInfo} 
          wallet={this.state.wallet}
        />
      </div>
    );
  }
}

export default App;