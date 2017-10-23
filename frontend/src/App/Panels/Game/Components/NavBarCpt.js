import React from 'react'
import PropTypes from 'prop-types'
import {FaBeer, FaMap} from 'react-icons/lib/fa'
import {GoPaintcan, GoBook, GoMilestone} from 'react-icons/lib/go'
import './Background.css'
//import PropTypes from 'prop-types'

import Character from '../Containers/Character'


class NavBarCpt extends React.Component {
  render(){
    return (
      <div className="wood" style={{display: 'flex', height:50, marginLeft:20, marginRight:20, backgroundColor:'#black', alignItems: 'center', borderWidth: 0, borderStyle: 'solid', borderColor: '#554400', borderRadius: 15, overflow:'hidden'}}>
        <div style={{display:'flex', zIndex:400, position:'absolute', top:0, left:20, right:20, bottom:0, height:50}}>
          <div style={{marginLeft:30}}><Character /></div>
          <div style={{display:'flex', alignSelf:'flex-start', alignItems:'center', marginLeft:20, height:50, overflow:'auto',}}>
            <button style={{display:'flex', height: 40, width:150, alignItems:'center', borderRadius:10, fontSize:16, backgroundColor:'black', color:'#FFFFFF'}} onClick={() => console.log('hola')}>
              <FaMap style={{display:'flex', fontSize:30, marginRight:10}} />Vue
            </button>
            <button style={{display:'flex', height: 40, width:150, alignItems:'center', borderRadius:10, fontSize:16, backgroundColor:'black', color:'#FFFFFF'}} onClick={() => console.log('hola')}>
              <FaBeer style={{display:'flex', fontSize:30, marginRight:10}} />Interactions
            </button>
            <button style={{display:'flex', height: 40, width:150, alignItems:'center', borderRadius:10, fontSize:16, backgroundColor:'black', color:'#FFFFFF'}} onClick={() => console.log('hola')}>
              <GoBook style={{display:'flex', fontSize:30, marginRight:10}} />Univers
            </button>
            <button style={{display:'flex', height: 40, width:150, alignItems:'center', borderRadius:10, fontSize:16, backgroundColor:'black', color:'#FFFFFF'}} onClick={() => console.log('hola')}>
              <GoPaintcan style={{display:'flex', fontSize:30, marginRight:10}} />Options
            </button>
            <button style={{display:'flex', height: 40, width:150, alignItems:'center', borderRadius:10, fontSize:16, backgroundColor:'black', color:'#FFFFFF'}} onClick={() => this.props.onDisconnect()}>
              <GoMilestone style={{display:'flex', fontSize:30, marginRight:10}} />Déconnexion
            </button>
          </div>
        </div>
      </div>
    )}
}

NavBarCpt.proptypes = {
  onDisconnect: PropTypes.func.isRequired
}

export default NavBarCpt;
