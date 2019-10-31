import React, { Component, Fragment } from 'react'

class Sushi extends Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    if (!this.state.eaten && this.props.wallet >= this.props.info.price) {
      this.props.onPayForSushi(this.props.info.price);
      this.props.onStackPlate(this.props.info)
      this.hideSushi();
    }
  }

  hideSushi = () => {
    this.setState({
      eaten: true
    })
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.eatSushi}>
          { 
            this.state.eaten ? null : <img src={this.props.info.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.info.name} - ${this.props.info.price}
        </h4>
      </div>
    )
  }
}

export default Sushi