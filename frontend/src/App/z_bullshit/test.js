import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

const path = require('../Media/Video/lacu.mp4');


class AppCpt extends React.Component {
  render(){
    return (
      <div style={{flex:1}}>
        <video ref="vidRef" className="background-video" autoPlay={this.props.play?'autoplay':undefined}>
          <source type="video/mp4" src={path} />
        </video>
        <div style={{position:'absolute'}}>
          <button onClick={this.props.play?(() => {
            this.refs.vidRef.pause()
            this.refs.vidRef.currentTime = 12
            this.props.onClick()
          }):(() => {
            this.refs.vidRef.play()
            this.props.onClick()
          }
          )}>test</button>
          {this.props.play && <h1 style={{color:'white'}}>Bouton</h1>}
          <div style={{position:'fixed', bottom:'20px'}}>
          <h1 style={{color:'white'}}>Panneau de bord</h1>
          </div>
        </div>
      </div>
    )}
}

AppCpt.proptypes = {
  play: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AppCpt;
