import React from 'react'
import PropTypes from 'prop-types'
import * as images from '../../../Config/Images'
import './Map.css'
import '../../Game/Components/Background.css'


class MapGridCpt extends React.Component {
  render(){
    var tab = []
    for (var i = 0; i < this.props.side; i++){
      tab.push({key: i, tab: []})
      for (var j = 0; j < this.props.side; j++){
        tab[i].tab.push(j)
      }
    }
    const square=Math.round(700 / this.props.side)
    const sidel=this.props.side*square
    return (
        <div style={{display:'flex', flex:1, minHeight:sidel, maxHeight:sidel}}>
          <div style={{display:'flex', flex:1}}>
          </div>
          <div style={{display: 'flex', flex:1}}>
            <div style={{minWidth:sidel, minHeight:sidel, maxWidth:sidel, maxHeight:sidel, borderStyle:'solid', borderColor:'#000000', borderRadius:30, borderTopRightRadius:0, overflow:'hidden', borderWidth:5, backgroundColor:'#000000'}}>
              {tab.map((i) => <div key={i.key} style={{width: sidel, height:square}}>{i.tab.map((j) => <img className='icons' key={j} src={images.map_ground} style={{width:square, height:square}} alt="" />)}</div>)}
            </div>
          </div>
          <div style={{display:'flex', flex:1, justifyContent:'center'}}>
            <div style={{display:'flex', flex:1, height:190, maxHeight:190, backgroundColor:'#000000'}}></div>
            <div style={{display:'flex', minWidth:190, width:190, flex:1, alignItems:'center', backgroundColor:'#000000', height:190, maxHeight:190, borderStyle:'solid', borderWidth:0, borderTopRightRadius:180, borderBottomRightRadius:180}}>
              <img src={images.rose} style={{width:150, height:150, padding:10, marginLeft:10, marginRight:10, backgroundColor:'#FFFFFF', borderStyle:'solid', borderRadius:180, borderWidth:0}} alt="" />
            </div>
            <div style={{display:'flex', flex:1}}></div>
          </div>
        </div>
    )}
}

MapGridCpt.proptypes = {
  side: PropTypes.number.isRequired
}

export default MapGridCpt;
