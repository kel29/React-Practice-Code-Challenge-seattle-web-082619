import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends Component {
  state = {
    sushiIndex: 0
  }

  incrementSushiIndex = () => {
    this.setState(prevState => {
      return { sushiIndex: prevState.sushiIndex + 4 }
    })
  }

  selectFourSushi = () => {
    if (!this.props.sushiInfo) return

    const currentSushi = []
    for (let i = this.state.sushiIndex; i < 4 + this.state.sushiIndex; i++) {
      currentSushi.push(<Sushi 
        key={this.props.sushiInfo[i].id} 
        info={this.props.sushiInfo[i]} 
        onPayForSushi={this.props.onPayForSushi}
        onStackPlate={this.props.onStackPlate}
        wallet={this.props.wallet}/>)
    }

    return currentSushi
  }

  render() {
    return (
      <Fragment>
        <div className='belt'>
          {this.selectFourSushi()}
          <MoreButton onIncrementSushiIndex={this.incrementSushiIndex}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
