import React from 'react'
import PropTypes from 'prop-types'
//import PropTypes from 'prop-types'

import Bar from './Bar'

class CharacterCpt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 45
    };
  }
  render(){
    return (
      <div
        onMouseOver={() => this.setState(() => {return {height:200}})}
        onMouseOut={() => this.setState(() => {return {height:45}})}
        style={{display: 'flex', flexDirection:'column', height:this.state.height, width:200, borderStyle:'solid', borderWidth:0, borderBottomRightRadius:20, borderBottomLeftRadius:20, backgroundColor:'white', alignItems:'center'}}
        >
        <div style={{display: 'flex'}}>
         <div style={{display:'flex', width:60, marginRight:10, height:60}}>
           <button style={{height:60, width:60, overflow:'hidden', borderRadius:180, borderStyle:'solid', borderWidth:2, borderColor:'black', backgroundColor:'white'}}><img src={require('../../../Media/Images/pj_test.png')} alt='' style={{height:60, width:60, top:0, marginLeft:-10}} /></button>
         </div>
         <div style={{display:'flex', width:160, flexDirection:'column', height:45}}>
           <div style={{display:'flex', marginTop:1, height:20, width:170, overflow:'hidden', fontWeight:'bold'}}>{this.props.name}</div>
           <Bar max={100} value={100} text="10 PV" style={{display:'flex', flex:1, height:20, width:130, marginTop:1}} />
         </div>
        </div>
        <div style={{overflow:'hidden'}}>
          lel
        </div>
      </div>
    )}
}

CharacterCpt.proptypes = {
  name: PropTypes.string.isRequired
}

export default CharacterCpt;
