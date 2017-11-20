import React from 'react'
import PropTypes from 'prop-types'
import Login from '../Panels/Login'
import Game from '../Panels/Game'
import NewCharacter from '../Panels/NewCharacter'
import Timer from '../Containers/Timer'

class RootCpt extends React.Component {
  render(){
    return (
      <div style={{display: 'flex', flexDirection:'column'}}>
        {!this.props.loggedIn && <Login/>}
        {(this.props.loggedIn&& !this.props.createCharacter) && <Game />}
        {(this.props.loggedIn && this.props.createCharacter) && <NewCharacter /> }
        <Timer />
      </div>
    )}
}

RootCpt.proptypes = {
  loggedIn: PropTypes.bool.isRequired,
  createCharacter: PropTypes.bool.isRequired
}

export default RootCpt;
