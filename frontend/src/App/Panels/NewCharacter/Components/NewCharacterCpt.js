import React from 'react'
import PropTypes from 'prop-types'
import '../../Game/Components/Background.css'
import {FaChild} from 'react-icons/lib/fa'
import {GoMilestone} from 'react-icons/lib/go'

class NewCharacterCpt extends React.Component {
  render(){
    return (
      <div className="vintageConcrete" style={{display: 'flex', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, overflow:'auto', flexDirection:'column', alignItems:'center'}}>
        <h1>Création du personnage</h1>
        <div style={{width: 800, backgroundColor:'white', borderRadius:20, paddingTop: 20, paddingBottom: 20, paddingLeft: 20}}>
          <div>{"Nom : " + this.props.name}</div>
        </div>
        <button style={{display:'flex', marginTop: 20, height: 40, width:150, alignItems:'center', borderRadius:10, fontSize:16, backgroundColor:'black', color:'#FFFFFF'}} onClick={() => console.log('hola')}>
          <FaChild style={{display:'flex', fontSize:30, marginRight:10}} />Valider
        </button>
        <button style={{display:'flex', height: 40, width:150, alignItems:'center', borderRadius:10, fontSize:16, backgroundColor:'black', color:'#FFFFFF'}} onClick={() => this.props.onDisconnect()}>
          <GoMilestone style={{display:'flex', fontSize:30, marginRight:10}} />Déconnexion
        </button>
      </div>
    )}
}

NewCharacterCpt.proptypes = {
  name: PropTypes.string.isRequired,
  onDisconnect: PropTypes.func.isRequired
}

export default NewCharacterCpt;
