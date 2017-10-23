import React from 'react'
import PropTypes from 'prop-types'
//import PropTypes from 'prop-types'


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
        style={{display: 'flex', height:this.state.height, width:200, borderStyle:'solid', borderWidth:3, borderBottomRightRadius:30, borderBottomLeftRadius:30, backgroundColor:'white', flexDirection:'column', alignItems:'center'}}
        >
        {this.props.name}
      </div>
    )}
}

CharacterCpt.proptypes = {
  name: PropTypes.string.isRequired
}

export default CharacterCpt;
