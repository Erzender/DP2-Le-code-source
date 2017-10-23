import React from 'react'
import PropTypes from 'prop-types'

import MapGridCpt from './MapGridCpt'

const side=9
const square=Math.round(700 / side)
const sidel=side*square

class MapCpt extends React.Component {
  render(){
    return (
      <div style={{display : 'flex', flex:1, flexDirection:'column', position:'absolute', top:0, bottom:0, left:0, right:0}}>
        <div style={{display: 'flex', flex:1, overflow:'auto'}}>
          <div style={{display:'flex', flex:1, flexDirection:'column'}}>
            <div style={{display:'flex', flex:1}}></div>
            <div style={{display:'flex', minHeight:sidel, maxHeight:sidel}}>
              <MapGridCpt side={side} />
            </div>
            <div style={{display:'flex', flex:1}}></div>
          </div>
          <div style={{display:'flex', flex:1, backgroundColor:'white', minHeight:sidel, minWidth:400, maxWidth:400, borderRadius:15, borderWidth:3}}>
          </div>
        </div>
    </div>
    )}
}

MapCpt.proptypes = {
  MapButton: PropTypes.func.isRequired
}

export default MapCpt;
