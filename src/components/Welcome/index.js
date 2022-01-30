// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {
    isSubscribed: false,
    text: 'Subscribe',
  }

  getClicked = () => {
    const {isSubscribed} = this.state
    if (isSubscribed !== false) {
      this.setState({
        text: 'Subscribed',
        isSubscribed: true,
      })
    }
  }

  render() {
    const {text} = this.state
    return (
      <div className="container">
        <h1 className="head">Welcome</h1>
        <p className="caption">Thank you!Happy Learning</p>
        <button className="btn" type="button" onClick={this.getClicked}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
