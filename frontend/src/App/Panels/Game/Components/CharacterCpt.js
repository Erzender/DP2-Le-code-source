import React from 'react'
import PropTypes from 'prop-types'
//import PropTypes from 'prop-types'

import Bar from './Bar'

class CharacterCpt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 45,
      barHeight:5,
      text:""
    };
  }
  render(){
    return (
      <div
        onMouseOver={() => this.setState(() => {return {height:200, barHeight:30, text:"100/100 PV"}})}
        onMouseOut={() => this.setState(() => {return {height:45, barHeight:5, text:""}})}
        style={{display: 'flex', flexDirection:'column', transition:"all 0.1s", height:this.state.height, width:200, borderStyle:'solid', borderWidth:0, borderBottomRightRadius:20, borderBottomLeftRadius:20, backgroundColor:'white', alignItems:'center'}}
        >
        <div style={{display: 'flex'}}>
         <div style={{display:'flex', width:60, marginRight:10, height:60}}>
           <button style={{height:60, width:60, overflow:'hidden', borderRadius:180, borderStyle:'solid', borderWidth:2, borderColor:'black', backgroundColor:'white'}}>
             <img src={require('../../../Media/Images/pj_test.png')} alt='' style={{height:60, width:60, top:0, marginLeft:-10}} />
           </button>
         </div>
         <div style={{display:'flex', width:160, flexDirection:'column', height:45}}>
           <div style={{display:'flex', marginTop:3, height:30 - this.state.barHeight, width:170, overflow:'hidden', fontWeight:'bold'}}>{this.props.name}</div>
           <Bar max={100} value={100} text={this.state.text} style={{display:'flex', flex:1, height:this.state.barHeight, width:130, marginTop:0}} />
         </div>
        </div>
        <div style={{display:'flex', flex:1, color:'red', overflow:'hidden'}}>
          lel
        </div>
      </div>
    )}
}

CharacterCpt.proptypes = {
  name: PropTypes.string.isRequired
}

export default CharacterCpt;
