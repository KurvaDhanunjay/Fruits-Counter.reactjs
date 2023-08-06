// Write your code here

import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMangoes = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="fruits-counter-bg">
        <div className="fruits-counter-card">
          <h1 className="heading">
            Bob ate<span className="fruits-count">{mangoes}</span>
            mangoes<span className="fruits-count">{bananas}</span>bananas
          </h1>

          <div className="fruits-items-con">
            <div className="fruits-item-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <div className="button-container">
                <button type="button" onClick={this.eatMangoes}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruits-item-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.eatBananas}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
