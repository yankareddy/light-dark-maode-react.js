// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state={isDark:true}

  onDarkMode = () => {
    this.setState(prevState => ({isDark : !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const modeContain= isDark ? "dark-mode" : "light-mode";
    const buttonText = isDark ? "Light Mode" : "Dark Mode"
    return (
      <div className="main-container">
        <div className={`container ${modeContain}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" onClick={this.onDarkMode}>{buttonText}</button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
