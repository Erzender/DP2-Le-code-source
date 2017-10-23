import React from 'react'
import PropTypes from 'prop-types'
//import PropTypes from 'prop-types'

import Bar from './Bar'

class CharacterCpt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 50
    };
  }
  render(){
    return (
      <div
        onMouseOver={() => this.setState(() => {return {height:200}})}
        onMouseOut={() => this.setState(() => {return {height:50}})}
        style={{display: 'flex', flexDirection:'column', height:this.state.height, width:200, borderStyle:'solid', borderWidth:0, borderBottomRightRadius:20, borderBottomLeftRadius:20, backgroundColor:'white', alignItems:'center'}}
        >
        <div style={{display: 'flex'}}>
         <div style={{display:'flex', marginRight:10, width:60, height:60}}>
           <img src={require('../../../Media/Images/pj_test.png')} alt='' style={{height:60, width:60, borderRadius:180, borderStyle:'solid', borderWidth:2, backgroundColor:'white'}} />
         </div>
         <div style={{display:'flex', flexDirection:'column', height:50}}>
           <div style={{display:'flex', marginTop:3, height:20, width:170, overflow:'hidden', fontWeight:'bold'}}>{this.props.name}</div>
           <Bar max={100} value={10} text="10 PV" style={{display:'flex', flex:1, height:20, width:140, marginTop:3}} />
         </div>
        </div>
      </div>
    )}
}

CharacterCpt.proptypes = {
  name: PropTypes.string.isRequired
}

export default CharacterCpt;
