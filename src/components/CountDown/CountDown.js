import React from 'react'
import { IndexLink, Link } from 'react-router'

class CountDown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {secondsElapsed: props.timeOut};
  }

  tick() {
    this.setState((prevState) => {
      if (prevState.secondsElapsed >= 0.2) {
        return ({
          secondsElapsed: prevState.secondsElapsed - 0.1
        })
      } else {
        return ({
          countDownStyle: { display: `none`}
        })
        clearInterval(this.interval)
      }
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
       <b>{(this.state.secondsElapsed).toPrecision(2)}</b>
    )
  }
}

export default CountDown
