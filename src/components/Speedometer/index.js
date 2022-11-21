import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  applyBreaks = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          className="img-1"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="main-heading head-1">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button button-1"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="button button-2"
            type="button"
            onClick={this.applyBreaks}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
