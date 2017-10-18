import React from 'react'
import PropTypes from 'prop-types'
//import PropTypes from 'prop-types'


class CharacterCpt extends React.Component {
  render(){
    return (
      <div style={{display: 'flex', height:100, width:200, borderStyle:'solid', borderWidth:3, borderBottomRightRadius:30, borderBottomLeftRadius:30, backgroundColor:'white', flexDirection:'column', alignItems:'center'}}>
        {this.props.name}
      </div>
    )}
}

CharacterCpt.proptypes = {
  name: PropTypes.string.isRequired
}

export default CharacterCpt;
