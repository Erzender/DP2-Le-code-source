import React from 'react'
import PropTypes from 'prop-types'

class TimerCpt extends React.Component {
  componentDidMount(){
    setInterval(() => this.props.update(this.props.time, this.props.token), 1000);
  }
  render(){
    return (
      <div style={{position: "absolute", zIndex: -30}}>
        <button>{this.props.time}</button>
      </div>
    )}
}

TimerCpt.proptypes = {
  time: PropTypes.string.isRquired,
  update: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

export default TimerCpt;
