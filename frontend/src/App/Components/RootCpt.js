import React from 'react'
import PropTypes from 'prop-types'
import Login from '../Panels/Login'
import Game from '../Panels/Game'


class RootCpt extends React.Component {
  render(){
    return (
      <div style={{display: 'flex', flexDirection:'column'}}>
        {this.props.loggedIn && <Game />}
        {!this.props.loggedIn && <Login/>}
      </div>
    )}
}

RootCpt.proptypes = {
  loggedIn: PropTypes.bool.isRequired
}

export default RootCpt;
