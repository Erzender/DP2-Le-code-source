import React from 'react'
import PropTypes from 'prop-types'
//import PropTypes from 'prop-types'

import './Background.css'


class Bar extends React.Component {
  render(){
    var style = this.props.style || {width:150, height:15}
    return (
      <div style={style}>
        <div style={{display:'flex', height:style.height, width:"100%", backgroundColor:'#550000', flexDirection:'row', overflow:'hidden', borderStyle:'solid', borderColor:'#333333', borderRadius:10}}>
          <div className='cicadaStripes' style={{display:'flex', flex:this.props.value/this.props.max, height:style.height - 2, backgroundColor:'#006600', borderRadius:10, borderStyle:'solid', borderWidth:1, borderColor:'#AAAAAA'}}></div>
          <div style={{display:'flex', flex:(this.props.max - this.props.value)/this.props.max, height:style.height}}></div>
        </div>
        <div style={{display:'flex', width:'inherit', height:'inherit', position:'absolute', color:'white', fontWeight:'bold', justifyContent:'center', alignItems:'center'}} >
          {this.props.text}
        </div>
      </div>
    )}
}

Bar.proptypes = {
  style: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default Bar;
