import React from 'react'
//import PropTypes from 'prop-types'
import NavBar from '../Containers/NavBar'
import Map from '../../Map'
import './Background.css'


class GameCpt extends React.Component {
  render(){
    return (
      <div className="vintageConcrete" style={{flex:1, position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, overflow:'hidden', backgroundColor:undefined}}>
        <NavBar />
        <div style={{flex:1, position: 'absolute', top: 60, right: 20, bottom: 10, left: 20}}>
          <Map />
        </div>
      </div>
    )}
}

GameCpt.proptypes = {
}

export default GameCpt;
